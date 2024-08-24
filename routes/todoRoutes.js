const express = require('express')
const router = express.Router()
const Todo = require('../models/Todo')



//To POST
router.post('/todos', async (req, res) => {
    try {
        const todo = new Todo({
            title: req.body.title
        })
    } catch (error) {
        res.status(500).json({
            message: err.message
        })
    }
})


//Get 
router.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find()
        res.json(todos)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

//get by id
router.get('/todos/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id)
        if (!todo) return res.status(400).json({
            message: 'Todo not Found'
        })
    } catch (error) {
        res.status(500).json({
            message: err.message
        })
    }
})

// update using put
router.put('/todos/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id)
        if (!todo) return res.status(404).json({
            message: "Todo Not Found"
        })
        todo.title = req.title || todo.title
        todo.completed = req.body.completed || todo.completed;
        const updateTodo = await todo.save()
        res.json(updateTodo)
    } catch (error) {
        res.status(500).json({
            message: err.message
        })
    }
})

// Delete
router.delete('/todos/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id)
        if (!todo) return res.status(404).json({
            message: "Todo Not Found"
        })
        await todo.remove();
        res.json({
            message: 'Todo deleted'
        });
    } catch (error) {
        res.status(500).json({
            message: err.message
        })
    }
})

module.exports = router;