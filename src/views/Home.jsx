import React, { useState, useEffect } from 'react';
import showService from '../services/showService';
import Card from '../components/Card';

export default function Home() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  const getShows = async () => {
    try {
      const response = await showService.getShows();
      setShows(response)
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getShows()
  }, [])

  return (
    <div>
      <h2>Home</h2>
      {loading && <p>Loading...</p>}
      {!loading && (
        <div> 
          {shows.map(elem => {
            return <Card key={elem._id} show={elem} />
          })}
        </div>
      )}
    </div>
  )
}
