import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "Forward Planning",
  projectId: "uhovvxal",
  dataset: "production",
  schema: { types: schemaTypes },
  plugins: [structureTool(), visionTool()],
});
