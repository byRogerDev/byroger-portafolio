import { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { Welcome } from '../components/header';
import { ExperienciaLaboral } from "../components/experiencia-laboral";
import { FormacionAcademica } from "../components/formacion-academica";
import { Certificados } from "../components/certificados";
import { FormacionProfesional } from "../components/experiencia-profesional";
import { OtrosProyectos } from "../components/otros-proyectos";
import { ProximosDesafios } from "../components/proximos-desafios";
import * as techService from '../services/config.service';
import * as profesionalService from '../services/profesional.service';
import * as personalService from '../services/personal.service';
import * as hobbieService from '../services/hobbies.service';
import { ProfesionalProject, Technology } from '../types/profesional';


export function HomePage(props: any) {

    const [techs = undefined, setTechs]:[Technology[] | undefined, any] = useState<Technology[]>();
    const [profesionalProjects = undefined, setProfesionalProjects]: [ ProfesionalProject[] | undefined, any] = useState<ProfesionalProject[] >();
    const [alterProjects = undefined, setAlterProjects]: [ ProfesionalProject[] | undefined, any] = useState<ProfesionalProject[] >();
    const [hobbyProjects = undefined, setHobbyProjects]: [ ProfesionalProject[] | undefined, any] = useState<ProfesionalProject[] >();

    const [loading = true, setLoading]: [boolean | undefined,any] = useState<boolean>();

    
    const hobbyProjectsApi = async () => { 
        const t = await hobbieService.getEntries(); 
        console.log(t);
        if ( t.length > 0 ){
            setHobbyProjects(t)
        } 
    }
    
    const techsApi = async () => { 
        const t = await techService.getEntries(); 
        console.log(t);
        if ( t.length > 0 ){
            setTechs(t)
        } 
    }

    const [loadingProfesionalProjects = true, setLoadingProfesionalProjects]: any = useState();

    const profesionalProjectsApi = async () => { 
        const p: ProfesionalProject[] = await profesionalService.getEntries(); 
        console.log(p);
        console.log(p.length);
        if ( p.length > 0 ){            
            console.log(p);
            setProfesionalProjects(p)
        }else{
            setProfesionalProjects([]);
        }
    }

    const personalProjectsApi = async () => { 
        const p: ProfesionalProject[] = await personalService.getEntries(); 
        console.log(p);
        console.log(p.length);
        if ( p.length > 0 ){            
            console.log(p);
            setAlterProjects(p)
        }else{
            setAlterProjects([]);
        }
    }

    useEffect( () => {
        techsApi();
        profesionalProjectsApi();
        personalProjectsApi();
        hobbyProjectsApi();
    }, [] );
    

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

    const certificates = [
        { name: 'Programa executive en metodologías AGILE para no expertos', year: '2019', place: 'Pimec Lleida', time: '16 horas'},
        { name: 'Curso de programación de videojuegos', year: '2012', place: 'Universidad de Lleida', time: '30 horas' },
        { name: 'Programador de lenguajes estructurados', year: '2008', place: 'IES Josep Lladonosa, Lleida', time: '234 horas' },
        { name: 'Cisco Networking Academy: CCNA 1 Networking Basics', year: '2008', place: 'IES Josep Lladonosa, Lleida', time: '' },
        { name: 'Programación 2 en Visual Studio .NET', year: '2007', place: 'Academia privada ADP Informática, Lleida', time: '130 horas' },
        { name: 'Participación en las pruebas del Campeonato de Cataluña de Formación Professional CATSKILLS, en la especialización de Diseño de páginas Web en 2009 y 2011', year: '2009/2011', place: 'IES Esteve Terradas y Illa, Barcelona', time: '' },
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


                { techs &&  
                    <div className="bg-white py-12">

                    { profesionalProjects && <ExperienciaLaboral profesional={profesionalProjects}></ExperienciaLaboral> }
                    <FormacionAcademica academies={academies}></FormacionAcademica>                    
                    <Certificados certificates={certificates}></Certificados>
                    { alterProjects &&  <FormacionProfesional alterProjects={alterProjects}></FormacionProfesional> }
                    { hobbyProjects &&  <OtrosProyectos otherProjects={hobbyProjects}></OtrosProyectos> }
                    <ProximosDesafios challanges={challanges} ></ProximosDesafios>
                    
                    </div>
                }

                <section className='relative rounded-md mb-10'>
                    <a className="btn btn-lg bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full text-2xl" href="https://www.linkedin.com/in/roger-orellana-castells/" target="_blank" rel="noreferrer">
                        Contactar o contratar
                    </a>
                </section>
            </div>
        </HelmetProvider>
    );
}