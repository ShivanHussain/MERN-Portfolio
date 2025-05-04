import PropTypes from "prop-types";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SingleProject = ({ item }) => {
    const {
        _id,
        title,
        gitRepoLink,
        deployed,
        projectBanner,
        stack,
        technologies,
    } = item;

    const navigate = useNavigate();

    const handleOnClickUrl = (url, title) => {
        if (url?.length > 0) {
            window.open(url, "_blank");
        } else if (title === "Portfolio Website") {
            alert("This website only.");
        } else {
            alert("Project not live yet.");
        }
    };

    const handleCardClick = () => {
        navigate(`/project/${_id}`);
    };

    /*"
 */

    return (
        
        <div
            onClick={handleCardClick}
            className="cursor-pointer bg-[#0e162e] text-white rounded-2xl shadow-md hover:shadow-xl 
    hover:shadow-gray-600/50 transition-shadow transition-transform duration-500 ease-in-out overflow-hidden flex flex-col w-full mx-auto col-span-1 md:col-span-2 lg:col-span-2 transform hover:scale-105 border-[1.5px] border-transparent hover:border-white"
        >
            {/* Image */}
            <div className="w-full h-48 bg-black flex items-center justify-center overflow-hidden">
                <img
                    src={projectBanner.url}
                    alt={title}
                    className="h-full w-full object-cover "
                />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-lg font-bold mb-1 line-clamp-2">{title}</h2>
                <p className="text-purple-400 text-sm mb-2 font-semibold">{stack}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                    {technologies.split(",").map((tech, index) => (
                        <span
                            key={index}
                            className="bg-purple-700 text-xs px-2 py-1 rounded-full"
                        >
                            {tech.trim()}
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex justify-between items-center text-sm pt-2 border-t border-gray-700 mt-auto">
                    <button
                        onClick={(e) => {
                            e.stopPropagation(); // prevent card click
                            handleOnClickUrl(deployed, title);
                        }}
                        className="flex items-center gap-1 text-pink-400 hover:text-pink-300 transition-colors"
                    >
                        <MdArrowOutward className="text-base" />
                        Live
                    </button>
                    <a
                        onClick={(e) => e.stopPropagation()} // prevent card click
                        href={gitRepoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        View Code
                    </a>
                </div>
            </div>
        </div>
    );
};

SingleProject.propTypes = {
    item: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        gitRepoLink: PropTypes.string.isRequired,
        deployed: PropTypes.string,
        stack: PropTypes.string.isRequired,
        technologies: PropTypes.string.isRequired,
        projectBanner: PropTypes.shape({
            url: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

export default SingleProject;
