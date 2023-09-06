import React, { useState, useEffect } from 'react';
import VertCard from '../VertCard/VertCard';
import axios from 'axios';

function Myblogs() {
    const cont = {
        width: '80%',
        margin: '20px',
        marginLeft: '250px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const outerCont = {
        minHeight: '100vh',
        display: 'flex',
    };

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = 'http://localhost:3001/api/v1/myBlogs';
                const userId = localStorage.getItem('userId'); // Replace with your method of getting the userId
                const response = await axios.get(url, {
                    params: {
                        userId: userId
                    }
                });
                setBlogs(response.data.blogs);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div style={outerCont}>
            <div style={cont}>
                {blogs.map((post, index) => (
                    <VertCard key={index} post={post} />
                ))}
            </div>
        </div>
    );
}

export default Myblogs;
