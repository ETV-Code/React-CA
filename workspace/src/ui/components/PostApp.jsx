import {usePost} from "./hooks/post/usePost.ts";

export const PostApp = () => {
    
    const { posts } = usePost();
    
    return (
        <div>
            {
                posts.map(({id,title}) => (
                    <li
                        key={id}
                    >
                        {title}
                    
                    
                    </li>
                ))
            }
        
        </div>
    );
};