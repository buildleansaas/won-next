import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../../pages/index'

// Mock the Sanity client
jest.mock('../../lib/sanity', () => ({
  fetch: jest.fn(),
}))

// Mock react-scrollable-anchor
jest.mock('react-scrollable-anchor', () => ({
  __esModule: true,
  default: ({ children, id }) => <div id={id}>{children}</div>,
  configureAnchors: jest.fn(),
}))

// Mock moment
jest.mock('moment', () => {
  const originalMoment = jest.requireActual('moment')
  return {
    __esModule: true,
    default: (date) => originalMoment(date || '2023-01-01'),
  }
})

describe('Home Page', () => {
  const mockProps = {
    events: [
      {
        _id: 'event1',
        active: true,
        title: 'Test Event',
        description: 'Test event description',
        eventBegin: '2023-12-01',
        eventEnd: '2023-12-02',
        location: {
          title: 'Test Location',
          address: '123 Test St',
        },
        moreInfo: 'https://example.com',
      }
    ],
    schedule: [
      {
        _id: 'schedule1',
        active: true,
        title: 'Weekly Meditation',
        description: 'Weekly meditation sessions',
        timeslots: [
          {
            day: 'Sunday',
            startTime: '10:00 AM',
            location: {
              title: 'Main Hall',
              address: '456 Temple Ave',
            }
          }
        ]
      }
    ],
    videos: [
      {
        _id: 'video1',
        title: 'Tai Chi Basics',
        description: 'Learn basic Tai Chi movements',
        embed: 'dQw4w9WgXcQ',
      }
    ]
  }

  beforeEach(() => {
    // Mock localStorage
    global.localStorage = {
      getItem: jest.fn(() => JSON.stringify({ locale: 'en' })),
      setItem: jest.fn(),
    }
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the home page with main sections', async () => {
    render(<Home {...mockProps} />)
    
    // Check if main navigation elements are present
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    
    // Check for navigation links
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Activities')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    
    // Check for main content sections
    expect(screen.getByText('Won Buddhism of Richmond')).toBeInTheDocument()
    expect(screen.getByText('Weekly Schedule')).toBeInTheDocument()
    expect(screen.getByText('Free Online Classes')).toBeInTheDocument()
  })

  it('displays schedule information correctly', () => {
    render(<Home {...mockProps} />)
    
    expect(screen.getByText('Weekly Meditation')).toBeInTheDocument()
    expect(screen.getByText('Weekly meditation sessions')).toBeInTheDocument()
    expect(screen.getByText('Sunday')).toBeInTheDocument()
    expect(screen.getByText('10:00 AM')).toBeInTheDocument()
    expect(screen.getByText('Main Hall')).toBeInTheDocument()
  })

  it('displays video content correctly', () => {
    render(<Home {...mockProps} />)
    
    expect(screen.getByText('Tai Chi Basics')).toBeInTheDocument()
    expect(screen.getByText('Learn basic Tai Chi movements')).toBeInTheDocument()
    
    // Check if YouTube iframe is rendered - looking for the specific iframe
    const container = screen.getByText('Tai Chi Basics').closest('.video-container')
    const iframe = container.querySelector('iframe')
    expect(iframe).toBeInTheDocument()
    expect(iframe).toHaveAttribute('src', 'https://www.youtube.com/embed/dQw4w9WgXcQ')
  })

  it('shows donation information', () => {
    render(<Home {...mockProps} />)
    
    expect(screen.getByText(/There are no fees for our programs/)).toBeInTheDocument()
    expect(screen.getByText('🙏 Donate Via PayPal 🙏')).toBeInTheDocument()
  })

  it('handles empty data gracefully', () => {
    const emptyProps = {
      events: [],
      schedule: [],
      videos: []
    }
    
    render(<Home {...emptyProps} />)
    
    // Should still render basic structure
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByText('Won Buddhism of Richmond')).toBeInTheDocument()
    expect(screen.getByText('Weekly Schedule')).toBeInTheDocument()
  })

  it('filters inactive schedule items', () => {
    const propsWithInactive = {
      ...mockProps,
      schedule: [
        ...mockProps.schedule,
        {
          _id: 'schedule2',
          active: false,
          title: 'Inactive Schedule',
          description: 'This should not appear',
          timeslots: []
        }
      ]
    }
    
    render(<Home {...propsWithInactive} />)
    
    expect(screen.getByText('Weekly Meditation')).toBeInTheDocument()
    expect(screen.queryByText('Inactive Schedule')).not.toBeInTheDocument()
  })

  it('renders contact links correctly', () => {
    render(<Home {...mockProps} />)
    
    const contactLinks = screen.getAllByText('Contact Us')
    expect(contactLinks.length).toBeGreaterThan(0)
    
    contactLinks.forEach(link => {
      expect(link).toHaveAttribute('href', expect.stringContaining('mailto:'))
      expect(link).toHaveAttribute('target', '_blank')
    })
  })
})
