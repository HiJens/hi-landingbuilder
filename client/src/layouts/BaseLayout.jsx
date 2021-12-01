import React from 'react';

import {
    Footer,
    Header
} from '../partials';

export default function BaseLayout({ children, theme, logo, nav }) {
    return (
        <div className={`theme theme--${theme ?? 'default'}`}>
            <Header 
                logo={logo}
                nav={nav}
            />

            <main className="main">
                {children}
            </main>

            <Footer />
        </div>
    )
};