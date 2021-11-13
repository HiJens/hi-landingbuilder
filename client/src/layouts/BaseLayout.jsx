import React from 'react';

import {
    Header
} from '../partials';

export default function BaseLayout({ theme, logo, nav }) {
    return (
        <div className={`theme theme--${theme ?? 'default'}`}>
            <Header 
                logo={logo}
                nav={nav}
            />

            <main className="main">

            </main>
        </div>
    )
};