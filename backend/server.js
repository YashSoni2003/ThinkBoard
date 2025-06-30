import express from "express";
// const express = require("express");
import notesRoutes from "./routes/notesRoutes.js";


const app = express();
app.use("/api/notes", notesRoutes);

// app.get("/api/notes", (req, res) => {
//   res.status(200).send("message received");
// });

// app.post("/api/notes", (req, res) => {
//   res.status(201).json({message:"note created"});
// });

// app.put("/api/notes/:id", (req, res) => {
//   res.status(200).json({message:"note updated"});
// });

// app.delete("/api/notes/:id", (req, res) => {
//   res.status(200).json({message:"note deleted"});
// });
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
 