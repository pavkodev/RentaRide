import "./App.css";
import "react-calendar/dist/Calendar.css";
import "./CustomCalendarStyling.css";
import Header from "./components/Header";
import FleetCards from "./components/FleetCards";
import { CalendarContext } from "./contexts/CalendarContext";
import { useState } from "react";

function App() {
  const [days, setDays] = useState<number | undefined>(undefined);
  return (
    <CalendarContext.Provider value={{ days, setDays }}>
      <Header />
      <FleetCards />
    </CalendarContext.Provider>
  );
}

export default App;
