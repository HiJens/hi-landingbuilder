import React, { useState } from 'react';

export default function Scenarios({ id, upperlabel, title, scenarios, cards }) {
    const [ active, setActive ] = useState(0);

    return (
        <div className="block block--scenarios" id={id ?? "scenarios"}>
            <div className="block-container">
                {upperlabel()}
                {title()}

                <div className="scenarios">
                    <div className="row">
                        <div className="col-xs-12 col-md-3">
                            {
                                scenarios.map((scenario, index) => {
                                    return (
                                        <div key={index} onClick={() => setActive(index)} data-aos="fade-up" className={`scenario-button${index === active ? " active" : ""}`}>
                                            <span className="scenario-button-title">{scenario.title}</span>
                                            <span className="scenario-button-icon">{scenario.icon}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className="col-xs-12 col-md-5">
                            {
                                scenarios.map((scenario, index) => {
                                    return active === index ? !scenario.requirements ? (
                                        <div key={index} data-aos="fade-up" className={`scenario-card${index === active ? " active" : ""}`}>
                                            <span className="scenario-card-title">Overzicht</span>
                                            <div key={index} className="scenario-row">
                                                {
                                                    scenario.pricing.map((row, index) => {
                                                        return (
                                                            <div className="scenario-row-content" key={index}>
                                                                <div className="scenario-row-content-title">{row.title}</div>
                                                                <div className="scenario-row-content-label">{row.label}</div>
                                                                <div className="scenario-row-content-table">
                                                                    {
                                                                        row.staff && (
                                                                            <div className={`cell bold`}>
                                                                                <span className="cell-title">
                                                                                    
                                                                                </span>
                                                                                <span className="cell-min">
                                                                                    min.
                                                                                </span>
                                                                                <span className="cell-max">
                                                                                    max.
                                                                                </span>
                                                                                <span className="cell-days">
                                                                                    
                                                                                </span>
                                                                                <br />
                                                                            </div>
                                                                        )
                                                                    }
                                                                    {
                                                                        row.values.map((value, i) => {
                                                                            return !row.staff ? (
                                                                                <div className={`cell${value.light ? " light" : value.total ? " bold" : ""}`}>
                                                                                    <span className="cell-title">
                                                                                        {value.title}
                                                                                    </span>
                                                                                    <span className="cell-price">
                                                                                        {value.price}
                                                                                    </span>
                                                                                    <span className="cell-hours">
                                                                                        {value.hours}
                                                                                    </span>
                                                                                    <br />
                                                                                </div>
                                                                            ): (
                                                                                <div className={`cell${value.light ? " light" : value.total ? " bold" : ""}`}>
                                                                                    <span className="cell-title">
                                                                                        {value.title}
                                                                                    </span>
                                                                                    <span className="cell-min">
                                                                                        {value.min}
                                                                                    </span>
                                                                                    <span className="cell-max">
                                                                                        {value.max}
                                                                                    </span>
                                                                                    <span className="cell-days">
                                                                                        {value.days}
                                                                                    </span>
                                                                                    <br />
                                                                                </div>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    ) : (
                                        <div key={index} data-aos="fade-up" className={`scenario-card scenario-card--black${index === active ? " active" : ""}`}>
                                            {scenario.content()}
                                        </div>
                                    ) : ""
                                })
                            }
                        </div>

                        <div className="col-xs-12 col-md-4">
                            {
                                scenarios.map((scenario, index) => {
                                    return scenario.introduction && active === index ? (
                                        <div className="scenario-card scenario-card--black" data-aos="fade-up">
                                            {scenario.introduction()}
                                        </div>
                                    ) : (
                                        ""
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            <svg className="blur" width="1440" height="2012" viewBox="0 0 1440 2012" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_1_157)">
                <path d="M310.864 1139.24C50.7165 1211.72 -8.02828 1417.95 -4.88226 1512H1440V501.575C1382.23 488.92 1240.08 546.962 1133.69 880.377C1000.7 1297.14 636.048 1048.64 310.864 1139.24Z" fill="url(#paint0_linear_1_157)" fill-opacity="0.7"/>
                </g>
                <defs>
                <filter id="filter0_f_1_157" x="-505" y="0" width="2445" height="2012" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_1_157"/>
                </filter>
                <linearGradient id="paint0_linear_1_157" x1="789.88" y1="838.646" x2="1444.31" y2="1507.79" gradientUnits="userSpaceOnUse">
                <stop stop-color="#B92454"/>
                <stop offset="1" stop-color="#610B27"/>
                </linearGradient>
                </defs>
            </svg>
        </div>
    )
};