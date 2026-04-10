import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({}) => {

    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/">İzlenecekler</Link>
                    </div>
                    <ul className="nav-links">
                        <li className="nav-item">
                            <Link to="/watched" className="flex items-center gap-2">
                                İzlenenler
                                
                            </Link>

                        </li>
                       <li>
                            <Link to="/add" className="btn flex items-center gap-2">
                            <i className="fas fa-plus text-white"></i>
                            </Link>
                       </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
