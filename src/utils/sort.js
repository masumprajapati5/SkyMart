export const sortProducts = (products, sortType) => {
  const sorted = [...products];

  switch (sortType) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);

    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);

    case "rating-desc":
      return sorted.sort((a, b) => b.rating.rate - a.rating.rate);

    case "rating-asc":
      return sorted.sort((a, b) => a.rating.rate - b.rating.rate);

    default:
      return sorted;
  }
};