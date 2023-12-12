import { useEffect, useState } from "react";
import { getCommentsById } from "../../api/api";
import { Box, CircularProgress } from "@mui/material";
import CommentBody from "./CommentBody";

const CommentsById = ({ id , commentSeed, setCommentSeed}) => {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    

    useEffect(() => {
        getCommentsById(id).then((comments) => {
            setComments(comments)
        }).then(() => {
            setCommentSeed(false)
            setIsLoading(false)
        });
    }, [commentSeed]);


    if (isLoading) {
        return (
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>)
    } else return (<>
        <h4>{`Article ${id} comments`}</h4>
        {comments.map((comment) => {
            return <div style={{ margin: '5px' }} key={comment.comment_id} ><CommentBody comment={comment} /></div>
        })}
    </>
    )

}
export default CommentsById