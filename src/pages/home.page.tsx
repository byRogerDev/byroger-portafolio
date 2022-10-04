
import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { Welcome } from '../components/header';
import { ExperienciaLaboral } from "../components/experiencia-laboral";
import { FormacionAcademica } from "../components/formacion-academica";
import { Certificados } from "../components/certificados";
import { FormacionProfesional } from "../components/experiencia-profesional";
import { OtrosProyectos } from "../components/otros-proyectos";
import { ProximosDesafios } from "../components/proximos-desafios";


export function HomePage(props: any) {

    
    

    const techs = [
        { id: 0, name: 'PHP', img: 'php.png' },
        { id: 1, name: 'Angular', img: 'angular-icon.svg' },
        { id: 2, name: 'Visual Basic .Net', img: 'visual-studio-2013.svg' },
        { id: 3, name: 'Flutter', img: 'flutter.svg' },
        { id: 4, name: 'Laravel', img: 'laravel-2.svg' },
        { id: 5, name: 'Aplicación Android', img: 'androide.png' },
        { id: 6, name: 'Aplicación Web', img: 'red-mundial.png' },
        { id: 7, name: 'Unity', img: 'unity-69.svg' },
        { id: 8, name: 'VisualBasic', img: 'archivo-vb.png' },
        { id: 9, name: 'C#', img: 'script.png' },
        { id: 10, name: 'Dart', img: 'script.png' },
        { id: 11, name: 'Juego Android', img: 'androide.png' },
        { id: 12, name: 'JS', img: 'logo-javascript.svg' },
        { id: 13, name: 'TS', img: 'icons8-typescript.svg' },
        { id: 14, name: 'React', img: 'logo512.png' },
        { id: 15, name: 'Python', img: 'python-logo-only.png' },
        { id: 16, name: 'Ionic', img: 'ionic-icon.svg' },
        { id: 17, name: 'TailwindCSS', img: 'tailwindcss_logo_icon_167923.png' },
        { id: 18, name: 'Bootstrap', img: 'bootstrap-logo.png' },
        { id: 19, name: 'Jquery', img: 'jquery-4.svg' },
        { id: 20, name: 'Git', img: 'git.png' },
        { id: 21, name: 'NativeScript', img: 'nativescript.png' },
        { id: 22, name: 'Tomcat', img: 'Apache_Tomcat_logo.svg' },
        { id: 23, name: 'Geoserver', img: 'geoserver_goux6a.png' },
        { id: 24, name: 'Magento', img: 'magento.png' },
        { id: 25, name: 'NodeJS', img: 'nodejs.png' },
        { id: 26, name: 'ExpressJS', img: 'express.png' },
        { id: 27, name: 'Prisma', img: 'prisma.png' },
        { id: 28, name: 'MySQL', img: 'mysql.png' },
        { id: 29, name: 'MSSQL', img: 'mssql.png' },
        { id: 30, name: 'EntityFramework', img: 'entityFramework.png' }
    ];

    const academies = [
        { name: 'Grado en Ingeniería Informática', year: '2020', place: 'Universidad de Lleida', 
            img: 'business/udl.jfif', link: 'grado-en-engenieria-informatica'
        },
        { name: 'CFGS Desarrollo de Aplicaciones Informática', year: '2011', place: 'IES-SEP Caparrella, Lleida', 
            img: 'business/caparrella.png', link: 'CFGS-desarrollo-de-aplicaciones-informatica'
        },
        { name: 'CFGM Explotación de Sistemas Informáticos', year: '2009', place: 'IES Josep Lladonosa, Lleida', 
            img: 'business/lladonosa.png' , link: 'CFGM-explotacion-de-sistemas-informaticos' 
        },
    ];

    const profesional = [
        {
            name: 'Actium Digital by SEMIC', year: '12/2020 - Actualidad', 
            img: 'business/actium.jfif', link: 'actium-digital-by-semic',
            description: [
                'Actium, forma parte de las distintas patas de la empresa SEMIC, esto me ha obligado a desarrollar software en distintos departamentos de SEMIC, siendo Actium la empresa que me contrata.',
                'He evolucionado rápidamente, desde programador backend y frontend “raso” en tecnologías Angular y VB.net hasta llegar a desarrollar el proyecto semilla para desarrollar todos los proyectos con ese stack tecnológico, incrementando la calidad notablemente de los proyectos.',
                'Actium actua como agencia para desarrollar tanto webs corporativas como aplicaciones backoffice con funcionalidades más especificas. Estas aplicaciones normalmente con stack Angular de front y VB como API, ligados a VB por posibles integraciones de SAP Business One.',
                'APIs desarrolladas en VB utilizando EntityFramework como ORM.',
                'Implementación de funcionalidades SAP Business One con VB y sus interfaces con Angular.',
                'Desarrollo de e-commerce con Magento, funcionalidades propias del proyecto, y integraciones con sistemas externos.',
                'Desarrollo de proyectos solo front con Angular consumiendo APIs ya existentes.',
                'Actualmente formo parte de los responsables de área realizando mis tareas 100% en remoto.'
            ],
            start: new Date('2020/12/10'), end: Date.now(),
            techs: [techs[1], techs[2], techs[6], techs[8], techs[13], techs[15], techs[18], techs[19], techs[20], techs[24], techs[29], techs[30]],
        },
        {
            name: 'Xtrategics (Consultoría de negocio digital, S.L.L )', year: '03/2018 - 12/2020',
            img: 'business/xtrategics.jfif', link: 'xtrategics',
            gallery:[
                {
                    alt: 'fribin.com',
                    img: 'projects/fribin.png',
                    type: 'img',
                    size: 1
                },
                {
                    alt: 'agrusa.com',
                    img: 'projects/agrusa.png',
                    type: 'img',
                    size: 1
                },
                {
                    alt: 'denuvis.com',
                    img: 'projects/denuvis.png',
                    type: 'img',
                    size: 2
                },
            ],
            description: [
                'Xtrategics es una agencia de marketing digital que ofrece generalmente páginas web corporativas, e-commerce, landing page y varios servicios de marketing digital. En esta empresa lidere el departamento tecnológico.',
                'Cordinación entre departamentos, definición y asignación de tareas, toma de requerimientos con cliente, presupuestos de proyectos, definición de estructuras de datos y stack tecnológico de proyecto, desarrollo web front, desarrollo API, desarrollo de aplicación móvil. ',
                'Stack mayoritario PHP para back y front, mantenimiento de aplicación en NativeScript, evolutivos en sistemas .Net en ASP.',
                'Puesta en marcha y mantenimiento de e-commerce con Prestashop y Magento',
                'Desarrollo de proyecto semilla donde se basaban todos los proyectos con stack PHP para webs corporativas, similar a un wordpress propio para poder competir a nivel de SEO.'
            ],
            start: new Date('2018/03/15'), end: new Date('2020/12/13'),
            techs: [techs[0], techs[6], techs[12], techs[18], techs[19], techs[20], techs[21], techs[24], techs[28], techs[29]],
        },
        {
            name: 'Vola Los del Internet S.L.', year: '10/2016 - 06/2017', 
            img: 'business/vola.jfif', link: 'vola',
            description: 'Instalación de hardware de telecomunicación en clientes finales, y empresas, atención al cliente y soporte, tratamiento de la información, y desarrollo web para monitorización de hardware en PHP.',
            start: new Date('2016/10/01'), end: new Date('2017/06/20'),
            techs: [techs[0], techs[6], techs[12], techs[18], techs[19], techs[28]],
        },
        {
            name: 'Con Hector Sistemas Informáticos', year: '08/2013 - 01/2016', 
            img: 'business/conhector.jpg', link: 'con-hector',
            description: [
                'Todas las tareas que conlleva una tienda de informática; revisión y reparación de todo tipo de hardware informático, comercial, atención al cliente, venta de producto y servicios, gestión administrativa, visitas a domicilio, reparaciones a nivel empresarial.',
                'Servicio técnico y mantenimiento de infraestructuras de redes inalámbricas de larga distancia en zonas rurales.',
                'Profesor de distintos cursos de ofimática para grupos de niños, adultos y gente mayor.'
            ],
            start: new Date('2013/08/28'), end: new Date('2016/01/08'),
            techs: [techs[0], techs[6], techs[12], techs[18], techs[19], techs[28]],
        },
        {
            name: 'Neo Diagnostica, S.L.', year: '05/2013 - 04/2014', 
            img: 'business/neodiagnostica.jpg', link: 'neo-diagnostica',
            description:  [
                'Diseño, desarrollo y mantenimiento de sitios web de una misma empresa.',
                'Mis inicios, donde aplicar el poco conocimiento de maquetación y PHP aprendido de forma autodidacta, con mi primer gran reto; una pasarela de pago.',
            ],
            start: new Date('2013/05/01'), end: new Date('2014/04/30'),
            techs: [techs[0], techs[6], techs[12], techs[18], techs[19], techs[28]],
        },
    ];

    const certificates = [
        { name: 'Programa executive en metodologías AGILE para no expertos', year: '2019', place: 'Pimec Lleida', time: '16 horas'},
        { name: 'Curso de programación de videojuegos', year: '2012', place: 'Universidad de Lleida', time: '30 horas' },
        { name: 'Programador de lenguajes estructurados', year: '2008', place: 'IES Josep Lladonosa, Lleida', time: '234 horas' },
        { name: 'Cisco Networking Academy: CCNA 1 Networking Basics', year: '2008', place: 'IES Josep Lladonosa, Lleida', time: '' },
        { name: 'Programación 2 en Visual Studio .NET', year: '2007', place: 'Academia privada ADP Informática, Lleida', time: '130 horas' },
        { name: 'Participación en las pruebas del Campeonato de Cataluña de Formación Professional CATSKILLS, en la especialización de Diseño de páginas Web en 2009 y 2011', year: '2009/2011', place: 'IES Esteve Terradas y Illa, Barcelona', time: '' },
    ];

    const alterProjects = [
        {
            name: 'Operator Controller', year: '12/2020 - Actualidad', 
            img: 'projects/operator.png', link: 'operator-controller', 
            description: [
                'Aplicación para el time tracking de tareas.',
                'La motivación para desarrollar esta aplicación era contrastar las horas que he trabajado y poder llevar correctamente la cuenta, sea a favor o en contra, y así poder compararlas con el gestor de la empresa.',
                'Con la idea de reducir la interacción al mínimo para agilizar el ingreso de información, sin perder una experiencia de usuario confortable.',
                'Esta aplicación en Flutter para Android esconde otra motivación, el sistema de deploy. Teniendo en cuenta la aplicación como un producto, esta diseñada para poder tener varios entornos para cada cliente con su infraestructura y sus datos, teniendo su capa de diseño personalizada para cada cliente.',
                'En el mismo repositorio tener un archivo de configuración para cada cliente, con su capa de configuración y personalización de la capa visual, pero con una gran escalabilidad.',
                'Las principales características son; dar de alta tareas, imputar tiempos contra esas tareas, tener un grupo de usuarios con tareas compartidas, privilegios de usuarios que definen si pueden crear tareas compartidas, o, gestionar los festivos y vacaciones, sacar las gráficas de los tiempos imputados por día, semana y mes, y llevar la cuenta diaria, semanal, mensual y total, de horas realizadas, mostrando las horas de más y las de menos.'
            ],
            start: new Date('2022/06/23'), end: Date.now(),
            techs: [techs[3], techs[4], techs[5], techs[0], techs[10], techs[28]],
            gallery:[
                {
                    alt: 'Menu',
                    img: 'projects/timetracker1.png',
                    type: 'img',
                    size: 1
                },
                {
                    alt: 'Gestión de festivos',
                    img: 'projects/timetracker2.png',
                    type: 'img',
                    size: 1
                },
                {
                    alt: 'Gráficas',
                    img: 'projects/timetracker3.png',
                    type: 'img',
                    size: 2
                },
            ],
        },
        {
            name: 'Agrotech', year: '03/2018 - 12/2020', 
            img: 'projects/agrotech.png', link: 'agrotech',
            description: [
                'Aplicación para gestión de purines.',
                'Este entorno cloud consta de una aplicación en Flutter para Android, un visor web en Angular, una API en Laravel, y un servidor Tomcat con Geoserver.',
                'La aplicación Android conecta con hardware vía bluetooth y trabaja con este un intercambio de información que es registrada en la nube. Almacena datos relacionados tanto del hardware conectado como del dispositivo móvil, como la geolocalización.',
                'La aplicación web accede a los datos monitorizados por la aplicación y hace el seguimiento del correcto funcionamiento de los dispositivos y su trazabilidad.',
                'La API centraliza la información de la base de datos y tiene toda la funcionalidad',
                'El servidor Tomcat con Geoserver se encarga de hacer varios cálculos sobre parcelas y recintos, ubicaciones y traslación de coordenadas.',
                'Uno de los proyectos personales más importantes en producción en colaboración con empresa de fabricación de hardware.'
            ],
            start: new Date('2020/11/08'), end: Date.now(),
            techs: [techs[1], techs[3], techs[4], techs[13], techs[6], techs[5], techs[0], techs[10], techs[22], techs[23], techs[28]],
            gallery:[
                {
                    alt: 'Dashboard',
                    img: 'projects/agrotech1.png',
                    type: 'img',
                    size: 1
                },
                {
                    alt: 'Tracking de dispositivos',
                    img: 'projects/agrotech2.png',
                    type: 'img',
                    size: 1
                },
                {
                    alt: 'Filtros de geolocalización',
                    img: 'projects/agrotech3.png',
                    type: 'img',
                    size: 2
                },
                {
                    alt: 'Menu',
                    img: 'projects/agrotech_app0.png',
                    type: 'img',
                    size: 1
                },
                {
                    alt: 'Caracterización',
                    img: 'projects/agrotech_app1.png',
                    type: 'img',
                    size: 1
                },
                {
                    alt: 'Modo técnico',
                    img: 'projects/agrotech_app2.png',
                    type: 'img',
                    size: 2
                },
            ],
        }
    ];
    const otherProjects = [
        {
            name: 'Landing curricular y portafolio', link: 'landing-curricular-y-portafolio',
            img: 'projects/react.png',
            description: [
                'Página actual donde te encuentras, en este proyecto busco dar mis primeros pasos con React y Tailwind.',
                'Siempre decía: tengo que hacer mi propia web, pero nunca encontraba el tiempo, me motivaba más aprender una nueva tecnología a hacer avanzar este tipo de proyecto, pero llego el día de empezar, y aprovecharlo para desarrollar en React.',
                'El día de la programación de este año, después de ver la Miduconf y durante la emisión de un directo donde hacían una prueba técnica a un Junior con React. Decidí crear un proyecto con esa tecnología y probar, y para aprovechar este proyecto, quise cubrir esa inquietud de tener mi portafolio disponible para mostrar siempre a tiempo real.',
                'Tambien inicio la creación de la API con NodeJs y TS, usando el ORM de Prisma para gestionar los datos de una base de datos MySQL.'

            ],
            start: new Date('2022/09/14'), end: Date.now(),
            techs: [techs[14], techs[13], techs[6], techs[17], techs[25], techs[26], techs[27], techs[28]],
        },
        {
            name: 'Parchís vitaminado', link: 'parchis-vitaminado',
            description: [
                'Parchís 3D vitaminado, en desarrollo.',
                'Cuando tengo algo de tiempo libre y quiero romper la rutina del codigo de apliación, desconecto avanzando en este proyecto que supone un gran reto.',
                'El concepto del parchís de toda la vida con pinceladas de juego moderno de acción, todos los assets son gratuitos y poco hago en el tema artístico, pero trato de resolver la lógica del desarrollo de videojuegos 3D'
            ],
            gallery:[
                {
                    alt: 'Corriendo el videojuego...',
                    img: 'https://www.youtube.com/embed/Gl_b4IjSBnE',
                    type: 'video',
                    size: 1
                }
            ],
            start: new Date('2020/08/10'), end: Date.now(),
            techs: [techs[7], techs[9], techs[11]],
        },
        {
            name: 'Volca\'t - Voluntaris Catalunya', link: 'volcat',
            img: 'projects/volcat.png',
            description: [
                'Aplicación para poner en contacto personas de una misma región para poder pedir ayuda, o ayudar, en distintas tareas.',
                'Solución desarrollada durante el inicio de la pandemia, pensada para que en pueblos y ciudades, organizar grupos de voluntarios para ayudar a personas que no pudiesen salir de casa, o realizar determinadas tareas por problemas de mobilidad.',
            ],
            gallery:[
                {
                    img: 'projects/volcat1.png',
                    type: 'img',
                    size: 1,
                    column: 3
                },
                {
                    img: 'projects/volcat2.png',
                    type: 'img',
                    size: 1,
                    column: 3
                },
                {
                    img: 'projects/volcat3.png',
                    type: 'img',
                    size: 1,
                    column: 3
                },
                {
                    img: 'projects/volcat_app0.png',
                    type: 'img',
                    size: 1,
                    column: 3
                },
                {
                    img: 'projects/volcat_app1.png',
                    type: 'img',
                    size: 1,
                    column: 3
                },
                {
                    img: 'projects/volcat_app2.png',
                    type: 'img',
                    size: 1,
                    column: 3
                },
            ],
            start: new Date('2020/04/10'), end: new Date('2020/08/10'),
            techs: [techs[16], techs[13], techs[6], techs[5], techs[28]],
        }
    ];

    const challanges = [
        { name: 'React', img: '' },
        { name: 'Node.JS', img: '' },
        { name: 'Google Developer Expert', img: '' },

    ];

    return (
        <HelmetProvider>
            <Helmet htmlAttributes={{ lang: 'es' }}>
                <title>Roger Orellana Castells - Analista y desarrollador de software</title>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
                
                <meta name="title" property="og:title" content="Roger Orellana Castells - Analista y desarrollador de software" />                
                <meta name="type" property="og:type" content="website" />
                <meta name="image" property="og:image" content="https://byroger.es/by-roger-logo.png"/>
                <meta name="url"  property="og:url" content="byroger.es" />
                <meta name="description" property="og:description" content="No importa quien ha provocado el problema, vamos a solucionarlo." />;

            </Helmet>
            <div className="App">

                <Welcome name="Roger Orellana Castells" work="No importa quien ha provocado el problema, vamos a solucionarlo." />


                <div className="bg-white py-12">

                    <ExperienciaLaboral profesional={profesional}></ExperienciaLaboral>
                    <FormacionAcademica academies={academies}></FormacionAcademica>                    
                    <Certificados certificates={certificates}></Certificados>
                    <FormacionProfesional alterProjects={alterProjects}></FormacionProfesional>
                    <OtrosProyectos otherProjects={otherProjects}></OtrosProyectos>
                    <ProximosDesafios challanges={challanges} ></ProximosDesafios>

                    

                    

                </div>

                <section className='relative rounded-md mb-10'>
                    <a className="btn btn-lg bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full text-2xl" href="https://www.linkedin.com/in/roger-orellana-castells/" target="_blank" rel="noreferrer">
                        Contactar o contratar
                    </a>
                </section>
            </div>
        </HelmetProvider>
    );
}