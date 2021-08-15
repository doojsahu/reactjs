import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Blog.css';

const BlogDetails = (props) => {

    const { match } = props;
    // const match = props.match

    const [loading, toggleLoading] = useState(true);
    const [blogDetails, setBlogDetails] = useState(null);
    const [blogComments, setBlogComments] = useState(null);

    useEffect(() => {
        
        const blogDetailsPromise = axios.get(`https://jsonplaceholder.typicode.com/posts/${match.params.blogId}`);
        const blogCommentsPromise = axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${match.params.blogId}`)

        Promise.all([blogDetailsPromise, blogCommentsPromise]).then((res) => {

            console.log(res)

            setBlogDetails(res[0].data)
            setBlogComments(res[1].data)

            toggleLoading(false)
        });

    }, [])

    return <div>Blog Details: {match.params.blogId}
        {
            loading ? 
            ( 'loading ... ' 
            ) : (
              <>
                <div className='text-left'>
                    <div>Title: {blogDetails.title}</div>
                    <div>Blog: {blogDetails.body}</div>
                </div>
                <br/><br/><br/><br/>
                <ul className='blog-list'>
                    <li>Blog Comments::</li>
                    {blogComments.map((item) => {
                        return (
                            <li className='blog-list text-left' key={item.id}>
                                <div>{item.body} === Mail-id === {item.email}</div>
                            </li>
                        )
                    })}
                </ul>
              </>
            )
        }
    </div>
}

export default BlogDetails;