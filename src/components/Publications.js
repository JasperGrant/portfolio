import PageHeading from './PageHeading';

export default function Publications() {
    return(
        <div className="flex flex-col min-h-screen bg-neutral">
            <PageHeading>My Publications</PageHeading>
            <div className="flex-1 max-w-6xl mx-auto w-full px-6 pb-16 space-y-6">
                <Publication
                    conference_journal_line="Paper submitted to ICRA 2027, Seoul, South Korea"
                    link_explanation="Work under review"
                    title="TIDE: Terrain Identification via Dynamic Effects in a Parametric Motion Model"
                    authors="J. Grant, R. Soussan, M Deans"
                    year="2027"
                />
                <Publication
                    conference_journal_line = "Paper presented at IEEE Aerospace Conference 2026, Big Sky, Montana, USA"
                    link_explanation = "Directs to IEEE Xplore Link"
                    title = "Terrain Adaptive Strategies to Prevent and Recover from Rover Wheel-Slip"
                    link = "https://ieeexplore.ieee.org/document/11519932"
                    authors = "J. Grant, M. Seto, P. Grouchy"
                    year="2026"
                />
                <Publication
                    conference_journal_line = "Paper presented at ICACR 2024, Xiangyang, China"
                    link_explanation = "Directs to IEEE Xplore Link"
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
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-turquoise/60 hover:shadow-2xl">
            {link && (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <h2 className="mb-3 text-2xl font-bold text-yellow hover:underline">{title}</h2>
                </a>
            )}
            {!link && (
                <h2 className="mb-3 text-2xl font-bold text-yellow">{title}</h2>
            )}
            <p className="mb-1 text-gray-300"><span className="font-semibold text-white">Authors: </span>{authors}</p>
            <p className="mb-1 text-gray-300"><span className="font-semibold text-white">Published in: </span>{conference_journal_line}</p>
            <p className="mb-1 text-gray-300"><span className="font-semibold text-white">Year: </span>{year}</p>
            {link_explanation && (
                <p className="mb-1 text-gray-300"><span className="font-semibold text-white">Note: </span>{link_explanation}</p>
            )}
        </div>
    );
}

