import React, { useState } from "react";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";

export default function EventsPage() {
  const [events, setEvents] = useState([]); // Holds the list of events

  const addEvent = (event) => {
    setEvents([...events, event]); // Adds a new event to the state
  };

  return (
    <main>
      <h1>Your Events</h1>
      <EventForm onSubmit={addEvent} /> {/* Event creation */}
      <EventList events={events} /> {/* Event display */}
    </main>
  );
}