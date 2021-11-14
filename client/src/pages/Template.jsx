import React, { useEffect, useState } from 'react';

import {
    BaseLayout
} from '../layouts';

import { 
    TML
} from '../components';

import { 
    Cards,
    Hero, 
    Partners, 
    Text 
} from '../partials';

import HeroImg from '../assets/images/hero.jpg';
import CardImg from '../assets/images/card.png';
import StartItXImg from '../assets/images/startitx.jpeg';
import Hoek76Img from '../assets/images/hoek76.jpeg';
import StartItXLogo from '../assets/logos/startitx.png';
import Hoek76Logo from '../assets/logos/hoek76.png';

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
            <h3 className="block-title text-center" data-aos="fade-up">De <span>context</span></h3>
        )
    };

    const ContextText = () => {
        return (
            <p className="text-center add-font-medium-shadow" data-aos="fade-up">
                Sinds 2005 is Tomorrowland intrinsiek een synoniem voor innovatie in de live entertainment sector. Door ieder jaar uit te pakken met een vernieuwde totaalbeleving is het festival ruim 7 maanden op voorhand steeds volledig uitverkocht.
                <br /><br />
                De missie van Tomorrowland draait enkel om mensen te verenigen en te verbinden in een unieke ervaring en beleving, het maximaal meenemen van de bezoeker in een verhaal, in beleving en emotie, en dit met respect voor elkaar en de planeet. Dit doen zij met groot succes; de vraag naar tickets overschrijdt al jaren het aanbod. Voor het zomerfestival van 2019, waren alle tickets uitverkocht binnen een tijdspanne van gemiddeld 45 minuten op ieder verkoopmoment.
                <br /><br />
                De Tomorrowland editie van 2019 werd bijgewoond door meer dan 400.000 bezoekers van over heel de wereld. Vandaag telt het bedrijf 120 personen. In 2018 werd beroep gedaan op 8.500 externe medewerkers, in hoofdzaak vanuit de lokale omgeving.  Het festival wordt georganiseerd op het provinciaal domein De Schorre in Boom en draagt bij tot regionale ontwikkeling van de streek. De organisatie heeft belangrijke multipliereffecten op het lokale economische weefsel. In 2012 werd het festival bekroond met de award voor het beste dancefestival ter wereldwijd door de International Dance Music Awards. Het festival is de globale referentie binnen de sector van de muziekfestivals.
                <br /><br />
                Achter de de schermen wordt volop ingezet op enerzijds optimale processen zoals de <strong>Speed Of Service</strong>, het eigen <strong>Productie Atelier</strong>, enzovoort. Anderzijds komen constant innovatieve technologieën en start-ups uit het ecosysteem rond Tomorrowland voort. Voorbeelden zijn uiteraard het <strong>Digitaal Festival</strong> maar ook bedrijven als <strong>Prismax</strong>, <strong>Calculus</strong> en <strong>Areal</strong>.
            </p>
        )
    };

    const PartnersUpperlabel = () => {
        return (
            <span className="block-upperlabel text-center" data-aos="fade-up">Live today</span>
        )
    };

    const PartnersLabel = () => {
        return (
            <span className="block-label text-center" data-aos="fade-up">Het plan</span>
        )
    };

    const PartnersTitle = () => {
        return (
            <h3 className="block-title text-center" data-aos="fade-up"><span>Efficiënt</span> en <span>kwaliteit</span></h3>
        )
    };

    const PartnersText = () => {
        return (
            <p className="block-text text-center" data-aos="fade-up">Samen met partners Start-it X en Hoek 76 zal al in het voorjaar van 2022 van start gegaan worden met het Lab of Tomorrow.</p>
        )
    };

    const CardsUpperlabel = () => {
        return (
            <span className="block-upperlabel text-center" data-aos="fade-up">Love tomorrow</span>
        )
    };

    const CardsLabel = () => {
        return (
            <span className="block-label text-center" data-aos="fade-up">The holy grounds</span>
        )
    };

    const CardsTitle = () => {
        return (
            <h3 className="block-title text-center" data-aos="fade-up">Duurzame lokale <span>verankering</span></h3>
        )
    };

    const CardsText = () => {
        return (
            <p className="block-text text-center" data-aos="fade-up">Tomorrowland is Boom, Boom is Tomorrowland. Het Lab of Tomorrow wordt ingeplant op een site die grenst aan De Schorre, de heilige grond van het festival.</p>
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
                id="context"
            />

            <Partners 
                id="pijlers"
                upperlabel={PartnersUpperlabel}
                label={PartnersLabel}
                title={PartnersTitle}
                text={PartnersText}
                partners={[
                    {
                        background: Hoek76Img,
                        logo: Hoek76Logo
                    },
                    {
                        background: StartItXImg,
                        logo: StartItXLogo
                    },
                ]}
            />

            <Cards 
                upperlabel={CardsUpperlabel}
                label={CardsLabel}
                title={CardsTitle}
                text={CardsText}
                cards={[
                    {
                        type: "default",
                        title: () => {return <h4 className="card-title">Wat met <span>de impact?</span></h4>},
                        text: "Het ambitieuze plan om het Silicon Valley van de event-sector in te planten aan de Rupel zal een enorme boost betekenen op het vlak van duurzame werkgelegenheid en perceptie van de regio.",
                        size: "7",
                    },
                    {
                        type: "default",
                        title: () => {return <h4 className="card-title">Wat met <span>de vibe?</span></h4>},
                        text: "Start-ups en vooral de grotere spelers op de site zullen als een magneet werken op andere bedrijven en leveranciers (horeca etc) die deel willen zijn van de nieuwe vibe.",
                        size: "5",
                    },
                    {
                        type: "default",
                        title: () => {return <h4 className="card-title">Wat met <span>de regio?</span></h4>},
                        text: "De lokale verankering en het op sleeptouw nemen van de buurt is essentieel in het opzet van dit plan. WaoW bevestigt op die manier zijn visie en engagement naar Boom, Rumst en Vlaanderen.",
                        size: "5",
                    },
                    {
                        type: "image",
                        img: CardImg,
                        size: "7",
                    },
                ]}
            />
        </BaseLayout>
    )
};