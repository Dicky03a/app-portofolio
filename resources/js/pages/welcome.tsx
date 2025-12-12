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

export default function Home() {
    return (
        <div className="bg-dark min-h-screen text-white selection:bg-primary selection:text-white">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Education />
                <Skills />
                <Certificates />
                <Projects />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
