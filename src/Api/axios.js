import axios from "axios";
const getHeaders = () => {
    const token = localStorage.getItem("token");
    
    // Create an empty headers object
    const headers = {};
    
    // Check if the token exists, if so set the Authorization header
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    
    return headers;
};
export default axios.create({
    // const token = localStorage.getItem("token")
    baseURL: 'http://localhost:3000/api/v1',
    baseURL: 'http://35.184.205.105:3000/api/v1',
    
    
    // headers: {
    //     'Authorization': `Bearer ${localStorage.getItem("token")}`,  // Include the token in the Authorization header
    // },
    headers: getHeaders(),

});


