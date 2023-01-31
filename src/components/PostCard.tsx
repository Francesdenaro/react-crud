import { Post } from '../Types'

const PostCard = ({ post }: { post: Post }) => {
	return (
		<article className='flex flex-col gap-4 rounded-xl bg-white px-12 py-8 shadow-lg'>
			<h2 className='font-bold capitalize'>{post.title}</h2>
			<p>{post.body}</p>
		</article>
	)
}
export default PostCard
