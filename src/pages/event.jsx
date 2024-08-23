import { useLocation } from "react-router-dom";
import { events, artists } from "../constants";
import SectionWrapper from "../components/SectionWrapper";
import { useEffect, useState } from "react";

export default function Event() {
  const eventName = useLocation();
  const event = events.find((e) => e.link_name === eventName.pathname);

  const [ticketCounts, setTicketCounts] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSetTicketNumber = (index, increase, ticketPrice) => {
    setTicketCounts((prevCounts) => {
      const currentCount = prevCounts[index] || 0;
      const newCount = increase ? currentCount + 1 : Math.max(currentCount - 1, 0);

      setTotalPrice((prevTotalPrice) => {
        return increase ? prevTotalPrice + ticketPrice : Math.max(prevTotalPrice - ticketPrice, 0);
      });

      return { ...prevCounts, [index]: newCount };
    });
  };

  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (event) {
      const eventDate = new Date(event.date).getTime();

      const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance < 0) {
          clearInterval(timerInterval);
          setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          document.getElementById("timer").innerHTML = "Event Started";
        } else {
          setTimeRemaining({
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000),
          });
        }
      };

      const timerInterval = setInterval(updateCountdown, 1000);
      updateCountdown();

      return () => clearInterval(timerInterval);
    }
  }, [event]);

  if (!event) {
    return (
      <SectionWrapper>
        <h2 className="text-center display-5">Event not found</h2>
      </SectionWrapper>
    );
  }

  return (
    <>
      <div className="container-fluid p-0 hero">
        <img src={event.top_img} alt={event.altText} className="w-100 object-fit-cover-lg m" />
      </div>

      <div className="container">
        <div className="row py-3">
          <div className="col-lg-12">
            <h3>{event.name.toUpperCase()}</h3>
            <p className="text-secondary">
              <small>
                <i className="bi bi-geo-alt-fill mx-2"></i>{event.organizers}
              </small>
              <small>
                <i className="bi bi-calendar-date-fill mx-2"></i>Starts on {event.date}
                <i className="bi bi-clock mx-2"></i>
              </small>
            </p>
          </div>
        </div>
      </div>

      <div className="container my-5 fw-bold">
        <div className="row gx-5 position-relative">
          <div className="col-lg-8">
            <img src={event.main_img} className="img-fluid sticky sticky-top rounded-3" alt="AfroNation Event Image" />
          </div>
          <div className="col-lg-4 rounded-3 bk">
            <h5 className="border-bottom py-3" id="timer">Event Details</h5>
            <div className="row mt-4">
              {/* Time Remaining */}
              {['days', 'hours', 'minutes', 'seconds'].map((unit, idx) => (
                <div key={idx} className="col-3 text-center">
                  <span className="d-block fs-3">{timeRemaining[unit]}</span>
                  <span><small>{unit.toUpperCase()}</small></span>
                </div>
              ))}
            </div>

            {/* Event Info */}
            <div className="row my-4">
              <div className="col-2 d-flex align-items-center">
                <i className="bi bi-person"></i>
              </div>
              <div className="col-10">
                <p className="text-secondary"><small>Organized by:</small></p>
                <p>{event.organizers}</p>
              </div>
            </div>
            <div className="row my-4">
              <div className="col-2 d-flex align-items-center">
                <i className="bi bi-calendar-date-fill"></i>
              </div>
              <div className="col-10">
                <p className="text-secondary"><small>Date and Time:</small></p>
                <p>{event.date}</p>
              </div>
            </div>
            <div className="row my-4">
              <div className="col-2 d-flex align-items-center">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div className="col-10">
                <p className="text-secondary"><small>Location:</small></p>
                <p>{event.location}</p>
              </div>
            </div>

            {/* Ticket Selection */}
            <h5 className="border-bottom py-3">Select Ticket</h5>
            <div className="row">
              {event.tickets.map((ticket, index) => (
                <div key={index} className="col-12 d-flex justify-content-between my-3">
                  <div className="text-start">
                    <h3>{ticket.name}</h3>
                    <p><span>{ticket.price_string}</span></p>
                  </div>
                  <div className="text-end d-flex align-items-center">
                    <button
                      className="mx-2 rounded-circle px-2 py-1 border"
                      onClick={() => handleSetTicketNumber(index, false, ticket.price)}
                    >
                      -
                    </button>
                    <span className="mx-2">{ticketCounts[index] || 0}</span>
                    <button
                      className="mx-2 rounded-circle px-2 py-1 border"
                      onClick={() => handleSetTicketNumber(index, true, ticket.price)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="col-12 py-3">
              <span className="text-secondary"><small>{Object.values(ticketCounts).reduce((acc, count) => acc + count, 0)}x Item(s)</small></span>
              <p><span>{event.curr}{totalPrice.toLocaleString()}</span></p>
            </div>

            {/* Booking Button */}
            <div className="col-12">
              <button type="button" className="btn btn-secondary w-100">Book now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Artists Section */}
      <SectionWrapper id="headliners" title="Featured Artists" type="1">
        <div className="row g-4">
          {event.artistId.map((id) => {
            const artist = artists.find((artist) => artist.id === id);
            return artist ? (
              <div key={id} className="col-lg-3 col-sm-6">
                <div className="card border-0 artist-card overflow-hidden rounded-3">
                  <img src={artist.img_url} alt={artist.name} className="rounded-3 img-fluid object-fit-cover" />
                  <div className="card-footer p-4 text-center rounded-3 border-0">
                    <h5 className="fw-bold fs-5">{artist.name.toUpperCase()}</h5>
                  </div>
                </div>
              </div>
            ) : null;
          })}
        </div>
      </SectionWrapper>

      {/* Other Shows Section */}
      <SectionWrapper id="case-stud" title="Other Shows" more={{ name: "View All Events", url: "./events.html" }} type="1">
        <div className="row case-row my-4 gy-5 gy-lg-0">
          {events
            .filter((event_) => event_.name !== event.name)
            .splice(0, 2)
            .map((event_, index) => (
              <div key={index} className="col-lg-6 position-relative cases-1">
                <div className="cases position-relative rounded-4 overflow-hidden w-100 h-100">
                  <img
                    src={event_.hero_img}
                    className="d-block w-100 img-fluid h-100 object-fit-cover h"
                    alt={event_.name}
                  />
                  <div className="case-card w-100 h-100 position-absolute d-flex flex-column justify-content-end p-4 rounded-3 text-center top-0 start-0">
                    <h3 className="text-light display-5 fs-2 fw-bold">{event_.name.toUpperCase()}</h3>
                    <a href={event_.link_name} className="btn btn-outline-light w-50">Buy Ticket(s)</a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </SectionWrapper>
    </>
  );
}
