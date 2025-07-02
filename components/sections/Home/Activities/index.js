import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import moment from "moment";

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
    <ScrollableAnchor id={"activities"}>
      <div className="Home-info inner-wrapper">
        <div className="flex-info">
          <div className="Home-info-programs">
            <h3>Weekly Schedule</h3>
            <div className="Home-info-items">
              <div className="Home-info-items">
                {liveSchedule.map(schedule => (
                  <div className="Home-info-item" key={schedule._id}>
                    <h4>{schedule.title}</h4>
                    <p>{schedule.description}</p>
                    <p>Timeslots:</p>
                    <ul>
                      {schedule.timeslots.map(timeslot => (
                        <li>
                          <strong>{timeslot.day}</strong> from{" "}
                          <strong>{timeslot.startTime}</strong>,{" "}
                          {timeslot.location.address ? (
                            <a
                              target="_blank"
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
                        className="button-link"
                        target="_blank"
                        href={`mailto:rvawonbuddhism.org&subject=Interested in ${schedule.title}`}
                      >
                        Contact Us
                      </a>
                      {schedule.link && (
                        <a
                          className="button-link"
                          target="_blank"
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
          {/* <div className="Home-info-upcoming">
            <h3>Upcoming Events and Workshops!</h3>
            {Boolean(liveEvents) ? (
              <p className="no-items">
                Currently there are no upcoming events, we hope to populate this
                list shortly!
              </p>
            ) : (
              <div className="Home-info-items">
                {liveEvents.map(event => (
                  <div className="Home-info-item" key={event._id}>
                    <h4>{event.title}</h4>
                    <p>
                      From{" "}
                      <strong>
                        {moment(event.eventBegin).format("dddd MMMM, Do, YYYY")}
                      </strong>{" "}
                      to{" "}
                      <strong>
                        {moment(event.eventEnd).format("dddd MMMM, Do, YYYY")}
                      </strong>
                    </p>
                    <p>{event.description}</p>
                    <div className="button-link-container-flex">
                      <a
                        target="_blank"
                        href={event.moreInfo}
                        className="button-link"
                      >
                        Get More Information
                      </a>
                      <a
                        target="_blank"
                        href={`https://www.google.com/maps/place/${event.location.address}`}
                        className="button-link"
                      >
                        Location
                      </a>
                      <a
                        className="button-link"
                        target="_blank"
                        href={`mailto:richmond-va@wonbuddhism.org&subject=Interested in ${moment(
                          event.eventBegin
                        ).format("MMMM")} ${event.title}`}
                      >
                        Sign Up
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div> */}
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
              <div className="video-container">
                <div className="iframe-container" key={i}>
                  <iframe
                    width="512"
                    height="315"
                    src={`https://www.youtube.com/embed/${embed}`}
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
        <div className="donation-information">
          <p>
            There are no fees for our programs, however, the temple is fully
            self-supporting and any level of donations are much appreciated!
          </p>
          <p>
            <a
              href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZHRPK4RDFN7T6"
              className="button-link"
            >
              🙏 Donate Via PayPal 🙏
            </a>
          </p>
        </div>
      </div>
    </ScrollableAnchor>
  );
}
