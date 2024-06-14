import {PostGateway} from "../../models/post/post-gateway.ts";
import {postAdapter} from "../../../infrastructure/adapters/post-adapter.ts";
import {PostModel} from "../../models/post/post-model.ts";

export const postUsecase = ():PostGateway => {
    return {
        getPosts,

    };
};

const getPosts = async ():Promise<PostModel[]> => {
    const response = postAdapter();

    return await response.getPosts()
      .then(r =>{
          return r
      } )
}