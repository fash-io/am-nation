import React, { useState } from "react";
import { handleAddEvents } from "../utils/firebase";

const AddEvent = ({ user }) => {
  const [event, setEvent] = useState({});
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [hero_img, setHero_img] = useState("");
  const [out_link, setOut_link] = useState("");
  const [location_name, setLocation_name] = useState("");
  const [country, setCountry] = useState("");
  const [organizers, setOrganizers] = useState("");
  const [curr, setCurr] = useState("");
  const [artists_id, setArtists_id] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEvent({
      name,
      date,
      hero_img,
      out_link,
      location_name,
      country,
      organizers,
      curr,
      artists_id,
      organizerId: user.uid,
    });
    await handleAddEvents(event);
  };

  return (
    <div className="min-h-screen bg-slate-800 flex items-center justify-center w-full">
      <form
        className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-white mb-6">Add Event</h2>

        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-2">Name</label>
          <input
            type="text"
            className="w-full p-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-2">Date</label>
          <input
            type="text"
            className="w-full p-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-2">Hero Image</label>
          <input
            type="text"
            className="w-full p-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            value={hero_img}
            onChange={(e) => setHero_img(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-2">Out Link</label>
          <input
            type="text"
            className="w-full p-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            value={out_link}
            onChange={(e) => setOut_link(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-2">Location Name</label>
          <input
            type="text"
            className="w-full p-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            value={location_name}
            onChange={(e) => setLocation_name(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-2">Country</label>
          <input
            type="text"
            className="w-full p-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-2">Organizers</label>
          <input
            type="text"
            className="w-full p-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            value={organizers}
            onChange={(e) => setOrganizers(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-2">Currency</label>
          <input
            type="text"
            className="w-full p-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            value={curr}
            onChange={(e) => setCurr(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-2">Artists ID</label>
          <input
            type="text"
            className="w-full p-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            value={artists_id}
            onChange={(e) => setArtists_id(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
