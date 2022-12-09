import axios from 'axios';
import { ProfesionalProject } from '../types/profesional';

const baseURL = process.env.REACT_APP_API_BASE + "profesionals";


export async function  getEntries(): Promise<ProfesionalProject[]> {
    let profesionals: ProfesionalProject[] = [];
    
    await axios.get(baseURL).then((response) => {
        console.log(response);
        
        profesionals = response.data;


    });

    return profesionals;

}