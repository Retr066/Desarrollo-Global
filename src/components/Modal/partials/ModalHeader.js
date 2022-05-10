export const ModalHeader = ({ titulo }) => {
  return (
    <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
      <h3 className="text-3xl font-semibold">{titulo}</h3>
      <button className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none">
        <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">X</span>
      </button>
    </div>
  );
};
