const base_URL = "https://dummyjson.com/products";

export const getProductAlls = async () => {
  try {
    const options = {
      method: "GET",
    };
    const response = await fetch(base_URL, options);
    if (!response.ok) {
      throw new Error(
        response.statusText || "no pudimos recuperar la informacion"
      );
    }
    const data = await response.json();
    return data.products;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
