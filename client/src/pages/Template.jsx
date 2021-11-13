import React, { useEffect, useState } from 'react';

import {
    BaseLayout
} from '../layouts';

import { 
    TML
} from '../components';

import { 
    Hero, 
    Text 
} from '../partials';

import HeroImg from '../assets/images/hero.jpg';

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

    const ContextTitle = () => {
        return (
            <h3>De <span>context</span></h3>
        )
    };

    const ContextText = () => {
        return (
            <p></p>
        )
    };

    return (
        <BaseLayout
            theme={firm}
            logo={<TML />}
            nav={nav}
        >
            <Hero 
                img={HeroImg}
                title="Lab of Tomorrow"
                subtitle="From idea to business model"
            />

            <Text 
                title={ContextTitle}
                text={ContextText}
            />
        </BaseLayout>
    )
};