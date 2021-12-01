import React from 'react';

export default function Header({ nav, logo }) {
    const goTo = (route, head) => {
        if (head) {
            window.scrollTo({top: 0});
            return;
        };

        const el = document.querySelector(route);
        const top = el.offsetTop - 100;
        window.scrollTo({top: top});
    };

    return (
        <header className="header add-light-shadow" data-aos="fade-down">
            <span onClick={() => goTo("", true)} className="header-logo">
                {logo}
            </span>

            <ul className="header-nav">
                {
                    nav && nav.map((item, index) => {
                        return (
                            <li className="header-nav-item" key={index}>
                                <span onClick={() => goTo(item.route, false)}>
                                    {item.title}
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
        </header>
    )
};