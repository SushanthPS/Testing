import axios from "axios";

export const addTask = (data) => {
    return axios.post("/api/task", data);
};
export const getTask = () => {
    return axios.get("/api/tasks");
};
