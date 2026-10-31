import catalog from "../../../../shared/products.json";

export const getPreviewProductId = (name) =>
  `preview-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;

export const catalogPreview = catalog.map((product) => ({
  ...product,
  _id: getPreviewProductId(product.name),
  image: {
    ...product.image,
    url: `/products/${product.image.filename}`,
  },
}));

export const getPreviewProductById = (id) =>
  catalogPreview.find((product) => product._id === id);
