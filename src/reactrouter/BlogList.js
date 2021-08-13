import React, { useEffect, useState } from 'react';

import axios from 'axios';

import './Blog.css'

const BlogList = () => {
    const [blogList, setBlogList] = useState([]);
    useEffect(() => {
        // API
        // State Update
        // Render List On UI


        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            setBlogList(res.data)
        }).catch((err) => {
           console.log(err.message) 
        })


    }, [])
    return <div>
            Blog List::
            <ul className='blog-list'>
                {
                    blogList.map((item) => {
                        return <li className='blog-list-item' key={item}>{ item.title }</li>
                    })
                }
            </ul>
        </div>
}

export default BlogList;