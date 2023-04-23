/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
//import { stringify } from "querystring";
//import React from "react";
import React, { useState, useEffect } from 'react'
//import Image from 'next/image'

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function App() {
  const [image, setImage] = useState<string[]>()

    useEffect(() => {
        axios.get(
            'https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png',
            {responseType: 'blob',}
            )
            .then(res => {
              setImage([URL.createObjectURL(res.data)])
            })
    }, [])
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post['title']}</h1>
      <p>{post['body']}</p>
      
      <img src={image?.toString()} width="500" />
    </div>
  );
  
}
