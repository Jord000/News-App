import { useEffect, useState } from "react";
import { getCommentsById } from "../../api/api";
import { Box, CircularProgress } from "@mui/material";
import CommentBody from "./CommentBody";

const CommentsById = ({ id }) => {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getCommentsById(id).then((comments) => {
            setComments(comments)
        }).then(() => {
            setIsLoading(false)
        });
    }, []);


    if (isLoading) {
        return (
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>)
    } else return (<>
        <h4>{`Article ${id} comments`}</h4>
        {comments.map((comment) => {
            return <div style={{ margin: '5px' }}><CommentBody comment={comment} /></div>
        })}
    </>
    )

}
export default CommentsById