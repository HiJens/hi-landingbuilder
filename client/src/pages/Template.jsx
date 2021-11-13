import React, { useEffect, useState } from 'react';

import {
    BaseLayout
} from '../layouts';

import { 
    TML
} from '../components';

export default function Template() {
    const [ firm, setFirm ] = useState('tomorrowland');
    const [ slug, setSlug ] = useState('incubator');

    useEffect(() => {
        const path = document.location.pathname.split('/');

        setFirm(path[1] ?? '');
        setSlug(path[2] ?? '');
    }, []);

    const nav = [
        {
            route: "#context",
            title: "Context",
        },
        {
            route: "#pijlers",
            title: "De pijlers",
        },
        {
            route: "#success",
            title: "Define success",
        },
        {
            route: "#cijfers",
            title: "De cijfers",
        },
        {
            route: "#partner",
            title: "Partner value",
        },
        {
            route: "#tijdlijn",
            title: "De tijdlijn",
        },
    ];

    return (
        <BaseLayout
            theme={firm}
            logo={<TML />}
            nav={nav}
        >
        
        </BaseLayout>
    )
};