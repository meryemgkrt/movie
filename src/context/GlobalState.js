import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

export const GlobalContext = createContext()

const initialState = {
    watchlist: [],
    watched: []
}

export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const addMovieToWatchlist = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie })
    }

    const removeMovieFromWatchlist = (id) => {
        dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id })
    }

    return (
        <GlobalContext.Provider value={{
            watchlist: state.watchlist,
            addMovieToWatchlist,
            watched: state.watched,
            removeMovieFromWatchlist
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}