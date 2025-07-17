
import React, { useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

const API = 'http://localhost:5000';

const Matches = () => {
    const [username, setUsername] = useState('');
    const [matches, setMatches] = useState([]);
    const [connection, setConnections] = useState([]);
    const fetchMatches = async () => {
        if (!username) return alert("Enter username to fetch matches");
        try{
            const res = await axios.get(`${API}/matches/${username}`);
            setMatches(res.data);

        }catch(error){
            setMatches([]);
            setConnections([]);
            alert("no Match found!!");

        }
    };
    const handleShortlist = async (matchName) => {
        await axios.put(`${API}/shortlist/${username}`, { shortlistedUser: matchName });
        handleConnections();
        // alert(`You connected with ${matchName}`);
    };

    const handleUnShortlist = async (matchName) => {
        await axios.put(`${API}/unshortlist/${username}`, { shortlistedUser: matchName });
        handleConnections();
        // alert(`You connected with ${matchName} is removed`);
    };

    const handleConnections = async (matchName) => {
        if (!username) return alert("Enter username to fetch matches");
        try {
            
            const res =await axios.get(`${API}/connections/${username}`);
            setConnections(res.data);
        } catch (error) {
            setConnections([]);
            alert("no connection found!!");
        }
    };


    return (
        <>
            <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md mb-6">
                <h2 className="text-xl font-semibold mb-4">Find Matches</h2>
                <input placeholder="Your Name" className="w-full p-2 mb-3 border rounded-xl" value={username} onChange={e => setUsername(e.target.value)} />
                <button onClick={fetchMatches} className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700">Find Matches</button>
                <button onClick={handleConnections} className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 my-3">Find Connection</button>
                <Link
                    to="/"
                    className="block text-center text-blue-600 mt-4 hover:underline"
                >
                    👉 Go to profile
                </Link>
            </div>
            {matches.length > 0 && (
                <div className="w-full max-w-md">
                    <h2 className="text-xl font-semibold mb-3">🎯 Matches Found</h2>
                    <ul className="space-y-4">
                        {matches.map((m, i) => (
                            <li key={i} className="bg-white p-4 shadow-md rounded-xl">
                                <h3 className="text-lg font-bold">{m.name} <span className="text-sm font-normal">(Age: {m.age})</span></h3>
                                <p className="text-sm text-gray-700">Interests: {m.interests.join(', ')}</p>
                                <button
                                    onClick={() => handleShortlist(m.name)}
                                    className="mt-2 bg-purple-500 text-white px-4 py-1 rounded hover:bg-purple-600"
                                >
                                    Connect 💘
                                </button>
                            </li>

                        ))}
                    </ul>
                </div>
            )}
            {connection.length > 0 && (
                <div className="w-full max-w-md">
                    <h2 className="text-xl font-semibold mb-3">🎯 Connections Found</h2>
                    <ul className="space-y-4">
                        {connection.map((m, i) => (
                            <li key={i} className="bg-white p-4 shadow-md rounded-xl">
                                <h3 className="text-lg font-bold">{m} </h3>
                                <button
                                    onClick={() => handleUnShortlist(m)}
                                    className="mt-2 bg-purple-500 text-white px-4 py-1 rounded hover:bg-purple-600"
                                >
                                    remove
                                </button>
                              
                            </li>

                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}
export default Matches;