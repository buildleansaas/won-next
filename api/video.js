export const getVideos = `
*[_type == 'video']{
    _id,
    title,
    embed,
    description
}`;
