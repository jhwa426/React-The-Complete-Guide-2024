import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Posts, { loader as PostLoaders } from './routes/Posts';
import PostDetails, { loader as postDetailsLoader } from './routes/PostDetails';
import NewPost, { action as newPostAction } from './routes/NewPost';

import RootLayout from './routes/RootLayout';
import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <Posts />,
                loader: PostLoaders,
                children: [
                    { path: '/create-post', element: <NewPost />, action: newPostAction },
                    { path: '/:postId', element: <PostDetails />, loader: postDetailsLoader },
                ],
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
