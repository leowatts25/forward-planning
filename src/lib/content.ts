export const siteConfig = {
  name: "Forward Planning",
  tagline: "From Idea to Impact",
  description:
    "Strategic consulting for entrepreneurs and nonprofits — turning ideas into sustainable, measurable impact.",
  email: "doric@forwardplanning.biz",
  facebook: "https://www.facebook.com/forwardplanning.biz/",
  linkedin: "https://www.linkedin.com/company/forwardplanning/",
  podcast: "https://www.reinvent4good.org/",
  heroImage: "/images/hero-dallas-skyline.jpg",
  heroImageAlt: "Downtown Dallas skyline with the Arts District",
  heroImageCredit: "Gattacal / Wikimedia Commons, CC BY-SA 4.0",
  teamBannerImage: "/images/team-dallas-birdseye.jpg",
  teamBannerImageAlt: "Klyde Warren Park, a green public park in downtown Dallas",
  teamBannerImageCredit: "Joe Mabel / Wikimedia Commons, CC BY-SA 3.0",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "How We Help" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/team", label: "Team" },
  { href: "/blog", label: "Blog" },
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
    slug: "owen-lynch",
    name: "Dr. Owen Lynch",
    role: "Co-Founder & Executive Director, Restorative Farms",
    bio: "Dr. Lynch is an Associate Professor of Corporate Communication & Public Affairs at SMU's Meadows School of the Arts and a Senior Research Fellow at the Hunt Institute for Engineering & Humanity. He co-founded Restorative Farms in 2017, building on a decade of research into food deserts and urban Agri-Systems, and now serves as its Executive Director. He previously directed Get Healthy Dallas, a nonprofit addressing food deserts and economic development in South Dallas. His research examines how systems, organizations, and communities are shaped through everyday discourse, using asset-based community development methods.",
    credentials: [
      "Associate Professor, SMU Meadows School of the Arts",
      "Senior Research Fellow, Hunt Institute for Engineering & Humanity",
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
  image: string;
  imageAlt: string;
  imageCredit: string;
  featuredIn?: { label: string; url: string }[];
  partners?: { name: string; url: string; note: string }[];
  video?: { youtubeId: string; title: string };
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
    image: "/images/portfolio-restorative-farms.jpg",
    imageAlt: "Raised garden beds at an organic urban farm",
    imageCredit: "SamHolt6 / Wikimedia Commons, CC BY-SA 4.0",
    video: {
      youtubeId: "4u-QHf2-VeY",
      title: '"Grow a Better Dallas" — Official Trailer',
    },
    featuredIn: [
      {
        label: "SMU News — \"Restorative Farms cultivates prosperity with urban farming\"",
        url: "https://www.smu.edu/news/latest/restorative-farms",
      },
      {
        label: "D Magazine — \"Why Dallas Sees a Future in Urban Farming\"",
        url: "https://www.dmagazine.com/food-drink/2023/12/why-dallas-sees-a-future-in-urban-farming/",
      },
      {
        label: "CBS News Texas — \"Farming for the Future: Healing Through Soil and Second Chances\"",
        url: "https://www.cbsnews.com/texas/news/farming-for-the-future-healing-through-soil-and-second-chances/",
      },
      {
        label: "NBC 5 Dallas-Fort Worth — \"Restorative Farms cultivating crops, entrepreneurs in South Dallas\"",
        url: "https://www.nbcdfw.com/news/local/restorative-farms-cultivating-crops-entrepreneurs-in-south-dallas/3428633/",
      },
      {
        label: "\"Grow a Better Dallas\" — short documentary (2024)",
        url: "https://www.imdb.com/title/tt32187130/",
      },
    ],
    partners: [
      {
        name: "Tito's Handmade Vodka",
        url: "https://www.titosvodka.com/love-titos",
        note: "Supported Restorative Farms through Tito's Block to Block community farm-building program.",
      },
      {
        name: "Kosmos Energy",
        url: "https://www.kosmosenergy.com/spotlight/fighting-food-insecurity-with-restorative-farms-in-dallas/",
        note: "Backs the Kosmos TAPkit hydroponic system and a workforce internship/fellowship program.",
      },
      {
        name: "Whole Foods Market",
        url: "https://www.wholefoodsmarket.com/",
        note: "Dallas team members regularly volunteer on the farm.",
      },
    ],
  },
  {
    slug: "smu-impact-lab",
    name: "SMU Impact Lab",
    category: "Social Impact Investing & Venture Diligence",
    summary:
      "A student-led diligence program at SMU that evaluates real companies and social ventures, turning classroom rigor into investment recommendations and mentorship for founders.",
    details: [
      "Co-Directed by Dr. Doric Earle",
      "Backed by the Phillips Foundation for social, creative, and arts entrepreneurship",
      "Combines coursework, workshops, and an active Advisory Board of Dallas leaders",
      "Cross-disciplinary: draws faculty from Cox, Lyle, and Meadows",
    ],
    image: "/images/portfolio-smu-impact-lab.jpg",
    imageAlt: "Meadows School of the Arts building at SMU",
    imageCredit: "Wikimedia Commons, public domain",
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
    image: "/images/portfolio-hatcher-station.jpg",
    imageAlt: "Rows of crops growing at an urban training farm",
    imageCredit: "SamHolt6 / Wikimedia Commons, CC BY-SA 4.0",
  },
  {
    slug: "the-hatchery",
    name: "The Hatchery",
    category: "Small Business Incubation",
    summary:
      "A retail entrepreneur storefront designed to help launch small, local retail businesses with lower overhead and hands-on support.",
    details: ["In development", "Retail incubation model for local entrepreneurs"],
    image: "/images/portfolio-the-hatchery.jpg",
    imageAlt: "Local shops in the Bishop Arts District, Dallas, Texas",
    imageCredit: "Michael Barera / Wikimedia Commons, CC BY-SA 4.0",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  body: string[];
  externalSource?: { label: string; url: string };
};

export const blogPosts: BlogPost[] = [
  {
    slug: "certificate-course-social-creative-entrepreneurs",
    title:
      "We are developing a Certificate Course for Adult Social and Creative Entrepreneurs",
    date: "2026-03-26",
    author: "Doric Earle",
    excerpt:
      "A new certificate course designed to help individuals turn passion, purpose, and ideas into meaningful impact — and we want your input on what you need to succeed.",
    body: [
      "We're developing a Certificate Course for Adult Social and Creative Entrepreneurs, designed to help individuals turn passion, purpose, and ideas into meaningful impact.",
      "Before we finalize it, we want your input: what do you need to succeed as an entrepreneur? Reach out at Dearle@smu.edu and let us know.",
      "The course is being built around five areas: Foundations (what social and creative entrepreneurship actually means), Purpose & Passion (what motivates you and your core idea), Ideation & Problem-Solving (does your solution solve a problem or shift a perspective?), Your Story & Strengths (your existing assets and personal narrative), and Building Your Framework (Mission, Vision, and Values).",
      "Our goal is for the course to be practical, reflective, and rooted in real-world impact — useful for aspiring and already-established entrepreneurs alike.",
    ],
  },
  {
    slug: "social-entrepreneurship-restorative-farms",
    title: "Social Entrepreneurship in Action: Restorative Farms in Dallas",
    date: "2026-03-26",
    author: "Doric Earle",
    excerpt:
      "Co-founding Restorative Farms in 2017 as a local food intervention in one of the nation's largest food deserts, and what it taught us about inclusive economic development.",
    body: [
      "Poverty, economic opportunity, hunger, education, equity, and environmental sustainability rarely get solved one at a time — in South Dallas, we found they had to be tackled together.",
      "In 2017 I co-founded Restorative Farms as a local food intervention in one of the nation's largest and seemingly intractable food deserts. The goal was to apply systems thinking to build a scalable urban farming model, rather than a single isolated garden.",
      "Central to our approach is a simple philosophy: inclusive economic development means leveraging the assets a community already has, not focusing on what it lacks. Along the way we had to resolve a kind of chicken-and-egg paradox — building local supply and local demand at the same time, so the whole system could become self-sustaining.",
      "Today, Restorative Farms operates the Hatcher Station Training Farm and Community Garden, providing material assistance and hands-on agricultural expertise to strengthen neighborhood health and quality of life.",
    ],
  },
  {
    slug: "launching-reinvent-for-good-podcast",
    title: "We are Launching our Sister PODCAST Site: reinvent4good.org",
    date: "2026-03-26",
    author: "Doric Earle",
    excerpt:
      "Alongside the upcoming book Reinventing Yourself For Good, For Good, we're launching a companion podcast featuring candid conversations about career reinvention.",
    body: [
      "The book comes to life through a companion podcast.",
      "Alongside Reinventing Yourself For Good, For Good, we're launching a companion podcast designed to expand on each chapter — candid, unedited conversations with experts and individuals who have lived through their own reinvention journeys, bringing real stories and practical wisdom directly to listeners.",
      "You can find it at reinvent4good.org.",
    ],
    externalSource: {
      label: "Listen at reinvent4good.org",
      url: "https://www.reinvent4good.org/",
    },
  },
  {
    slug: "manual-reinvent-yourself-for-good",
    title: 'Coming Soon: The Manual on "How to Reinvent Yourself For Good, For Good"',
    date: "2026-01-18",
    author: "Doric Earle",
    excerpt:
      "A practical manual for anyone facing economic uncertainty and looking to become an agent of positive change in their own career.",
    body: [
      "Economic forecasts look grim and national direction feels uncertain — but there's still real opportunity to shape your own trajectory and become an agent of positive change.",
      "Reinventing Yourself For Good, For Good is a practical manual featuring narratives and proven strategies from people who pursued meaningful work and lasting engagement. It was originally conceived around the challenges facing aging corporate professionals — those exhausted by travel and feeling ineffectual — but it now speaks to broader economic disruption too.",
      "It guides readers through leaving unsatisfying positions and transitioning into work aligned with their values, combining academic theory, change models, practical structure, and a design-thinking approach to help you identify your continued value to the world.",
      'Now more than ever, it is time to create your own destiny, and rebuild your own economic and social impact.',
    ],
  },
  {
    slug: "how-to-become-a-successful-social-entrepreneur",
    title: "How to Become a Successful Social Entrepreneur",
    date: "2026-01-18",
    author: "Doric Earle",
    excerpt:
      "A curated read on what separates successful social enterprises from the rest — self-sustaining models, intermediary roles, and creative uses of technology.",
    body: [
      "A read worth sharing: social entrepreneurship blends commerce with social issues, sitting somewhere between government intervention and traditional business to tackle problems that don't attract enough private capital on their own.",
      "The piece outlines a few patterns behind successful social enterprises — building self-sustaining models that reduce reliance on philanthropic funding as they scale, acting as intermediaries between government, nonprofits, and business, and creative uses of technology, from cheaper alternatives to entirely new infrastructure.",
    ],
    externalSource: {
      label: "Read the original article on Entrepreneur.com",
      url: "https://www.entrepreneur.com/",
    },
  },
];
