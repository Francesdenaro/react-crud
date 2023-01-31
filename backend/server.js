const express = require('express')
const app = express()
const connectDB = require('./config/db')
const {
	getPosts,
	createPost,
	updatePost,
	deletePost,
} = require('./postController')
const port = process.env.PORT || 8000

connectDB()

app.get('/posts', getPosts)
app.post('/posts', createPost)
app.put('/posts/:id', updatePost)
app.delete('/posts/:id', deletePost)

app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})
