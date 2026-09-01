export const getProductsByCategory = (products, category) => {
  return products.filter((ele) => ele.category === category)
}