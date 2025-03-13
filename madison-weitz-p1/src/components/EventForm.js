import React, { useState } from "react";

function EventForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, date });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Event Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button type="submit">Create Event</button>
    </form>
  );
}

export default EventForm;
