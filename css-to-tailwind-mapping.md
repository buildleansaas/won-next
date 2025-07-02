# CSS to Tailwind CSS Mapping Document

This document maps existing CSS classes to their Tailwind CSS equivalents for the website conversion.

## File: `pages/index.css`

| Original CSS Class | Current Styles | Tailwind Equivalent | Notes |
|-------------------|----------------|-------------------|-------|
| `.divider` | margin: 24px auto; border: 0; height: 1px; background gradient | `mx-auto my-6 h-px bg-gradient-to-r from-transparent via-black/25 to-transparent border-0` | Custom gradient divider |
| `.emoji` | width: 24px; position: relative; top: 4px; | `w-6 relative top-1` | Simple emoji styling |
| `.inner-wrapper` | max-width: 1024px; margin: 48px auto; | `max-w-4xl mx-auto my-12` | Container with max width |
| `.inner-wrapper.narrow` | max-width: 768px; | `max-w-3xl` | Narrower container variant |
| `.flex-info` | display: flex; align-items: flex-start; justify-content: space-between; | `flex items-start justify-between` | Flex container |
| `.button-link-container-flex` | max-width: 500px; display: flex; flex-wrap: wrap; | `max-w-lg flex flex-wrap` | Button container |
| `.map-iframe` | border: 0; | `border-0` | Remove iframe border |
| `.no-button` | border: none; background: transparent; | `border-none bg-transparent` | Transparent button |
| `.button-link` | background: #ffd700; color: black; padding: 8px 16px; border-radius: 4px; margin: 12px 0; | `bg-yellow-400 text-black px-4 py-2 rounded my-3` | Primary button style |
| `.button-link.margin-left` | margin-left: 12px; | `ml-3` | Button with left margin |
| `.button-link:hover` | color: #ffd700; background: black; cursor: pointer; | `hover:text-yellow-400 hover:bg-black hover:cursor-pointer` | Button hover state |
| `p.no-items` | font-size: 120%; padding-bottom: 16px; | `text-lg pb-4` | No items message |
| `.special-notice-banner` | z-index: 1000; position: fixed; right: 0; left: 0; bottom: 0; background: #ffd700; | `z-[1000] fixed inset-x-0 bottom-0 bg-yellow-400` | Fixed banner |

## File: `pages/header.css`

| Original CSS Class | Current Styles | Tailwind Equivalent | Notes |
|-------------------|----------------|-------------------|-------|
| `nav` | z-index: 1000; position: fixed; right: 0; left: 0; top: 0; background-color: rgba(0, 0, 0, 0.25); | `z-[1000] fixed inset-x-0 top-0 bg-black/25` | Fixed navigation |
| `.header-links` | list-style: none; text-align: right; margin: 0; padding: 2rem; | `list-none text-right m-0 p-8` | Navigation links |
| `.header-links li` | display: inline-block; padding: 0 8px; text-transform: uppercase; | `inline-block px-2 uppercase` | Navigation items |
| `.header-links .flag` | width: 30px; position: relative; top: 10px; | `w-8 relative top-2.5` | Flag icon |
| `.header-links a` | color: white; font-weight: 300; | `text-white font-light` | Navigation links |
| `.header-links .right` | text-align: right !important; | `!text-right` | Right-aligned items |

## File: `components/sections/Home/About/slider.css`

| Original CSS Class | Current Styles | Tailwind Equivalent | Notes |
|-------------------|----------------|-------------------|-------|
| `.slick-list, .slick-slider, .slick-track` | position: initial !important; | `!static` | Slick slider overrides |
| `.slick-dots` | bottom: -40px !important; | `!-bottom-10` | Slider dots position |
| `.slide-image` | min-height: 300px; | `min-h-[300px]` | Slide image height |

## File: `components/sections/Home/About/index.css`

| Original CSS Class | Current Styles | Tailwind Equivalent | Notes |
|-------------------|----------------|-------------------|-------|
| `.Home-about-info h3` | margin-top: 0; margin-bottom: 0; | `mt-0 mb-0` | About section heading |
| `.Home-about-info-text` | max-width: 575px; padding-right: 32px; | `max-w-[575px] pr-8` | About text container |
| `.Home-about-info` | flex-direction: column; align-items: center; | `flex-col items-center` | About info layout |
| `.slides-container` | max-width: 500px; width: 100%; | `max-w-lg w-full` | Slides container |
| `.gold-background` | padding: 24px; background: #ffd700; | `p-6 bg-yellow-400` | Gold background section |
| `.light-grey-background` | padding: 24px; background: #fafafa; | `p-6 bg-gray-50` | Light grey background |
| `.il-won-image` | padding-left: 42px; | `pl-10` | Image with padding |

## File: `components/sections/Home/Activities/index.css`

