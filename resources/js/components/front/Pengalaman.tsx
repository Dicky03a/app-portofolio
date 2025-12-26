import React from 'react';
import { TeamCarousel } from '../TeamCarousel';

export const Pengalaman: React.FC = () => {
    return (
        <div className="mb-16 pt-8 text-center">
            <h1 className="flex flex-col items-center gap-2">
                <span className="text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-6xl">My Life Experience</span>
            </h1>

            <p className="mx-auto mt-10 max-w-3xl text-xl leading-relaxed font-light text-gray-400 md:text-2xl">
                Perjalanan saya dimulai dari belajar, mencoba, dan terus berkembang melalui organisasi, proyek, dan dunia teknologi —
                <span className="font-normal text-white italic"> mengubah ide menjadi solusi nyata dengan komunikasi yang efektif.</span>
            </p>

            <TeamCarousel />
        </div>
    );
};

export default Pengalaman;
