import React from 'react';
import { useHistory } from 'react-router-dom';
import './RandomSpace.css';
import data from '../../sfpopos-data.json';
import './RandomSpace.css';


function RandomSpace() {
    const history = useHistory()
  return (
    <div className="RandomSpace">
        <button onClick={(e) => {
            const id = Math.floor(Math.random() * data.length)
            history.push(`/details/${id}`)
        }}>Show me a random space</button>
        </div>
  )
}

export default RandomSpace