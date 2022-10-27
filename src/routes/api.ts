import express from "express";

const router = express.Router();
import { sample } from "../controller/sampleController";
router.get("/", sample);

export default router;
