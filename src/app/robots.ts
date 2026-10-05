import type { MetadataRoute } from "next";

// DEMO: se bloquea todo el rastreo.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
  };
}
