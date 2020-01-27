export const getEvents = `
*[_type == 'event']{
    _id,
    active,
    title,
    location -> {
        ...
    },
    moreInfo,
    eventBegin,
    eventEnd,
    description
}`;