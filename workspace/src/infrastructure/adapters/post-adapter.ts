import {PostGateway} from "../../domain/models/post/post-gateway.ts";
import {axiosClient} from "../ports/axios-client.ts";
import {PostModel} from "../../domain/models/post/post-model.ts";

export const postAdapter = ():PostGateway  => {

  return {
    getPosts,

  }
}

const getPosts = async ():Promise<PostModel[]> => {
  const httpClient = axiosClient();

  return httpClient.get<PostModel[]>("https://jsonplaceholder.typicode.com/posts")
    .then(r =>{
      return r
    } )
}