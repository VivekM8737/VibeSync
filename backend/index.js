import express from'express';
import  cors from'cors';
import connectDB from "./config/connection.js"
import {handleRegister,handleGetUser} from "./controllers/controllers.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();
// POST /users
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.post('/users',handleRegister)

// GET /matches/:username
app.get('/matches/:username', handleGetUser);


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
