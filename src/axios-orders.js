import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://burger-booking.firebaseio.com/'
});

export default instance;