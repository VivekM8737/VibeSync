import User from "../module/user.js";


const handleRegister= async (req, res) => {
    const { name, age, interests } = req.body;
    for (let i = 0; i < interests.length; i++) {
        interests[i] = interests[i].trim().toLowerCase();
    }
    try {
        const newUser = new User({ name: name.trim().toLowerCase(), age, interests });
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
    console.log(username);
    const user = await User.findOne({ name: username });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const users = await User.find({ name: { $ne: username } });
    const matches = users.filter((u) => {
        const common = u.interests.filter(i => user.interests.includes(i));
        return common.length >= 2;
    });

    res.json(matches);
}
const handleConnections=async (req, res) => {
    const { username } = req.params;
    const user = await User.findOne({ name: username });
    if (!user) return res.status(404).json({ error: 'User not found' });
    const connections=user.shortlist.map(u=> u);
    console.log(user.shortlist);
    res.json(connections);
}

const handleSortList= async (req, res) => {
    const { username } = req.params;
    const { shortlistedUser } = req.body;

    const user = await User.findOne({ name: username });
    if (!user) return res.status(404).json({ error: 'User not found' });

    if (!user.shortlist.includes(shortlistedUser)) {
        user.shortlist.push(shortlistedUser);
        await user.save();
    }

    res.json({ message: 'User shortlisted' });
}

export {handleRegister,handleGetUser,handleSortList,handleConnections}