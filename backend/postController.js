const asyncHandler = require('express-async-handler')
const Post = require('./postModel')

/**
 * @desc    Fetch all posts
 * @route   GET /api/posts
 * @access  Public
 */
const getPosts = asyncHandler(async (req, res) => {
	const posts = await Post.find({}).sort({ createdAt: -1 })
	res.json(posts)
})

/**
 * @desc    Create a post
 * @route   POST /api/posts
 * @access  Public
 */
const createPost = asyncHandler(async (req, res) => {
	try {
		const { title, body } = req.body

		if (!title || !body) {
			res.status(400).json({ message: 'Please fill in all fields' })
		}

		const post = new Post({
			title,
			body,
		})

		const createdPost = await post.save()
		res.status(201).json(createdPost)
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: 'error' })
	}
})

/**
 * @desc    Update post
 * @route   PUT /api/posts/:id
 * @access  Public
 */
const updatePost = asyncHandler(async (req, res) => {
	const { title, body, titleUpdated, bodyUpdated } = req.body
	const _id = req.params.id

	if (!titleUpdated && !bodyUpdated) {
		res.status(400).json({ message: 'No fields to update' })
	}

	const newPost = {
		...(titleUpdated && { title }),
		...(bodyUpdated && { body }),
	}

	try {
		await Post.findByIdAndUpdate(_id, {
			$set: newPost,
		})

		res.status(204).json({ message: 'Post updated' })
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: 'error' })
	}
})

/**
 * @desc    Delete post
 * @route   DELETE /api/posts/:id
 * @access  Public
 */
const deletePost = asyncHandler(async (req, res) => {
	try {
		await Post.deleteOne({
			_id: req.params.id,
		})
		console.log('Post deleted')
		res.status(204).json({ message: 'Post deleted' })
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: 'error' })
	}
})

module.exports = { getPosts, createPost, updatePost, deletePost }
