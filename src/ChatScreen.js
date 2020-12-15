import React, {useState} from 'react'
import './ChatScreen.css'
import Avatar from '@material-ui/core/Avatar'

function ChatScreen() {
    const [input, setInput] = useState()
    const [messages, setMessages] = useState([
        {
            name: 'Sarah',
            image: 'https://i.pinimg.com/originals/f0/a6/4e/f0a64e32194d341befecc80458707565.jpg',
            message: 'Hey, waassupp??🤪'
        },
        {
            name: 'Sarah',
            image: 'https://i.pinimg.com/originals/f0/a6/4e/f0a64e32194d341befecc80458707565.jpg',
            message: 'What r u doooin?'
        },
        {
            message: 'Just chilln.... u?'
        },
    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessages ([...messages, {message:input}]);
        setInput("");
    }


    return (
        <div class="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH SARAH ON 12/12/20</p>
            {messages.map(message => 
            message.name ? (
                <div className="chatScreen__message">
                    <Avatar className='chat__image' 
                    alt={message.name}
                    src={message.image}  />
                    <p className="chatScreen__text">{message.message}</p>
                </div> 
            ) : (
                <div className="chatScreen__message">
                    <p className="chatScreen__textUser">{message.message}</p>
                </div>
            )
            
            )}
            
            
                <form className="chatScreen__input" >
                    <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className="chatScreen__inputField" 
                    placeholder="Type a message..."
                    type="text" 
                    />
                    <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
                </form>
            

        </div>
    )
}

export default ChatScreen
