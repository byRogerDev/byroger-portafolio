import axios from 'axios';
import React from "react";
import { Technology } from '../types/profesional';

const baseURL = process.env.REACT_APP_API_BASE + "technologies";


export async function  getEntries(): Promise<Technology[]> {
    let techs: Technology[] = [];
    
    await axios.get(baseURL).then((response) => {
        //console.log(response.data);
        techs = response.data;
        //console.log(techs);
    });

    return techs;

}