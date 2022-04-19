import { Link } from "react-router-dom";

export const PoliticasProteccionDatos = () => {
  return (
    <div>
      <h1 className="uppercase font-black text-xl">Políticas de Proteccion de datos</h1>
      <p className="text-[14px] text-gray-400">Última actualización: 18 de Abril del 2022</p>
      <h4 className="underline py-[15px] text-lg font-bold">DESARROLLO GLOBAL</h4>
      <p>La Academia de Gestión Pública es un producto creado y desarrollado por el Centro de Capacitación y Desarrollo Global. </p>
      <h4 className="underline py-[15px] text-lg font-bold">INTRODUCCIÓN</h4>
      <p>
        Bienvenidos a Desarrolloglobal.pe este sitio web es operado por <strong>Centro de Capacitación y Desarrollo Global.</strong> Esta
        página le informa de nuestra política con respecto a la recogida, uso y divulgación de Información Personal cuando utilice nuestro
        servicio. No usar o compartir su información con nadie, excepto como se describe en esta política de protección de datos personales.
      </p>
      <p>
        Que utilizamos su información Personal para proveer y mejorar el servicio. Al utilizar el servicio, usted acepta la recopilación y
        uso de información de acuerdo con esta política. A menos que lo contrario definido en esta política de protección de datos
        personales, términos utilizados en esta política de protección tienen el mismo significado como en nuestros términos y condiciones,
        accesibles en{" "}
        <Link to="https://www.desarrolloglobal.pe/terminos" className="text-blue-600 hover:underline cursor-pointer">
          https://www.desarrolloglobal.pe/terminos
        </Link>{" "}
        colección de información y el uso de durante el uso de nuestro servicio, podemos solicitarle que nos proporcione cierta información
        personal identificable que puede utilizarse en contacto con o identificarlo. Personalmente identificable puede incluir, pero no se
        limita a su nombre, número de teléfono, dirección postal, otra información ("Información Personal").
      </p>
      <h4 className="underline py-[15px] text-lg font-bold">DATOS DEL REGISTRO</h4>
      <p>
        que recopilamos información que su navegador envía cada vez que visites nuestro servicio ("datos de registro"). Los datos de este
        registro pueden incluir información como la dirección de protocolo de Internet ("IP") del ordenador, tipo de navegador, versión del
        navegador, las páginas de nuestro servicio que visitar, la fecha y hora de su visita, el tiempo empleado en esas páginas y otras
        estadísticas.
      </p>
      <h4 className="underline py-[15px] text-lg font-bold">COOKIES</h4>
      <p>
        Clic aquí para ver nuestra{" "}
        <Link to="/legal/politicas-cookies" className="text-blue-600 hover:underline cursor-pointer">
          Políticas de cookies
        </Link>
      </p>
      <h4 className="underline py-[15px] text-lg font-bold">PROVEEDORES DE SERVICIOS</h4>
      <p>
        Contratamos a terceras empresas (
        <Link to="https://www.getresponse.com/es/legal/privacy" className="text-blue-600 hover:underline cursor-pointer">
          GetResponse
        </Link>
        ,{" "}
        <Link to="https://know.pepocampaigns.com/articles/privacy-policy/" className="text-blue-600 hover:underline cursor-pointer">
          pepocampaigns
        </Link>
        ,{" "}
        <Link
          to="https://d1.awsstatic.com/legal/privacypolicy/AWS_Privacy_Notice_Spanish_2020-08-15.pdf"
          className="text-blue-600 hover:underline cursor-pointer"
        >
          AWS SES
        </Link>
        ,{" "}
        <Link to="https://support.google.com/drive/answer/2450387?hl=es-419" className="text-blue-600 hover:underline cursor-pointer">
          Google Drive
        </Link>
        , y{" "}
        <Link
          to="https://www.zendesk.es/company/customers-partners/privacy-policy/"
          className="text-blue-600 hover:underline cursor-pointer"
        >
          Zendesk
        </Link>{" "}
        con la finalidad de Mailing Marketing, Mailing, almacenamiento de ciertos datos, uso de Google Docs y chat de la web) para facilitar
        nuestro servicio, prestar el servicio en nuestro nombre, para llevar a cabo servicios relacionados con el servicio o para ayudarnos
        en el análisis de cómo se utiliza nuestro servicio. Estos terceros tienen acceso a su información Personal sólo para realizar estas
        tareas en nuestro nombre y obligación de no divulgar o utilizar para ningún otro propósito.
      </p>
      <h4 className="underline py-[15px] text-lg font-bold">SEGURIDAD</h4>
      <p>
        La seguridad de su información Personal es importante para nosotros, pero recuerde que ningún método de transmisión por Internet, o
        método de almacenamiento electrónico es 100% seguro. Mientras nos esforzamos por utilizar medios comercialmente aceptables para
        proteger su información Personal, no podemos garantizar su absoluta seguridad.
      </p>
      <p>
        Cada vez que usted le dé a DesarrolloGlobal.pe información sensible (ejemplo: contraseñas, números de tarjeta de crédito, etc),
        DesarrolloGlobal.pe tomara medidas comerciales razonables para proteger dicha información y establecer una conexión segura con
        nuestro Navegador de Web.
      </p>
      <p>
        DesarrolloGlobal.pe emplea{" "}
        <strong>certificados SSL (capa de sockets seguros) son una pieza esencial de la seguridad de los sitios web</strong>, conocida como{" "}
        <strong>capa de sockets seguros ("SSL")</strong> para proteger la transmisión de información de pago al Website. Puede usted
        chequear la seguridad de su conexión tras observar la barra de direcciones en su ventana de Navegador. Cuando usted acceda un
        servidor protegido por SSL, los primeros caracteres de la dirección cambiaran de "http" a "https."
      </p>
      <h4 className="underline py-[15px] text-lg font-bold">FINALIDAD DE SUS DATOS PERSONALES</h4>
      <p>Los Datos Personales de nuestros Usuarios se recopilan para cumplir la siguiente finalidad:</p>
      <ul className="list-[circle] pl-9">
        <li>
          <strong>Clientes:</strong> La finalidad de este registro es mantener una relación comercial con el cliente, así como facilitar el
          cumplimiento de las obligaciones económicas de los estudiantes.{" "}
        </li>
        <li>
          <strong>Trabajadores:</strong> Recopilar información de los trabajadores para la gestión contratos laborales, evaluación del
          desempeño y cumplimiento de obligaciones laborales.
        </li>
        <li>
          <strong>Proveedores:</strong> Recopilar datos de los proveedores para prestar servicios que le permita cumplir con el objetivo
          social de la empresa, asimismo para exigir el cumplimiento de las obligaciones contractuales y/o económicas
        </li>
        <li>
          <strong>Visitantes:</strong> Recopilar información de los visitantes que frecuenten las instalaciones de la empresa con la
          finalidad de garantizar la seguridad y dar cumplimiento a las disposiciones legales.
        </li>
        <li>
          <strong>Alumnos:</strong> Para la gestión académica en el programa, curso, congreso, u otro evento en el que se encuentre
          inscrito, así como para la expedición de certificados, diplomas u otros que acrediten tales estudios y para el cobro por las
          deudas asumidas por el servicio académico contratado.
        </li>
        <li>
          <strong>Clientes:</strong> La finalidad de este registro es mantener una relación comercial con el cliente, así como facilitar el
          cumplimiento de las obligaciones económicas de los estudiantes.
        </li>
        <li>
          <strong>Quejas y reclamos:</strong> Recopilar información de los usuarios de los servicios prestados para la gestión y atención de
          reclamos y quejas.
        </li>
        <li>
          <strong>Videovigilancia:</strong> Recopilar información de los trabajadores, proveedores, clientes, usuarios y alumnos que
          frecuenten las instalaciones de la empresa con la finalidad garantizar su seguridad y dar cumplimiento a las disposiciones
          legales.
        </li>
        <li>
          <strong>Usuarios de la página web:</strong> Recopilar información de los usuarios de la página web con la finalidad de promocionar
          y ofertar los servicios que presta la empresa.
        </li>
        <li>
          <strong>Prospectos de clientes:</strong> La finalidad de este registro es para promocionar y ofertar los servicios anunciados a
          los prospectos.
        </li>
      </ul>
      <h4 className="underline py-[15px] text-lg font-bold">FLUJO TRANSFRONTERIZO</h4>
      <p>
        La transferencia internacional de datos es fundamental, ya que usamos una DATA CENTER con una alta seguridad informática, y un alto
        grado de mantenimiento a nivel de hardware y software; esto hace que nuestro servidor web tenga una operatividad del 99,9%, ya que
        en el país de Estados Unidos están especializados en tecnologías de alto nivel y Seguridad. En la cual no podemos obtenerlo en el
        país de origen. Nuestro servidor web esta alojado en la región de: Newark, NJ, con la empresa “Linode International Service Co”, que
        es unas con las mejores prestaciones del mercado, y con una muy alta valoración en sus servicios.
      </p>
      <h4 className="underline py-[15px] text-lg font-bold">PLAZO DE CONSERVACIÓN DE DATOS</h4>
      <p>
        Conservamos los datos de los usuarios, de forma indefinida. No obstante, el usuario tiene derecho a: acceder, rectificar, suprimir y
        oponerse a los datos administrados por la empresa.
      </p>
      <h4 className="underline py-[15px] text-lg font-bold">BASE DE DATOS</h4>
      <p>
        La empresa cuenta con una base de datos personales de los trabajadores, proveedores, visitantes, alumnos, clientes, quejas y
        reclamos, videovigilancia, usuarios de la página web y prospectos de clientes, entes, la misma que se encuentra registrada ante la
        Autoridad Nacional de Protección de datos personales del Ministerio de Justicia y Derechos Humanos
      </p>
      <h4 className="underline py-[15px] text-lg font-bold">ENLACES A OTROS SITIOS</h4>
      <p>
        Nuestros servicios pueden contener enlaces a otros sitios que no son operados por nosotros. Si hace clic en un enlace de terceros,
        se le dirigirá al sitio de dicho tercero. Fuertemente le recomendamos que revise la política de protección de datos personales de
        cada sitio que visite.
      </p>
      <p>
        No tenemos ningún control sobre y no asumen responsabilidad alguna por el contenido, políticas de protección de datos personales o
        prácticas de sitios de terceros o servicios.
      </p>
      <h4 className="underline py-[15px] text-lg font-bold">CAMBIOS EN ESTA POLÍTICA DE PROTECCIÓN DE DATOS PERSONALES</h4>
      <p>
        Podemos actualizar nuestra política de protección de datos personales de vez en cuando. Nosotros le notificaremos de cualquier
        cambio mediante la publicación de la nueva política de protección de datos personales en esta página. Se le aconseja que revise esta
        política de Protección de Datos Personales periódicamente para los cambios. Cambios a esta política de protección de datos
        personales son efectivos cuando se publiquen en esta página.
      </p>
      <h4 className="underline py-[15px] text-lg font-bold">¿Cuáles son tus derechos cuando nos facilitas tus datos?</h4>
      <ul className="list-[circle] pl-9">
        <li>
          <strong>Acceso:</strong> Podrás consultar tus datos personales.
        </li>
        <li>
          <strong>Rectificación:</strong> Podrás modificar tus datos personales cuando sean inexactos.
        </li>
        <li>
          <strong>Supresión:</strong> Podrás solicitar la eliminación de tus datos personales.
        </li>
        <li>
          <strong>Oposición:</strong> Podrás solicitar que no se traten tus datos personales.
        </li>
      </ul>
      <h4 className="underline py-[15px] text-lg font-bold">CÓMO CONTACTARNOS</h4>
      <p>
        Si usted tiene alguna pregunta sobre estos términos y condiciones, póngase en contacto con nosotros al correo{" "}
        <Link
          to="#"
          onClick={() => (window.location = "mailto:info@desarrolloglobal.pe")}
          className="text-blue-600 hover:underline cursor-pointer"
        >
          info@desarrolloglobal.pe
        </Link>{" "}
        CENTRO DE CAPACITACIÓN Y DESARROLLO GLOBAL en JR. RISSO 242 OF 201 LINCE LIMA – PERÚ.
      </p>
    </div>
  );
};
