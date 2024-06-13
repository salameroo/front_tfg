
export function userguide() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Bienvenido a Cargram</h1>
              <p className="text-gray-600 mt-4">Descubre y conéctate con la comunidad de amantes del automóvil.</p>
            </div>
            <div>
              <img
                alt="Welcome to Cargram"
                className="rounded-lg"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Registro de Cuenta</h2>
              <ol className="list-decimal list-inside mt-2 space-y-2 text-gray-600">
                <li>Abre la página de registro de Cargram.</li>
                <li>Completa el formulario con tu nombre de usuario, correo electrónico y contraseña.</li>
                <li>Verifica tu correo electrónico para activar tu cuenta.</li>
              </ol>
            </div>
            <div>
              <img
                alt="Account Registration"
                className="rounded-lg"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Inicio de Sesión</h2>
              <ol className="list-decimal list-inside mt-2 space-y-2 text-gray-600">
                <li>Abre la página de inicio de sesión de Cargram.</li>
                <li>Ingresa tu correo electrónico y contraseña.</li>
                <li>Accede a tu cuenta.</li>
              </ol>
            </div>
            <div>
              <img
                alt="Sign In"
                className="rounded-lg"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Navegación y Menús</h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Menú Principal</h3>
                <ul className="list-disc list-inside mt-2 space-y-2 text-gray-600">
                  <li>Inicio: Muestra el feed principal con las publicaciones más recientes.</li>
                  <li>Explorar: Descubre nuevas publicaciones y perfiles de la comunidad.</li>
                  <li>Notificaciones: Revisa tus notificaciones más recientes.</li>
                  <li>Perfil: Accede a tu perfil y edita tu información.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Navegación</h3>
                <ul className="list-disc list-inside mt-2 space-y-2 text-gray-600">
                  <li>Utiliza la barra de navegación superior para moverte entre las secciones.</li>
                  <li>Haz clic en los iconos y enlaces para acceder a las diferentes funcionalidades.</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Publicaciones y Contenido</h2>
            <div className="mt-4 space-y-2 text-gray-600">
              <p>- Crea nuevas publicaciones con fotos, videos y descripciones sobre tu vehículo.</p>
              <p>- Interactúa con el contenido de otros usuarios dando me gusta, comentando y compartiendo.</p>
              <p>- Descubre y sigue a otros entusiastas del automóvil.</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Configuración y Privacidad</h2>
            <div className="mt-4 space-y-2 text-gray-600">
              <p>- Personaliza tu perfil con información y una imagen de perfil.</p>
              <p>- Ajusta la configuración de privacidad y seguridad según tus preferencias.</p>
              <p>- Notifica cualquier problema o abuso a los moderadores de la plataforma.</p>
            </div>
          </div>
          <div>
            <p className="text-gray-600 text-center">
              ¡Disfruta de Cargram y conéctate con la comunidad de amantes de los automóviles!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
