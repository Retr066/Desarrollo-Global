export const MessageItem = ({ img, nombre, tiempo, mensaje }) => {
  return (
    <div className="col-start-1 col-span-full p-1 rounded-lg snap-end">
      <div className="block">
        <img
          className="inline-block h-6 w-6 mr-1 rounded-full "
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <div className="inline-block items-center justify-center font-bold">Maria</div>
        <span className="inline-block items-center justify-center mx-1">:</span>
        <p className="inline relative break-words ">{mensaje}</p>
        <div className="relative text-sm">
          <div className="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">Hace 14 min</div>
        </div>
      </div>
    </div>
  );
};
