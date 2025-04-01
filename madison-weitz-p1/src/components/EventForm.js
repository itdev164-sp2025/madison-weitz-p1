import React, { useState, useEffect } from "react";

function EventForm({ onSubmit, initialData = {}, isEditing = false }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  // Synchronize state with the new initialData whenever it changes
  useEffect(() => {
    setTitle(initialData.title || "");
    setDate(initialData.date || "");
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, date });
    setTitle("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">{isEditing ? "Update Event" : "Add Event"}</button>
    </form>
  );
}

export default EventForm;