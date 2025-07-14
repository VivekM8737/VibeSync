import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const API = 'http://localhost:5000';
const Profile = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [interests, setInterests] = useState('');

    const handleCreateUser = async () => {
        if (!name || !age || !interests) return alert("All fields required");
        await axios.post(`${API}/users`, {
            name,
            age,
            interests: interests.split(',').map(i => i.trim())
        });
        alert('Profile created!');
        setName('');
        setAge('');
        setInterests('');
    };
    return (
        <>
            <h1 className="text-4xl font-bold mb-8">💖 Matchmaker</h1>

            <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md mb-10">
                <h2 className="text-xl font-semibold mb-4">Create Your Profile</h2>
                <input placeholder="Name" className="w-full p-2 mb-3 border rounded-xl" value={name} onChange={e => setName(e.target.value)} />
                <input placeholder="Age" type="number" className="w-full p-2 mb-3 border rounded-xl" value={age} onChange={e => setAge(e.target.value)} />
                <input placeholder="Interests (comma-separated)" className="w-full p-2 mb-4 border rounded-xl" value={interests} onChange={e => setInterests(e.target.value)} />
                <button onClick={handleCreateUser} className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700">Create Profile</button>
                <Link
                    to="/matches"
                    className="block text-center text-blue-600 mt-4 hover:underline"
                >
                    👉 Go to Matches
                </Link>
            </div>

        </>
    )
}
export default Profile;