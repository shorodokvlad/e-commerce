import axios from "axios"

export default class ApiService {
    static BASE_URL = "http://localhost:2424"

    static getHeader() {
        const token = localStorage.getItem("token");
        return {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        };
    }

    /* Auth and Users API */
    static async registerUser(registration) {
        const response = await axios.post(`${this.BASE_URL}/auth/register`, registration)
        return response.data;
    }

    static async logginUser(logginDetails) {
        const response = await axios.post(`${this.BASE_URL}/auth/login`, logginDetails)
        return response.data;
    }

    static async getLoggenInUserInfo() {
        const response = await axios.get(`${this.BASE_URL}/user/my-info`, {
            headers: this.getHeader()
        }) 
        return response.data;
    }

    /* PRODUCT ENDPOINT */

    static async addProduct(formData) {
        const response = await axios.post(`${this.BASE_URL}/product/create`, formData, {
            headers: {
                ...this.getHeader(),
                "Content-Type": "multipart/form-data"
            }
        })
        return response.data;
    }

    static async logginUser(productId, formData) {
        const response = await axios.post(`${this.BASE_URL}/product/update/${productId}`, formData, {
            headers: {
                ...this.getHeader(),
                "Content-Type": "multipart/form-data"
            }
        })
        return response.data;
    }
}