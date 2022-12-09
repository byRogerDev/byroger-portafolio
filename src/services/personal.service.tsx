import axios from 'axios';
import { ProfesionalProject } from '../types/profesional';

const baseURL = process.env.REACT_APP_API_BASE + "personals";


export async function  getEntries(): Promise<ProfesionalProject[]> {
    let personals: ProfesionalProject[] = [];
    
    await axios.get(baseURL).then((response) => {
        console.log(response);
        
        personals = response.data;


    });

    return personals;

}