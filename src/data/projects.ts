export type ProjectCategory =
  | "Branding"
  | "Vidéo"
  | "Photo"
  | "Social media"
  | "Motion";

export type ProjectMedia =
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string; poster?: string }
  | { type: "embed"; url: string; poster?: string; caption?: string };

export type Campaign = {
  id: string;
  title: string;
  credits?: string;
  media: ProjectMedia[];
};

export type Project = {
  id: string;
  title: string;
  tags: ProjectCategory[];
  decoColor: "lime" | "gray" | "black";
  client?: string;
  year?: string;
  description?: string;
  credits?: string;
  cover?: ProjectMedia;
  logo?: string;
  gallery: ProjectMedia[];
  campaigns: Campaign[];
};

export const projectFilters: Array<"Tous" | ProjectCategory> = [
  "Tous",
  "Branding",
  "Vidéo",
  "Photo",
  "Social media",
];
