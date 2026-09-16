import teamJson from "../../content/team.json";

export type TeamMember = {
  id: string;
  firstName: string;
  initials: string;
  role: string;
  photo?: string;
  email?: string;
  instagram_handle?: string;
  bio?: string;
  expertise?: {
    title: string;
    blockTitle?: string;
    description: string;
  };
  specialties?: string[];
  socials?: Record<string, string>;
};

export const team: TeamMember[] = teamJson as unknown as TeamMember[];
