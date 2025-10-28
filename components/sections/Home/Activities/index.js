import React from "react";


export default function Activities({ events, schedule, videos }) {
  const cleanseDescription = (desc) => {
    if (!desc) return null;
    return /covid[- ]?19|covid/i.test(desc)
      ? "We are open again. Please join us in person at the temple."
      : desc;
  };
  const liveEvents =
    events.filter(event => {
      if (event.active) {
        return event;
      }
    }) || [];

  const liveSchedule =
    schedule.filter(schedule => {
      if (schedule.active) {
        return schedule;
      }
    }) || [];

  return (
    <div id="activities" className="Home-info inner-wrapper scroll-mt-16">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-start gap-6">
          <div className="Home-info-programs w-full">
            <h3>Weekly Schedule</h3>
            <div className="Home-info-items">
              <div className="Home-info-items">
                {liveSchedule.map(schedule => (
                  <div className="border-4 border-yellow-400 p-4 my-4 w-full" key={schedule._id}>
                    <h4>{schedule.title}</h4>
                    {cleanseDescription(schedule.description) && (
                      <p>{cleanseDescription(schedule.description)}</p>
                    )}
                    <p>Timeslots:</p>
                    <ul>
                      {schedule.timeslots.map((timeslot, i) => (
                        <li key={`${schedule._id || schedule.title}-${i}`}>
                          <strong>{timeslot.day}</strong> from{" "}
                          <strong>{timeslot.startTime}</strong>,{" "}
                          {timeslot.location.address ? (
                            <a
                              target="_blank"
                              rel="noopener"
                              href={`https://www.google.com/maps/place/${timeslot.location.address}`}
                            >
                              {timeslot.location.title}
                            </a>
                          ) : (
                            timeslot.location.title
                          )}
                        </li>
                      ))}
                    </ul>
                    <div className="button-link-container-flex">
                      <a
                        className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-black hover:text-yellow-400"
                        target="_blank"
                        rel="noopener"
                        href={`mailto:richmond-va@wonbuddhism.org?subject=Interested in ${encodeURIComponent(
                          schedule.title
                        )}`}
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Upcoming events section removed for now */}
        </div>
        <div className="Home-info-videos w-full">
          <h3>Free Online Classes</h3>
          <h4 className="mb-2">
            Enjoy our online courses below. You can also explore additional
            programs available via the Won Buddhism North Carolina Temple.
          </h4>
          <a
            className="inline-block bg-yellow-400 text-black px-4 py-2 rounded hover:bg-black hover:text-yellow-400"
            href="https://www.wonbuddhismnc.org/online-programs"
            target="_blank"
            rel="noopener"
          >
            Free Online Classes
          </a>
          <div className="divider" />
          <h3 className="mt-6">Enjoy our Free Online Tai Chi Classes</h3>
          <div className="videos-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {videos.map(({ embed, title, description }, i) => (
              <div className="video-container" key={embed || i}>
                <div className="relative pb-[56.25%] h-0">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${embed}`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
        <hr className="divider" />
        <div className="border rounded bg-white text-gray-600 p-4 max-w-3xl mx-auto text-center">
          <p className="text-center">
            There are no fees for our programs, however, the temple is fully
            self-supporting and any level of donations are much appreciated!
          </p>
          <p className="pt-4 text-center">
            <a
              href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZHRPK4RDFN7T6"
              className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-black hover:text-yellow-400"
            >
              🙏 Donate Via PayPal 🙏
            </a>
          </p>
        </div>
      </div>
  );
}
