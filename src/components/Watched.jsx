import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Watched = () => {
  const { watched } = useContext(GlobalContext)
  return (
    <div>
      {watched.length === 0 && <p>Liste boş</p>}
      {watched.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
        </div>
      ))}

    </div>
  )
}

export default Watched