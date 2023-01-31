import { useEffect, useState } from 'react'
import { Post } from '../Types'
import PostCard from './PostCard'
import { useContext } from 'react'
import { AppContext } from '../App'

const PostList = () => {
	const [posts, setPosts] = useState<Array<Post>>([])
	const ctx = useContext(AppContext)
	const [isLoaded, setIsLoaded] = useState(false)

	const fetchPosts = async () => {
		setIsLoaded(false)
		const response = await fetch('http://localhost:8000/posts')
		const data = await response.json()
		setIsLoaded(true)
		return data
	}

	useEffect(() => {
		fetchPosts().then(data => setPosts(data))
	}, [ctx.refresh])

	return (
		<div className='flex w-full max-w-4xl flex-col items-stretch gap-4'>
			<h1 className='pl-4 text-4xl font-bold'>Post list</h1>

			{isLoaded ? (
				posts.map(post => <PostCard key={post._id} post={post} />)
			) : (
				<div>Loading...</div>
			)}
		</div>
	)
}
export default PostList
