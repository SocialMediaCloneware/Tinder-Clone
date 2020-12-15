import React, {useState} from 'react'
import Avatar from '@material-ui/core/Avatar'

function ChatScreen() {
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


    return (
        <div class="chatScreen">
            <p>YOU MATCHES WITH SARAH ON 12/12/20</p>
            {messages.map(message => (
                <div className="chatScreen__message">
                    <Avatar className='chat__image' 
                    alt={message.name}
                    src={message.image}  />
                    <p className="chatScreen__text">{message.message}</p>
                </div>
            ))}

        </div>
    )
}

export default ChatScreen
