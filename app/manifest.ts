import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Drinking Games",
    short_name: "Drinking Games",
    description: "Drinking Games",
    start_url: "/",
    display_override: ["browser", "minimal-ui", "fullscreen"],
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/quby.webp",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/quby.webp",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/quby.webp",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "/quby.webp",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
