import React from 'react'
import {
    Link
} from 'react-router-dom'


const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={"/login"} >
                        Login
                    </Link>
                </li>
                <li>
                    <Link to={"/home"} >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={"/counter"} >
                        Counter
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header