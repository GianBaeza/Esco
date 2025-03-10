export const formatPrecio = (num: string | number) => {
  const precio = Number(num).toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });
  return precio;
};
