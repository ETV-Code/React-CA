import {PostModel} from "./post-model.ts";

export interface PostGateway{
  getPosts(): Promise<PostModel[]>
}

