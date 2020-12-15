import React from 'react'
import Chat from './Chat'
import './Chats.css'

function Chats() {
    return (
        <div className='chats'>
            <Chat
             name="Sarah"
             message="Hey, waassupp??🤪"
             profilePic="https://i.pinimg.com/originals/f0/a6/4e/f0a64e32194d341befecc80458707565.jpg"
             timestamp="10 minutes ago"
            />

            <Chat
             name="Jasamine"
             message="What you doing? 👀👀👀 XD"
             profilePic="https://news.berkeley.edu/wp-content/uploads/2020/03/Maryam-Karimi-01-750.jpg"
             timestamp="45 minutes ago"
            />

            <Chat
             name="Suzie"
             message="XO Hello, there....👋👋👋"
             profilePic="https://i2.wp.com/ideasfornames.com/wp-content/uploads/2019/10/ionut-comanici-RDcEWH5hSDE-unsplash.jpg?ssl=1"
             timestamp="45 minutes ago"
            />

            <Chat
             name="Abby"
             message="🙅Woooooooooooooooaaaaaaaaaaaahhhhhhh!!!!!!!!!!!! ! "
             profilePic="https://ichef.bbci.co.uk/news/1024/cpsprodpb/184A0/production/_109788499_megan.jpg"
             timestamp="45 minutes ago"
            />

            <Chat
             name="Mary"
             message="Where are you from??? I'm from France!! 😍😍"
             profilePic="https://nation.com.pk/print_images/large/2019-07-31/hasan-ali-to-marry-an-indian-girl-on-august-20-1564515248-1616.jpg"
             timestamp="3 days ago"
            />


        </div>
    )
}

export default Chats
