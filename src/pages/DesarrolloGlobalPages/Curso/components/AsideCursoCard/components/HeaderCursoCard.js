export const HeaderCursoCard = ({ curso }) => {
  return (
    <div className="flex items-center justify-around py-4 bg-yellow-200">
      <div className="flex items-center gap-3 px-2 py-1 text-white rounded-lg bg-danger">
        <p className="text-4xl font-normal">{curso.descuento}%</p>
        <div className="flex flex-col">
          <p className="text-sm">Normal</p>
          <span className="text-sm italic line-through ">S/{curso.precioSinDescuento.toFixed(2)}</span>
        </div>
      </div>
      <p className="text-3xl font-bold text-dark">S/{curso.precioConDescuento.toFixed(2)}</p>
    </div>
  );
};
