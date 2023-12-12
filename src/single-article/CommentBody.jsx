

const CommentBody = ({ comment }) => {
    const { article_id, author, body, comment_id, created_at, votes } = comment
    return (
        <div>
            <b style={{ fontSize: '14px', marginTop: '20px', paddingBottom: '12px' }}>{author} says...</b>
            <p style={{ fontSize: '16px', marginTop: '10px', paddingBottom: '10px' }}>{body}</p>
            <p style={{ fontSize: '12px', marginTop: '5px', marginBottom: '15px' }}>{comment_id} - {created_at.substring(0, 10)} votes: {votes}</p>
        </div>
    )
}

export default CommentBody