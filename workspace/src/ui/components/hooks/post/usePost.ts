
import {useEffect, useState} from "react";
import {postUsecase} from "../../../../domain/usecases/post/post-usecase.ts";
import {postAdapter} from "../../../../infrastructure/adapters/post-adapter.ts";
import {axiosClient} from "../../../../infrastructure/ports/axios-client.ts";

export const usePost = () => {
    
    const [posts, setPosts] = useState([
        {
            id: "",
            title: ""
        }
    ]);
    
    
    useEffect(() => {

        const httpClient = axiosClient();
        const request = postAdapter(httpClient);
        const useCase = postUsecase(request);

        useCase.getPosts()
          .then(r =>{
              setPosts(r);
        } )
    }, []);
    
    
    return {
        posts:posts,
    }
};