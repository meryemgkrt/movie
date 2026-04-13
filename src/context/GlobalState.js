import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

export const GlobalContext = createContext()

const initialState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : []
}

export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
    }, [state.watchlist])
    useEffect(() => {
        localStorage.setItem('watched', JSON.stringify(state.watched))
    }, [state.watched])
    const addMovieToWatchlist = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie })
    }

    const removeMovieFromWatchlist = (id) => {
        dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id })
    }
    const removeMovieFromWatched = (id) => {
        dispatch({ type: "REMOVE_MOVIE_FROM_WATCHED", payload: id })
    }

    const addMovieToWatched = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie })
    }

    return (
        <GlobalContext.Provider value={{
            watchlist: state.watchlist,
            addMovieToWatchlist,
            removeMovieFromWatchlist,
            watched: state.watched,
            addMovieToWatched,
            removeMovieFromWatched

        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}