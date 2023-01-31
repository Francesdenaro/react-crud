import { useEffect, useState } from 'react'
import { Post } from '../Types'
import PostCard from './PostCard'

const PostList = () => {
	const [posts, setPosts] = useState<Array<Post>>([])
	const fetchPosts = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts')
		const data = await response.json()
		return data
	}
	useEffect(() => {
		fetchPosts().then(data => setPosts(data))
		// fetch data
	}, [])
	return (
		<div className='flex max-w-4xl flex-col gap-4'>
			<h1 className='pl-4 text-4xl font-bold'>Post list</h1>

			{posts.map(post => (
				<PostCard key={post.id} post={post} />
			))}
		</div>
	)
}
export default PostList
