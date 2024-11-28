import MessageInput from "./MessageInput/MessageInput";
import './Conversation.css';

function Conversation() {
    return (
        <div className="conversation-container">
            <h2>Conversation</h2>
            <MessageInput />
        </div>
    );
}

export default Conversation;