import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import '../stylesheets/TinderCards.css';
const TinderCards = () => {
	const [people, setPeople] = useState([
		{
			name: 'Elon Musk',
			url:
				'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
		},
		{
			name: 'Jeff Bezos',
			url:
				'https://specials-images.forbesimg.com/imageserve/5f469ea85cc82fc8d6083f05/960x0.jpg?fit=scale',
		},
	]);
	const swiped = (direction, nameToDelete) => {
		console.log('removing' + nameToDelete);
		// setLastDirection(direction);
	};

	const outOfFrame = (name) => {
		console.log(name + 'left the screen');
	};

	return (
		<div className='tinderCards'>
			<div className='tinderCards__cardContainer'>
				{people.map((person) => (
					<TinderCard
						className='swipe'
						key={person.name}
						preventSwipe={['up', 'down']}
						onSwipe={(dir) => swiped(dir, person.name)}
						onCardLeftScreen={() => outOfFrame(person.name)}
					>
						<div className='card' style={{ backgroundImage: `url(${person.url})` }}>
							<h3>{person.name}</h3>
						</div>
					</TinderCard>
				))}
			</div>
		</div>
	);
};

export default TinderCards;
