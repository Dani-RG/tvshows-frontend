import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ show }) {
  const { image, title, _id } = show;

  return (
    <div>
      <Link to={`/shows/${_id}`}>{title}</Link>
      <img src={image} height='300px' alt={title} />
    </div>
  )
}
