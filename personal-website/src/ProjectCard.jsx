import React, { useState, useEffect } from "react";
import { ExternalLink, Eye, Github, Code } from "lucide-react";

export default function ProjectCard(props) {
    const [isHovered, setIsHovered] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Extract props
    const {
        name = "Project Name",
        description = "This is a sample project description that explains what this project is about.",
        date = "April 2025",
        tech = "React, Tailwind",
        demoLink,
        githubLink,
        codeLink,
        image,
        buttons = ["demo", "github", "code", "image"]
    } = props;

    // Detect mobile screen width
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Call once on mount
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouseEnter = () => {
        if (props.showHoverEffects && !isMobile) {
            setIsHovered(true);
        }
    };

    const handleMouseLeave = () => {
        if (props.showHoverEffects && !isMobile) {
            setIsHovered(false);
        }
    };

    // Should show expanded section
    const shouldShowButtonsSection = props.showHoverEffects &&
        (demoLink || githubLink || codeLink || image) &&
        buttons.length > 0;

    const isExpanded = isHovered || isMobile;

    return (
        <div
            className={`flex flex-col bg-gray-900 md:w-90 h-full break-words rounded-2xl p-3 m-3 select-none transition-all duration-300`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="card">
                <h2 className="font-bold text-xl mb-2 text-white">{name}</h2>
                <p className="card-description text-gray-300 mb-4">{description}</p>

                <div className="card-footer">
                    <span className="card-date font-light text-gray-400">{date} | </span>
                    <span className="card-tags font-light text-gray-400">{tech}</span>
                </div>

                {shouldShowButtonsSection && (
                    <div
                        className={`mt-4 flex flex-wrap gap-2 justify-center transition-all ease-in-out duration-700 overflow-hidden ${
                            isExpanded ? "max-h-110" : "max-h-0"
                        }`}
                    >
                        {image && (
                            <div className="w-full flex justify-center mb-2">
                                <img
                                    src={image}
                                    alt={`${name} preview`}
                                    className="max-w-full h-auto rounded-md"
                                    onLoad={() => setImageLoaded(true)}
                                    onError={(e) => {
                                        console.error("Image failed to load:", e);
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>
                        )}

                        {demoLink && buttons.includes("demo") && (
                            <a
                                href={demoLink}
                                className="flex items-center gap-1 px-3 py-1 bg-blue-900 hover:bg-blue-800 text-white rounded-md text-sm transition-colors"
                            >
                                <ExternalLink size={16} />
                                <span>Website</span>
                            </a>
                        )}

                        {githubLink && buttons.includes("github") && (
                            <a
                                href={githubLink}
                                className="flex items-center gap-1 px-3 py-1 bg-gray-800 hover:bg-gray-700 text-white rounded-md text-sm transition-colors"
                            >
                                <Github size={16} />
                                <span>GitHub</span>
                            </a>
                        )}

                        {codeLink && buttons.includes("code") && (
                            <a
                                href={codeLink}
                                className="flex items-center gap-1 px-3 py-1 bg-gray-700 hover:bg-gray-800 text-white rounded-md text-sm transition-colors"
                            >
                                <Code size={16} />
                                <span>Source</span>
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
