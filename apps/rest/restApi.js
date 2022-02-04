import axios from 'axios';
const apiUrl = 'https://tasklogin.herokuapp.com/api/login';

const ApiPost = async (data) => {
    let options = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    const request = await axios.post(apiUrl,data, options)
        .then(response => response)
        .catch(error => error.response.data);
    return request;
};

export default ApiPost;
