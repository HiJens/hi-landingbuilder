import ChartImg from "../../assets/images/chart.png";

export default function Chart({ title }) {
    return (
        <div className="block block--chart" id="tijdlijn">
            <div className="block-container">
                {title()}

                <div className="chart" data-aos="fade-up">
                    <img src={ChartImg} alt="chart" />
                </div>
            </div>
        </div>
    )
}