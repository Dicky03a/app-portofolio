import { usePage } from '@inertiajs/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

interface TeamMember {
    id: number;
    name: string;
    role: string;
    photo: string;
}

export const TeamCarousel: React.FC = () => {
    const { pengalamen } = usePage().props as {
        pengalamen: TeamMember[];
    };

    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollRef.current) return;
        const scrollAmount = window.innerWidth * 0.4;
        scrollRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        if (scrollRef.current) {
            const center = (scrollRef.current.scrollWidth - scrollRef.current.clientWidth) / 2;
            scrollRef.current.scrollLeft = center;
        }
    }, []);

    if (!pengalamen || pengalamen.length === 0) return null;

    return (
        <div className="group relative mb-32 w-full">
            {/* LEFT BUTTON */}
            <div className="absolute top-1/2 left-8 z-30 hidden -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:block">
                <button
                    onClick={() => scroll('left')}
                    className="rounded-full border border-white/10 bg-white/10 p-4 text-white backdrop-blur-xl transition-all hover:bg-white/20 active:scale-90"
                >
                    <ChevronLeft size={28} />
                </button>
            </div>

            {/* RIGHT BUTTON */}
            <div className="absolute top-1/2 right-8 z-30 hidden -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:block">
                <button
                    onClick={() => scroll('right')}
                    className="rounded-full border border-white/10 bg-white/10 p-4 text-white backdrop-blur-xl transition-all hover:bg-white/20 active:scale-90"
                >
                    <ChevronRight size={28} />
                </button>
            </div>

            {/* CAROUSEL */}
            <div
                ref={scrollRef}
                className="no-scrollbar flex snap-x snap-mandatory items-center gap-6 overflow-x-auto px-[15vw] py-24 md:gap-12 md:px-[30vw]"
            >
                {pengalamen.map((member) => (
                    <TeamCard key={member.id} member={member} containerRef={scrollRef} />
                ))}
            </div>

            {/* GRADIENT */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-32 bg-gradient-to-r from-[#050505] to-transparent md:w-64"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-32 bg-gradient-to-l from-[#050505] to-transparent md:w-64"></div>
        </div>
    );
};

const TeamCard: React.FC<{
    member: TeamMember;
    containerRef: React.RefObject<HTMLDivElement>;
}> = ({ member, containerRef }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [style, setStyle] = useState<React.CSSProperties>({});

    useEffect(() => {
        const updateStyle = () => {
            if (!cardRef.current || !containerRef.current) return;

            const container = containerRef.current;
            const card = cardRef.current;

            const containerCenter = container.scrollLeft + container.offsetWidth / 2;
            const cardCenter = card.offsetLeft + card.offsetWidth / 2;

            const distance = cardCenter - containerCenter;
            const normalized = distance / (container.offsetWidth / 2);

            setStyle({
                transform: `perspective(1200px) rotateY(${normalized * -20}deg) translateY(${Math.abs(normalized) * 40}px) scale(${
                    1 - Math.abs(normalized) * 0.2
                })`,
                opacity: Math.max(0.4, 1 - Math.abs(normalized) * 0.4),
                zIndex: Math.round(40 - Math.abs(distance / 10)),
            });
        };

        const container = containerRef.current;
        container?.addEventListener('scroll', updateStyle);
        updateStyle();

        return () => container?.removeEventListener('scroll', updateStyle);
    }, [containerRef]);

    return (
        <div ref={cardRef} className="flex-shrink-0 snap-center">
            <div
                className="group/card relative h-64 w-48 overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#111] shadow-xl md:h-96 md:w-72"
                style={style}
            >
                <img
                    src={`/storage/${member.photo}`}
                    alt={member.name}
                    className="h-full w-full object-cover grayscale-[60%] transition-all duration-700 group-hover/card:scale-110 group-hover/card:grayscale-0"
                />

                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 opacity-0 transition-all duration-500 group-hover/card:opacity-100">
                    <p className="text-xl font-bold text-white">{member.name}</p>
                    <p className="text-sm text-gray-400">{member.role}</p>
                </div>
            </div>
        </div>
    );
};
