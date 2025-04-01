import React from "react";
import { EventContainer, EventItem } from "./styles"; // Styled components for styling

function EventList({ events, onDelete, onEdit }) {
  return (
    <EventContainer>
      <h2>Event List</h2>
      {events.length > 0 ? (
        events.map((event, index) => (
          <EventItem key={index}>
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <button onClick={() => onEdit(index)}>Edit</button> {/* Edit button */}
            <button onClick={() => onDelete(index)}>Delete</button> {/* Delete button */}
          </EventItem>
        ))
      ) : (
        <p>No events yet. Start by adding one!</p>
      )}
    </EventContainer>
  );
}

export default EventList;
