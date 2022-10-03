import axios from 'axios';
import React from "react";
import { Technologies } from '../interfaces/UserInfo';

const baseURL = "http://localhost:3001/technologies";


export async function  getEntries(): Promise<Technologies[]> {
    let techs: Technologies[] = [];
    
    await axios.get(baseURL).then((response) => {
        //console.log(response.data);
        techs = response.data;
        //console.log(techs);
    });

    return techs;

}