

const CommentsById = ({ id }) => {
    useEffect(() => {
        getArticleById(id).then((article) => {
            setFoundArticle(article)
        }).then(() => {
            setIsLoading(false)
        });
    }, []);

    return (<>
        <h4>{`Article ${id} comments`}</h4>
        <></>
    </>)

}
export default CommentsById