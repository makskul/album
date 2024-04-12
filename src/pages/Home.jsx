import React, { useState, useEffect } from "react";
import * as config from '/constants';
import axios from "axios";
import {useSSE} from "use-sse";

function Home() {
    // const [users, setUsers] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/users";
    const [users, error] = useSSE(async() => {
        const { data } = await axios(url)
        return data;
    }, []);

    return (
        <>
            <div>
                <h1>{config.MetaData['home'].h1}</h1>
            </div>
            <br/>
            <div>
                <h2>Users block</h2>
                {users && users.map(post => (
                    <div key={post.id}>{post.username}</div>
                ))}
            </div>
        </>
    );
}

export default Home;
