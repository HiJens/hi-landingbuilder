export default function Digits({id, title, label, years, digits}) {
    return (
        <div className="block block--digits" id={ id ?? "digits" }>
            <div className="block-container">
                {title()}

                <div className="block-content">
                    <div className="digit-years">
                        <span className="digit-years-title" data-aos="fade-up">
                            {label}
                        </span>

                        {/* <div className="digit-years-wrapper">
                            {
                                years && years.map((year, index) => {
                                    return (
                                        <div key={ index } data-aos="fade-up" data-aos-delay={index * 200} className={`digit-year${ year.current ? " digit-year--current" : "" }`}>
                                            {year.year}
                                        </div>
                                    )
                                })
                            }
                        </div> */}
                    </div>

                    <div className="digit-keys">
                        {
                            digits && digits.rows.map((row, index) => {
                                return (
                                    <div className="digit-keys-row" key={ index }>
                                        {
                                            !row.total ? row.digits.map((digit, innerIndex) => {
                                                return (
                                                    <div className="digit-keys-item" data-aos="fade-up" key={ innerIndex }>
                                                        <div className="digit-keys-item-key">
                                                            <h4><span>{digit.title}</span></h4>
                                                            {
                                                                digit.label && (
                                                                    <span className="digit-keys-item-label">{digit.label}</span>
                                                                )
                                                            }
                                                        </div>

                                                        <div className="digit-keys-item-value">
                                                            <h4>€ {digit.digit}</h4>
                                                        </div>
                                                    </div>
                                                )
                                            }) : (
                                                <div className="digit-keys-item" data-aos="fade-up">
                                                    <div className="digit-keys-item-key">
                                                        <h4>{row.title}</h4>
                                                    </div>

                                                    <div className="digit-keys-item-value">
                                                        <h4><span>€ {row.digit}</span></h4>
                                                    </div>
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
