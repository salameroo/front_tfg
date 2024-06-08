import React from 'react';
import Link from 'next/link';
import CarIcon from '@/components/ui/CarIcon';

const CookiePolicy: React.FC = () => {
    return (
        <div className=''>
            <CarIcon className='' />
            <div className="container mx-auto p-8">
                <h1 className="text-4xl font-bold mb-4">POLÍTICA DE COOKIES</h1>
                <p><Link href="https://www.cargram.asalamero.dawmor.cloud" className="text-blue-500 hover:underline">https://www.cargram.asalamero.dawmor.cloud</Link></p>
                <p className="mt-4">
                    El acceso a este Sitio Web puede implicar la utilización de cookies. Las cookies son pequeñas cantidades de información que se almacenan en el navegador utilizado por cada Usuario —en los distintos dispositivos que pueda utilizar para navegar— para que el servidor recuerde cierta información que posteriormente y únicamente el servidor que la implementó leerá. Las cookies facilitan la navegación, la hacen más amigable, y no dañan el dispositivo de navegación.
                </p>
                <p className="mt-4">
                    Las cookies son procedimientos automáticos de recogida de información relativa a las preferencias determinadas por el Usuario durante su visita al Sitio Web con el fin de reconocerlo como Usuario, y personalizar su experiencia y el uso del Sitio Web, y pueden también, por ejemplo, ayudar a identificar y resolver errores.
                </p>
                <p className="mt-4">
                    La información recabada a través de las cookies puede incluir la fecha y hora de visitas al Sitio Web, las páginas visionadas, el tiempo que ha estado en el Sitio Web y los sitios visitados justo antes y después del mismo. Sin embargo, ninguna cookie permite que esta misma pueda contactarse con el número de teléfono del Usuario o con cualquier otro medio de contacto personal. Ninguna cookie puede extraer información del disco duro del Usuario o robar información personal. La única manera de que la información privada del Usuario forme parte del archivo Cookie es que el usuario dé personalmente esa información al servidor.
                </p>
                <p className="mt-4">
                    Las cookies que permiten identificar a una persona se consideran datos personales. Por tanto, a las mismas les será de aplicación la Política de Privacidad anteriormente descrita. En este sentido, para la utilización de las mismas será necesario el consentimiento del Usuario. Este consentimiento será comunicado, en base a una elección auténtica, ofrecido mediante una decisión afirmativa y positiva, antes del tratamiento inicial, removible y documentado.
                </p>
                <h2 className="text-2xl font-semibold mt-6">Cookies propias</h2>
                <p className="mt-2">
                    Son aquellas cookies que son enviadas al ordenador o dispositivo del Usuario y gestionadas exclusivamente por CarGram para el mejor funcionamiento del Sitio Web. La información que se recaba se emplea para mejorar la calidad del Sitio Web y su Contenido y su experiencia como Usuario. Estas cookies permiten reconocer al Usuario como visitante recurrente del Sitio Web y adaptar el contenido para ofrecerle contenidos que se ajusten a sus preferencias.
                </p>
                <h2 className="text-2xl font-semibold mt-6">Deshabilitar, rechazar y eliminar cookies</h2>
                <p className="mt-2">
                    El Usuario puede deshabilitar, rechazar y eliminar las cookies —total o parcialmente— instaladas en su dispositivo mediante la configuración de su navegador (entre los que se encuentran, por ejemplo, Chrome, Firefox, Safari, Explorer). En este sentido, los procedimientos para rechazar y eliminar las cookies pueden diferir de un navegador de Internet a otro. En consecuencia, el Usuario debe acudir a las instrucciones facilitadas por el propio navegador de Internet que esté utilizando. En el supuesto de que rechace el uso de cookies —total o parcialmente— podrá seguir usando el Sitio Web, si bien podrá tener limitada la utilización de algunas de las prestaciones del mismo, tales como el inicio de sesión.
                </p>

                <button className='bg-black text-white mt-4 rounded px-2 py-1'>
                    <Link href={"/"}>
                        Inicio
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default CookiePolicy;
