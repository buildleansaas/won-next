import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Introduction from '../../../../components/sections/Home/Introduction'

describe('Introduction Component', () => {
  const mockProps = {
    header: {
      home: 'Home',
      activities: 'Activities',
      about: 'About'
    },
    intro: {
      title: 'Won Buddhism of Richmond',
      subtitle: 'Meditation, Dharma Study, and Community'
    },
    locale: 'en',
    changeState: jest.fn()
  }

  it('renders the title and subtitle correctly', () => {
    render(<Introduction {...mockProps} />)

    expect(screen.getByText('Won Buddhism of Richmond')).toBeInTheDocument()
    expect(screen.getByText('Meditation, Dharma Study, and Community')).toBeInTheDocument()
  })

  it('displays the logo image', () => {
    render(<Introduction {...mockProps} />)

    const logo = screen.getByAltText('logo')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('src', '/static/logo.png')
    expect(logo).toHaveClass('Home-logo')
  })

  it('has correct CSS structure', () => {
    const { container } = render(<Introduction {...mockProps} />)

    expect(container.querySelector('.Home-top')).toBeInTheDocument()
    expect(container.querySelector('.Home-intro')).toBeInTheDocument()
    expect(container.querySelector('.Home-title')).toBeInTheDocument()
    expect(container.querySelector('.Home-subtitle')).toBeInTheDocument()
  })

  it('renders with different locale content', () => {
    const koreanProps = {
      ...mockProps,
      intro: {
        title: '원불교 리치몬드',
        subtitle: '명상, 법학습, 그리고 공동체'
      },
      locale: 'kr'
    }

    render(<Introduction {...koreanProps} />)

    expect(screen.getByText('원불교 리치몬드')).toBeInTheDocument()
    expect(screen.getByText('명상, 법학습, 그리고 공동체')).toBeInTheDocument()
  })
})
