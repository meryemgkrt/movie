import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const ResultCart = ({ movie }) => {
    const { addMovieToWatchlist, removeMovieFromWatchlist } = useContext(GlobalContext)

    const overview = movie.overview
        ? movie.overview.slice(0, 120) + (movie.overview.length > 120 ? '...' : '')
        : 'No overview available.'

    const handleAddToWatchlist = () => {
        addMovieToWatchlist(movie)
    }
    const handleRemoveFromWatchlist = () => {
        removeMovieFromWatchlist(movie.id)
    }

    return (
        <div style={{ display: 'flex', overflow: 'hidden', borderRadius: 18, border: '1px solid #e5e7eb', background: '#1d1d1e', marginBottom: 10, transition: 'transform 0.2s, border-color 0.2s' }}
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
                    <h3 style={{ fontSize: 14, fontWeight: 600, color: '#fff', margin: 0, lineHeight: 1.3, flex: 1, minWidth: 0 }}>
                        {movie.title}
                    </h3>
                    <span style={{ flexShrink: 0, background: '#374151', borderRadius: 999, padding: '2px 8px', fontSize: 11, color: '#9ca3af' }}>
                        {movie.release_date?.slice(0, 4) ?? '—'}
                    </span>
                    {movie.vote_average > 0 && (
                        <span style={{ flexShrink: 0, background: '#422006', borderRadius: 999, padding: '2px 8px', fontSize: 11, color: '#fbbf24', fontWeight: 500 }}>
                            ★ {movie.vote_average.toFixed(1)}
                        </span>
                    )}
                </div>

                <p style={{ fontSize: 12, color: '#9ca3af', lineHeight: 1.7, margin: '8px 0 0', flex: 1 }}>
                    {overview}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 14 }}>
                    <button onClick={handleAddToWatchlist} style={{ flex: 1, height: 34, background: '#111827', color: '#fff', border: 'none', borderRadius: 10, cursor: 'pointer', fontSize: 12, fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        Add to Favorites
                    </button>
                    <button onClick={handleRemoveFromWatchlist} style={{ flex: 1, height: 34, background: '#111827', color: '#fff', border: 'none', borderRadius: 10, cursor: 'pointer', fontSize: 12, fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        Remove from Favorites
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ResultCart