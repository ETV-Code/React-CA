import {PostGateway} from "../../domain/models/post/post-gateway.ts";
import {PostModel} from "../../domain/models/post/post-model.ts";
import {HttpClientInterface} from "../../domain/interfaces/httpClient-interface.ts";

export const postAdapter = (httpClient:HttpClientInterface):PostGateway  => {

  return {
    getPosts: ()=> getPosts(httpClient),

  }
}

const getPosts = async (httpClient:HttpClientInterface):Promise<PostModel[]> => {

  return httpClient.get<PostModel[]>("https://jsonplaceholder.typicode.com/posts")
    .then(r =>{
      return r
    } )
}