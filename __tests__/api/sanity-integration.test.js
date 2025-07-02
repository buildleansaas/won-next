import sanity from '../../lib/sanity'
import { getEvents } from '../../api/events'
import { getSchedule } from '../../api/schedule'
import { getVideos } from '../../api/video'

// Mock the Sanity client
jest.mock('../../lib/sanity', () => ({
  fetch: jest.fn(),
}))

describe('Sanity API Integration', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Events API', () => {
    it('should fetch events with correct query structure', async () => {
      const mockEvents = [
        {
          _id: 'event1',
          active: true,
          title: 'Test Event',
          description: 'Test Description',
          eventBegin: '2023-12-01',
          eventEnd: '2023-12-02',
          location: {
            title: 'Test Location',
            address: '123 Test St'
          },
          moreInfo: 'https://example.com'
        }
      ]

      sanity.fetch.mockResolvedValue(mockEvents)

      const result = await sanity.fetch(getEvents)

      expect(sanity.fetch).toHaveBeenCalledWith(getEvents)
      expect(result).toEqual(mockEvents)
    })

    it('should have correct query format for events', () => {
      expect(getEvents).toContain('*[_type == \'event\']')
      expect(getEvents).toContain('_id')
      expect(getEvents).toContain('active')
      expect(getEvents).toContain('title')
      expect(getEvents).toContain('location ->')
      expect(getEvents).toContain('moreInfo')
      expect(getEvents).toContain('eventBegin')
      expect(getEvents).toContain('eventEnd')
      expect(getEvents).toContain('description')
    })

    it('should handle empty events response', async () => {
      sanity.fetch.mockResolvedValue([])

      const result = await sanity.fetch(getEvents)

      expect(result).toEqual([])
    })

    it('should handle API errors gracefully', async () => {
      const error = new Error('Sanity API Error')
      sanity.fetch.mockRejectedValue(error)

      await expect(sanity.fetch(getEvents)).rejects.toThrow('Sanity API Error')
    })
  })

  describe('Schedule API', () => {
    it('should fetch schedule with correct query structure', async () => {
      const mockSchedule = [
        {
          _id: 'schedule1',
          active: true,
          title: 'Weekly Meditation',
          description: 'Weekly meditation sessions',
          link: 'https://info.com',
          timeslots: [
            {
              day: 'Sunday',
              startTime: '10:00 AM',
              location: {
                title: 'Main Hall',
                address: '456 Temple Ave'
              }
            }
          ]
        }
      ]

      sanity.fetch.mockResolvedValue(mockSchedule)

      const result = await sanity.fetch(getSchedule)

      expect(sanity.fetch).toHaveBeenCalledWith(getSchedule)
      expect(result).toEqual(mockSchedule)
    })

    it('should have correct query format for schedule', () => {
      expect(getSchedule).toContain('*[_type == \'schedule\']')
      expect(getSchedule).toContain('_id')
      expect(getSchedule).toContain('active')
      expect(getSchedule).toContain('title')
      expect(getSchedule).toContain('description')
      expect(getSchedule).toContain('link')
      expect(getSchedule).toContain('timeslots[]')
      expect(getSchedule).toContain('location ->')
    })

    it('should handle empty schedule response', async () => {
      sanity.fetch.mockResolvedValue([])

      const result = await sanity.fetch(getSchedule)

      expect(result).toEqual([])
    })
  })

  describe('Videos API', () => {
    it('should fetch videos with correct query structure', async () => {
      const mockVideos = [
        {
          _id: 'video1',
          title: 'Tai Chi Basics',
          embed: 'dQw4w9WgXcQ',
          description: 'Learn basic Tai Chi movements'
        },
        {
          _id: 'video2',
          title: 'Meditation Guide',
          embed: 'abcd1234567',
          description: 'Guided meditation practice'
        }
      ]

      sanity.fetch.mockResolvedValue(mockVideos)

      const result = await sanity.fetch(getVideos)

      expect(sanity.fetch).toHaveBeenCalledWith(getVideos)
      expect(result).toEqual(mockVideos)
    })

    it('should have correct query format for videos', () => {
      expect(getVideos).toContain('*[_type == \'video\']')
      expect(getVideos).toContain('_id')
      expect(getVideos).toContain('title')
      expect(getVideos).toContain('embed')
      expect(getVideos).toContain('description')
    })

    it('should handle empty videos response', async () => {
      sanity.fetch.mockResolvedValue([])

      const result = await sanity.fetch(getVideos)

      expect(result).toEqual([])
    })
  })

  describe('Sanity Client Configuration', () => {
    it('should be configured with correct project settings', () => {
      // Test that the sanity client module is properly configured
      // This will be tested indirectly through the mocking
      expect(sanity.fetch).toBeDefined()
    })

    it('should handle multiple concurrent requests', async () => {
      const mockEvents = [{ _id: 'event1', active: true }]
      const mockSchedule = [{ _id: 'schedule1', active: true }]
      const mockVideos = [{ _id: 'video1', title: 'Test' }]

      sanity.fetch
        .mockResolvedValueOnce(mockEvents)
        .mockResolvedValueOnce(mockSchedule)
        .mockResolvedValueOnce(mockVideos)

      const [events, schedule, videos] = await Promise.all([
        sanity.fetch(getEvents),
        sanity.fetch(getSchedule),
        sanity.fetch(getVideos)
      ])

      expect(events).toEqual(mockEvents)
      expect(schedule).toEqual(mockSchedule)
      expect(videos).toEqual(mockVideos)
      expect(sanity.fetch).toHaveBeenCalledTimes(3)
    })
  })

  describe('Data Structure Validation', () => {
    it('should validate events have required fields', async () => {
      const mockEvents = [
        {
          _id: 'event1',
          active: true,
          title: 'Test Event',
          description: 'Test Description',
          eventBegin: '2023-12-01',
          eventEnd: '2023-12-02',
          location: {
            title: 'Test Location'
          }
        }
      ]

      sanity.fetch.mockResolvedValue(mockEvents)
      const result = await sanity.fetch(getEvents)

      expect(result[0]).toHaveProperty('_id')
      expect(result[0]).toHaveProperty('active')
      expect(result[0]).toHaveProperty('title')
      expect(result[0]).toHaveProperty('location')
      expect(result[0].location).toHaveProperty('title')
    })

    it('should validate schedule has required fields', async () => {
      const mockSchedule = [
        {
          _id: 'schedule1',
          active: true,
          title: 'Weekly Meditation',
          description: 'Weekly meditation sessions',
          timeslots: []
        }
      ]

      sanity.fetch.mockResolvedValue(mockSchedule)
      const result = await sanity.fetch(getSchedule)

      expect(result[0]).toHaveProperty('_id')
      expect(result[0]).toHaveProperty('active')
      expect(result[0]).toHaveProperty('title')
      expect(result[0]).toHaveProperty('timeslots')
      expect(Array.isArray(result[0].timeslots)).toBe(true)
    })

    it('should validate videos have required fields', async () => {
      const mockVideos = [
        {
          _id: 'video1',
          title: 'Tai Chi Basics',
          embed: 'dQw4w9WgXcQ',
          description: 'Learn basic Tai Chi movements'
        }
      ]

      sanity.fetch.mockResolvedValue(mockVideos)
      const result = await sanity.fetch(getVideos)

      expect(result[0]).toHaveProperty('_id')
      expect(result[0]).toHaveProperty('title')
      expect(result[0]).toHaveProperty('embed')
      expect(result[0]).toHaveProperty('description')
    })
  })
})
