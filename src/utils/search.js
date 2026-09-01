export const filterByName = (products, searchTerm) => {
  const term = searchTerm.toLowerCase().trim();
  return products.filter((p) => p.title.toLowerCase().includes(term));
};