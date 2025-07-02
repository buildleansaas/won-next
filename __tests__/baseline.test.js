// Baseline test to verify our test setup is working
describe('Project Baseline Tests', () => {
  test('Jest is working correctly', () => {
    expect(1 + 1).toBe(2)
  })

  test('Node environment is test', () => {
    expect(process.env.NODE_ENV).toBe('test')
  })

  test('Sanity API queries are properly exported', () => {
    const { getEvents } = require('../api/events')
    const { getSchedule } = require('../api/schedule') 
    const { getVideos } = require('../api/video')

    expect(getEvents).toBeDefined()
    expect(getSchedule).toBeDefined()
    expect(getVideos).toBeDefined()

    expect(typeof getEvents).toBe('string')
    expect(typeof getSchedule).toBe('string')
    expect(typeof getVideos).toBe('string')

    // Verify query structure
    expect(getEvents).toContain('*[_type == \'event\']')
    expect(getSchedule).toContain('*[_type == \'schedule\']')
    expect(getVideos).toContain('*[_type == \'video\']')
  })

  test('Page components can be imported', () => {
    const Home = require('../pages/index')
    expect(Home).toBeDefined()
    expect(typeof Home.default).toBe('function')
  })

  test('Individual components can be imported', () => {
    const SeoPage = require('../components/SeoPage')
    const Introduction = require('../components/sections/Home/Introduction')
    const Activities = require('../components/sections/Home/Activities')

    expect(SeoPage).toBeDefined()
    expect(Introduction).toBeDefined()
    expect(Activities).toBeDefined()

    expect(typeof SeoPage.default).toBe('function')
    expect(typeof Introduction.default).toBe('function')
    expect(typeof Activities.default).toBe('function')
  })

  test('Sanity client is properly configured', () => {
    const sanityClient = require('../lib/sanity')
    expect(sanityClient).toBeDefined()
    expect(sanityClient.default).toBeDefined()
  })
})
