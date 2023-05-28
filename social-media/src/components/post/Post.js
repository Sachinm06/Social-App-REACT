import React from 'react'
import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function Post() {
    return (
        <div>
            <div className="post">
                <div className="postWrapper">
                    <div className="postTop">
                        <div className="postTopLeft">
                            <img className='postProfileImg' src="/assets/person/p1.jpeg" alt="" />
                            <span className="postUsername">Insomniac</span>
                            <span className="postDate">5 mins ago</span>

                        </div>
                        <div className="postTopRight">
                            <MoreVertIcon />
                        </div>
                    </div>
                    <div className="postCenter">
                        <span className="postText">Fly High !</span>
                        <img className='postImg' src="/assets/posts/77ea35ab4524848654a9fec392b530e1.jpg" alt="" />
                    </div>
                    <div className="postBottom">
                        <div className="postBottomLeft">
                            <ThumbUpIcon className='likeIcon' />
                            <FavoriteIcon className='heartIcon' />
                            <span className="postLikeCounter">73 Likes</span>
                        </div>
                        <div className="postBottomRight">
                            <span className="postCommentText">15 Comments</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post