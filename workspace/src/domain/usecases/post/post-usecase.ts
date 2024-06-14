import {PostGateway} from "../../models/post/post-gateway.ts";
import {PostModel} from "../../models/post/post-model.ts";

export const postUsecase = (postGateway:PostGateway):PostGateway  => {
    return {
      getPosts: () => getPosts(postGateway)

    };
};

const getPosts = async (postGateway:PostGateway):Promise<PostModel[]> => {

    return await postGateway.getPosts()
      .then(r =>{
          return r
      } )
}