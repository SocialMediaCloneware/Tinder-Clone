import { ChatOutlined } from '@material-ui/icons';
import React from 'react';

function Chat ({ name, message, profilePic, timestamp}) {
    return (
    <div className="chat">
        <Avatar className='chat__image' alt={name} src={profilePic}  />
    </div>
    )
}

export default Chat;