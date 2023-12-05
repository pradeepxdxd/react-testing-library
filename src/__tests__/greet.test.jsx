import { render, screen } from '@testing-library/react'
import Greet from '../components/greet/greet'

describe('Greet', () => {
  it('render test', () => {
    render(<Greet />)
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
  })

  it('test with props', () => {
    render(<Greet name='John' />)
    const textElement = screen.getByText('Hello John')
    expect(textElement).toBeInTheDocument()
  })

  xit('render test', () => {    // skip
    render(<Greet />)
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
  })

  fit('test with props', () => {    // only
    render(<Greet name='John' />)
    const textElement = screen.getByText('Hello John')
    expect(textElement).toBeInTheDocument()
  })
})
