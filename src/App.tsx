import "./App.css";
import "react-calendar/dist/Calendar.css";
import "./CustomCalendarStyling.css";
import Header from "./components/Header";
import RentalCard from "./components/RentalCard";

function App() {
  return (
    <>
      <Header />
      <RentalCard />
    </>
  );
}

export default App;
