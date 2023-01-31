import { useEffect, useState } from 'react'
import { Post } from '../Types'
import PostCard from './PostCard'
import { useContext } from 'react'
import { apiURL, AppContext } from '../App'
import toast from 'react-hot-toast'

const PostList = () => {
	const [posts, setPosts] = useState<Array<Post>>([])
	const ctx = useContext(AppContext)
	const [isLoaded, setIsLoaded] = useState(false)

	const fetchPosts = async () => {
		toast.loading('Loading posts...')
		setIsLoaded(false)
		const response = await fetch(`${apiURL}/posts`)
		const data = await response.json()
		setIsLoaded(true)
		return data
	}

	useEffect(() => {
		fetchPosts().then(data => {
			setPosts(data)
			toast.dismiss()
		})
	}, [ctx.refresh])

	return (
		<div className='flex w-full max-w-4xl flex-col items-stretch gap-4'>
			<h1 className='pl-4 text-4xl font-bold'>Post list</h1>

			{isLoaded ? (
				posts.map(post => <PostCard key={post._id} post={post} />)
			) : (
				<div></div>
			)}
		</div>
	)
}
export default PostList
