import styles from "styled-components";

export const PageWrapper = styles.div`
  padding: 20px;
  background-color: #f9f9f9;
`;

export const Button = styles.button`
  background-color: #6200ea;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  
  &:hover {
    background-color: #3700b3;
  }
`;

export const EventContainer = styles.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
`;

export const EventItem = styles.div`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;
