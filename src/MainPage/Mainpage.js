import Conversation from "./Conversation/Conversation";
import Schedule from "./Schedule/Schedule";
import "./Mainpage.css"; 

function Mainpage() {
  return (
    <div>
      <h1>Mainpage</h1>
      <div className="mainpage-container">
        <Conversation />
        <Schedule />
      </div>
        
    </div>
  );
}

export default Mainpage;