import React from 'react'
import Card from './Card'


function Block(props) {
  return (
    <div className='block-wrapper'>
      <Card />

      <div className='block-text'>
        <div className='block-text--top'>
          <h3 className='card-location'>{props.location}</h3> <a href={props.googleMapsUrl} className='card-link'>View on Google Maps</a>
        </div>
        <h2 className='card-title'>{props.title}</h2>
        <h3 className='card-period'>`{props.startDate} , {props.endDate}`</h3>
        <p className='card-paragraph'>{props.description}</p>
      </div>
    </div>
  );
}

export default Block;
