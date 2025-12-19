import About from '@/components/front/About';
import Certificates from '@/components/front/Certificates';
import Contact from '@/components/front/Contact';
import Education from '@/components/front/Education';
import Footer from '@/components/front/Footer';
import Hero from '@/components/front/Hero';
import Navbar from '@/components/front/Navbar';
import Projects from '@/components/front/Projects';
import Skills from '@/components/front/Skills';
import Testimonials from '@/components/front/Testimonials';
import { usePage } from '@inertiajs/react';

interface Project {
    id: number;
    title: string;
    slug: string;
    tech_stack: string;
    tech_stack_array: string[];
    thumbnail: string;
    thumbnail_url: string;
    short_description: string;
    github_url: string | null;
    demo_url: string | null;
}

interface Testimonial {
    id: number;
    message: string;
    name: string;
    position: string;
    avatar: string | null;
    avatar_url: string;
}

interface PageProps {
    projects: Project[];
    testimonials: Testimonial[];
    [key: string]: any; // Allow other props
}

export default function Home() {
    const { projects, testimonials } = usePage<PageProps>().props;

    return (
        <div className="bg-dark min-h-screen text-white selection:bg-primary selection:text-white">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Education />
                <Skills />
                <Certificates />
                <Projects projects={projects || []} />
                <Testimonials testimonials={testimonials || []} />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
