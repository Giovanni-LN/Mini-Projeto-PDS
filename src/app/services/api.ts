import { Integrante } from '@/interfaces/apiresults';

export const getIntegrante = async  (): Promise<Integrante> => {
    const response = await fetch('https://node-do-zero-jq3a.onrender.com/videos?search=');
    const json = await response.json();
    return json;
}