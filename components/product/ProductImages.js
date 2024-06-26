"use client";

import { normalizeImageUrl } from "@/lib";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function ProductImages({ main_image, other_images }) {
  const mainImage = [
    {
      original: normalizeImageUrl(main_image),
      originalAlt: "product image",
      thumbnail: normalizeImageUrl(main_image),
      thumbnailAlt: "product image",
      thumbnailHeight: 40,
      thumbnailWidth: 40,
    },
  ];

  const otherImages = other_images.map((item) => ({
    original: normalizeImageUrl(item.image),
    originalAlt: item.description || "product image",
    thumbnail: normalizeImageUrl(item.image),
    thumbnailAlt: item.description || "product image",
    thumbnailHeight: 40,
    thumbnailWidth: 40,
  }));

  // Combine the predefined images with the mapped API images
  const allImages = mainImage.concat(otherImages);
  return <ImageGallery items={allImages} />;
}
