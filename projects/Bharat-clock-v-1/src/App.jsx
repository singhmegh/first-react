
import ClockHeading from "./component/ClockHeading";
import ClockLogo from "./component/ClockLogo";
import CurrentTime from "./component/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App(){
  return ( <center> 
    <ClockHeading></ClockHeading>
    <ClockLogo></ClockLogo>
    <CurrentTime></CurrentTime>
  </center>
  );
}


export default App;
