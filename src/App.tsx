import "./App.css";
import "react-calendar/dist/Calendar.css";
import "./CustomCalendarStyling.css";
import Header from "./components/Header";
import FleetCards from "./components/FleetCards";

function App() {
  return (
    <>
      <Header />
      <FleetCards />
    </>
  );
}

export default App;
