import { client } from "./client";
import { urlForImage } from "./image";
import {
  teamMembersQuery,
  servicesQuery,
  portfolioItemsQuery,
  blogPostsQuery,
  blogPostBySlugQuery,
} from "./queries";

type SanityImage = {
  asset?: { _ref: string; _type: "reference" };
};

function resolveImage(image?: SanityImage, width = 800) {
  if (!image?.asset) return "";
  return urlForImage(image).width(width).url();
}

export type TeamMemberDoc = {
  _id: string;
  name: string;
  role: string;
  bio: string;
  credentials?: string[];
  photo?: SanityImage;
  photoCredit?: string;
};

export async function getTeamMembers() {
  const members = await client.fetch<TeamMemberDoc[]>(teamMembersQuery);
  return members.map((m) => ({
    slug: m._id,
    name: m.name,
    role: m.role,
    bio: m.bio,
    credentials: m.credentials,
    photo: resolveImage(m.photo, 400),
    photoCredit: m.photoCredit,
  }));
}

export type ServiceDoc = {
  _id: string;
  title: string;
  description: string;
  format: string;
  bestFor: string;
  icon: "compass" | "partnership" | "chart" | "target";
};

export async function getServices() {
  const services = await client.fetch<ServiceDoc[]>(servicesQuery);
  return services.map((s) => ({
    slug: s._id,
    title: s.title,
    description: s.description,
    format: s.format,
    bestFor: s.bestFor,
    icon: s.icon,
  }));
}

export type PortfolioItemDoc = {
  _id: string;
  name: string;
  category: string;
  summary: string;
  details?: string[];
  image?: SanityImage;
  imageAlt?: string;
  imageCredit?: string;
  featuredIn?: { label: string; url: string }[];
  partners?: { name: string; url: string; note: string }[];
  video?: { youtubeId: string; title: string };
};

export async function getPortfolioItems() {
  const items = await client.fetch<PortfolioItemDoc[]>(portfolioItemsQuery);
  return items.map((item) => ({
    slug: item._id,
    name: item.name,
    category: item.category,
    summary: item.summary,
    details: item.details ?? [],
    image: resolveImage(item.image, 1000),
    imageAlt: item.imageAlt ?? "",
    imageCredit: item.imageCredit ?? "",
    featuredIn: item.featuredIn,
    partners: item.partners,
    video: item.video,
  }));
}

export type BlogPostListDoc = {
  _id: string;
  title: string;
  slug: string;
  date: string;
  author: string;
  excerpt: string;
};

export async function getBlogPosts() {
  return client.fetch<BlogPostListDoc[]>(blogPostsQuery);
}

export type PortableTextBlock = {
  _type: string;
  _key: string;
  style?: string;
  children?: { _type: string; _key: string; text: string; marks?: string[] }[];
  markDefs?: unknown[];
};

export type BlogPostDoc = BlogPostListDoc & {
  body: PortableTextBlock[];
  externalSource?: { label: string; url: string };
};

export async function getBlogPostBySlug(slug: string) {
  return client.fetch<BlogPostDoc | null>(blogPostBySlugQuery, { slug });
}
