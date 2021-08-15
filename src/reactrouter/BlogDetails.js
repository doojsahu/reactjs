import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const BlogDetails = (props) => {

    const { match, history } = props;
    // const match = props.match

    const [loading, toggleLoading] = useState(true);
    const [blogDetails, setBlogDetails] = useState(null);
    const [blogComments, setBlogComments] = useState(null);

    useEffect(() => {
        toggleLoading(true)
        const blogDetailsPromise = axios.get(`https://jsonplaceholder.typicode.com/posts/${match.params.blogId}`);
        const blogCommentsPromise = axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${match.params.blogId}`)

        Promise.all([blogDetailsPromise, blogCommentsPromise]).then((res) => {
            setBlogDetails(res[0].data)
            setBlogComments(res[1].data)

            toggleLoading(false)
        });

    }, [match.params.blogId])

    const blogId = parseInt(match.params.blogId, 10);
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

              <div>
                <br/><br/><br/><br/>
                  <Link to='/blogs' className='button'>Back</Link>
                <br/><br/>
                    <button 
                        className={ blogId === 1 ? 'disabled button' : 'button'}
                        onClick={() => {
                            let blogIds = parseInt(match.params.blogId, 10);
                            history.push(`/blogs/${--blogIds}`)
                    }}>Prev</button>
                    <button 
                        className={ blogId === 100 ? 'disabled button' : 'button'} 
                        onClick={() => {
                            let blogIds = parseInt(match.params.blogId, 10);
                            history.push(`/blogs/${++blogIds}`)
                    }}>Next</button>
                <br/><br/>

              </div>

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