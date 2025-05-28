const express = require('express');
const Task = require('../Model/task');
const auth = require('../middlewares/verifyToken');
const router = express.Router();

// Create Task
router.post('/create', auth, async (req, res) => {
  try {
    const task = await Task.create({ ...req.body, userId: req.userId });
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create task', error: err.message });
  }
});

// Get all tasks for the user
router.get('/get', auth, async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.userId });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch tasks' });
  }
});

// Update Task by ID
router.put('/edit/:id', auth, async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      req.body,
      { new: true }
    );
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(400).json({ message: 'Failed to update task' });
  }
});

// Delete Task by ID
router.delete('/delete/:id', auth, async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, userId: req.userId });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete task' });
  }
});

module.exports = router;
