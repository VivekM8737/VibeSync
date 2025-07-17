

import {handleRegister,handleGetUser,handleSortList, handleConnections} from "../controllers/controllers.js";
import { Router } from "express";
const userRouter=Router();

userRouter.post('/users',handleRegister)

// GET /matches/:username
userRouter.get('/matches/:username', handleGetUser);

// PUT /shortlist/:username
userRouter.put('/shortlist/:username',handleSortList);

userRouter.get('/connections/:username',handleConnections)

export default userRouter;