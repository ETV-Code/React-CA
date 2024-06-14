
import {useEffect, useState} from "react";
import {postUsecase} from "../../../../domain/usecases/post/post-usecase.ts";
import {postAdapter} from "../../../../infrastructure/adapters/post-adapter.ts";

export const usePost = () => {
    
    const [posts, setPosts] = useState([
        {
            id: "",
            title: ""
        }
    ]);
    
    
    useEffect(() => {

        const postGateway = postAdapter();
        const request = postUsecase(postGateway);

        request.getPosts()
          .then(r =>{
              setPosts(r);
        } )
    }, []);
    
    
    return {
        posts:posts,
    }
};