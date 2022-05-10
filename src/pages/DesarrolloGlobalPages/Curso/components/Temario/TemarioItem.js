export const TemarioItem = ({ id, titulo, descripcion, objetivos, indice }) => {
  console.log(indice);
  return (
    <div className="bg-transparent accordion-item">
      <h2 className="mb-0 accordion-header " id={`headingOne-${id}`}>
        <button
          style={{
            boxShadow: "none",
          }}
          className={`${
            indice === 0 ? "" : "collapsed"
          } accordion-button relative flex items-center w-full px-5 py-4 text-base font-extrabold text-left text-gray-800 transition bg-gray-100 border-0 rounded-lg color-button  focus:outline-none`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapseOne-${id}`}
          aria-expanded={indice === 0 ? "true" : "false"}
          aria-controls={`collapseOne-${id}`}
        >
          {titulo}
        </button>
      </h2>
      <div
        id={`collapseOne-${id}`}
        className={`accordion-collapse collapse ${indice === 0 ? "show" : ""}`}
        aria-labelledby={`headingOne-${id}`}
      >
        <div className="px-5 py-4 accordion-body">
          <p className="font-bold">{descripcion}</p>
          <div className="flex ">
            <ul className="text-gray-900 bg-white rounded-lg w-96">
              {console.log(objetivos.length)}
              {objetivos.map((objetivo, index) => {
                return (
                  <li
                    key={index}
                    className={`w-full px-6 py-2  ${objetivos.length - 1 === index ? "rounded-b-lg" : "border-b border-gray-200"}`}
                  >
                    {objetivo}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
