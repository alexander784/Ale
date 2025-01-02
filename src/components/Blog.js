import React, { useState } from 'react';
import docker from '../assets/docker.png';
import context from '../assets/context.png';
import aws from '../assets/aws.png';
import Navbar from './NavBar';

const Blog = () => {
    const [blogs] = useState([
        {
            id: 1,
            title: 'Dockerizing a Django app with PostgreSQL',
            imageUrl: docker,
            link: 'https://reactjs.org/docs/hooks-intro.html',
        },
        {
            id: 2,
            title: 'Working with Docker containers and deploying them on AWS',
            imageUrl: aws,
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures',
        },
        {
            id: 3,
            title: 'Context API Hook',
            imageUrl: context,
            link: 'https://medium.com/p/fd34ec0eab13',
        },
    ]);

    return (
        <div className="blog-container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {blogs.map((blog) => (
                <div
                    key={blog.id}
                    className="blog-card border rounded-md p-4 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 bg-gray-800"
                >
                    {blog.imageUrl && (
                        <img
                            src={blog.imageUrl}
                            alt={blog.title}
                            className="w-full h-auto mb-4 rounded"
                        />
                    )}
                    <h2 className="text-lg font-bold mb-2 text-white">{blog.title}</h2>
                    <p className="text-white mb-4">
                        Learn how to {blog.title.toLowerCase()}!
                    </p>
                    <a
                        href={blog.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        Read more
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Blog;
