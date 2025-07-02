import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Activities from '../../../../components/sections/Home/Activities'

// Mock react-scrollable-anchor
jest.mock('react-scrollable-anchor', () => ({
  __esModule: true,
  default: ({ children, id }) => <div id={id}>{children}</div>,
}))

// Mock moment
jest.mock('moment', () => {
  const originalMoment = jest.requireActual('moment')
  return {
    __esModule: true,
    default: (date) => originalMoment(date || '2023-01-01'),
  }
})

describe('Activities Component', () => {
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
        link: 'https://meditation-info.com',
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
      },
      {
        _id: 'video2',
        title: 'Meditation Guide',
        description: 'Guided meditation practice',
        embed: 'abcd1234567',
      }
    ]
  }

  it('renders the main sections', () => {
    render(<Activities {...mockProps} />)

    expect(screen.getByText('Weekly Schedule')).toBeInTheDocument()
    expect(screen.getByText('Free Online Classes')).toBeInTheDocument()
  })

  it('displays schedule information correctly', () => {
    render(<Activities {...mockProps} />)

    expect(screen.getByText('Weekly Meditation')).toBeInTheDocument()
    expect(screen.getByText('Weekly meditation sessions')).toBeInTheDocument()
    expect(screen.getByText('Timeslots:')).toBeInTheDocument()
    expect(screen.getByText('Sunday')).toBeInTheDocument()
    expect(screen.getByText('10:00 AM')).toBeInTheDocument()
    expect(screen.getByText('Main Hall')).toBeInTheDocument()
  })

  it('renders contact and more info links for schedule', () => {
    render(<Activities {...mockProps} />)

    const contactLinks = screen.getAllByText('Contact Us')
    expect(contactLinks.length).toBeGreaterThan(0)
    
    contactLinks.forEach(link => {
      expect(link).toHaveAttribute('href', expect.stringContaining('mailto:'))
      expect(link).toHaveAttribute('target', '_blank')
    })

    const moreInfoLink = screen.getByText('More Information')
    expect(moreInfoLink).toHaveAttribute('href', 'https://meditation-info.com')
    expect(moreInfoLink).toHaveAttribute('target', '_blank')
  })

  it('displays video content correctly', () => {
    render(<Activities {...mockProps} />)

    expect(screen.getByText('Tai Chi Basics')).toBeInTheDocument()
    expect(screen.getByText('Learn basic Tai Chi movements')).toBeInTheDocument()
    expect(screen.getByText('Meditation Guide')).toBeInTheDocument()
    expect(screen.getByText('Guided meditation practice')).toBeInTheDocument()

    // Check YouTube iframes
    const iframes = screen.getAllByTitle(/.*/)
    expect(iframes.length).toBeGreaterThanOrEqual(2)
    // Check that YouTube embed URLs are present
    expect(screen.getByTitle('Tai Chi Basics')).toHaveAttribute('src', 'https://www.youtube.com/embed/dQw4w9WgXcQ')
    expect(screen.getByTitle('Meditation Guide')).toHaveAttribute('src', 'https://www.youtube.com/embed/abcd1234567')
  })

  it('shows donation information', () => {
    render(<Activities {...mockProps} />)

    expect(screen.getByText(/There are no fees for our programs/)).toBeInTheDocument()
    expect(screen.getByText('🙏 Donate Via PayPal 🙏')).toBeInTheDocument()
    
    const donateLink = screen.getByText('🙏 Donate Via PayPal 🙏')
    expect(donateLink).toHaveAttribute('href', expect.stringContaining('paypal.com'))
  })

  it('filters inactive schedule and events', () => {
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
      ],
      events: [
        ...mockProps.events,
        {
          _id: 'event2',
          active: false,
          title: 'Inactive Event',
          description: 'This should not appear',
        }
      ]
    }

    render(<Activities {...propsWithInactive} />)

    expect(screen.getByText('Weekly Meditation')).toBeInTheDocument()
    expect(screen.queryByText('Inactive Schedule')).not.toBeInTheDocument()
    expect(screen.queryByText('Inactive Event')).not.toBeInTheDocument()
  })

  it('handles empty arrays gracefully', () => {
    const emptyProps = {
      events: [],
      schedule: [],
      videos: []
    }

    render(<Activities {...emptyProps} />)

    expect(screen.getByText('Weekly Schedule')).toBeInTheDocument()
    expect(screen.getByText('Free Online Classes')).toBeInTheDocument()
    // Should still show donation info
    expect(screen.getByText('🙏 Donate Via PayPal 🙏')).toBeInTheDocument()
  })

  it('renders location links correctly', () => {
    render(<Activities {...mockProps} />)

    const locationLink = screen.getByText('Main Hall')
    expect(locationLink).toHaveAttribute('href', 'https://www.google.com/maps/place/456 Temple Ave')
    expect(locationLink).toHaveAttribute('target', '_blank')
  })

  it('handles schedule without location address', () => {
    const propsWithoutAddress = {
      ...mockProps,
      schedule: [
        {
          _id: 'schedule1',
          active: true,
          title: 'Online Meditation',
          description: 'Virtual meditation sessions',
          timeslots: [
            {
              day: 'Sunday',
              startTime: '10:00 AM',
              location: {
                title: 'Virtual Room',
                // No address property
              }
            }
          ]
        }
      ]
    }

    render(<Activities {...propsWithoutAddress} />)

    const locationText = screen.getByText('Virtual Room')
    // Should render as text, not as a link
    expect(locationText).not.toHaveAttribute('href')
  })
})
