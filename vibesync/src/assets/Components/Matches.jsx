
import React, { useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

const API = 'http://localhost:5000';

const Matches = () => {
    const [username, setUsername] = useState('');
    const [matches, setMatches] = useState([]);
    const fetchMatches = async () => {
        if (!username) return alert("Enter username to fetch matches");
        const res = await axios.get(`${API}/matches/${username}`);
        setMatches(res.data);
    };

    return (
        <>
            <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md mb-6">
                <h2 className="text-xl font-semibold mb-4">Find Matches</h2>
                <input placeholder="Your Name" className="w-full p-2 mb-3 border rounded-xl" value={username} onChange={e => setUsername(e.target.value)} />
                <button onClick={fetchMatches} className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700">Find Matches</button>
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
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}
export default Matches;