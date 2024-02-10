import "./App.css";
import ClockHeading from "./componenets/ClockHeading";
import ClockMoto from "./componenets/ClockMoto";
import CurrentTime from "./componenets/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <center>
      <div>
        <ClockHeading></ClockHeading>
        <ClockMoto></ClockMoto>
        <CurrentTime></CurrentTime>
      </div>
    </center>
  );
}
export default App;
