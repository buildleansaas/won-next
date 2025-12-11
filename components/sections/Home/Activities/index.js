import React from "react";


export default function Activities({ events, schedule, videos }) {
  const NEW_PHONE = "804-243-5878";

  const replacePhoneNumbers = (text) => {
    if (!text || typeof text !== "string") return text;
    // Match common US phone formats, with optional country code
    const phoneRegex = /(?:\+?1[\s.-]?)?(?:\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]?\d{4}/g;
    return text.replace(phoneRegex, NEW_PHONE);
  };

  const extractPhone = (text) => {
    if (!text || typeof text !== "string") return NEW_PHONE;
    const match = text.match(/(?:\+?1[\s.-]?)?(?:\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]?\d{4}/);
    return match ? match[0] : NEW_PHONE;
  };

  const toTelHref = (raw) => {
    if (!raw) return `tel:+18042435878`;
    const digits = raw.replace(/\D/g, "");
    const ten = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
    const normalized = ten.length === 10 ? `+1${ten}` : `+1${digits}`;
    return `tel:${normalized}`;
  };

  const cleanseDescription = (desc) => {
    if (!desc) return null;
    if (/covid[- ]?19|covid/i.test(desc)) {
      return "We are open again. Please join us in person at the temple.";
    }
    return replacePhoneNumbers(desc);
  };
  const liveEvents = Array.isArray(events) ? events : [];
  const liveSchedule = Array.isArray(schedule) ? schedule : [];

  const scheduleDetails = (item) => {
    if (!item) return null;
    if (item.time) return item.time;
    switch (item._id || item.title) {
      case "dharma-service":
      case "Won Buddhism Dharma Service":
        return "Every Sunday from 2pm - 4pm";
      case "meditation-beginners":
      case "Meditation Class for Beginners":
        return "Every Saturday from 10:30am to 12 noon";
      case "tai-chi-qigong":
      case "Tai Chi and Qi Gong":
        return "Every Wednesday from 10:30am to 12 noon";
      default:
        return null;
    }
  };

  return (
    <div id="activities" className="Home-info inner-wrapper scroll-mt-16">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-start gap-6">
          <div className="Home-info-programs w-full">
            <h3>Weekly Schedule</h3>
            <div className="space-y-4">
              {liveSchedule.map(item => (
                <div className="border-4 border-yellow-400 p-4 w-full" key={item._id || item.title}>
                  <h4>{replacePhoneNumbers(item.title)}</h4>
                  {cleanseDescription(item.description) && (
                    <p>{cleanseDescription(item.description)}</p>
                  )}
                  {scheduleDetails(item) && (
                    <p className="mt-2 text-gray-800">
                      {scheduleDetails(item)}
                    </p>
                  )}
                  <div className="button-link-container-flex mt-4">
                    <a
                      className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-black hover:text-yellow-400"
                      href={toTelHref(extractPhone(item.description))}
                    >
                      Text to Register
                    </a>
                  </div>
                </div>
              ))}
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
