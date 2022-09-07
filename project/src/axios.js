import axios from "axios";

// 로그인이 안되어있는 경우에 사용하는 API(토큰이 없는경우 요청)
export const API = axios.create({
    baseURL: "http://172.20.10.11:8080",
    headers:{
        "Content-Type": "application/json",
    },
});


// 로그인이 되어있는 경우 사용하는 API(토큰이 있는경우 요청)

const author = () => {
    if(localStorage.getItem("token") !== null){
        return localStorage.getItem("token")
    }else{
        return sessionStorage.getItem("token")
    }
}

export const LogAPI = axios.create({
    baseURL: "http://172.20.10.11:8080",
    headers:{
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem('token')
    },
});