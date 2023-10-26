import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.REACT_APP_SANITY_PROJECT_ID;
const token = process.env.REACT_APP_SANITY_TOKEN;

if (!projectId || !token) {
  throw new Error(
    "Sanity project ID or token is missing. Please check your environment variables."
  );
}

const client = createClient({
  projectId,
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
