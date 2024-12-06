import MessageInput from "./MessageInput/MessageInput";
import './Conversation.css';

function Conversation() {
    return (
        <div className="conversation-container">
            <h2 className="conversation-title">Conversation</h2>
            <div className="conversation-content">
                {/* Messages will be rendered here in the future */}
                <p className="conversation-placeholder">Your messages will appear here...</p>
            </div>
            <MessageInput />
        </div>
    );
}

export default Conversation;
