import http from "../http_common";

const register=(data)=>{
    return http.post('user/register/',data)
}

export default {
    register
  };