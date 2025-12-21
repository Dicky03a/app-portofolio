
import React from 'react';

interface TeamMember {
  id: number;
  image: string;
  name: string;
  role: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  { id: 1, name: "Sarah J.", role: "Product Designer", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=600&fit=crop" },
  { id: 2, name: "Mark V.", role: "CTO", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=600&fit=crop" },
  { id: 3, name: "David K.", role: "Lead Dev", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=600&fit=crop" },
  { id: 4, name: "Lily W.", role: "Marketing", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=600&fit=crop" },
  { id: 5, name: "Chris P.", role: "Backend", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=600&fit=crop" },
  { id: 6, name: "Alice R.", role: "Frontend", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&h=600&fit=crop" },
  { id: 7, name: "James L.", role: "DevOps", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=600&fit=crop" },
  { id: 8, name: "Sophie M.", role: "UX Writer", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=400&h=600&fit=crop" },
  { id: 9, name: "Robert B.", role: "Sales", image: "https://images.unsplash.com/photo-1504257404764-5a9899382b3d?q=80&w=400&h=600&fit=crop" },
  { id: 10, name: "Elena G.", role: "QA Engineer", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&h=600&fit=crop" },
  { id: 11, name: "Marcus T.", role: "Mobile Dev", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400&h=600&fit=crop" },
  { id: 12, name: "Nina H.", role: "Creative Dir.", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&h=600&fit=crop" },
  { id: 13, name: "Julian S.", role: "Data Scientist", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=600&fit=crop&sig=13" },
  { id: 14, name: "Maya C.", role: "SEO Specialist", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400&h=600&fit=crop" },
  { id: 15, name: "Leo N.", role: "Product Manager", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&h=600&fit=crop" },
  { id: 16, name: "Emma D.", role: "Support Lead", image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&h=600&fit=crop" },
  { id: 17, name: "Oscar P.", role: "Fullstack", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&h=600&fit=crop" },
  { id: 18, name: "Zoe K.", role: "Brand Lead", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&h=600&fit=crop&sig=18" },
  { id: 19, name: "Félix L.", role: "Motion Design", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=600&fit=crop&sig=19" },
  { id: 20, name: "Clara S.", role: "Finance", image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=400&h=600&fit=crop" },
];

export const TeamCarousel: React.FC = () => {
  return (
    <div className="w-full mb-32">
      <div className="flex items-center gap-6 md:gap-12 px-4 md:px-8 py-24 overflow-x-auto no-scrollbar">
        {TEAM_MEMBERS.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="flex-shrink-0 cursor-pointer">
      <div className="w-48 h-64 md:w-72 md:h-96 rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-2 border-white/10 bg-[#111] group/card relative transition-all duration-300">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover grayscale-[60%] group-hover/card:grayscale-0 transition-all duration-700 group-hover/card:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
          <p className="text-white font-bold text-xl translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">{member.name}</p>
          <p className="text-gray-400 text-sm translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500 delay-75">{member.role}</p>
        </div>
      </div>
    </div>
  );
};
