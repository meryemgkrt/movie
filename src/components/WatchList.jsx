import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

const WatchList = () => {
  const { watchlist } = useContext(GlobalContext)
  console.log('watchlist:', watchlist)  // ← ekle

  return (
    <div>
      {watchlist.length === 0 && <p>Liste boş</p>}
      {watchlist.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default WatchList