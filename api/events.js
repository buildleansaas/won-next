export const getEvents = `
*[_type == 'event']{
    _id,
    title,
    location -> {
        ...
    },
    moreInfo,
    eventBegin,
    eventEnd
}`;