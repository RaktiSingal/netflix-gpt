const Comments = ({ comment }) => {
    return (
        <div>
            <div>{comment.title}</div>
            {comment.replies?.map((comment) => {
                return (
                    <div className="px-2">
                        <Comments comment={comment} key={comment.id} />
                    </div>
                )
            })}
        </div>
    )
}

export default Comments