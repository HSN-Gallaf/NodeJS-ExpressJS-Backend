import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ httpMethod: "get" });
});

router.post("/", (req, res) => {
  res.json({ message: "hello" });
});

router.put("/", (req, res) => {
  res.json({ message: "hello" });
});

router.delete("/", (req, res) => {
  res.json({ message: "hello" });
});

export default router;
