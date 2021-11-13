export default function Text({ title, text }) {
    return (
        <div className="block block--text">
            <div className="block-container block-container--smal">
                {title()}

                {text()}
            </div>
        </div>
    )
};