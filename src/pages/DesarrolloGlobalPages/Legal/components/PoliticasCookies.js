import { Link } from "react-router-dom";

export const PoliticasCookies = () => {
  return (
    <>
      <h1 className="uppercase font-black text-xl">Politicas de Cookies</h1>
      <p className="text-[14px] text-gray-400">Última actualización: 18 de Abril del 2022</p>
      <p className="pt-[15px]">
        <strong>CENTRO DE CAPACITACION Y DESARROLLO GLOBAL, EIRL</strong> necesita implantar cookies, propias y de terceros, para ofrecer su
        contenido en la web y además prestar a sus usuarios un mejor servicio.
      </p>
      <h4 className="text-xl font-extrabold underline py-4">¿Qué son las cookies?</h4>
      <p>
        Las cookies son archivos de texto que contienen pequeñas cantidades de información y que se descargan en el dispositivo del usuario
        cuando visita una página web. Las cookies son pequeños archivos de texto que contienen información y que se descargan en el
        dispositivo de cualquier usuario que visita una página web. Tras su instalación, las cookies pueden ser devueltas a la página web de
        origen (cookies de origen) o a otras páginas web (cookies de terceros).
      </p>
      <p>
        Las cookies permiten que una página web reconozca el dispositivo de un usuario, facilitando su navegación, recordando sus
        preferencias y, en general, mejorando la experiencia del usuario, ayudándole a ofrecerle información y servicios relacionados con
        sus intereses. Las cookies no almacenan información sensible sobre usted, como tarjetas de crédito o datos bancarios, fotografías,
        su DNI o información personal, etc.
      </p>
      <p>
        La ley vigente permite que almacenemos cookies en su dispositivo si estas son estrictamente necesarias para el funcionamiento de
        esta página. Así, para todos los demás tipos de cookies necesitamos su permiso.
      </p>
      <h4 className="text-xl font-extrabold underline py-4">¿Qué tipos de cookies existen?</h4>
      <p>
        A continuación informamos a nuestros usuarios que esta página web utiliza tipos diferentes de cookies que pueden ser clasificadas
        del siguiente modo.
      </p>
      <h4 className="text-xl font-extrabold underline py-4">Según su finalidad:</h4>
      <ul className="list-[circle] pl-10">
        <li>
          <strong>Cookies Técnicas o Necesarias:</strong>Las cookies necesarias ayudan a hacer una página web utilizable activando funciones
          básicas como la navegación en la página y el acceso a áreas seguras de la página web. La página web no puede funcionar
          adecuadamente sin estas cookies..
        </li>
        <li>
          <strong>Cookies Estadísticas o Análisis:</strong>Las cookies estadísticas ayudan a los propietarios de páginas web a comprender
          cómo interactúan los visitantes con las páginas web reuniendo y proporcionando información de forma anónima.
        </li>
        <li>
          <strong>Cookies de Preferencias o Personalización:</strong>Las cookies de preferencias permiten a la página web recordar
          información que cambia la forma en que la página se comporta o el aspecto que tiene, como su idioma preferido o la región en la
          que usted se encuentra..
        </li>
        <li>
          <strong>Cookies de Marketing o Publicidad:</strong>Las cookies de marketing se utilizan para rastrear a los visitantes en las
          páginas web. La intención es mostrar anuncios relevantes y atractivos para el usuario individual, y por lo tanto, más valiosos
          para los editores y terceros anunciantes.
        </li>
        <li>
          <strong>Cookies No clasificados:</strong>Las cookies no clasificadas son cookies para las que todavía estamos en proceso de
          clasificar, junto con los proveedores de cookies individuales.
        </li>
      </ul>
      <h4 className="text-xl font-extrabold underline py-4">Según el tiempo que permanecen activadas:</h4>
      <ul className="list-[circle] pl-10">
        <li>
          <strong>Cookies de Sesión:</strong>aquellas que guardan exclusivamente información del usuario durante el tiempo que dura su
          visita a nuestra página web.
        </li>
        <li>
          <strong>Cookies Persistentes:</strong>aquellas que retienen información de usuarios que acceden repetidas veces a nuestra página
          web, recordando las preferencias seleccionadas.
        </li>
      </ul>
      <h4 className="text-xl font-extrabold underline py-4">Según la entidad que las gestiona:</h4>
      <ul className="list-[circle] pl-10">
        <li>
          <strong>Cookies propias: </strong>aquellas gestionadas por nuestra página web a la que el usuario accede y solicita su servicio.
        </li>
        <li>
          <strong>Cookies de terceros: </strong>aquellas colocadas por servicios de terceros que aparecen en nuestra página web (como
          Google, Youtube o LinkedIn).
        </li>
      </ul>
      <p>
        Asimismo, le indicamos que los datos personales tratados a través de las cookies de terceros podrán ser transferidos a Estados
        Unidos, con las garantías de seguridad necesarias para la realización de dichas transferencias internacionales mediante la adhesión
        al Privacy Shield, como en el caso de cookies de Google Analytics.
      </p>
      <p>
        Como consecuencia de las cookies empleadas por terceros, sus datos pueden ser objeto de transferencia internacional en caso de
        consentir su uso. Puede obtener más información sobre las transferencias a estos países y cómo se llevan a cabo, a través de las
        correspondientes políticas de estos proveedores aquí facilitadas:
      </p>
      <ul className="list-[circle] pl-10">
        <li>
          Google:{" "}
          <Link
            target="_blank"
            to="https://policies.google.com/technologies/types?hl=es"
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Política de privacidad Google
          </Link>{" "}
          y{" "}
          <Link
            target="_blank"
            to="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es"
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Política de uso de cookies Google Analytics
          </Link>
        </li>
        <li>
          Zendesk:{" "}
          <Link
            target="_blank"
            to="https://www.zendesk.com/company/zopim-privacy-retro/#:~:text=Zopim%20uses%20%22cookies%22%20to%20enable,issued%20the%20cookie%20to%20you."
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Política de privacidad Zopim
          </Link>
        </li>
        <li>
          Hotjar:{" "}
          <Link
            target="_blank"
            to="https://www.hotjar.com/legal/policies/privacy/"
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Política de privacidad Hotjar
          </Link>
        </li>
        <li>
          Facebook:{" "}
          <Link target="_blank" to="https://www.facebook.com/policy/cookies/" className="text-blue-600 hover:underline cursor-pointer">
            Política de privacidad Facebook
          </Link>
        </li>
        <li>
          Youtube:{" "}
          <Link
            target="_blank"
            to="https://www.youtube.com/intl/es-419/about/policies/#community-guidelines"
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Políticas y seguridad de Youtube
          </Link>
        </li>
        <li>
          Cookiebot:{" "}
          <Link
            target="_blank"
            to="https://www.cookiebot.com/goto/privacy-policy/"
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Políticas de Privacidad de Cookiebot
          </Link>
        </li>
        <li>
          Vimeo:{" "}
          <Link target="_blank" to="https://vimeo.com/privacy" className="text-blue-600 hover:underline cursor-pointer">
            Políticas de Privacidad de Vimeo
          </Link>
        </li>
      </ul>
      <h4 className="text-xl font-extrabold underline py-4">Declaración de cookies utilizadas</h4>
      <script
        id="CookieDeclaration"
        src="https://consent.cookiebot.com/c340bb80-30e1-46fd-8fff-ad96dc1a5780/cd.js"
        type="text/javascript"
        async
      ></script>
      <h4 className="text-xl font-extrabold underline py-4">Desactivación o eliminación de cookies</h4>
      <p>
        El usuario, en su primer acceso al sitio web puede configurar y aceptar o rechazar las cookies en el presente Sitio Web.
        Posteriormente, el usuario podrá, en cualquier momento, cambiar o retirar su consentimiento a través de la presente Política de
        Cookies o configurar su navegador como se le indica a continuación:
      </p>
      <ul className="list-[circle] pl-10">
        <li>
          Cómo eliminar las cookies en{" "}
          <Link
            target="_blank"
            to="https://support.mozilla.org/es/kb/Borrar%2520cookies"
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Mozilla Firefox
          </Link>
        </li>
        <li>
          Cómo eliminar las cookies en{" "}
          <Link
            target="_blank"
            to="https://support.google.com/accounts/answer/32050?co=GENIE.Platform%253DDesktop&hl=es"
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Google Chrome
          </Link>
        </li>
        <li>
          Cómo eliminar las cookies en{" "}
          <Link
            target="_blank"
            to="https://support.microsoft.com/es-es/help/4468242/microsoft-edge-browsing-data-and-privacy"
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Edge
          </Link>
        </li>
        <li>
          Cómo eliminar las cookies en{" "}
          <Link target="_blank" to="https://support.apple.com/es-es/HT201265" className="text-blue-600 hover:underline cursor-pointer">
            Safari
          </Link>
        </li>
      </ul>
      <h4 className="text-xl font-extrabold underline py-4">¿Qué ocurre si desactivo las cookies?</h4>
      <p>
        Si rechaza o desactiva algunas de las cookies instaladas, puede que el sitio web no funcione correctamente y no sea posible adaptar
        los contenidos, o apariencia de la navegación, a las preferencias personales de cada usuario (zona geográfica, franja horaria).
        Asimismo, no será posible mostrar publicidad personalizada o permitir la interacción con redes sociales para visualizar y compartir
        opiniones en las publicaciones de El Independiente.
      </p>
      <h4 className="text-xl font-extrabold underline py-4">Protección de datos personales</h4>
      <p>
        Las cookies empleadas en el sitio web permiten recabar información sobre usted, sus preferencias o su dispositivo, permitiendo que
        el sitio web funcione correctamente; sin que se recabe información sensible. Por lo general no es posible la identificación directa
        del usuario por la información almacenada en las cookies, no obstante, puede obtener más información sobre quiénes somos, cómo puede
        contactarnos y cómo tratamos sus datos personales en nuestra Política de Protección de Datos Personales.
      </p>
      <h4 className="text-xl font-extrabold underline py-4">Modificaciones de la Política de Cookies</h4>
      <p>
        <strong>CENTRO DE CAPACITACION Y DESARROLLO GLOBAL, EIRL</strong> se reserva el derecho a modificar la presente Política de Cookies,
        siempre en los términos permitidos por la legislación española vigente y previa comunicación a los interesados, bien mediante
        publicación en esta página o por cualquier otro medio de comunicación o difusión que se considere oportuno. Si tiene dudas sobre
        esta política de cookies, póngase en contacto con nosotros al correo{" "}
        <Link
          to="#"
          onClick={() => (window.location = "mailto:info@desarrolloglobal.pe")}
          className="text-blue-600 hover:underline cursor-pointer"
        >
          info@desarrolloglobal.pe
        </Link>
      </p>
    </>
  );
};
