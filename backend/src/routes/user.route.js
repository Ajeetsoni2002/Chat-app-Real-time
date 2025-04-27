// src/routes/user.route.js
import express from "express";
import { getAllUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getAllUsers); // GET /api/users

export default router;
