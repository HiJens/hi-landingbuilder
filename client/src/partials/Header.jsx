import React from 'react';

import { 
    Link 
} from 'react-router-dom';

export default function Header({ nav, logo }) {
    return (
        <header className="header add-light-shadow" data-aos="fade-down">
            <Link to="/" className="header-logo">
                {logo}
            </Link>

            <ul className="header-nav">
                {
                    nav && nav.map((item, index) => {
                        return (
                            <li className="header-nav-item" key={index}>
                                <Link to={item.route}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </header>
    )
};