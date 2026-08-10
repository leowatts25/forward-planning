import { createClient } from "@sanity/client";
import fs from "fs";
import path from "path";
import {
  team,
  blogPosts,
  portfolio,
  services,
} from "../src/lib/content";

const token = process.env.SANITY_WRITE_TOKEN;
if (!token) {
  throw new Error("Missing SANITY_WRITE_TOKEN env var");
}

const client = createClient({
  projectId: "uhovvxal",
  dataset: "production",
  apiVersion: "2026-01-01",
  token,
  useCdn: false,
});

const publicDir = path.join(__dirname, "..", "public");

async function uploadImage(relativePath: string) {
  const filePath = path.join(publicDir, relativePath.replace(/^\//, ""));
  const buffer = fs.readFileSync(filePath);
  const asset = await client.assets.upload("image", buffer, {
    filename: path.basename(filePath),
  });
  return {
    _type: "image" as const,
    asset: { _type: "reference" as const, _ref: asset._id },
  };
}

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function toPortableText(paragraphs: string[]) {
  return paragraphs.map((text) => ({
    _type: "block",
    _key: Math.random().toString(36).slice(2, 10),
    style: "normal",
    children: [
      {
        _type: "span",
        _key: Math.random().toString(36).slice(2, 10),
        text,
        marks: [],
      },
    ],
    markDefs: [],
  }));
}

async function migrateTeam() {
  for (let i = 0; i < team.length; i++) {
    const member = team[i];
    const doc: Record<string, unknown> = {
      _id: `teamMember-${member.slug}`,
      _type: "teamMember",
      name: member.name,
      role: member.role,
      bio: member.bio,
      credentials: member.credentials ?? [],
      photoCredit: member.photoCredit ?? "",
      order: i,
    };
    if (member.photo) {
      doc.photo = await uploadImage(member.photo);
    }
    await client.createOrReplace(doc as never);
    console.log(`Migrated team member: ${member.name}`);
  }
}

async function migrateBlogPosts() {
  for (const post of blogPosts) {
    const doc: Record<string, unknown> = {
      _id: `blogPost-${post.slug}`,
      _type: "blogPost",
      title: post.title,
      slug: { _type: "slug", current: post.slug },
      date: post.date,
      author: post.author,
      excerpt: post.excerpt,
      body: toPortableText(post.body),
    };
    if (post.externalSource) {
      doc.externalSource = post.externalSource;
    }
    await client.createOrReplace(doc as never);
    console.log(`Migrated blog post: ${post.title}`);
  }
}

async function migratePortfolio() {
  for (let i = 0; i < portfolio.length; i++) {
    const item = portfolio[i];
    const doc: Record<string, unknown> = {
      _id: `portfolioItem-${item.slug}`,
      _type: "portfolioItem",
      name: item.name,
      slug: { _type: "slug", current: item.slug },
      category: item.category,
      summary: item.summary,
      details: item.details,
      imageAlt: item.imageAlt,
      imageCredit: item.imageCredit,
      order: i,
    };
    if (item.image) {
      doc.image = await uploadImage(item.image);
    }
    if (item.featuredIn) doc.featuredIn = item.featuredIn;
    if (item.partners) doc.partners = item.partners;
    if (item.video) doc.video = item.video;
    await client.createOrReplace(doc as never);
    console.log(`Migrated portfolio item: ${item.name}`);
  }
}

async function migrateServices() {
  for (let i = 0; i < services.length; i++) {
    const svc = services[i];
    const doc = {
      _id: `service-${svc.slug}`,
      _type: "service",
      title: svc.title,
      slug: { _type: "slug", current: slugify(svc.slug) },
      description: svc.description,
      format: svc.format,
      bestFor: svc.bestFor,
      icon: svc.icon,
      order: i,
    };
    await client.createOrReplace(doc as never);
    console.log(`Migrated service: ${svc.title}`);
  }
}

async function main() {
  await migrateTeam();
  await migrateBlogPosts();
  await migratePortfolio();
  await migrateServices();
  console.log("Migration complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
