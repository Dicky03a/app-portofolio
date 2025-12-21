import React from 'react';
import { TeamCarousel } from '../TeamCarousel';

export const Pengalaman: React.FC = () => {
    return (
        <div className="mb-16 pt-8 text-center">
            <h1 className="flex flex-col items-center gap-2">
                <span className="text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-6xl">Supercharge Your Workflow</span>
            </h1>

            <p className="mx-auto mt-10 max-w-3xl text-xl leading-relaxed font-light text-gray-400 md:text-2xl">
                The all-in-one workspace for modern teams. Plan, collaborate, and deliver project-defining results —
                <span className="font-normal text-white italic"> without the friction.</span>
            </p>
            <TeamCarousel />
        </div>
    );
};

export default Pengalaman;
