import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import Link from "next/link";

import "./index.css";

export default function Activities({ info }) {
  return (
    <ScrollableAnchor id={"activities"}>
      <div className="Home-info inner-wrapper">
        <div className="flex-info">
          <div className="Home-info-programs">
            <h3>{info.programs.title}</h3>
            <div className="Home-info-items">
              {info.programs.items.map(
                ({ day, times, title, description }, i) => (
                  <div key={i} className="Home-info-item">
                    <h4 className="Home-info-item-title">
                      {title}
                      <br />
                      <small>
                        <strong>
                          {day} @ {times}
                        </strong>
                      </small>
                    </h4>
                    <p>{description}</p>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="Home-info-upcoming">
            <h3>{info.upcoming.title}</h3>
            <div className="Home-info-items">
              {info.upcoming.items
                .slice(0, 3)
                .map(({ start, end, title, description, registration }, i) => (
                  <div key={i} className="Home-info-item">
                    <h4 className="Home-info-item-title">
                      {title}
                      <br />
                      <small>
                        <strong>
                          {start} - {end}
                        </strong>
                      </small>
                    </h4>
                    <p>{description}</p>
                    <a
                      href={`mailto:${registration}?subject=${title} registration`}
                    >
                      {info.button_more_info}
                    </a>{" "}
                    {info.call_option} (804)-325-5760.
                  </div>
                ))}
            </div>
            <p>
              <Link href="/all-events">
                <span className="button-link">{info.button_future}</span>
              </Link>
            </p>
          </div>
        </div>
        <hr className="divider" />
        <div className="donation-information">
          <p>
            {info.donations.intro}{" "}
            <img
              className="emoji"
              src={"/static/pray.png"}
              alt="hands clasped in prayer"
            />
          </p>
          <p>
            <a
              href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZHRPK4RDFN7T6"
              className="button-link"
            >
              {info.donations.paypal_button}
            </a>
          </p>
          <p style={{ fontSize: 16, marginTop: 24 }}>{info.donations.check}</p>
        </div>
      </div>
    </ScrollableAnchor>
  );
}
