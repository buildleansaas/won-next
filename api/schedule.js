export const getSchedule = `
*[_type == 'schedule']{
    _id,
    active,
    title,
    description,
    timeslots[] {
        location -> {
            ...
        },
        ...
    }
}`;