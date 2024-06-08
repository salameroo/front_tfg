import CarIcon from "@/components/ui/CarIcon";

export default function Userguide() {
  return (
    <div>
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <CarIcon className="h-6 w-6" />
      </header>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Guía de uso del sitio</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Registro e inicio de sesión</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Registro</h3>
              <p className="mb-4">Para registrarte en Cargram, sigue estos pasos:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Accede a la página de registro de Cargram.</li>
                <li>Completa los campos de nombre, correo electrónico y contraseña.</li>
                <li>Revisa y acepta los términos y condiciones.</li>
                <li>Haz clic en el botón &quot;Registrarse&quot; para completar el proceso.</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Inicio de sesión</h3>
              <p className="mb-4">Para iniciar sesión en Cargram, sigue estos pasos:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Accede a la página de inicio de sesión de Cargram.</li>
                <li>Ingresa tu correo electrónico y contraseña registrados.</li>
                <li>Haz clic en el botón &quot;Iniciar sesión&quot; para acceder a tu cuenta.</li>
              </ol>
            </div>
          </div>
        </section>

        <hr className="my-8 border-gray-300" />

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Perfil de usuario</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Editar perfil</h3>
              <p className="mb-4">Para editar tu información de perfil, sigue estos pasos:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Accede a la sección de perfil en la aplicación de Cargram.</li>
                <li>Haz clic en el botón &quot;Editar perfil&quot;.</li>
                <li>Actualiza tu foto de perfil y otras configuraciones.</li>
                <li>Guarda los cambios para que se reflejen en tu perfil público.</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Configuraciones</h3>
              <p className="mb-4">Puedes ajustar diversas configuraciones de tu perfil, como:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nombre de usuario.</li>
                <li>Foto de perfil.</li>
                <li>Preferencias de tema de la aplicación.</li>
                <li>Seguridad y seguidores.</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="my-8 border-gray-300" />

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Publicaciones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Crear una publicación</h3>
              <p className="mb-4">Para crear una nueva publicación en Cargram, sigue estos pasos:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Accede a la sección de publicaciones en la aplicación.</li>
                <li>Haz clic en el botón &quot;Crear publicación&quot;.</li>
                <li>Agrega texto, imágenes y/o tu ubicación actual.</li>
                <li>Revisa y publica tu contenido para que sea visible en el feed.</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Interactuar con publicaciones</h3>
              <p className="mb-4">Puedes interactuar con las publicaciones de otros usuarios de la siguiente manera:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dar &quot;Me gusta&quot; a las publicaciones que te gusten.</li>
                <li>Dejar comentarios en las publicaciones para interactuar con otros usuarios.</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="my-8 border-gray-300" />

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Mensajería</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Iniciar una conversación</h3>
              <p className="mb-4">Para iniciar una conversación con otro usuario en Cargram:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Accede a la sección de mensajes de la aplicación.</li>
                <li>Busca o selecciona al usuario con el que deseas chatear.</li>
                <li>Envía tu primer mensaje y comienza la conversación.</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Enviar y recibir mensajes</h3>
              <p className="mb-4">Una vez iniciada la conversación, puedes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Enviar mensajes de texto, imágenes, audios y más.</li>
                <li>Ver los mensajes recibidos y las notificaciones de entrega y lectura.</li>
                <li>Mantener un historial de la conversación para referencia futura.</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="my-8 border-gray-300" />

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Noticias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Ver notificaciones</h3>
              <p className="mb-4">En la sección de noticias de Cargram, podrás ver:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>La ultima hora de las noticias.</li>
                <li>Articulos sobre los coches eléctricos.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Como acceder</h3>
              <p className="mb-4">Pasos para acceder:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Clicando en el logotipo de cargram.</li>
                <li>Clicando luego en noticias.</li>
              </ol>
            </div>
          </div>
        </section>

        <hr className="my-8 border-gray-300" />

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. FAQ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Si algo no va bien...</h3>
              <p className="mb-4">Siempre podrás ponerte en contacto conmigo:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>agsalamerobetancurt@iesmordefuentes.com</li>
                <li>angelga1914@gmail.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Solución de errores comunes:</h3>
              <p className="mb-4">Pasos para arreglar cosas:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Si la página da fallo en el feed o en los ajustes, borra las cookies y/o historial de la última hora.</li>
                <li>Si hay algún error raro recuerda que esta página tiene límites, ponte en contacto conmigo.</li>
              </ol>
            </div>
          </div>
        </section>

        <div className="text-center mt-8">
          <p>¡Disfruta de tu experiencia en Cargram!</p>
        </div>
      </div>
    </div>
  );
}
