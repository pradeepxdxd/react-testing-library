import { render, screen } from '@testing-library/react'
import Greet from './greet'

describe('Greet', () => {
  test('render test', () => {
    render(<Greet />)
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
  })

  test('test with props', () => {
    render(<Greet name='John' />)
    const textElement = screen.getByText('Hello John')
    expect(textElement).toBeInTheDocument()
  })
})

// test.skip('test greet with skip', () => {
//     render(<Greet name="John"/>)
//     const textElement = screen.getByText('Hello John')
//     expect(textElement).toBeInTheDocument()
// })

// test.only('test greet with only', () => {
//     render(<Greet name="John"/>)
//     const textElement = screen.getByText('Hello John')
//     expect(textElement).toBeInTheDocument()
// })
