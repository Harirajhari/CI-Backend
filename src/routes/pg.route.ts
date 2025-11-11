import { Router } from "express";
import { listTables } from "../controllers/pg.controller";

const router = Router();

router.get("/", listTables);

export default router;