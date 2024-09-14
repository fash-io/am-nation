import React, { useState, useEffect } from "react";
import { getEventsByOrganizer } from "../utils/firebase"; 
import { Link } from "react-router-dom";

const MyEventsPage = ({ user }) => {
  const [events, setEvents] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const events = await getEventsByOrganizer(user.uid);
        setEvents(events);
      } catch (error) {
        setErrorMessage("Failed to fetch events. Please try again.");
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, [user.uid]);



  return (
    <div className="min-h-screen bg-slate-800 p-8">
      <h2 className="text-2xl font-semibold text-white mb-6">My Events</h2>

      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

      <Link to="/add-event" className="text-blue-500 block mb-6">Add Event</Link>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.length ? (
          events.map(event => (
              <div className="bg-gray-900 p-4 rounded-lg shadow-lg" key={event.id}>
              <h3 className="text-xl font-semibold text-white mb-2">{event.name}</h3>
              <p className="text-gray-400">Date: {event.date}</p>
              <p className="text-gray-400">Location: {event.location_name}</p>
              <p className="text-gray-400">Organizers: {event.organizers}</p>
              <a href={event.out_link} className="text-blue-500" target="_blank" rel="noopener noreferrer">Event Link</a>
              <Link key={event.id} to={`/event/${event.id}`} className="text-blue-500 block">Edit Details</Link>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No events found.</p>
        )}
      </div>
    </div>
  );
};

export default MyEventsPage;
