import React from "react";
import { PageWrapper, Button } from "../components/styles";
import { Link } from "gatsby"; // Import Link from Gatsby

export default function HomePage() {
  return (
    <main>
      <PageWrapper>
        <h1>Welcome to the Event Management App</h1>
        <p>Your one-stop solution for organizing events efficiently!</p>
        {/* Wrap the button in a Link for navigation */}
        <Link to="/events">
          <Button>Get Started</Button>
        </Link>
      </PageWrapper>
    </main>
  );
}