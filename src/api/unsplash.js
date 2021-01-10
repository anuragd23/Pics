import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',

    headers: {
        Authorization: 'Client-ID EsjpThjcub8sZskEeWVK_7JX4sSdw1xsxdaRqqoVttM'
    }
});