import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

const WatchList = () => {
  const { watchlist, removeMovieFromWatchlist, addMovieToWatched } = useContext(GlobalContext)

  const handleRemove = (movie) => {
    addMovieToWatched(movie)
    removeMovieFromWatchlist(movie.id)
  }

  return (
    <div style={{ padding: 16 }}>
      {watchlist.length === 0 && (
        <p style={{ color: '#9ca3af', textAlign: 'center', marginTop: 40 }}>Liste boş</p>
      )}
      {watchlist.map((movie) => (
        <div key={movie.id}
          style={{ display: 'flex', overflow: 'hidden', borderRadius: 18, border: '1px solid #2d2d2d', background: '#1d1d1e', marginBottom: 10, transition: 'transform 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <div style={{ position: 'relative', width: 100, flexShrink: 0 }}>
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            )}
            {movie.vote_average > 0 && (
              <span style={{ position: 'absolute', top: 8, left: 8, background: 'rgba(0,0,0,0.6)', color: '#FBBF24', fontSize: 11, fontWeight: 600, padding: '2px 7px', borderRadius: 999, display: 'flex', alignItems: 'center', gap: 3 }}>
                ★ {movie.vote_average.toFixed(1)}
              </span>
            )}
          </div>

          <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', padding: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: '#fff', margin: 0, flex: 1, minWidth: 0 }}>
                {movie.title}
              </h3>
              <span style={{ flexShrink: 0, background: '#374151', borderRadius: 999, padding: '2px 8px', fontSize: 11, color: '#9ca3af' }}>
                {movie.release_date?.slice(0, 4) ?? '—'}
              </span>
            </div>

            <p style={{ fontSize: 12, color: '#9ca3af', lineHeight: 1.7, margin: '8px 0 0', flex: 1 }}>
              {movie.overview ? movie.overview.slice(0, 120) + '...' : 'No overview available.'}
            </p>

            <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
              <button
                onClick={() => handleRemove(movie)}
                onMouseEnter={e => { e.currentTarget.style.background = '#ef4444'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#ef4444' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#111827'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#111827' }}
                style={{ flex: 1, height: 34, background: '#111827', color: '#fff', border: '1px solid #111827', borderRadius: 10, cursor: 'pointer', fontSize: 12, fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, transition: 'all 0.2s' }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14H6L5 6" /><path d="M10 11v6M14 11v6" />
                </svg>
                İzlendi olarak işaretle
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default WatchList