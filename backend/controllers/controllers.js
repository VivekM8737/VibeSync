import User from "../module/user.js";


const handleRegister= async (req, res) => {
    const { name, age, interests } = req.body;
    for (let i = 0; i < interests.length; i++) {
        interests[i] = interests[i].trim().toLowerCase();
    }
    try {
        const newUser = new User({ name, age, interests });
        await newUser.save();
        res.status(201).json({ 
            newUser,
            message: 'User created successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Error creating user' });
    }
};

const handleGetUser=async (req, res) => {
    const { username } = req.params;
    const user = await User.findOne({ name: username });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const users = await User.find({ name: { $ne: username } });
    const matches = users.filter((u) => {
        const common = u.interests.filter(i => user.interests.includes(i));
        return common.length >= 2;
    });

    res.json(matches);
}

export {handleRegister,handleGetUser}