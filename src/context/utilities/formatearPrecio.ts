export const formatPrecio = (num) => {
    const precio = Number(num).toLocaleString("es-AR", {
        style: "currency",
        currency: "ARS"
    });
    return precio;
};
