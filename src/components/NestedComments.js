import React from 'react'
import { CommentsData } from '../utils/constants'
import Comments from './Comments'

const NestedComments = () => {
  return (
    <div>
        {CommentsData?.map((comment) => {
            return (
                <div>
                    <Comments comment={comment} key={comment.id} />
                </div>
            )
        })}
    </div>
  )
}

export default NestedComments