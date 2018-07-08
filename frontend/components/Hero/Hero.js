import Link from "next/link";

const hrStyle = {
    marginTop: 75
};

const Hero = () => (
    <div className="knockout">
  
        <svg className="knockout__text-container" width="100%" height="100%">
            <rect className="knockout__text-bg" width="100%" height="100%" fill="#fff" x="0" y="0" fillOpacity="a1" mask="url(#knockout-text)"/>
            <mask id="knockout-text">
            <rect width="100%" height="100%" fill="#fff" x="0" y="0" />
            <text x="50%" y="50%" fill="#000" textAnchor="middle">Hello!</text>
            </mask>
        </svg>
        
    </div>
);

export default Hero;
