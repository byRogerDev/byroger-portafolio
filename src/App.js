import './App.css';
import { Welcome } from './components/header';
import { ElementCV } from './components/card-element'
import { Certificate } from './components/card-certificate'
import { Challenge } from  './components/challenges'


function App() {

  const techs = [
    {id: 0, name: 'Php', img: 'php.png'},
    {id: 1, name: 'Angular', img: 'angular-icon.svg'},
    {id: 2, name: 'Visual Basic .Net', img: 'visual-studio-2013.svg'},
    {id: 3, name: 'Flutter', img: 'flutter.svg'},
    {id: 4, name: 'Laravel', img: 'laravel-2.svg'},
    {id: 5, name: 'Aplicación Android', img: 'androide.png'},
    {id: 6, name: 'Aplicación Web', img: 'red-mundial.png'},
    {id: 7, name: 'Unity', img: 'unity-69.svg'},
    {id: 8, name: 'VisualBasic', img: 'archivo-vb.png'},
    {id: 9, name: 'C#', img: 'script.png'},
    {id: 10, name: 'Dart', img: 'script.png'},
    {id: 11, name: 'Juego Android', img: 'androide.png'},
    {id: 12, name: 'JS', img: 'logo-javascript.svg'},
    {id: 13, name: 'TS', img: 'icons8-typescript.svg'},
    {id: 14, name: 'React', img: 'logo512.png'},
    {id: 15, name: 'Python' , img: 'python-logo-only.png'},
    {id: 16, name: 'Ionic' , img: 'ionic-icon.svg'},
    {id: 17, name: 'Tailwindcss ', img: 'tailwindcss_logo_icon_167923.png'},
    {id: 18, name: 'Bootstrap ', img: 'bootstrap-logo.png'},
    {id: 19, name: 'Jquery ', img: 'jquery-4.svg'},
    {id: 20, name: 'Git ', img: 'git.png'},
    {id: 21, name: 'NativeScript ', img: 'nativescript.png'}
  ];

  const academies = [
    {name: 'Grado en Ingeniería Informática', year: '2020'},
    {name: 'CFGS Desarrollo de Aplicaciones Informática', year: '2011'},
    {name: 'CFGM Explotación de Sistemas Informáticos', year: '2009'},
  ];

  const profesional = [
    {name: 'Actium Digital by SEMIC', year: '12/2020 - Actualidad', description: 'He evolucionado rápidamente desde programador backend y frontend “raso” en tecnologías angular y vb.net hasta llegar a desarrollar el proyecto semilla para desarrollar todos los proyectos con ese stack tecnológico, incrementando la calidad notablemente de los proyectos. A parte, he que implementado funcionalidades con SBO. Actualmente dirijo equipo y formo parte de los jefes de área.',
      start: new Date('2020/12/10'), end: Date.now(),
      techs: [ techs[1], techs[2], techs[6], techs[8], techs[13], techs[15], techs[18], techs[19], techs[20] ],
    },
    {name: 'Xtrategics (Consultoría de negocio digital, S.L.L )', year: '03/2018 - 12/2020', description: 'Jefe de programación, definir y asignar tareas, realizar presupuestos de proyectos de desarrollo de software, desarrollo web, enfocado principalmente a backend, desarrollo de aplicaciones móvil. Stack mayoritario Php para back y front, mantenimiento de una aplicación en NativeScript, evolutivos en sistemas .Net. Desarrollo de proyecto semilla donde se basaban todos los proyectos con stack Php para webs corporativas, similar a un wordpress propio.',
      start: new Date('2018/03/15'), end: new Date('2020/12/13'),
      techs: [ techs[0], techs[6], techs[12], techs[18], techs[19], techs[20], techs[21]  ],
    },
    {name: 'Vola Los del Internet S.L.', year: '10/2016 - 06/2017', description: 'Instalaciones en clientes finales, y empresas relacionadas con redes y telecomunicaciones, atención al cliente y soporte, tratamiento de la información, y desarrollo web para controlar hardware en Php.',
      start: new Date('2016/10/01'), end: new Date('2017/06/20'),
      techs: [ techs[0], techs[6], techs[12], techs[18], techs[19] ],
    },
    {name: 'Con Hector Sistemas Informáticos', year: '08/2013 - 01/2016', description: 'Todas las tareas que conlleva una tienda de informática; revisión y reparación de todo tipo de hardware informático, asesor, comercial, atención al cliente, venta de producto y servicio, gestión administrativa, visitas a domicilio, reparaciones a nivel empresarial. Servicio técnico y mantenimiento de infraestructuras de redes inalámbricas de larga distancia en zonas rurales. Profesor de ofimática en diferentes grupos de varias edades.',
      start: new Date('2013/08/28'), end: new Date('2016/01/08'),
      techs: [ techs[0], techs[6], techs[12], techs[18], techs[19] ],  
    },
    {name: 'Neo Diagnostica, S.L.', year: '05/2013 - 04/2014', description: 'Diseño, desarrollo y mantenimiento de sitios web, tratamiento de contenido multimedia. Stack Php.',
      start: new Date('2013/05/01'), end: new Date('2014/04/30'),
      techs: [ techs[0], techs[6], techs[12], techs[18], techs[19] ],},
    ];

  const certificates = [
    {name: 'Programa executive en metodologías AGILE para no expertos', year: '2019', place: 'Pimec Lleida', time: '16 horas'},
    {name: 'Curso de programación de videojuegos', year: '2012', place: 'Universidad de Lleida', time: '30 horas'},
    {name: 'Programador de lenguajes estructurados', year: '2008', place: 'IES Josep Lladonosa, Lleida', time: '234 horas'},
    {name: 'Cisco Networking Academy: CCNA 1 Networking Basics', year: '2008', place: 'IES Josep Lladonosa, Lleida', time: ''},
    {name: 'Programación 2 en Visual Studio .NET', year: '2007', place: 'Academia privada ADP Informática, Lleida', time: '130 horas'},
    {name: 'Participación en las pruebas del Campeonato de Cataluña de Formación Professional CATSKILLS, en la especialización de Diseño de páginas Web en 2009 y 2011', year: '2009/2011', place: 'IES Esteve Terradas y Illa, Barcelona', time: ''},
  ];

  const alterProjects = [
    {name: 'Operator Controller', year: '12/2020 - Actualidad', description: 'Aplicación para el time tracking de tareas.',
      start: new Date('2022/06/23'), end: Date.now(),
      techs: [ techs[3], techs[4], techs[5], techs[0], techs[10] ],
    },
    {name: 'Agrotech', year: '03/2018 - 12/2020', description: 'Aplicación para gestión de purines.',
      start: new Date('2020/11/08'),  end: Date.now(),
      techs: [ techs[1], techs[3], techs[4], techs[13], techs[6], techs[5], techs[0], techs[10] ],
    }
  ];
  const otherProjects = [
    {
      name: 'Landing curricular y portafolios',
      description: [ 
        'Página actual donde te encuentras para iniciarme con React.', 
        'Siempre decía: tengo que hacer mi propia web, pero nunca encontraba el tiempo, me motivaba más aprender una nueva tecnología a hacer avanzar este tipo de proyecto, pero llego el día de empezar, y aprovecharlo para desarrollar en React.'
      ],
      start: new Date('2022/09/14'), end: Date.now(),
      techs: [ techs[14], techs[13], techs[6] ],
    },
    {
      name: 'Parchís vitaminado',
      description: [ 'Parchís 3D vitaminado, en desarrollo.', 'Cuando tengo algo de tiempo libre y quier romper la rutina del codigo de apliación, desconecto avanzando en este proyecto que supone un gran reto.'],
      start: new Date('2020/08/10'), end: Date.now(),
      techs: [ techs[7], techs[9], techs[11] ],
    },
    {
      name: 'Volca\'t',
      description: [ 
        'Aplicación para poner en contacto personas de una misma región para poder pedir ayuda, o ayuda, para distintas tareas.' , 
        'Solución desarrollada para la pandemia pensada para que en publos y ciudades organizar un grupo de voluntarios para ayudar a personas que no pudiesen salir de casa, o realizar una determinada tarea.'
      ],
      start: new Date('2020/04/10'), end: new Date('2020/08/10'),
      techs: [ techs[16], techs[13], techs[6], techs[5] ],
    }
  ];

  const challanges = [
    {name: 'React', img: ''},
    {name: 'Node.JS', img: ''},
    {name: 'Google Developer Expert', img: ''},

  ];


  return (
    <div className="App">

      <Welcome name="Roger Orellana Castells" work="Solucionador de problemas" />


      <div className="bg-white py-12">
        
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
          <div className="text-left flex">
            <div className="absolute flex h-16 w-16 p-2 items-center justify-center rounded-md bg-indigo-300 text-white">
              <img src="./img/coin-color-currency-svgrepo-com.svg" alt="Experiencia laboral" />
            </div>
            <h2 className="text-4xl align-bottom  font-semibold text-indigo-500 pl-20 mt-6">Experiencia laboral</h2>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">

              {profesional.map(({ name, year, description, techs, start, end }, index) => (
                <ElementCV key={index} index={index} name={name} year={year} description={description} techs={techs} start={start} end={end}></ElementCV>
              ))}


            </dl>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 mb-10">
          <div className="text-left flex">
            <div className="absolute flex h-16 w-16 p-2 items-center justify-center rounded-md bg-indigo-300 text-white">
              <img src="./img/college-education-graduate-svgrepo-com.svg" alt="Formación académica" />
            </div>
            <h2 className="text-4xl align-bottom  font-semibold text-indigo-500 pl-20 mt-6">Formación académica</h2>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">

              {academies.map(({ name, year }, index) => (
                <ElementCV key={index} name={name} year={year}  ></ElementCV>
              ))}

            </dl>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 mb-10">
          <div className="text-left flex">
            <div className="absolute flex h-16 w-16 p-2 items-center justify-center rounded-md bg-indigo-300 text-white">
              <img src="./img/award-certificate-education-2-svgrepo-com.svg" alt="Certificados" />
            </div>
            <h2 className="text-4xl align-bottom  font-semibold text-indigo-500 pl-20 mt-6">Certificados</h2>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">

              {certificates.map(({ name, year, place, time }, index) => (
                <Certificate key={index} name={name} year={year} place={place} time={time}></Certificate>
              ))}


            </dl>
          </div>
        </div>


        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 mb-10">
          <div className="text-left flex">
            <div className="absolute flex h-16 w-16 p-2 items-center justify-center rounded-md bg-indigo-300 text-white">
              <img src="./img/award-championship-education-svgrepo-com.svg" alt="Experiencia profesional" />
            </div>
            <h2 className="text-4xl align-bottom  font-semibold text-indigo-500 pl-20 mt-6">Experiencia profesional</h2>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">

              {alterProjects.map(({ name, year, description, techs, start, end }, index) => (
                <ElementCV key={index} index={index} name={name} year={year} description={description} techs={techs} start={start} end={end}></ElementCV>
              ))}


            </dl>
          </div>
        </div>


        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 mb-10">
          <div className="text-left flex">
            <div className="absolute flex h-16 w-16 p-2 items-center justify-center rounded-md bg-indigo-300 text-white">
              <img src="./img/bookcase-bookshelf-bookstore-svgrepo-com.svg" alt="Otros proyectos" />
            </div>
            <h2 className="text-4xl align-bottom  font-semibold text-indigo-500 pl-20 mt-6">Otros proyectos</h2>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">

              {otherProjects.map(({ name, year, description, techs, start, end }, index) => (
                <ElementCV key={index} index={index} name={name} year={year} description={description} techs={techs} start={start} end={end}></ElementCV>
              ))}


            </dl>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 mb-10">
          <div className="text-left flex">
            <div className="absolute flex h-16 w-16 p-2 items-center justify-center rounded-md bg-indigo-300 text-white">
              <img src="./img/discovery-education-loupe-svgrepo-com.svg" alt="Próximos desafios" />
            </div>
            <h2 className="text-4xl align-bottom  font-semibold text-indigo-500 pl-20 mt-6">Próximos desafios</h2>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">

              {challanges.map(({ name, year, description, techs, start, end }, index) => (
                <Challenge key={index} index={index} name={name} year={year} description={description} techs={techs} start={start} end={end}></Challenge>
              ))}


            </dl>
          </div>
        </div>

      </div>
      
      <section className='relative rounded-md mb-10'>
        <a className="btn btn-lg bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full text-2xl" href="https://www.linkedin.com/in/roger-orellana-castells/" target="_blank" rel="noreferrer">
          Contactar o contratar
        </a>
      </section>
    </div>
  );
}

export default App;
