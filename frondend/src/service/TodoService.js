import axios from "axios"

const instance = axios.create({
    baseURL:`http://localhost:6060/api`
})

instance.interceptors.request.use((config)=>{
    
    if(config){
        config.headers["userId"]  = localStorage.getItem("userId") || "";
    }

    return config;
})

export const  addTask = async (body)=> await instance.post(`/v2/addTask`,body);

export const GetTask = async (userId)=> await instance.get(`/v2/getTask/${userId}`)

export const EditTask = async (Taskid,updatedTask)=> await instance.put(`/v2/updateTask/${Taskid}`,updatedTask)

export const deleteTask = async (Taskid)=> await instance.delete(`/v2/DeleteTask/${Taskid}`)


