import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

describe('Example Tests', () => {
  it('should pass a simple test', () => {
    expect(1 + 1).toBe(2)
  })

  it('should render a simple component', () => {
    const TestComponent = () => <div>Test Content</div>
    render(<TestComponent />)
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })
})
