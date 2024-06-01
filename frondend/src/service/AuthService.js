import axios from "axios"

const instance = axios.create({
    baseURL:`http://localhost:6060/api`
})

export const signup= async (body) => await instance.post(`/user/signup`, body);


export const login = async (body) => await instance.post(`/user/login`, body);