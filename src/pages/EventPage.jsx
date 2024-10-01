import { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { events, artists } from "../constants";
import SectionWrapper from "../components/SectionWrapper";
import { CountdownTimer, TicketSelector } from "../utils/eventutil";

const EventPage = () => {
  const [ended, setEnded] = useState(false);
  const [ticketCounts, setTicketCounts] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const location = useLocation();
  const eventName = location.pathname;
  const event = events.find((e) => e.link_name === eventName);
  const navigate = useNavigate();

  useEffect(() => {
    if (event) {
      const eventDate = new Date(event.date).getTime();
      const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance < 0) {
          clearInterval(timerInterval);
          setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          document.getElementById("timer").innerHTML = "Booking Closed";
          setEnded(true);
        } else {
          setTimeRemaining({
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor(
              (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            ),
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

  const handleSetTicketNumber = (index, increase, ticketPrice) => {
    setTicketCounts((prevCounts) => {
      const currentCount = prevCounts[index] || 0;
      const newCount = increase
        ? currentCount + 1
        : Math.max(currentCount - 1, 0);

      setTotalPrice((prevTotalPrice) => {
        return increase
          ? prevTotalPrice + ticketPrice / 2
          : Math.max(prevTotalPrice - ticketPrice / 2, 0);
      });

      return { ...prevCounts, [index]: newCount };
    });
  };

  if (!event) {
    return (
      <main className="flex items-center justify-center min-h-screen">
        <div className=" p-8 rounded-lg about2-card text-center">
          <h1 className="text-6xl font-bold text-red-600">Not Found</h1>
          <p className="text-lg text-gr5ay-00 mt-4">
            Oops! The Event you're looking for doesn't exist or has ended. You
            can return to the homepage or try searching for what you need.
          </p>
          <button
            className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => navigate("/")}
            aria-label="Go back to homepage"
          >
            Go Back Home
          </button>
        </div>
      </main>
    );
  }

  const ticketCount = Object.values(ticketCounts).reduce(
    (acc, count) => acc + count,
    0
  );

  return (
    <>
      <div className="container-fluid p-0 hero sticky-1">
        <img
          src={event.top_img}
          alt={event.altText}
          className="w-100 object-fit-cover-lg m "
        />
      </div>

      <div className="container">
        <div className="row py-3">
          <div className="col-lg-12">
            <h3 className="text-xl font-semibold">
              {event.name.toUpperCase()}
            </h3>
            <p className="text-secondary text-lg">
              <small>
                <i className="bi bi-geo-alt-fill mx-2"></i>
                {event.organizers}
              </small>
              <small>
                <i className="bi bi-calendar-date-fill mx-2"></i>Starts on{" "}
                {event.date}
                <i className="bi bi-clock mx-2"></i>
              </small>
            </p>
          </div>
        </div>
      </div>

      <div className="container my-5 fw-bold">
        <div className="row gx-5 position-relative">
          <div className="col-lg-8">
            <img
              src={event.main_img}
              className="img-fluid sticky sticky-top rounded-3 z-1"
              alt="AfroNation Event Image"
            />
          </div>
          <div className="col-lg-4 rounded-3 bk">
            <h5 className="border-bottom py-3" id="timer">
              Event Details
            </h5>
            <CountdownTimer timeRemaining={timeRemaining} />
            <div className="row my-4">
              <div className="col-2 d-flex align-items-center">
                <i className="bi bi-person"></i>
              </div>
              <div className="col-10">
                <p className="text-secondary">
                  <small>Organized by:</small>
                </p>
                <p>{event.organizers}</p>
              </div>
            </div>
            <div className="row my-4">
              <div className="col-2 d-flex align-items-center">
                <i className="bi bi-calendar-date-fill"></i>
              </div>
              <div className="col-10">
                <p className="text-secondary">
                  <small>Date and Time:</small>
                </p>
                <p>{event.date}</p>
              </div>
            </div>
            <div className="row my-4">
              <div className="col-2 d-flex align-items-center">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div className="col-10">
                <p className="text-secondary">
                  <small>Location:</small>
                </p>
                <p>{event.location}</p>
              </div>
            </div>

            <h5 className="border-bottom py-3">Select Ticket</h5>
            <TicketSelector
              tickets={event.tickets}
              onTicketChange={handleSetTicketNumber}
              ticketCounts={ticketCounts}
            />

            <div className="col-12 py-3">
              <span className="text-secondary">
                <small>{ticketCount}x Item(s)</small>
              </span>
              <p>
                <span>
                  {event.curr}
                  {totalPrice.toLocaleString()}
                </span>
              </p>
            </div>

            <div className="col-12">
              <button
                type="button"
                className={`btn btn-secondary w-100 ${ended ? "disabled" : ""}`}
              >
                Book now
              </button>
            </div>
          </div>
        </div>
      </div>

      <SectionWrapper id="headliners" title="Featured Artists" type="1">
        <div className="row g-4">
          {event.artistId.map((id) => {
            const artist = artists.find((artist) => artist.id === id);
            return artist ? (
              <div key={id} className="col-lg-3 col-sm-6">
                <div className="card border-0 artist-card overflow-hidden rounded-3">
                  <img
                    src={artist.img_url}
                    alt={artist.name}
                    className="rounded-3 img-fluid object-fit-cover"
                  />
                  <div className="card-footer p-4 text-center rounded-3 border-0">
                    <h5 className="fw-bold fs-5">
                      {artist.name.toUpperCase()}
                    </h5>
                  </div>
                </div>
              </div>
            ) : null;
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="case-stud"
        title="Other Shows"
        more={{ name: "View All Events", url: "/events" }}
        type="1"
      >
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
                    <h3 className="text-light display-5 fs-2 fw-bold">
                      {event_.name.toUpperCase()}
                    </h3>
                    <Link to={event_.link_name} className="button">
                      Buy Ticket(s)
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default EventPage;
