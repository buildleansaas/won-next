import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import Link from "next/link";

import "./index.css";

export default function Activities({ events, schedule }) {
  console.log(events, schedule)
  return (
    <ScrollableAnchor id={"activities"}>
      <div className="Home-info inner-wrapper">
        <div className="flex-info">
          <div className="Home-info-programs">
            <h3>Weekly Schedule</h3>
            <div className="Home-info-items">
              {schedule.items ? (
                <p className="no-items">
                  Schedule is loading...
              </p>
              ) : (
                  <div className="Home-info-items">

                  </div>
                )}
            </div>
          </div>
          <div className="Home-info-upcoming">
            <h3>Upcoming Workshops</h3>
            {events.items ? (
              <p className="no-items">
                Currently there are no upcoming events, we hope to populate this
                list shortly!
              </p>
            ) : (
                <div className="Home-info-items">

                </div>
              )
            }
            <p>
              <Link href="/all-events">
                <span className="button-link">See Future Events</span>
              </Link>
            </p>
          </div>
        </div>
        <hr className="divider" />
        <div className="donation-information">
          <p>
            <a
              href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZHRPK4RDFN7T6"
              className="button-link">
              Donate Via PayPal
            </a>
          </p>
        </div>
      </div>
    </ScrollableAnchor>
  );
}
