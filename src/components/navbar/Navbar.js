import React from 'react'
import PropTypes from 'prop-types'

import './Navbar.css'

const  Navbar =(props) => {
    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-success">
            <a className="navbar-brand" href="#">{ props.title }</a>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="#"> Home <span className="sr-only">(current)</span></a>
                    </li>
                </ul>
        </nav>

        // <div>
        //   <h1> { props.title }</h1>   
        // </div>
    )
}

Navbar.defaultProps = {
    title: "My title"
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

export default Navbar
