import {PostCardProps} from "../../common/interfaces/PostCard.ts";


export const PostCard = ({className,key, postTitle}:PostCardProps) => {
    return (
      <div key={key} className={`card ${className}`} style={{width: "18rem"}}>
          <div className="card-body">
              <h5 className="card-title">{postTitle}</h5>
          </div>
      </div>
    );
};