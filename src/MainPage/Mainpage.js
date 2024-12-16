import Conversation from "./Conversation/Conversation";
import Schedule from "./Schedule/Schedule";
import "./Mainpage.css"; 

function Mainpage() {
  return (
    <div className="mainpage">
      <header className="mainpage-header">
        <h1>Your Personal Travel Planner</h1>
      </header>
      <div className="mainpage-body">
        <div className="schedule-section">
          <Schedule />
        </div>
        <div className="conversation-section">
          <Conversation />
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
