import express from 'express';
// const app = express();
// import { createNote,getAllNotes,deleteNote,updateNote } from "../controllers/notesController.js";
import { createNote, getAllNotes, deleteNote, updateNote } from "../controllers/notesController.js";

const router = express.Router();
router.get('/', getAllNotes);
router.post('/', createNote);
router.put('/:id',updateNote );
router.delete('/:id',deleteNote);

export default router;