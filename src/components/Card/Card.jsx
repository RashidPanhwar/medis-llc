import React from 'react'
import './Card.css';
import { Link } from 'react-router-dom';

const Card = () => {
    const cardData = [
        {name: 'Clinical Development'},
        {name: 'Medical Affairs'},
        {name: 'PV / Drug Safety'},
        {name: 'Data Managment'},
        {name: 'Medical Writing'},
        {name: 'EDC System'},
        {name: 'Information Technology'},
    ]
  return (
    <div className='card-main-div'>
        {cardData.map((items, index) => {
          return <Link to={`/${items.name}`}> <div className='card-div'>
            <h3>{items.name}</h3>
          </div>
          </Link>
        })}
    </div>
  )
}

export default Card
