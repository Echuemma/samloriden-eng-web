import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Calendar, ArrowLeft, CheckCircle, User, Square, ArrowRight } from 'lucide-react';
import Button from '../components/common/Button';
import { getProjectById, getRelatedProjects } from '../data/projects-data';
import useAOS from '../hooks/useAOS';

export default function ProjectDetail() {
    useAOS({ duration: 1000, once: true });
    const { id } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);
    const [relatedProjects, setRelatedProjects] = useState([]);
    const [selectedImage, setSelectedImage] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjectData = async () => {
            setLoading(true);
            try {
                await new Promise(resolve => setTimeout(resolve, 300));

                const projectData = getProjectById(id);
                const related = getRelatedProjects(id, 3);

                if (!projectData) {
                    navigate('/404');
                    return;
                }

                setProject(projectData);
                setRelatedProjects(related);
                setSelectedImage(0);
            } catch (error) {
                console.error('Error fetching project:', error);
                navigate('/404');
            } finally {
                setLoading(false);
            }
        };

        fetchProjectData();
    }, [id, navigate]);

    const handleBackToProjects = () => {
        navigate('/projects');
    };

    const handleRelatedProjectClick = (projectId) => {
        navigate(`/project/${projectId}`);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading project details...</p>
                </div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Not Found</h2>
                    <Button
                        onClick={handleBackToProjects}
                        className="text-white px-6 py-3 rounded-lg"
                    // style={{ color: 'var(--color-primary-alt)' }}
                    >
                        Back to Projects
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen mt-16 bg-gray-50">
            <nav className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8 gap-4 sm:gap-0">
                <div className="flex items-center space-x-2 overflow-x-auto">
                    <span className="w-2 h-2 rounded-full border border-gray-400 flex-shrink-0"></span>
                    <span className="text-gray-400 text-sm whitespace-nowrap">Home</span>
                    <span className="text-gray-400 text-sm mx-2">/</span>
                    <span className="text-gray-400 text-sm whitespace-nowrap">Projects</span>
                    <span className="text-black font-semibold text-sm ml-2 sm:ml-6 truncate">{project.title}</span>
                </div>

                <Link
                    to="/projects"
                    className="inline-flex items-center transition-colors duration-200 self-start sm:self-auto"
                    style={{
                        color: 'var(--color-primary-alt)',
                    }}
                >
                    <ArrowLeft className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Back to Projects</span>
                </Link>
            </nav>



            <div className="px-4 sm:px-8 lg:px-12 pb-8 lg:pb-16" >
                <div className="max-w-7xl mx-auto" >
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-start">
                        <div className="space-y-6 lg:space-y-8 pt-4 lg:pt-8">
                            <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg" data-aos="fade-up">
                                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                                {project.category}
                            </div>

                            <div data-aos="fade-up">
                                <h5 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-none tracking-tight text-black mb-3 lg:mb-4">
                                    {project.title}
                                </h5>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-4 lg:mb-6">
                                    <div className="flex items-center text-gray-500 text-base lg:text-lg">
                                        <MapPin className="w-4 h-4 lg:w-5 lg:h-5 mr-2 flex-shrink-0" />
                                        <span className="truncate">{project.location}</span>
                                    </div>
                                    <div className="flex items-center text-gray-500 text-base lg:text-lg">
                                        <Calendar className="w-4 h-4 lg:w-5 lg:h-5 mr-2 flex-shrink-0" />
                                        <span>{project.date}</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed" data-aos="fade-up">
                                {project.fullDescription}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up">
                                <Link to="/contact" className="w-full sm:w-auto">
                                    <Button className="w-full sm:w-auto bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold text-base lg:text-lg transition-colors duration-300">
                                        Contact Us
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="space-y-4 lg:space-y-6"  >
                            <div className="relative w-full h-64 sm:h-80 lg:h-96 bg-gray-200 shadow-lg overflow-hidden" style={{
                                borderRadius: "20px",
                                clipPath: "polygon(20% 0%, 100% 0%, 100% 82%, 82% 100%, 0% 100%, 0% 20%)"
                            }}
                                data-aos="fade-up"
                            >
                                <img
                                    src={project.gallery[selectedImage]}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="grid grid-cols-3 gap-3 lg:gap-4">
                                {project.gallery.slice(0, 3).map((image, index) => (
                                    <div
                                        key={index}
                                        className={`relative w-full h-20 sm:h-24 bg-gray-200 shadow-md overflow-hidden cursor-pointer transition-all duration-300 ${selectedImage === index ? 'ring-2 ring-orange-500' : 'hover:opacity-80'
                                            }`}
                                        style={{
                                            borderRadius: "15px",
                                            clipPath: "polygon(15% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%, 0% 15%)"
                                        }}
                                        onClick={() => setSelectedImage(index)}
                                        data-aos="fade-up"
                                    >
                                        <img
                                            src={image}
                                            alt={`${project.title} ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="bg-white py-6 lg:py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
                    <div className="grid lg:grid-cols-3 gap-8 lg:gap-16">
                        <div className="lg:col-span-2 space-y-6 lg:space-y-4" >
                            <div>
                                <h5 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 lg:mb-2" data-aos="fade-up">Project Overview</h5>
                                <p className="text-gray-600 text-base lg:text-lg leading-relaxed" data-aos="fade-up">
                                    {project.fullDescription}
                                </p>
                            </div>

                            <div>
                                <h5 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-3" data-aos="fade-up">Key Features</h5>
                                <div className="grid sm:grid-cols-2 gap-3 lg:gap-4">
                                    {project.features.map((feature, index) => (
                                        <div key={index} className="flex items-start space-x-3" data-aos="fade-up">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 text-sm lg:text-base leading-relaxed">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 lg:space-y-8">
                            <div className="bg-gray-50 p-6 lg:p-8 rounded-2xl" >
                                <h5 className="text-lg lg:text-xl font-bold text-gray-900 mb-4 lg:mb-6" data-aos="fade-up">Project Details</h5>
                                <div className="space-y-3 lg:space-y-4">
                                    <div className="flex justify-between items-center py-2 border-b border-gray-200" data-aos="fade-up">
                                        <span className="text-gray-600 flex items-center text-sm lg:text-base">
                                            <User className="w-4 h-4 mr-2 flex-shrink-0" />
                                            Client
                                        </span>
                                        <span className="font-semibold text-gray-900 text-sm lg:text-base text-right">{project.client}</span>
                                    </div>
                                    <div className="flex py-2 border-b border-gray-200" data-aos="fade-up">
                                        <span className="w-40 text-gray-600 flex items-center text-sm lg:text-base">
                                            <Square className="w-4 h-4 mr-2 flex-shrink-0" />
                                            Area
                                        </span>
                                        <span className="flex font-semibold text-gray-900 text-sm lg:text-base break-words">
                                            {project.area}
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-center py-2 border-b border-gray-200" data-aos="fade-up">
                                        <span className="text-gray-600 flex items-center text-sm lg:text-base">
                                            <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                                            Timeline
                                        </span>
                                        <span className="font-semibold text-gray-900 text-sm lg:text-base text-right">{project.date}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2" data-aos="fade-up">
                                        <span className="text-gray-600 flex items-center text-sm lg:text-base">
                                            <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                                            Status
                                        </span>
                                        <span className={`font-semibold px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm 
                            ${project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                                project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                                                    project.status === 'Under Construction' ? 'bg-orange-100 text-orange-800' :
                                                        'bg-gray-100 text-gray-800'
                                            }`}>
                                            {project.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            {relatedProjects.length > 0 && (
                <div className="py-10 lg:py-20 bg-gray-50" >
                    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
                        <div className="text-center mb-8 lg:mb-10" data-aos="fade-up">
                            <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg mb-4">
                                <span className="mr-2">🔍</span>
                                Related Projects
                            </div>
                            <h5 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight px-4">
                                Similar Projects You Might Like
                            </h5>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {relatedProjects.map((relatedProject) => (
                                <div key={relatedProject.id} className="rounded-lg overflow-hidden group duration-300 cursor-pointer">
                                    <div className="relative h-56 lg:h-64 overflow-hidden" data-aos="fade-up">
                                        <img
                                            src={relatedProject.image}
                                            alt={relatedProject.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            style={{
                                                borderRadius: "20px",
                                                clipPath: "polygon(20% 0%, 100% 0%, 100% 82%, 82% 100%, 0% 100%, 0% 20%)"
                                            }}
                                        />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="flex space-x-2">
                                                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                                                    <div className="w-3 h-3 lg:w-4 lg:h-4 bg-white rounded-full"></div>
                                                </div>
                                                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                                                    <div className="w-3 h-3 lg:w-4 lg:h-4 bg-gray-600 rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-1" data-aos="fade-up">
                                        <h5 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 mt-2 group-hover:text-blue-600 transition-colors duration-300">
                                            {relatedProject.title}
                                        </h5>

                                        <p className="text-gray-600 mb-3 lg:mb-4 text-sm leading-relaxed">
                                            {relatedProject.description}
                                        </p>

                                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-2 mb-3 lg:mb-4">
                                            <div className="flex items-center text-gray-500 text-sm min-w-0">
                                                <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                                                <span className="truncate">{project.location}</span>
                                            </div>

                                            <div className="flex items-center text-gray-500 text-xs min-w-0">
                                                <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                                                <span className="truncate">{project.date}</span>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => handleRelatedProjectClick(relatedProject.id)}
                                            className="flex items-center font-medium text-sm transition-colors duration-300 group/btn cursor-pointer ml-auto"
                                            style={{
                                                color: 'var(--color-primary-alt)',
                                            }}
                                        >
                                            View Details
                                            <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}