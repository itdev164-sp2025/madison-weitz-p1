import React, { useState } from "react";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";
import EventCalendar from "../components/EventCalendar"; // Import the calendar component

export default function EventsPage() {
  const [events, setEvents] = useState([]); // List of events
  const [currentEditIndex, setCurrentEditIndex] = useState(null); // Index of the event being edited
  const [selectedDate, setSelectedDate] = useState(new Date()); // Tracks the selected date in the calendar

  const addEvent = (event) => {
    if (currentEditIndex !== null) {
      // Update an existing event
      const updatedEvents = [...events];
      updatedEvents[currentEditIndex] = event;
      setEvents(updatedEvents);
      setCurrentEditIndex(null); // Reset edit mode
    } else {
      // Add a new event
      setEvents([...events, event]);
    }
  };

  const deleteEvent = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents); // Remove the event by index
  };

  const editEvent = (index) => {
    setCurrentEditIndex(index); // Set the index for editing
  };

  return (
    <main>
      <h1>Your Events</h1>

      {/* Event Form for adding/editing events */}
      <EventForm
        onSubmit={addEvent}
        initialData={currentEditIndex !== null ? events[currentEditIndex] : {}}
        isEditing={currentEditIndex !== null}
      />

      {/* Event Calendar displaying events by date */}
      <EventCalendar events={events} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

      {/* List of all events with edit and delete options */}
      <EventList events={events} onDelete={deleteEvent} onEdit={editEvent} />
    </main>
  );
}
