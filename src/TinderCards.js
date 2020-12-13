import { SwipeableDrawer } from '@material-ui/core';
import React, {useState} from 'react'
import "./TinderCards.css"

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: "https://m.media=amazon.com/images/M/MV5BMTI5NDY5NjU3NF5BMl5BanBnXkFtZTcwMzQ0MTMyMw@@._V1_UY1200_CR94,0,630,1200_AL_.jpg",
        }
    ]);
    
    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);

    };

    const outOfFrame = (name) => {
        console.log(name + "left the screen");
    };



    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            {people.map(person =>(
            <TinderCards
                className="swipe"
                key={Character.name}
                preventSwipe={["up","down"]}
                onSwipe={(dir)=> swiped(dir, character.name)}
                onCardLeftScreen={()=> outOfFrame(character.name)}
            ></TinderCards>
            ))}

            </div>
        </div>
    )
}

export default TinderCards
