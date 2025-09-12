export default function Publications() {
    return(
        <div className="flex flex-col min-h-screen">
            <h1 className="text-xl text-yellow text-center pt-8 mb-8"> My Publications</h1>
            <div className="flex-1 max-w-6xl mx-auto w-full">
                <Publication
                    conference_journal_line = "Abstract accepted to AeroConf 2026 in Montana, USA"
                    link_explanation = "Link directs to LinkedIn post until publication"
                    title = "Terrain Adaptive Strategies to Prevent and Recover from Rover Wheel-Slip"
                    link = "https://www.linkedin.com/feed/update/urn:li:activity:7316974098503401473/"
                    authors = "J. Grant, M. Seto, P. Grouchy"
                    year="2026"
                />
                <Publication
                    conference_journal_line = "Paper presented at ICACR 2024 in Xiangyang, China"
                    link_explanation = "Link directs to IEEE Xplore Link"
                    title = "3DOF Proximity Flight Emulation with a Planar Air-Bearing Testbed"
                    link = "https://ieeexplore.ieee.org/document/11053738"
                    authors = "E. Gregson, M. Adolph, E. Vautour, J. Grant, N. Cain, R. Bauer, M. Seto"
                    year="2024"
                />
                <Publication
                    conference_journal_line="Contractor Report (for Defence Research and Development Canada)"
                    link_explanation="Work under NDA - link not available"
                    title="Mine Countermeasures (MCM) - Autonomy Infrastructure Development (CATL)"
                    authors="M. Seto, A. Bassam, J. Patel, N. Cain, J. Grant"
                    year="2024"
                />
            </div>
        </div>
    );

}

export function Publication({ title, link, conference_journal_line, authors, year, link_explanation }) {
    return (
        <div className="m-4 my-4 rounded-sm border border-gray-700 bg-gray-900 p-6 shadow-lg">
            {link && (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <h2 className="text-2xl font-bold text-yellow mb-2 hover:underline">{title}</h2>
                </a>
            )}
            {!link && (
                <h2 className="text-2xl font-bold text-yellow mb-2">{title}</h2>
            )}
            <p className="text-white mb-1"><span className="font-semibold"></span> {authors}</p>
            <p className="text-white mb-1"><span className="font-semibold"></span> {conference_journal_line}</p>
            <p className="text-white mb-1"><span className="font-semibold"></span> {year}</p>
            {link_explanation && (
                <p className="text-white mb-1"><span className="font-semibold"></span> {link_explanation}</p>
            )}
        </div>
    );
}
