import {CapacitorHttp} from '@capacitor/core';

export const fetchAllUsers = async () => {
    const options = {
        url: 'https://jsonplaceholder.typicode.com/posts',
        headers: {"Content-Type": "application/json"}
    }

    return CapacitorHttp.get(options);
}