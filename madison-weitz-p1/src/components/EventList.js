import React from "react";
import { Box, Flex } from "@rebass/grid"; // Import Rebass components
import { EventContainer } from "./styles"; // Styled components for additional styling
import { Edit, Delete } from "@styled-icons/material"; // Import icons

function EventList({ events, onDelete, onEdit }) {
  return (
    <EventContainer>
      <h2>Event List</h2>

      {events.length > 0 ? (
        <Flex flexDirection="column" alignItems="center">
          {events.map((event, index) => (
            <Box
              key={index}
              p={3}
              width={[1, 1 / 2]}
              bg="white"
              mb={2}
              borderRadius="8px"
              boxShadow="0px 4px 6px rgba(0,0,0,0.1)"
            >
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <Flex justifyContent="space-between">
                <button onClick={() => onEdit(index)}>
                  <Edit size="24" /> Edit
                </button>
                <button onClick={() => onDelete(index)}>
                  <Delete size="24" /> Delete
                </button>
              </Flex>
            </Box>
          ))}
        </Flex>
      ) : (
        <Box p={3} textAlign="center">
          <p>No events yet. Start by adding one!</p>
        </Box>
      )}
    </EventContainer>
  );
}

export default EventList;
