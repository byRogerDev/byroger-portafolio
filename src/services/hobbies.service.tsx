import axios from 'axios';
import { ProfesionalProject } from '../types/profesional';

const baseURL = process.env.REACT_APP_API_BASE + "hobbies";

export async function  getEntries(): Promise<ProfesionalProject[]> {
    let hobbies: ProfesionalProject[] = [];
    
    await axios.get(baseURL).then((response) => {
        hobbies = response.data;
    });

    return hobbies;

}
