import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEventById, updateEvent } from "../utils/firebase"; // Import functions for fetching and updating event
import { SectionWrapper } from "../components";

const EditEventPage = () => {
  const { id } = useParams(); // Get event ID from URL
  const navigate = useNavigate();

  const [event, setEvent] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    location: "",
    organizers: "",
    hero_img: "",
    top_img: "",
    main_img: "",
    link_name: "",
    country: "",
    curr: "",
    artistId: [], // Initialize as an empty array
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const fetchedEvent = await getEventById(id); // Fetch event details
        setEvent(fetchedEvent);
        setFormData(fetchedEvent);
      } catch (error) {
        setErrorMessage("Failed to fetch event details.");
        console.error("Error fetching event:", error);
      }
    };

    fetchEvent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleArtistIdChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      artistId: e.target.value.split(",").map((id) => id.trim()),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateEvent(id, formData); // Update event details
      setSuccessMessage("Event updated successfully!");
      setTimeout(() => navigate(`/`), 2000); // Redirect to event page after a short delay
    } catch (error) {
      setErrorMessage("Failed to update event. Please try again.");
      console.error("Error updating event:", error);
    }
  };

  if (!event) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-slate-800 p-8">
      <h2 className="text-2xl font-semibold text-white mb-6">Edit Event</h2>

      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      {successMessage && (
        <p className="text-green-500 mb-4">{successMessage}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-white mb-1">
            Event Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-white mb-1">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-white mb-1">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="organizers" className="block text-white mb-1">
            Organizers
          </label>
          <input
            type="text"
            id="organizers"
            name="organizers"
            value={formData.organizers}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="hero_img" className="block text-white mb-1">
            Hero Image URL
          </label>
          <input
            type="url"
            id="hero_img"
            name="hero_img"
            value={formData.hero_img}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="top_img" className="block text-white mb-1">
            Top Image URL
          </label>
          <input
            type="url"
            id="top_img"
            name="top_img"
            value={formData.top_img}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="main_img" className="block text-white mb-1">
            Main Image URL
          </label>
          <input
            type="url"
            id="main_img"
            name="main_img"
            value={formData.main_img}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="link_name" className="block text-white mb-1">
            Event Link
          </label>
          <input
            type="url"
            id="link_name"
            name="link_name"
            value={formData.link_name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="country" className="block text-white mb-1">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="curr" className="block text-white mb-1">
            Currency
          </label>
          <input
            type="text"
            id="curr"
            name="curr"
            value={formData.curr}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="artistId" className="block text-white mb-1">
            Artist IDs (comma separated)
          </label>
          <input
            type="text"
            id="artistId"
            name="artistId"
            value={formData.artistId.join(", ")} // Ensure formData.artistId is always an array
            onChange={handleArtistIdChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditEventPage;
