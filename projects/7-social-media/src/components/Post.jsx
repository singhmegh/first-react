import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { PostList } from "../Store/post-list-store";


const Post = ({ post }) => {
const {deletePost} = useContext(PostList);


return (
    <div className="card post-card" style ={{width: "30rem"}}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick ={()=>deletePost(post.id)}>
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key ={tag} className="badge text-bg-primary hashtag">{tag}</span>
        ))}
        <div className="alert alert-success reactions" role="alert">
 This post is reacted by {post.reaction} people .
</div>
      </div>
    </div>
  );
};

export default Post;
