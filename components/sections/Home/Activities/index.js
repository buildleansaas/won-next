import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import Link from "next/link";

import moment from "moment";

import "./index.css";

export default function Activities({ events, schedule }) {
  const liveEvents = events.filter(event => {
    if (event.active) {
      return event;
    }
  }) || [];
  const liveSchedule = schedule.filter(schedule => {
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
              {liveSchedule.items ? (
                <p className="no-items">Schedule is loading...</p>
              ) : (
                  <div className="Home-info-items">
                    {liveSchedule.map(schedule => (
                      <div className="Home-info-item" key={schedule._id}>
                        <h4>{schedule.title}</h4>
                        <p>{schedule.description}</p>
                        <p>Timeslots:</p>
                        <ul>{schedule.timeslots.map(timeslot => <li><strong>{timeslot.day}, {timeslot.startTime}, {timeslot.location.title}.</strong> {timeslot.endTime}</li>)}</ul>
                        <div className="button-link-container-flex">
                          <a
                            about="_blank"
                            href={schedule.moreInfo}
                            className="button-link"
                          >
                            Get More Information
                      </a>
                          <a about="_blank" href="" className="button-link">
                            Location
                      </a>
                          <a
                            className="button-link"
                            about="_blank"
                            href={`mailto:rvawonbuddhism.org&subject=Interested in ${schedule.title}`}
                          >
                            More Information
                      </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
            </div>
          </div>
          <div className="Home-info-upcoming">
            <h3>Upcoming Events and Workshops!</h3>
            {liveEvents.items ? (
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
                          about="_blank"
                          href={event.moreInfo}
                          className="button-link"
                        >
                          Get More Information
                      </a>
                        <a about="_blank" href="" className="button-link">
                          Location
                      </a>
                        <a
                          className="button-link"
                          about="_blank"
                          href={`mailto:rvawonbuddhism.org&subject=Interested in ${moment(
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
