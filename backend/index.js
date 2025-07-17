import express from'express';
import  cors from'cors';
import connectDB from "./config/connection.js"
import {handleRegister,handleGetUser,handleSortList, handleConnections, handleUnSortList} from "./controllers/controllers.js";
// import userRouter from './routs/userRoutes.js'
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

// // GET /matches/:username
app.get('/matches/:username', handleGetUser);

// // PUT /shortlist/:username
app.put('/shortlist/:username',handleSortList);
// remove name from short listed
app.put('/unshortlist/:username',handleUnSortList);

app.get('/connections/:username',handleConnections)
// app.use('/api',userRouter);
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
