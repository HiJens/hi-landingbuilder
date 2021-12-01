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
    Text,
    CardsImages,
    Factors,
    Digits,
    Profiles,
    Values,
    Scenarios,
    Chart
} from '../partials';

import HeroImg from '../assets/images/hero.jpg';
import CardImg from '../assets/images/card.png';
import StartItXImg from '../assets/images/startitx.jpeg';
import Hoek76Img from '../assets/images/hoek76.jpeg';
import ProgramManagerImg from '../assets/images/programmanager.png';
import OfficeManagerImg from '../assets/images/officemanager.png';
import ProjectManagerImg from '../assets/images/projectmanager.png';
import StartupsImg from '../assets/images/startups.png';
import CorporateImg from '../assets/images/corporate.png';
import ValuedImg from '../assets/images/valued.jpeg';
import StartItXLogo from '../assets/logos/startitx.png';
import Hoek76Logo from '../assets/logos/hoek76.png';

export default function Template() {
    const [ firm, setFirm ] = useState('tomorrowland');
    const [ slug, setSlug ] = useState('incubator');
    const [ access, setAccess ] = useState(false);
    const [ password, setPassword ] = useState(false);

    const pass = "TMLxHinnovation987676!";

    useEffect(() => {
        const path = document.location.pathname.split('/');

        setFirm(path[1] ?? '');
        setSlug(path[2] ?? '');
    }, []);

    const submitPass = (e) => {
        e.preventDefault();

        if (pass === password) {
            setAccess(true);
        };
    };

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
                De missie van Tomorrowland draait om mensen te verenigen en te verbinden in een unieke ervaring en beleving, het maximaal meenemen van de bezoeker in een verhaal, in beleving en emotie, en dit met respect voor elkaar en de planeet. Dit doen zij met groot succes; de vraag naar tickets overschrijdt al jaren het aanbod. Voor het zomerfestival van 2019, waren alle tickets uitverkocht binnen een tijdspanne van gemiddeld 45 minuten op ieder verkoopmoment.
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

    const CardsImagesUpperlabel = () => {
        return (
            <span className="block-label text-center" data-aos="fade-up">Unite forever</span>
        )
    };

    const CardsImagesTitle = () => {
        return (
            <h3 className="block-title text-center" data-aos="fade-up">Focus op <span>innovatie</span></h3>
        )
    };

    const FactorsTitle = () => {
        return (
            <h3 className="block-title text-center" data-aos="fade-up">Hoe meten we <span>succes?</span></h3>
        )
    };

    const DigitsTitle = () => {
        return (
            <h3 className="block-title text-center" data-aos="fade-up">De <span>kosten</span> van het <span>gebouw</span></h3>
        )
    };

    const ProfilesTitle = () => {
        return (
            <h3 className="block-title text-center" data-aos="fade-up">De <span>3 profielen</span></h3>
        )
    };

    const IncomeTitle = () => {
        return (
            <h3 className="block-title text-center" data-aos="fade-up">De <span>inkomsten</span></h3>
        )
    };

    const ValuesTitle = () => {
        return (
            <h3 className="block-title text-center" data-aos="fade-up">Toegevoegde waarde als <span>partner</span></h3>
        )
    };

    const ScenariosUpperlabel = () => {
        return (
            <span className="block-label text-center" data-aos="fade-up">Start-it @ Lab of Tomorrow</span>
        )
    };

    const ScenariosTitle = () => {
        return (
            <h3 className="block-title text-center" data-aos="fade-up">De <span>3 scenario's</span></h3>
        )
    };

    const ChartTitle = () => {
        return (
            <h3 className="block-title text-center" data-aos="fade-up">De <span>tijdlijn</span></h3>
        )
    };

    return access ? (
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

            <CardsImages 
                upperlabel={CardsImagesUpperlabel}
                title={CardsImagesTitle}
                cards={[
                    {
                        type: "default",
                        title: () => {return <h4 className="card-title">Start-ups</h4>},
                        text: "Samen met Start-it X wordt een formule, die zijn waarde bewezen heeft bij Start-it @ KBC, op maat uitgewerkt voor de internationale Start ups die zich inschrijven voor het Lab of Tomorrow. In de eerste fase mikken we op een 15 tal start-ups. De bedoeling is om op termijn 30% van de site te vullen met start-ups. Zij krijgen een professionele omkadering, netwerk en de mogelijkheid om hun ideeën te testen in het TML ecosysteem.",
                        size: "6",
                    },
                    {
                        type: "image",
                        img: StartupsImg,
                        size: "6",
                    },
                    {
                        type: "image",
                        img: CorporateImg,
                        size: "6",
                    },
                    {
                        type: "default",
                        title: () => {return <h4 className="card-title">Corporate ventures</h4>},
                        text: "Nieuwe innovatieve ideeën, die ontstaan bij teams in grote bedrijven, belanden door tijdgebrek meestal in de koelkast. Lab of Tomorrow is de plek waar deze ideeën uitgewerkt worden tot concepten. Waar hun marktwaarde gemeten wordt en waar ze, als een volwaardige start-up met een onderbouwde business case, een nieuwe revenue stream voor het moederbedrijf gaan vormen.",
                        size: "6",
                    },
                    {
                        type: "default",
                        title: () => {return <h4 className="card-title">Gevestigde waarden</h4>},
                        text: "Ook bestaande firma’s die bezig zijn met innovatie vinden hun plaats op de site. Zij kunnen mee intekenen op delen van het accelerator aanbod en meesurfen op de creatieve ondernemers dynamiek binnen de site. De kruisbestuiving tussen de start-ups en deze grotere bedrijven wordt gefaciliteerd en zorgt voor een win-win situatie waarbij de Gevestigde Waarde aangemoedigd wordt om out of the box te denken.",
                        size: "6",
                    },
                    {
                        type: "image",
                        img: ValuedImg,
                        size: "6",
                    },
                ]}
            />

            <Factors
                id="success"
                title={FactorsTitle}
                factors={[
                    {
                        icon: "📈",
                        title: "break-even",
                        label: "in 3 jaar"
                    },
                    {
                        icon: "🌎",
                        title: "30% bezetting",
                        label: "start-ups zorgen voor"
                    },
                    {
                        icon: "👨‍💻",
                        title: "werkgelegenheid",
                        label: "op en rond de site"
                    },
                    {
                        icon: "⭐",
                        title: "start-ups",
                        label: "succesratio"
                    },
                ]}
            />

            <Digits
                id="cijfers"
                title={DigitsTitle}
                label="Jaarlijkse kost voor komende jaren"
                years={[
                    {
                        year: "2022",
                        current: true
                    },
                    {
                        year: "2023",
                        current: false
                    },
                    {
                        year: "2024",
                        current: false
                    },
                    {
                        year: "2025",
                        current: false
                    },
                    {
                        year: "2026",
                        current: false
                    },
                ]}
                digits={{
                    rows: [
                        {
                            total: false,
                            digits: [
                                {
                                    digit: "400.000",
                                    title: "Gebouw",
                                    label: ""
                                },
                                {
                                    digit: "140.000",
                                    title: "Aankleding",
                                    label: "1,4m over 10 jaar"
                                },
                                {
                                    digit: "10.000",
                                    title: "Buiten inrichting",
                                    label: "100k over 10 jaar"
                                },
                                {
                                    digit: "14.000",
                                    title: "Herstelling",
                                    label: "140k over 10 jaar"
                                },
                                {
                                    digit: "66.000",
                                    title: "Onderhoud & facility",
                                    label: ""
                                },
                                {
                                    digit: "38.000",
                                    title: "Communicatie & internet",
                                    label: ""
                                },
                                {
                                    digit: "30.000",
                                    title: "Overige bureaukosten",
                                    label: ""
                                },
                            ],
                        },
                        {
                            total: false,
                            digits: [
                                {
                                    digit: "50.000",
                                    title: "Receptie",
                                    label: ""
                                }
                            ]
                        },
                        {
                            total: true,
                            title: "Totaal",
                            digit: "748.000",
                        }
                    ]
                }}
            />

            <Scenarios
                upperlabel={ScenariosUpperlabel}
                title={ScenariosTitle}
                scenarios={
                    [
                        {
                            title: "Start It model",
                            icon: "🥉",
                            pricing: [
                                {
                                    title: "", 
                                    label: "",
                                    staff: false,
                                    values: [
                                        {
                                            title: "Project cost to set-up the program",
                                            price: "€ 16.538",
                                            hours: "24H",
                                            light: false
                                        },
                                        {
                                            title: "Tools config & set-up",
                                            price: "€ 5.120",
                                            hours: "",
                                            light: false
                                        },
                                        {
                                            title: "Fee/cohort",
                                            price: "€ 64.338",
                                            hours: "220H",
                                            light: false
                                        },
                                    ]
                                },
                                {
                                    title: "Breakdown",
                                    label: "Set-up inc projectmanagement",
                                    staff: false,
                                    values: [
                                        {
                                            title: "Project set-up",
                                            price: "€ 16.538",
                                            hours: "24H",
                                            light: false
                                        },
                                        {
                                            title: "Program definition & milestones",
                                            price: "€ 5.700",
                                            hours: "36H",
                                            light: true
                                        },
                                        {
                                            title: "Selection process set-up",
                                            price: "€ 7.650",
                                            hours: "24H",
                                            light: true
                                        },
                                        {
                                            title: "Tools config & set-up",
                                            price: "€ 5.120",
                                            hours: "",
                                            light: true
                                        },
                                        {
                                            title: "",
                                            price: "€ 21.658",
                                            hours: "",
                                            light: false,
                                            total: true
                                        },
                                    ]
                                },
                                {
                                    title: "",
                                    label: "accelerator as a service (/cohort)",
                                    staff: false,
                                    values: [
                                        {
                                            title: "1 cohort inc.",
                                            price: "",
                                            hours: "",
                                            light: false
                                        },
                                        {
                                            title: "Apply Now! campaign",
                                            price: "€ 7.550",
                                            hours: "16H",
                                            light: true
                                        },
                                        {
                                            title: "Selection Process & Pitch Day",
                                            price: "€ 18.038",
                                            hours: "128H",
                                            light: true
                                        },
                                        {
                                            title: "Bootcamp",
                                            price: "€ 14.300",
                                            hours: "24H",
                                            light: true
                                        },
                                        {
                                            title: "Coaching, Academy & Community",
                                            price: "€ 20.250",
                                            hours: "24H",
                                            light: true
                                        },
                                        {
                                            title: "Boardroom",
                                            price: "€ 3.400",
                                            hours: "16H",
                                            light: true
                                        },
                                        {
                                            title: "Graduation",
                                            price: "€ 850",
                                            hours: "12H",
                                            light: true
                                        },
                                        {
                                            title: "",
                                            price: "€ 64.388",
                                            hours: "",
                                            light: false,
                                            total: true
                                        },
                                    ]
                                },
                                {
                                    title: "",
                                    label: "Additional resources to staff the prg team",
                                    staff: true,
                                    values: [
                                        {
                                            title: "Program Manager",
                                            min: "€ 160.000",
                                            max: "€ 190.000",
                                            days: "200 md/y",
                                        },
                                        {
                                            title: "Office Manager",
                                            min: "€ 45.000",
                                            max: "€ 60.000",
                                            days: "100 md/y",
                                        },
                                        {
                                            title: "",
                                            price: "€ 49.400",
                                            hours: "",
                                            light: false,
                                            total: true
                                        },
                                    ]
                                }
                            ]
                        },
                        {
                            title: "Start It x TML model",
                            icon: "🥈", 
                            pricing: [
                                {
                                    title: "", 
                                    label: "",
                                    staff: false,
                                    values: [
                                        {
                                            title: "Project cost to set-up the program",
                                            price: "€ 21.400",
                                            hours: "24H",
                                            light: false
                                        },
                                        {
                                            title: "Tools config & set-up",
                                            price: "€ 5.120",
                                            hours: "",
                                            light: false
                                        },
                                        {
                                            title: "Fee/cohort",
                                            price: "€ 93.038",
                                            hours: "220H",
                                            light: false
                                        },
                                    ]
                                },
                                {
                                    title: "Breakdown",
                                    label: "Set-up inc projectmanagement",
                                    staff: false,
                                    values: [
                                        {
                                            title: "Project set-up",
                                            price: "€ 21.400",
                                            hours: "24H",
                                            light: false
                                        },
                                        {
                                            title: "Program definition & milestones",
                                            price: "€ 9.500",
                                            hours: "36H",
                                            light: true
                                        },
                                        {
                                            title: "Selection process set-up",
                                            price: "€ 8.500",
                                            hours: "24H",
                                            light: true
                                        },
                                        {
                                            title: "Tools config & set-up",
                                            price: "€ 5.120",
                                            hours: "",
                                            light: true
                                        },
                                        {
                                            title: "",
                                            price: "€ 26.520",
                                            hours: "",
                                            light: false,
                                            total: true
                                        },
                                    ]
                                },
                                {
                                    title: "",
                                    label: "accelerator as a service (/cohort)",
                                    staff: false,
                                    values: [
                                        {
                                            title: "1 cohort inc.",
                                            price: "",
                                            hours: "",
                                            light: false
                                        },
                                        {
                                            title: "Apply Now! campaign",
                                            price: "€ 9.350",
                                            hours: "16H",
                                            light: true
                                        },
                                        {
                                            title: "Selection Process & Pitch Day",
                                            price: "€ 18.038",
                                            hours: "128H",
                                            light: true
                                        },
                                        {
                                            title: "Bootcamp",
                                            price: "€ 23.550",
                                            hours: "24H",
                                            light: true
                                        },
                                        {
                                            title: "Coaching, Academy & Community",
                                            price: "€ 36.250",
                                            hours: "24H",
                                            light: true
                                        },
                                        {
                                            title: "Boardroom",
                                            price: "€ 3.400",
                                            hours: "16H",
                                            light: true
                                        },
                                        {
                                            title: "Graduation",
                                            price: "€ 2.550",
                                            hours: "12H",
                                            light: true
                                        },
                                        {
                                            title: "",
                                            price: "€ 93.038",
                                            hours: "",
                                            light: false,
                                            total: true
                                        },
                                    ]
                                },
                                {
                                    title: "",
                                    label: "Additional resources to staff the prg team",
                                    staff: true,
                                    values: [
                                        {
                                            title: "Program Manager",
                                            min: "€ 160.000",
                                            max: "€ 190.000",
                                            days: "200 md/y",
                                        },
                                        {
                                            title: "Office Manager",
                                            min: "€ 45.000",
                                            max: "€ 60.000",
                                            days: "100 md/y",
                                        },
                                        {
                                            title: "",
                                            price: "€ 49.400",
                                            hours: "",
                                            light: false,
                                            total: true
                                        },
                                    ]
                                }
                            ]
                        },
                        {
                            title: "TML model",
                            icon: "🥇",
                            pricing: [
                                {
                                    title: "", 
                                    label: "",
                                    staff: false,
                                    values: [
                                        {
                                            title: "Project cost to set-up the program",
                                            price: "€ 49.420",
                                            hours: "24H",
                                            light: false
                                        },
                                        {
                                            title: "Tools config & set-up",
                                            price: "€ 5.120",
                                            hours: "",
                                            light: false
                                        },
                                        {
                                            title: "Fee/cohort",
                                            price: "€ 183.038",
                                            hours: "252H",
                                            light: false
                                        },
                                    ]
                                },
                                {
                                    title: "Breakdown",
                                    label: "Set-up inc projectmanagement",
                                    staff: false,
                                    values: [
                                        {
                                            title: "Project set-up",
                                            price: "€ 49.420",
                                            hours: "24H",
                                            light: false
                                        },
                                        {
                                            title: "Program definition & milestones",
                                            price: "€ 23.750",
                                            hours: "40H",
                                            light: true
                                        },
                                        {
                                            title: "Selection process set-up",
                                            price: "€ 17.850",
                                            hours: "24H",
                                            light: true
                                        },
                                        {
                                            title: "Tools config & set-up",
                                            price: "€ 5.120",
                                            hours: "",
                                            light: true
                                        },
                                        {
                                            title: "",
                                            price: "€ 54.540",
                                            hours: "",
                                            light: false,
                                            total: true
                                        },
                                    ]
                                },
                                {
                                    title: "",
                                    label: "accelerator as a service (/cohort)",
                                    staff: false,
                                    values: [
                                        {
                                            title: "1 cohort inc.",
                                            price: "",
                                            hours: "",
                                            light: false
                                        },
                                        {
                                            title: "Apply Now! campaign",
                                            price: "€ 42.000",
                                            hours: "48H",
                                            light: true
                                        },
                                        {
                                            title: "Selection Process & Pitch Day",
                                            price: "€ 22.288",
                                            hours: "128H",
                                            light: true
                                        },
                                        {
                                            title: "Bootcamp",
                                            price: "€ 44.550",
                                            hours: "24H",
                                            light: true
                                        },
                                        {
                                            title: "Coaching, Academy & Community",
                                            price: "€ 64.000",
                                            hours: "24H",
                                            light: true
                                        },
                                        {
                                            title: "Boardroom",
                                            price: "€ 5.100",
                                            hours: "16H",
                                            light: true
                                        },
                                        {
                                            title: "Graduation",
                                            price: "€ 5.100",
                                            hours: "12H",
                                            light: true
                                        },
                                        {
                                            title: "",
                                            price: "€ 183.038",
                                            hours: "",
                                            light: false,
                                            total: true
                                        },
                                    ]
                                },
                                {
                                    title: "",
                                    label: "Additional resources to staff the prg team",
                                    staff: true,
                                    values: [
                                        {
                                            title: "Program Manager",
                                            min: "€ 160.000",
                                            max: "€ 190.000",
                                            days: "200 md/y",
                                        },
                                        {
                                            title: "Office Manager",
                                            min: "€ 45.000",
                                            max: "€ 60.000",
                                            days: "100 md/y",
                                        },
                                        {
                                            title: "",
                                            price: "€ 49.400",
                                            hours: "",
                                            light: false,
                                            total: true
                                        },
                                    ]
                                },
                            ],
                        },
                        {
                            title: "Voorwaarden",
                            icon: "🤔",
                            requirements: true,
                            content: () => {
                                return (
                                    <div className="card-content">
                                        <span className="card-title">
                                            Voorwaarden
                                        </span>
                                        <br />
                                        <ul>
                                            <li>
                                                We use 100 applications as a max. in the three scenarios
                                            </li>
                                            <li>
                                                Average review time during the selection is 0:30/startup file
                                            </li>
                                            <li>
                                                We advice to start with a pre-run to validate a few assumptions and do a full launch spring next year. A pre-run campaign can be organised with founding partners contributing start-ups to the program.
                                            </li>
                                            <li>
                                                Board moments are always composed of a mixed representations of Start It X experts and TML experts
                                            </li>
                                            <li>
                                                International startups are not supported (yet) in their search for living accomodations in BE
                                            </li>
                                            <li>
                                                As the level of customisation increases (sc. 1 to sc. 3) - also the expected commitment of the TML team increases
                                            </li>
                                            <li>
                                                During the setup of specific selection criteria, we share the long list of criteria and finetune together the selection criteria
                                            </li>
                                            <li>
                                                On one pitch day we invite 15 startups max. ; so we advise two pitch days
                                            </li>
                                            <li>
                                                We provide a small thank you gift to our board members of on avg. 50 EUR/person
                                            </li>
                                            <li>
                                                2 cohorts/year; if more wanted only sc.3 and to be discussed
                                            </li>
                                        </ul>
                                    </div>
                                )
                            }
                        }
                    ]
                }
                cards={[
                    {
                        content: () => {
                            return (
                                <div className="card-content">
                                    <span className="card-title">Rollen en tarieven</span>
                                    <br />
                                    <span className="card-subtitle">Program Manager</span>
                                    <div className="card-traits">
                                        <span>€ 800 min.day</span>
                                        <span>€ 100 min.hour</span>
                                        <span>€ 950 max.day</span>
                                        <span>€ 118.75 max.hour</span>
                                    </div>

                                    <span className="card-subtitle">Office Manager</span>
                                    <div className="card-traits">
                                        <span>€ 450 min.day</span>
                                        <span>€ 56.25 min.hour</span>
                                        <span>€ 600 max.day</span>
                                        <span>€ 75 max.hour</span>
                                    </div>

                                    <span className="card-subtitle">Project Manager</span>
                                    <div className="card-traits">
                                        <span>€ 800 min.day</span>
                                        <span>€ 100 min.hour</span>
                                        <span>€ 850 max.day</span>
                                        <span>€ 106.25 max.hour</span>
                                    </div>
                                </div>
                            )
                        }
                    },
                    {
                        content: () => {
                            return (
                                <div className="card-content">
                                    <span className="card-title">To be included in the set-up cost</span>
                                    <br />
                                    <span className="card-subtitle">Expert fee</span>
                                    <p>Included in the day tariffs & team support</p>
                                    <br />
                                    <br />

                                    <span className="card-subtitle">Accelerator app, user license</span>
                                    <p>Yearly fee</p>
                                    <br />
                                    <div className="card-traits">
                                        <span>€ 870</span>
                                    </div>

                                    <span className="card-subtitle">Tools set-up</span>
                                    <p>One time set-up costs to onboard, inform & instruct TML users</p>
                                    <br />
                                    <div className="card-traits">
                                        <span>40 hours</span>
                                        <span>€ 4.250</span>
                                    </div>
                                </div>
                            )
                        }
                    }
                ]}
            />

            <Profiles
                title={ProfilesTitle}
                profiles={[
                    {
                        title: "Program Manager",
                        image: ProgramManagerImg,
                        traits: [
                            "Recruit and manage partners specific to this program",
                            "Connect with the Start It Team to align",
                            "Manage the allocated budget & supporting hrs of the Start It Team",
                            "Screen and communicate with applicants",
                            "Recruit ad-hoc mentors and companies to come in and give presentations, with specific focus on EventTech",
                            "Recruit and get to know the mentors with specific focus on EventTech",
                            "Help guide mentors to companies  based on backgrounds, personalities, needs and interests",
                            "Screen applicants, select and contract with applicants",
                            "Market the program and attract applicants",
                            "Meet weekly with startups to check in, evaluate needs, and connect them with mentors & partners",
                            "Be available to the key stakeholders beyond the program as well",
                            "Schedule! Schedule! Schedule!",
                            "Manage interns (there is always interest of interns to join the operations of the Program)",
                            "Report to key stakeholders on the progress and status of the Program"
                        ]
                    },
                    {
                        title: "Office Manager",
                        image: OfficeManagerImg,
                        traits: [
                            "Manage all office resources, like printer paper, lights and desks",
                            "Be the SPOC for all things practical",
                            "Logistics (invites, mails, ...) support for any aspect of the program",
                            "Logistics support for any key milestones or event in the program",
                            "Run various errans",
                            "Setup and break down chairs for the sessions",
                            "Shop for sodas, paper products and other items",
                            "Keep the office generally straight and organized",
                            "Film and upload all sessions on location",
                            "Film and upload all pitch practices, then share them with the founders so they can watch themselves",
                            "Be available to the key stakeholders beyond the program as well",
                            "Schedule! Schedule! Schedule!",
                            "Manage interns (there is always interest of interns to join the operations of the Program)",
                            "Report to key stakeholders on the progress and status of the Program"
                        ]
                    },
                    {
                        title: "Project Manager",
                        image: ProjectManagerImg,
                        traits: [
                            "Connect all key stakeholders during the set-up & preparation of the project/program",
                            "Make sure all activities run timely within budget",
                            "Set-up a project steering & support group",
                            "Report on a regular basis to key stakeholders (Start It X / TML)",
                            "Ensure that the Start It X vision and TML strategy are in balance for the program",
                            "Organise meetings, brainstorms... whatever it takes to collect the expertise of Start It X & TML for the program definition",
                            "Collect and report on the project milestones and meetings",
                            "Set-up a sharing environment for knowledge and document sharing",
                        ]
                    }
                ]}
            />

            <Cards 
                title={IncomeTitle}
                cards={[
                    {
                        type: "black",
                        title: () => {return <h4 className="card-title">Huurgelden</h4>},
                        text: () => {return <p className="card-text">
                            <ul>
                                <li>
                                    Regus Harmonie: <strong>235 euro per persoon/maand</strong> 
                                </li>
                                <li>
                                    The Beacon Antwerpen (Schelde): <strong>275 euro per persoon/maand</strong> 
                                </li>
                                <li>
                                    Regus Post x: <strong>360 euro per persoon/maand</strong> 
                                </li>
                            </ul>
                            <br />
                            -&gt; Bezetting van 150 huurders (exc. start-ups) aan <strong>350 euro per maand: 52500 euro of 630.000 per jaar</strong>
                        </p>},
                        size: "4",
                    },
                    {
                        type: "black",
                        title: () => {return <h4 className="card-title">Partners</h4>},
                        text: () => {return <p className="card-text">
                            <ul>
                                <li>
                                    Start-it @ KBC biedt de optie om in te tekenen op Lab of Tomorrow aan zijn partners.
                                </li>
                                <li>
                                    Start-it @ KBC kan daar bovenop helpen prospecteren naar nieuwe, sector specifieke partners.
                                </li>
                                <li>
                                    8 partners à 50,000 per partner/ jaar (TBD) = <strong>400.000 euro</strong>
                                </li>
                            </ul>
                        </p>},
                        size: "4",
                    },
                    {
                        type: "black",
                        title: () => {return <h4 className="card-title">Investeringen</h4>},
                        text: () => {return <p className="card-text">
                            <ul>
                                <li>
                                    Zelf investeren in beloftevolle & succesvolle start-ups of spins offs 
                                </li>
                            </ul>
                            <br />
                            <br />
                            <h4 className="card-title">Overheden</h4>
                            <ul>
                                <li>
                                Steun van lokale overheden, gewestelijke subsides, Vlaio, ...
                                </li>
                            </ul>
                        </p>},
                        size: "4",
                    },
                ]}
            />

            <Values
                id="partner"
                title={ValuesTitle}
                values={[
                    "High-end, high-tech & high-experience environment",
                    "Marketing value & perception",
                    "Kruisbestuiving andere bedrijven",
                    "Samen aan bepaalde projecten werken",
                    "Gedeelde kost en/of korting op kantoorruimte, creatieve facilities, ...",
                    "Toegang tot business coaching",
                    "Zelf kennis delen = zelf kennis opdoen",
                    "Validation/venture tracks to facilitate innovation",
                    "Preferred partner",
                    "Toegang tot TML ecosysteem",
                    "Uitbouwen eigen “icubater site” binnen de site",
                    "Shared skillset available in network",
                    "Scale ups -> investeringen?",
                    "Toegang tot startups die innovatie doen in de sector",
                    "1 + 1 = 3",
                    "Being part of agile & lean methodology mindset",
                    "Toegang tot andere partners",
                    "Toegang tot startup community",
                    "Driver for new business & international markets",
                    "Toegang tot innovatie en nieuwe technologieën voor go-to-market",
                    "Trapsgewijze validatie vehicle binnen de sector",
                    "Doorbreken van war on talent",
                    "Unieke setting en omgeving om in te werken",
                    "Link met universiteiten",
                ]}
            />

            <Chart
                title={ChartTitle}
            />
        </BaseLayout>
    ) : (
        <div className="password">
            <form onSubmit={(e) => submitPass(e)}>
                <input type="password" onChange={(e) => {setPassword(e.target.value)}} name="password" />
                <button type="submit">Enter</button>
            </form>
        </div>
    )
};