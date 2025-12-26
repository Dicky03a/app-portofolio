import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

interface TeamMember {
    id: number;
    image: string;
    name: string;
    role: string;
}

const TEAM_MEMBERS: TeamMember[] = [
    {
        id: 1,
        name: 'Sarah J.',
        role: 'Product Designer',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=600&fit=crop',
    },
    { id: 2, name: 'Mark V.', role: 'CTO', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=600&fit=crop' },
    { id: 3, name: 'David K.', role: 'Lead Dev', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=600&fit=crop' },
    { id: 4, name: 'Lily W.', role: 'Marketing', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=600&fit=crop' },
    { id: 5, name: 'Chris P.', role: 'Backend', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=600&fit=crop' },
    { id: 6, name: 'Alice R.', role: 'Frontend', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&h=600&fit=crop' },
    { id: 7, name: 'James L.', role: 'DevOps', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=600&fit=crop' },
    { id: 8, name: 'Sophie M.', role: 'UX Writer', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=600&fit=crop' },
    { id: 9, name: 'Robert B.', role: 'Sales', image: 'https://images.unsplash.com/photo-1504257404764-5a9899382b3d?q=80&w=400&h=600&fit=crop' },
    {
        id: 10,
        name: 'Elena G.',
        role: 'QA Engineer',
        image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&h=600&fit=crop',
    },
    {
        id: 11,
        name: 'Marcus T.',
        role: 'Mobile Dev',
        image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400&h=600&fit=crop',
    },
    {
        id: 12,
        name: 'Nina H.',
        role: 'Creative Dir.',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&h=600&fit=crop',
    },
    {
        id: 13,
        name: 'Julian S.',
        role: 'Data Scientist',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=600&fit=crop&sig=13',
    },
    {
        id: 14,
        name: 'Maya C.',
        role: 'SEO Specialist',
        image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400&h=600&fit=crop',
    },
    {
        id: 15,
        name: 'Leo N.',
        role: 'Product Manager',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&h=600&fit=crop',
    },
    { id: 16, name: 'Emma D.', role: 'Support Lead', image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&h=600&fit=crop' },
    { id: 17, name: 'Oscar P.', role: 'Fullstack', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&h=600&fit=crop' },
    {
        id: 18,
        name: 'Zoe K.',
        role: 'Brand Lead',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&h=600&fit=crop&sig=18',
    },
    {
        id: 19,
        name: 'Félix L.',
        role: 'Motion Design',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=600&fit=crop&sig=19',
    },
    { id: 20, name: 'Clara S.', role: 'Finance', image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=400&h=600&fit=crop' },
];

export const TeamCarousel: React.FC = () => {
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

    return (
        <div className="group relative mb-32 w-full">
            <div className="absolute top-1/2 left-8 z-30 hidden -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:block">
                <button
                    onClick={() => scroll('left')}
                    className="rounded-full border border-white/10 bg-white/10 p-4 text-white shadow-2xl backdrop-blur-xl transition-all hover:bg-white/20 active:scale-90"
                >
                    <ChevronLeft size={28} />
                </button>
            </div>

            <div className="absolute top-1/2 right-8 z-30 hidden -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:block">
                <button
                    onClick={() => scroll('right')}
                    className="rounded-full border border-white/10 bg-white/10 p-4 text-white shadow-2xl backdrop-blur-xl transition-all hover:bg-white/20 active:scale-90"
                >
                    <ChevronRight size={28} />
                </button>
            </div>

            <div
                ref={scrollRef}
                className="no-scrollbar flex snap-x snap-mandatory items-center gap-6 overflow-x-auto overflow-y-hidden px-[15vw] py-24 md:gap-12 md:px-[30vw]"
                style={{ scrollBehavior: 'smooth' }}
            >
                {TEAM_MEMBERS.map((member) => (
                    <TeamCard key={member.id} member={member} containerRef={scrollRef} />
                ))}
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-32 bg-gradient-to-r from-[#050505] to-transparent md:w-64"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-32 bg-gradient-to-l from-[#050505] to-transparent md:w-64"></div>
        </div>
    );
};

const TeamCard: React.FC<{ member: TeamMember; containerRef: React.RefObject<HTMLDivElement> }> = ({ member, containerRef }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [style, setStyle] = useState({});

    useEffect(() => {
        const updateStyle = () => {
            if (!cardRef.current || !containerRef.current) return;
            const container = containerRef.current;
            const card = cardRef.current;
            const containerCenter = container.scrollLeft + container.offsetWidth / 2;
            const cardCenter = card.offsetLeft + card.offsetWidth / 2;
            const distanceFromCenter = cardCenter - containerCenter;
            const normalizedDistance = distanceFromCenter / (container.offsetWidth / 2);

            const rotationY = normalizedDistance * -20;
            const translateY = Math.abs(normalizedDistance) * 40;
            const scale = 1 - Math.abs(normalizedDistance) * 0.2;
            const opacity = 1 - Math.abs(normalizedDistance) * 0.4;

            setStyle({
                transform: `perspective(1200px) rotateY(${rotationY}deg) translateY(${translateY}px) scale(${scale})`,
                opacity: Math.max(0.4, opacity),
                zIndex: Math.round(40 - Math.abs(distanceFromCenter / 10)),
            });
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', updateStyle);
            updateStyle();
        }
        return () => container?.removeEventListener('scroll', updateStyle);
    }, [containerRef]);

    return (
        <div ref={cardRef} className="flex-shrink-0 cursor-pointer snap-center">
            <div
                className="group/card relative h-64 w-48 overflow-hidden rounded-[2.5rem] border-2 border-white/10 bg-[#111] shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 md:h-96 md:w-72"
                style={style}
            >
                <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover grayscale-[60%] transition-all duration-700 group-hover/card:scale-110 group-hover/card:grayscale-0"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 opacity-0 transition-all duration-500 group-hover/card:opacity-100">
                    <p className="translate-y-4 text-xl font-bold text-white transition-transform duration-500 group-hover/card:translate-y-0">
                        {member.name}
                    </p>
                    <p className="translate-y-4 text-sm text-gray-400 transition-transform delay-75 duration-500 group-hover/card:translate-y-0">
                        {member.role}
                    </p>
                </div>
            </div>
        </div>
    );
};
