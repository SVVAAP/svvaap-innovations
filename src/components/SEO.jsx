import { useEffect } from "react";

const BASE_URL = "https://www.svvaap.in";

function upsertMetaByName(name, content) {
  if (!content) return;
  let tag = document.head.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertMetaByProperty(property, content) {
  if (!content) return;
  let tag = document.head.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertCanonical(url) {
  let link = document.head.querySelector("link[rel='canonical']");
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

function upsertSchema(schema) {
  const id = "route-schema-org";
  let script = document.getElementById(id);
  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schema);
}

export default function SEO({
  title,
  description,
  path = "/",
  keywords,
  image = `${BASE_URL}/img/21xE_social.png`,
  noindex = false,
  schema,
}) {
  useEffect(() => {
    const canonicalUrl = `${BASE_URL}${path}`;
    document.title = title;

    upsertMetaByName("description", description);
    upsertMetaByName("keywords", keywords);
    upsertMetaByName("robots", noindex ? "noindex, nofollow" : "index, follow");
    upsertMetaByName("twitter:card", "summary_large_image");
    upsertMetaByName("twitter:title", title);
    upsertMetaByName("twitter:description", description);
    upsertMetaByName("twitter:image", image);

    upsertMetaByProperty("og:type", "website");
    upsertMetaByProperty("og:site_name", "Svvaap Innovations");
    upsertMetaByProperty("og:title", title);
    upsertMetaByProperty("og:description", description);
    upsertMetaByProperty("og:url", canonicalUrl);
    upsertMetaByProperty("og:image", image);

    upsertCanonical(canonicalUrl);

    if (schema) {
      upsertSchema(schema);
    }
  }, [title, description, path, keywords, image, noindex, schema]);

  return null;
}
