import React from "react";
import { EventContainer, EventItem } from "./styles"; // Styled components

function EventList({ events }) {
  return (
    <EventContainer>
      <h2>Event List</h2>
      {events.length > 0 ? (
        events.map((event, index) => (
          <EventItem key={index}>
            <h3>{event.title}</h3>
            <p>{event.date}</p>
          </EventItem>
        ))
      ) : (
        <p>No events yet. Start by adding one!</p>
      )}
    </EventContainer>
  );
}

export default EventList;