| Original CSS Class | Current Styles | Tailwind Equivalent | Notes |
|-------------------|----------------|-------------------|-------|
| `.Home-info-programs, .Home-info-upcoming, .Home-info-videos` | padding: 0 24px; | `px-6` | Section padding |
| `.Home-info-items` | margin-bottom: 24px; | `mb-6` | Items container |
| `.Home-info-item` | padding: 1rem; margin: 1rem auto; border: 4px solid #ffd700; | `p-4 mx-auto my-4 border-4 border-yellow-400` | Info item card |
| `.Home-info-item h4` | margin-bottom: 0; | `mb-0` | Item heading |
| `.Home-info-item p` | margin-top: 8px; | `mt-2` | Item text |
| `.donation-information` | padding: 16px; border: 1px solid transparent; border-radius: 0.25rem; color: #818182; background-color: #fefefe; border-color: #fdfdfe; font-size: large; max-width: 768px; margin: 0 auto; | `p-4 border border-transparent rounded text-gray-500 bg-gray-50 border-gray-100 text-lg max-w-3xl mx-auto` | Donation info box |
| `.videos-container` | display: flex; align-items: flex-start; justify-content: flex-start; flex-wrap: wrap; | `flex items-start justify-start flex-wrap` | Videos container |
| `.iframe-container` | position: relative; width: 100%; padding-bottom: 56.25%; height: 0; | `relative w-full pb-[56.25%] h-0` | Responsive iframe wrapper |
| `.iframe-container iframe` | position: absolute; top: 0; left: 0; width: 100%; height: 100%; | `absolute top-0 left-0 w-full h-full` | Responsive iframe |
| `.video-container iframe` | max-width: 768px; | `max-w-3xl` | Video iframe constraint |
| `.video-container, .more-soon-container` | padding: 0 8px; max-width: 460px; | `px-2 max-w-lg` | Video container (desktop) |

## File: `components/sections/Home/Footer/index.css`

| Original CSS Class | Current Styles | Tailwind Equivalent | Notes |
|-------------------|----------------|-------------------|-------|
| `footer` | width: 100%; background: #222; text-align: center; color: white; padding: 24px; font-size: small; padding-bottom: 80px; | `w-full bg-gray-800 text-center text-white p-6 text-sm pb-20` | Footer styling |
| `footer p` | text-align: center !important; | `!text-center` | Footer paragraphs |
| `footer img` | height: 40px; | `h-10` | Footer images |
| `.seo-links` | margin-top: 12px; | `mt-3` | SEO links container |
| `.seo-links a` | color: #ffd700; margin: 0 8px; | `text-yellow-400 mx-2` | SEO links |

## File: `components/sections/Home/Introduction/index.css`

| Original CSS Class | Current Styles | Tailwind Equivalent | Notes |
|-------------------|----------------|-------------------|-------|
| `.Home-top` | background: url("/static/background.jpg") no-repeat center center fixed; background-size: cover; text-align: center; | `bg-[url('/static/background.jpg')] bg-no-repeat bg-center bg-fixed bg-cover text-center` | Hero background |
| `.Home-intro` | background-color: rgba(34, 34, 34, 0.4); color: white; padding: 20px; height: 75vh; padding-top: 100px; font-size: large; display: flex; align-items: center; justify-content: center; flex-direction: column; | `bg-gray-800/40 text-white p-5 h-[75vh] pt-25 text-lg flex items-center justify-center flex-col` | Hero intro overlay |
| `.Home-logo` | height: 240px; | `h-60` | Logo height |
| `.Home-title` | font-size: 1.5em; margin-bottom: 0; | `text-2xl mb-0` | Main title |
| `.Home-subtitle` | font-size: 1em; margin-top: 0; | `text-base mt-0` | Subtitle |

## Global Element Styles (from `pages/index.css`)

These are element selectors that would need to be converted to Tailwind classes applied directly to elements:

| Element/Selector | Current Styles | Tailwind Equivalent | Notes |
|-----------------|----------------|-------------------|-------|
| `html, body` | margin: 0; padding: 0; font-family: sans-serif; | `m-0 p-0 font-sans` | Apply to html/body |
| `html` | box-sizing: border-box; | `box-border` | Apply to html |
| `*, *:before, *:after` | box-sizing: inherit; | `box-border` | Universal box-sizing |
| `body, h1, h2, h3, h4, h5, li, p` | font-family: "Open Sans", sans-serif; font-weight: 300; | `font-['Open_Sans'] font-light` | Typography |
| `p` | text-align: justify; | `text-justify` | Paragraph alignment |
| `a` | font-weight: 400; color: crimson; text-decoration: none; | `font-normal text-red-600 no-underline` | Link styling |
| `a:hover` | color: #ffd700; | `hover:text-yellow-400` | Link hover |
| `h3, h4` | font-weight: 400; | `font-normal` | Heading weight |
| `h3` | padding-bottom: 8px; border-bottom: 1px solid rgba(0, 0, 0, 0.25); | `pb-2 border-b border-black/25` | H3 styling |
| `button:focus` | outline: 0; | `focus:outline-none` | Button focus |

## Responsive Breakpoints Used

- `max-width: 768px` → `md:` (Tailwind's md breakpoint is 768px)
- `max-width: 1000px` → Custom breakpoint, use `lg:` (1024px) or create custom
- `max-width: 1024px` → `lg:`
- `min-width: 1024px` → `lg:`
- `max-width: 450px` → Custom breakpoint, closest is `sm:` (640px)
- `max-width: 400px` → Custom breakpoint

## Implementation Notes

1. **Custom Colors**: The site uses `#ffd700` (gold/yellow) extensively. This matches Tailwind's `yellow-400`.
2. **Custom Gradients**: The `.divider` class uses a custom gradient that will need a custom Tailwind class.
3. **Background Images**: The hero background will need to reference the correct path in Tailwind.
4. **Z-index Values**: Custom z-index values like 1000 will need custom Tailwind configuration.
5. **Custom Breakpoints**: Some breakpoints (400px, 450px, 1000px) don't match Tailwind defaults and may need custom configuration.
6. **Font Loading**: The Google Fonts import will need to be handled separately from CSS classes.

## Recommended Approach

1. **Create Custom Tailwind Config**: Add custom colors, breakpoints, and z-index values
2. **Component Classes**: Create component classes for complex combinations like `.button-link`
3. **Global Styles**: Apply global element styles through Tailwind's base layer
4. **Gradients**: Define custom gradients in Tailwind config for the divider
5. **Responsive Design**: Review responsive breakpoints and adjust as needed
