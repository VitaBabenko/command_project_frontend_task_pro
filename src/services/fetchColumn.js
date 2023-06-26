import axios from 'axios';

// axios.defaults.baseURL = 'https://64975d0e83d4c69925a39dad.mockapi.io';

export const getColumns = async (id) => { 
    const resp = await axios.get('/columns' , {
        params: {
            owner: id
        }});
    console.log(resp)
    const data = resp.data;
    console.log(data)

    return data;
}