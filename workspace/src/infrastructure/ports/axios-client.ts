import axios from "axios";

export const axiosClient = () =>{

  return {
    get,
    post,

  }
}

const get = async <R>(url: string): Promise<R> => {
  const response = await axios.get<R>(url);
  return response.data;
}

const post = async <T, R>(url: string, data: T): Promise<R> => {
  const response = await axios.post<R>(url, data);
  return response.data;
}