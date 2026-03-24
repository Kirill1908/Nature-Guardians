export type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  social: {
    facebook: string;
    twitter: string;
    linkedin: string;
  };
};


export const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Leonard John Davies",
    role: "Cofounder, CEO",
    image: "/images/team/leonard_john_davies.jpg",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://x.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 2,
    name: "Francis Weber",
    role: "Vice Chairman",
    image: "/images/team/francis_weber.jpg",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://x.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 3,
    name: "Kyla Obrien",
    role: "Head of Authority",
    image: "/images/team/kyla_obrien.jpg",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://x.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 4,
    name: "Adrian Dixon",
    role: "Support Executive",
    image: "/images/team/adrian_dixon.jpg",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://x.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 5,
    name: "Freddy Busby",
    role: "Project Manager",
    image: "/images/team/freddy_busby.jpg",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://x.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 6,
    name: "Dale Banks",
    role: "Accountant, Finance",
    image: "/images/team/dale_banks.jpg",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://x.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 7,
    name: "Miriam Middleton",
    role: "Cofounder, CEO",
    image: "/images/team/miriam_middleton.jpg",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://x.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 8,
    name: "Ellen Walton",
    role: "Vice Chairman",
    image: "/images/team/ellen_walton.jpg",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://x.com",
      linkedin: "https://linkedin.com",
    },
  },
];