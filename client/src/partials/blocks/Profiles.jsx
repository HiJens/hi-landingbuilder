export default function Profiles({id, title, profiles}) {
    return (
        <div className="block block--profiles" id={ id ?? "digits" }>
            <div className="block-container">
                {title()}

                <div className="profiles">
                    {
                        profiles && profiles.map((profile, index) => {
                            return (
                                <div className="profile" key={index}>
                                    <div className="profile-image" data-aos="fade-up">
                                        <img src={profile.image} alt="profile" />
                                    </div>

                                    <div className="profile-content">
                                        <h4 className="profile-content-title" data-aos="fade-up">
                                            {profile.title}
                                        </h4>

                                        <div className="profile-content-traits">
                                            {
                                                profile.traits && profile.traits.map((trait, index) => {
                                                    return (
                                                        <div className="profile-content-trait" data-aos="fade-left" key={index}>
                                                            <span>{trait}</span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
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
}