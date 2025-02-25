import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card => (
        <Card card={card} key={card.headline} />
        ))}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  card: PropTypes.arrayOf(
    PropTypes.shape({
      headline: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    })
  )
};

export default Cards;