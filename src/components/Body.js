import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Login';
import Hoome from './Hoome';
import Feed from './Feed';
import Profile from './Profile';
import Message from './Message';
import Explore from './Explore';
import Notification from './Notification';
import List from './List';
import Bookmark from './Bookmark';

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/login",
            element: <Login />
        },


        {
            path: "/",
            element: <Hoome />,
            children:[
                {
                    path:"/",
                    element:<Feed/>
                },
                {
                    path:"/profile",
                    element:<Profile/>
                },
                {
                    path:"/explore",
                    element:<Explore/>
                },
                {
                    path:"/message",
                    element:<Message/>
                },
                {
                    path:"/notification",
                    element:<Notification/>
                },
                {
                    path:"/list",
                    element:<List/>
                },
                {
                    path:"/bookmark",
                    element:<Bookmark/>
                }
        ]
        },
       
    ]);

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
};

export default Body;
