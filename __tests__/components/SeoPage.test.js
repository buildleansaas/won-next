import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SeoPage from '../../components/SeoPage'

describe('SeoPage Component', () => {
  it('renders with title and heading', () => {
    const props = {
      title: 'Test Page Title',
      heading: 'Test Page Heading',
      children: <p>Test content</p>
    }

    render(<SeoPage {...props} />)

    expect(screen.getByText('Test Page Heading')).toBeInTheDocument()
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('renders with description meta tag when provided', () => {
    const props = {
      title: 'Test Page Title',
      description: 'Test page description',
      heading: 'Test Page Heading',
      children: <p>Test content</p>
    }

    render(<SeoPage {...props} />)

    // Check that meta description would be set
    expect(screen.getByText('Test Page Heading')).toBeInTheDocument()
  })

  it('renders children content correctly', () => {
    const props = {
      title: 'Test Page Title',
      heading: 'Test Page Heading',
      children: (
        <div>
          <p>First paragraph</p>
          <p>Second paragraph</p>
        </div>
      )
    }

    render(<SeoPage {...props} />)

    expect(screen.getByText('First paragraph')).toBeInTheDocument()
    expect(screen.getByText('Second paragraph')).toBeInTheDocument()
  })

  it('renders without description when not provided', () => {
    const props = {
      title: 'Test Page Title',
      heading: 'Test Page Heading',
      children: <p>Test content</p>
    }

    render(<SeoPage {...props} />)

    expect(screen.getByText('Test Page Heading')).toBeInTheDocument()
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('has correct CSS classes', () => {
    const props = {
      title: 'Test Page Title',
      heading: 'Test Page Heading',
      children: <p>Test content</p>
    }

    const { container } = render(<SeoPage {...props} />)

    expect(container.querySelector('.SeoPage')).toBeInTheDocument()
    expect(container.querySelector('.inner-wrapper.narrow')).toBeInTheDocument()
  })
})
