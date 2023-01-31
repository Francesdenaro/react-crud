import { Post } from '../Types'
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa'
import toast from 'react-hot-toast'
import { AppContext } from '../App'
import { useContext } from 'react'

const PostCard = ({ post }: { post: Post }) => {
	const ctx = useContext(AppContext)

	const deletePost = async (id: number) => {
		console.log(id)
		try {
			const res = await fetch(`http://localhost:8000/posts/${id}`, {
				method: 'DELETE',
			})
			console.log(res)
			toast.success('Post deleted')
			ctx.setRefresh(!ctx.refresh)
		} catch (error) {
			console.error(error)
			toast.error('Something went wrong')
		}
	}

	return (
		<article className='group flex flex-col gap-4 rounded-xl bg-white px-12 py-8 shadow-lg'>
			<div className='flex justify-between'>
				<h2 className='font-bold capitalize'>{post.title}</h2>
				<div className='flex gap-4'>
					<button className='self-end rounded-lg bg-sky-600 px-4 py-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
						<FaPencilAlt className='text-white' />
					</button>
					<button className='self-end rounded-lg bg-red-600 px-4 py-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
						<FaTrashAlt
							onClick={() => deletePost(post._id)}
							className='text-white'
						/>
					</button>
				</div>
			</div>
			<p>{post.body}</p>
		</article>
	)
}
export default PostCard
