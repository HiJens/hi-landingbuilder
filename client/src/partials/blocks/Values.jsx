export default function Values({ id, title, values }) {
    return ( 
        <div className="block block--values" id={ id ?? "values" }>
            <div className="block-container">
                {title()}

                <div className="values">
                    {
                        values && values.map((value, index) => {
                            return (
                                <div className="value" key={ index } data-aos="fade-left">
                                    <span>
                                        {value}
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};