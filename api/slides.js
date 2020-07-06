export const getSlides = `
*[_type == 'slideshow']{
    _id,
    "imageUrl": slide.asset->url,
    caption
}`;
