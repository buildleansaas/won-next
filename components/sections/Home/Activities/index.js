import React from "react";


export default function Activities({ events, schedule, videos }) {
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
          <div className="Home-info-programs">
            <h3>Weekly Schedule</h3>
            <div className="Home-info-items">
              <div className="Home-info-items">
                {liveSchedule.map(schedule => (
                  <div className="border-4 border-yellow-400 p-4 m-4" key={schedule._id}>
                    <h4>{schedule.title}</h4>
                    <p>{schedule.description}</p>
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
                      {schedule.link && (
                        <a
                          className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-black hover:text-yellow-400"
                          target="_blank"
                          rel="noopener"
                          href={schedule.link}
                        >
                          More Information
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Upcoming events section removed for now */}
        </div>
        <div className="Home-info-videos">
          <h3>Free Online Classes</h3>
          <h4>
            Due to precautions with COVID-19, we are transitioning to online
            teaching. Please view some of these videos we have created for you
            to take Tai Chi online! We hope you enjoy.
          </h4>
          <div className="divider" />
          <div className="videos-container">
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
          <p>
            There are no fees for our programs, however, the temple is fully
            self-supporting and any level of donations are much appreciated!
          </p>
          <p>
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
