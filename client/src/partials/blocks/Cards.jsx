export default function Cards({ id, upperlabel, label, title, text, cards }) {
    return (
        <div className="block block--cards" id={ id ?? "cards" }>
            <div className="block-container">
                {upperlabel()}
                {label()}
                {title()}
                {text()}

                <div className="block-rows">
                    <div className="row">
                        {
                            cards.map((card, index) => {
                                return (
                                    <div className={`col-xs-12 col-md-${card.size}`} key={ index }>
                                        {
                                            card.type === "default" ? (
                                                <div className="card card--white" data-aos="fade-up" data-aos-delay={index * 200}>
                                                    {card.title()}
                                                    <p className="card-text">{card.text}</p>
                                                </div>
                                            ) : (
                                                <div className="card card--image" data-aos="fade-up" data-aos-delay={index * 200}>
                                                    <svg className="card-blur" width="1440" height="2012" viewBox="0 0 1440 2012" fill="none" xmlns="http://www.w3.org/2000/svg">
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

                                                    <img src={card.img} alt="card" />
                                                </div>
                                            )
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};