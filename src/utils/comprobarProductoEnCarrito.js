export const comprobarProductoEnCarrito = (id, productos) => {
  const resultado = productos.find((productoCarrito) => productoCarrito.id === id);
  return resultado ? true : false;
};
