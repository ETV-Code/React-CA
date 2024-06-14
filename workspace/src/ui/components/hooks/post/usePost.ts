
import {useEffect, useState} from "react";
import {postUsecase} from "../../../../domain/usecases/post/post-usecase.ts";

export const usePost = () => {
    
    const [posts, setPosts] = useState([
        {
            id: "",
            title: ""
        }
    ]);
    
    
    useEffect(() => {

        const request = postUsecase();

        request.getPosts()
          .then(r =>{
              setPosts(r);
        } )
    }, []);
    
    
    return {
        posts:posts,
    }
};