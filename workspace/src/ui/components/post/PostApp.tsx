import {usePost} from "../../common/hooks/post/usePost.ts";
import {PostCard} from "./PostCard.tsx";

export const PostApp = () => {
    
    const { posts } = usePost();
    
    return (


    <div className="container">
        <div className="row">
            {
                posts.map(({id, title}) => (
                  <PostCard className="m-2" key={id} postTitle={title}/>
                ))
            }
        </div>
    </div>
    );
};