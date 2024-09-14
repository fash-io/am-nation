import React, { useState } from "react";
import { handleAddEvents, uploadImage } from "../utils/firebase"; // Import uploadImage function

const AddEvent = ({ user }) => {
  const [event, setEvent] = useState({});
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [hero_img, setHero_img] = useState(null);
  const [top_img, setTop_img] = useState(null);
  const [main_img, setMain_img] = useState(null);
  const [out_link, setOut_link] = useState("");
  const [location_name, setLocation_name] = useState("");
  const [country, setCountry] = useState("");
  const [organizers, setOrganizers] = useState("");
  const [curr, setCurr] = useState("");
  const [artists_id, setArtists_id] = useState([]);
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const handleFileChange = (e, setter) => {
    setter(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hero_img_url = "";
    let top_img_url = "";
    let main_img_url = "";

    // Upload images and get URLs
    try {
      if (hero_img) {
        hero_img_url = await uploadImage(hero_img);
      }
      if (top_img) {
        top_img_url = await uploadImage(top_img);
      }
      if (main_img) {
        main_img_url = await uploadImage(main_img);
      }

      // Set event object
      const newEvent = {
        name,
        date,
        hero_img: hero_img_url,
        top_img: top_img_url,
        main_img: main_img_url,
        out_link,
        location_name,
        country,
        organizers,
        curr,
        artists_id,
        organizerId: user.uid,
      };

      await handleAddEvents(newEvent);
      setSuccessMessage("Event added successfully!");
      setEvent(newEvent);
      window.location = "/";
    } catch (error) {
      setErrorMessage("Failed to add event. Please try again.");
      console.error("Error adding event:", error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-800 flex items-center justify-center w-full">
      <form
        className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-white mb-6">Add Event</h2>

        {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-2">Name</label>
          <input
            type="text"
            className="w-full p-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-2">Date</label>
          <input
            type="date"
            className="w-full p-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-2">Hero Image</label>
          <input
            type="file"
            className="w-full p-2 bg-gray-700 text-white rounded-md"
            onChange={(e) => handleFileChange(e, setHero_img)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-2">Top Image</label>
          <input
            type="file"
            className="w-full p-2 bg-gray-700 text-white rounded-md"
            onChange={(e) => handleFileChange(e, setTop_img)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-2">Main Image</label>
          <input
            type="file"
            className="w-full p-2 bg-gray-700 text-white rounded-md"
            onChange={(e) => handleFileChange(e, setMain_img)}
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
          <label className="block text-sm text-gray-400 mb-2">Artists ID (comma-separated)</label>
          <input
            type="text"
            className="w-full p-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            value={artists_id.join(",")}
            onChange={(e) => setArtists_id(e.target.value.split(",").map(id => id.trim()))}
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
