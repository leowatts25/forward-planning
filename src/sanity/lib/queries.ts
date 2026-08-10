export const teamMembersQuery = `*[_type == "teamMember"] | order(order asc) {
  _id,
  name,
  role,
  bio,
  credentials,
  photo,
  photoCredit
}`;

export const servicesQuery = `*[_type == "service"] | order(order asc) {
  _id,
  title,
  description,
  format,
  bestFor,
  icon
}`;

export const portfolioItemsQuery = `*[_type == "portfolioItem"] | order(order asc) {
  _id,
  name,
  category,
  summary,
  details,
  image,
  imageAlt,
  imageCredit,
  featuredIn,
  partners,
  video
}`;

export const blogPostsQuery = `*[_type == "blogPost"] | order(date desc) {
  _id,
  title,
  "slug": slug.current,
  date,
  author,
  excerpt
}`;

export const blogPostBySlugQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  date,
  author,
  excerpt,
  body,
  externalSource
}`;
