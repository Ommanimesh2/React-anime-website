export default function Title(){
    return (
        <>
        
    <div className="texts">
        <h2 className="tracking-in-expand">The Anime World</h2>
    </div>
    <svg>
        <filter id="fire">
            <feTurbulence id="turbulence" baseFrequency="0.1 0.1" numOctaves="2" seed="5">
                <animate attributeName="baseFrequency" dur="20s" values="0.1 0.1;0.32 0.5" repeatCount="indefinite">
                </animate>
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="80"></feDisplacementMap>
        </filter>
    </svg>
        </>
    )
}