export const siteConfig = {
  name: "Forward Planning",
  tagline: "From Idea to Impact",
  description:
    "Strategic consulting for entrepreneurs and nonprofits — turning ideas into sustainable, measurable impact.",
  email: "doric@forwardplanning.biz",
  phone: "(214) 502-6472",
  phoneHref: "+12145026472",
  address: "607 N. Buckner Blvd., Dallas, TX 75218",
  facebook: "https://www.facebook.com/forwardplanning.biz/",
  linkedin: "https://www.linkedin.com/company/forwardplanning/",
  podcast: "https://www.reinvent4good.org/",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "How We Help" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export type Service = {
  slug: string;
  title: string;
  description: string;
  bestFor: string;
  format: string;
};

export const services: Service[] = [
  {
    slug: "strategic-advisory",
    title: "Strategic Advisory & Leadership Support",
    description:
      "With deep experience in executive management, business strategy, and global team leadership, we work alongside you to clarify direction, strengthen execution, and drive meaningful outcomes.",
    format: "Ongoing advisory or project-based",
    bestFor: "Leaders, executives, scaling organizations",
  },
  {
    slug: "entrepreneur-mentorship",
    title: "Entrepreneur Mentorship & Partnership",
    description:
      "We act as hands-on partners, bringing templates, financial expertise, and real-world experience to help you avoid costly mistakes and move faster with confidence.",
    format: "1:1 sessions or longer-term partnership",
    bestFor: "Early-stage founders, career pivoters",
  },
  {
    slug: "impact-measurement",
    title: "Impact & Success Measurement",
    description:
      "Many organizations struggle to clearly demonstrate their impact. We help you define, measure, and communicate the difference you're making — so you can grow support and scale effectively.",
    format: "Metrics, storytelling, and validation frameworks",
    bestFor: "Nonprofits, social enterprises",
  },
  {
    slug: "situational-assessment",
    title: "Situational Assessment & Strategic Design",
    description:
      "Before you can move forward, you need to understand where you are. We help uncover your assets, challenges, and opportunities — then design a clear path toward your goals.",
    format: "Deep-dive assessment + actionable roadmap",
    bestFor: "Anyone at a crossroads or seeking direction",
  },
];

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  credentials?: string[];
};

export const team: TeamMember[] = [
  {
    slug: "doric-earle",
    name: "Dr. Doric Earle",
    role: "Founder & Principal Consultant",
    bio: "After 30 years managing large technology consultancies, Dr. Earle reinvented himself around a single question: how do you use economic development, communication, and community engagement to unlock potential in underserved communities? He is a Professor of Practice at SMU's Meadows School of the Arts (Corporate Communication & Public Affairs), Director of Nonprofit & Arts Leadership Advisory, Co-Director of the SMU Impact Lab, and Director of the SMU-in-London program. He co-founded Restorative Farms — an award-winning, USDA-certified urban farm training and employing South Dallas residents — where he serves as volunteer CFO, and Dallas Unity Fund LLC, a community-based real estate platform. He also hosts the podcast Reinvent Yourself For Good. In 2023 he received the UN Day Global Leadership Award. He serves on the boards of Frazier Revitalization, Bridge Lacrosse, Green Careers Dallas, and Miles of Freedom.",
    credentials: [
      "B.S. Management, Syracuse University",
      "M.B.A. Strategic Marketing, University of Connecticut",
      "Ph.D. Public Affairs, University of Texas at Dallas",
    ],
  },
  {
    slug: "leo-watts",
    name: "Leo Watts",
    role: "Entrepreneurial Director",
    bio: "Leo is a master's student in International Development & Human Rights at the University of Andalucía, based in Seville, Spain. He founded Cooperatr.com, connecting European SMEs with international development funding, and previously worked as a public-private development officer for Winrock International. He studied at NYU's Gallatin School and the University of Texas at Dallas, and is fluent in Spanish, Portuguese, Italian, French, and English.",
  },
  {
    slug: "aidan-earle",
    name: "Aidan Earle",
    role: "Design and Marketing Director",
    bio: "Aidan is a Seattle-based graphic designer specializing in digital marketing and creative design, with expertise in animation, illustration, and 3D modeling.",
  },
];

export type PortfolioItem = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  details: string[];
};

export const portfolio: PortfolioItem[] = [
  {
    slug: "restorative-farms",
    name: "Restorative Farms",
    category: "Urban Agriculture & Economic Development",
    summary:
      "An award-winning urban farm system training, hiring, and paying members of the South Dallas community to grow fresh food and build a resilient local food economy.",
    details: [
      "USDA certified",
      "Partners with DISD student interns and Dallas College",
      "2026 Texas Environmental Excellence Awards finalist",
      "Co-founded with Dr. Owen Lynch, Brad Boa, and Tyrone Day; Dr. Earle serves as volunteer CFO",
    ],
  },
  {
    slug: "hatcher-station-farms",
    name: "Hatcher Station Community Garden Training Farm",
    category: "Urban Agriculture & Workforce Training",
    summary:
      "A DART-affiliated community garden and training farm supporting hands-on agricultural education in South Dallas.",
    details: [
      "Developed in partnership with DART",
      "Focused on hands-on training and community food access",
    ],
  },
  {
    slug: "the-hatchery",
    name: "The Hatchery",
    category: "Small Business Incubation",
    summary:
      "A retail entrepreneur storefront designed to help launch small, local retail businesses with lower overhead and hands-on support.",
    details: ["In development", "Retail incubation model for local entrepreneurs"],
  },
];
