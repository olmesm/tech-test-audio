import React from "react"
import { render, fireEvent, screen, waitFor } from "@testing-library/react"
import { App } from "./app"
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const TEST_DATA = {
    name: "Test Station",
    src_url: "/api/audio",
    logo: "https://thiscatdoesnotexist.com",
  }

const server = setupServer(...[
    rest.get('http://localhost:8000/api/index.json', (req, res, ctx) => {
      return res(ctx.json([TEST_DATA]))
    }),
    rest.get('http://localhost:8000/api/audio', (req, res, ctx) => {
      return res("")
    }),
  ])
  
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test("data is loaded from the API", async () => {
    render(<App />)

    await waitFor(() => 
      expect(screen.getByText(TEST_DATA.name)).toBeInTheDocument()
    )

    expect(screen.getByTestId("audio").getAttribute('src')).toEqual(TEST_DATA.src_url)
})

test("play works", async () => {
    const spyPlay = vi.fn()
    window.HTMLMediaElement.prototype.play = spyPlay
    
    render(<App />)
    await waitFor(() => 
      expect(screen.getByText(TEST_DATA.name)).toBeInTheDocument()
    )
    
    fireEvent.click(screen.getByText(/play/i))
    
    expect(spyPlay).toHaveBeenCalledOnce()
})

test("controls are hidden", async () => {
    render(<App />)
    await waitFor(() => 
      expect(screen.getByText(TEST_DATA.name)).toBeInTheDocument()
    )

    expect(screen.getByTestId("audio").getAttribute('controls')).toBe(null) // this should be null and NOT ""
})
