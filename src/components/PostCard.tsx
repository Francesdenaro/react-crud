import { Post } from '../Types'
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa'

const PostCard = ({ post }: { post: Post }) => {
	return (
		<article className='group flex flex-col gap-4 rounded-xl bg-white px-12 py-8 shadow-lg'>
			<div className='flex justify-between'>
				<h2 className='font-bold capitalize'>{post.title}</h2>
				<div className='flex gap-4'>
					<button className='self-end rounded-lg bg-sky-600 px-4 py-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
						<FaPencilAlt className='text-white' />
					</button>
					<button className='self-end rounded-lg bg-red-600 px-4 py-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
						<FaTrashAlt className='text-white' />
					</button>
				</div>
			</div>
			<p>{post.body}</p>
		</article>
	)
}
export default PostCard
