import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import showService from '../services/showService';

export default function Show() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const getShow = async () => {
    try {
      const response = await showService.getShow(id);
      setLoading(false);
      setShow(response);
      setError(false);
    } catch (error) {
      console.error(error)
      setLoading(false);
    }
  }

  useEffect(() => {
    getShow();
    // eslint-disable-next-line
  }, [id])

  const handleDeleteShow = async (id) => {
    try {
      await showService.deleteShow(id);
    } catch (error) {
      console.error(error)
    } finally {
      navigate('/')
    }
  };
  
  return (
    <div>
      <h2>TV Show details</h2>
      {loading && <p>Loading...</p>}
      {!loading && show &&
        <ul>
          <li><img src={show.image} alt={show.title} /></li>
          <li>{show.title}</li>
          <li>{show.creator}</li>
          <li>{show.launched}</li>
          <li>{show.genre}</li>
          <li>{show.description}</li>
        </ul>
      }
      {error && <p>Something went wrong. Couldn't find your course</p>}
      <div>
        <button><Link to={`/edit/${id}`}>Edit</Link></button>
        <button onClick={()=>handleDeleteShow(`${id}`)}>Delete</button>
      </div>
    </div>
  )
}
