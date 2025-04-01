import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function EventCalendar({ events, selectedDate, setSelectedDate }) {
  // Convert selectedDate into a proper format for comparison
  const formattedDate = selectedDate.toISOString().slice(0, 10); // Gets "YYYY-MM-DD"

  // Filter events that match the formatted date
  const eventsForDate = events.filter((event) => event.date === formattedDate);

  return (
    <div>
      <Calendar onChange={setSelectedDate} value={selectedDate} />

      <h2>Events for {selectedDate.toDateString()}</h2>
      <ul>
        {eventsForDate.length > 0 ? (
          eventsForDate.map((event, index) => (
            <li key={index}>
              <h3>{event.title}</h3>
              <p>{event.date}</p>
            </li>
          ))
        ) : (
          <p>No events for this date.</p>
        )}
      </ul>
    </div>
  );
}

export default EventCalendar;
