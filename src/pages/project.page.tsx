

import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { Welcome } from '../components/header';

import * as techService from '../services/config.service';
import { IconTech } from "../components/icon-tech";

export function ProjectPage(props:any) {

    const { name } = useParams();

    const [techs = [], setTechs]: any = useState();

    const techsApi = async () => { 
        const t = await techService.getEntries(); 
        console.log(t);
        if ( t.length > 0 ){
            setTechs(t)
        } 
        //setTechs(t);
    }

    useEffect( () => {
        techsApi();
    }, [] );


    console.log(techs);
    /*
    const dispacth = useDispatch;

    const project = async () => {
        try{
            const result = await getProject(name);
            dispacth;
        }catch(err){

        }
    }*/

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
                <Welcome name={name} work="No importa quien ha provocado el problema, vamos a solucionarlo." />
                <div>{techs.length}</div>
                <div>                    
                { !techs ? 'Cargando' : techs?.map(({ name, img }:any, index: number) => (
                <IconTech  id={index} name={name} img={img}></IconTech>
                ))}
                </div>
            </div>

        </HelmetProvider>
    )
}