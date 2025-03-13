 import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001'; // Replace with your backend URL

export const sendEmail = async (formData) => {
    try {
      const dataToSend = new FormData();
        // Append all form data key-value pairs to FormData object
        for (const key in formData) {
            if (formData.hasOwnProperty(key)) {
                dataToSend.append(key, formData[key]);
            }
        }
        const headers = {
            'Content-Type': 'multipart/form-data'
        };
        const response = await axios.post(`${API_BASE_URL}/send-email`, dataToSend, {
            headers,
        });
        return response.data;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};