import { backend_secret_key, revalidationTime } from "../constant";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

// get all the categories as well as subcategories list
export async function getCategoriesAndSubcategories() {
  const res = await fetch(`${backendUrl}/api/categories-subcategories`, {
    headers: {
      "Content-Type": "application/json",
      "X-Frontend-Secret-Key": backend_secret_key, // Add your secret key here
    },
    next: { revalidate: revalidationTime },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// get all the categories list
export async function getCategories() {
  const res = await fetch(`${backendUrl}/api/categories`, {
    headers: {
      "Content-Type": "application/json",
      "X-Frontend-Secret-Key": backend_secret_key, // Add your secret key here
    },
    next: { revalidate: revalidationTime },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// get all the sub categories list under a specified category
export async function getSubCategoriesByCategory(category_slug) {
  const res = await fetch(
    `${backendUrl}/api/subcategories-by-category/${category_slug}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-Frontend-Secret-Key": backend_secret_key, // Add your secret key here
      },
      next: { revalidate: revalidationTime },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// get all the occasion list
export async function getOccasions() {
  const res = await fetch(`${backendUrl}/api/occasions`, {
    headers: {
      "Content-Type": "application/json",
      "X-Frontend-Secret-Key": backend_secret_key, // Add your secret key here
    },
    next: { revalidate: revalidationTime },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// get all the recipients list
export async function getRecipients() {
  const res = await fetch(`${backendUrl}/api/recipients`, {
    headers: {
      "Content-Type": "application/json",
      "X-Frontend-Secret-Key": backend_secret_key, // Add your secret key here
    },
    next: { revalidate: revalidationTime },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// get the product details
export async function getProductDetail(slug) {
  const res = await fetch(`${backendUrl}/api/products/${slug}`, {
    headers: {
      "Content-Type": "application/json",
      "X-Frontend-Secret-Key": backend_secret_key, // Add your secret key here
    },
    next: { revalidate: revalidationTime },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// get reviews by product
export async function getReviews(product_slug) {
  const res = await fetch(`${backendUrl}/api/reviews/${product_slug}`, {
    headers: {
      "Content-Type": "application/json",
      "X-Frontend-Secret-Key": backend_secret_key, // Add your secret key here
    },
    next: { revalidate: revalidationTime },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getFeaturedProducts() {
  const res = await fetch(`${backendUrl}/api/featured-products`, {
    headers: {
      "Content-Type": "application/json",
      "X-Frontend-Secret-Key": backend_secret_key, // Add your secret key here
    },
    next: { revalidate: revalidationTime },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getProducts(query) {
  const res = await fetch(
    `${backendUrl}/api/products/?${new URLSearchParams(query)}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-Frontend-Secret-Key": backend_secret_key, // Add your secret key here
      },
      next: { revalidate: revalidationTime },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
