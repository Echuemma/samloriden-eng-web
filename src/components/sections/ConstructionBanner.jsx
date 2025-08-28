import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import CallToActionSection from './CallToActionSection';
import { projects } from '../../data/projects-data';
import useAOS from '../../hooks/useAOS';


export default function ConstructionBanner() {
    useAOS({ duration: 1000, once: true });

    const [projectsData, setProjectsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);
            try {
                await new Promise(resolve => setTimeout(resolve, 500));
                setProjectsData(projects);
            } catch (error) {
                console.error('Error fetching projects:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const handleViewMore = (projectId) => {
        navigate(`/project/${projectId}`);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading projects...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="flex items-center px-12 py-8 mt-12">
                <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full border border-gray-400"></span>
                    <span className="text-gray-400 text-sm">Home</span>
                    <span className="text-gray-400 text-sm mx-2">/</span>
                    <span className="text-black font-semibold text-sm ml-1">Project</span>
                </div>
            </nav>
            <div className="px-4 sm:px-6 lg:px-12 pb-8">
                <div className="max-w-7xl mx-auto" data-aos="fade-up">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-start">
                        <div className="space-y-6 lg:space-y-10 pt-1 lg:pt-25 item-center">
                            <div>
                                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-none tracking-tight">
                                    <div className="text-black">Our Work.</div>
                                    <div className="text-gray-300 mt-2">Your Vision Realized.</div>
                                </h1>
                            </div>

                            <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-md">
                                At Mason, every project tells a story — a story of trust,
                                collaboration, and precision. From residential builds to
                                commercial developments and infrastructure solutions,
                                our portfolio reflects our commitment to quality
                            </p>
                        </div>

                        <div className="space-y-4 lg:space-y-6">
                            <div className="relative w-full h-64 lg:h-80 bg-gray-200 shadow-lg overflow-hidden" style={{
                                borderRadius: "20px",
                                clipPath: "polygon(20% 0%, 100% 0%, 100% 82%, 82% 100%, 0% 100%, 0% 20%)"
                            }}>
                                <img
                                    src='/images/hero/bg-one.jpeg'
                                    alt="Main Construction Worker"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4 lg:gap-6">
                                <div className="relative w-full h-40 lg:h-48 bg-gray-200 shadow-md overflow-hidden"
                                    style={{
                                        borderRadius: "20px",
                                        clipPath: "polygon(20% 0%, 100% 0%, 100% 82%, 82% 100%, 0% 100%, 0% 20%)"
                                    }}>
                                    <img
                                        src='/images/hero/bg-two.jpeg'
                                        alt="Skyscrapers"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="relative w-full h-40 lg:h-48 bg-gray-200 shadow-md overflow-hidden" style={{
                                    borderRadius: "20px",
                                    clipPath: "polygon(20% 0%, 100% 0%, 100% 82%, 82% 100%, 0% 100%, 0% 20%)"
                                }}>
                                    <img
                                        src='/images/about/construction-building.jpg'
                                        alt="Construction Site"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="max-w-6xl mx-auto px-5 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
                    <div className="space-y-4 lg:space-y-6" data-aos="fade-right">
                        <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                            <span className="mr-2">👁️</span>
                            See all Projects
                        </div>

                        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                            Discover Our Completed Projects
                        </h2>
                    </div>

                    <div className="text-gray-600 text-base lg:text-lg leading-relaxed" data-aos="fade-left" data-aos-delay="200">
                        Every project we complete is a reflection of our commitment to quality, precision, and client satisfaction. At{' '}
                        <span className="text-gray-900 font-semibold">Mason</span>, we take pride in transforming ideas into built realities — whether it's a modern residence.
                    </div>
                </div>
            </section>
            <div className="py-4 lg:py-8 px-4 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {projectsData.map((project) => (
                        <div key={project.id} className="rounded-lg overflow-hidden group duration-300" data-aos="fade-up">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    style={{
                                        borderRadius: "20px",
                                        clipPath: "polygon(20% 0%, 100% 0%, 100% 82%, 82% 100%, 0% 100%, 0% 20%)"
                                    }}
                                />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="flex space-x-2">
                                        <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                                            <div className="w-4 h-4 bg-white rounded-full"></div>
                                        </div>
                                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                                            <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-1" data-aos="fade-up">
                                <h5 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 mt-2 group-hover:text-blue-600 transition-colors duration-300">
                                    {project.title}
                                </h5>

                                <p className="text-gray-600 mb-3 lg:mb-4 text-sm leading-relaxed">
                                    {project.description}
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
                                    onClick={() => handleViewMore(project.id)}
                                    className="flex items-center font-medium text-sm transition-colors duration-300 group/btn cursor-pointer  ml-auto"
                                    style={{
                                        color: 'var(--color-primary-alt)',
                                    }}
                                >
                                    View More
                                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <CallToActionSection
                badge="Get Started"
                title="Building the Future, One Project at a Time"
                description="From residential homes to large-scale infrastructure, we combine innovation, precision, and engineering excellence to deliver lasting results. Partner with us to turn your vision into a structure built to stand the test of time."
            >
                <Link to="/contact">
                    <Button className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600 transition">
                        Contact Us
                    </Button>
                </Link>
            </CallToActionSection>

        </div>
    );
}