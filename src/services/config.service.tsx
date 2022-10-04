import axios from 'axios';
import React from "react";
import { Technologies } from '../interfaces/UserInfo';

const baseURL = process.env.REACT_APP_API_BASE + "technologies";


export async function  getEntries(): Promise<Technologies[]> {
    let techs: Technologies[] = [];
    
    await axios.get(baseURL).then((response) => {
        //console.log(response.data);
        techs = response.data;
        //console.log(techs);
    });

    return techs;

}