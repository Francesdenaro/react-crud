import { Post } from '../Types'
import { FaPencilAlt, FaSave, FaTrashAlt } from 'react-icons/fa'
import toast from 'react-hot-toast'
import { AppContext } from '../App'
import { useContext, useState } from 'react'
import Button from './Button'

const PostCard = ({ post }: { post: Post }) => {
	const ctx = useContext(AppContext)
	const [inEdition, setInEdition] = useState(false)
	const [newData, setNewData] = useState({
		title: '',
		body: '',
		titleUpdated: false,
		bodyUpdated: false,
	})
	const [currentData, setCurrentData] = useState({
		title: post.title,
		body: post.body,
	})

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

	const saveCard = async () => {
		const current = {
			...(newData.titleUpdated
				? { title: newData.title }
				: { title: currentData.title }),
			...(newData.bodyUpdated
				? { body: newData.body }
				: { body: currentData.body }),
		}
		try {
			await fetch(`http://localhost:8000/posts/${post._id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					title: newData.title,
					body: newData.body,
					titleUpdated: newData.titleUpdated,
					bodyUpdated: newData.bodyUpdated,
				}),
			})
			setCurrentData(current)
			toast.success('Post updated')
			setInEdition(false)
		} catch (error) {
			console.error(error)
			toast.error('Something went wrong')
		}
	}

	return (
		<article
			onDoubleClick={() => setInEdition(true)}
			className='group relative flex flex-col gap-2 rounded-xl bg-white px-12 py-8 shadow-lg transition duration-300 hover:scale-105'
		>
			<div className='flex justify-between'>
				{inEdition ? (
					<input
						type='text'
						className='w-80 rounded-lg border-2 border-gray-300 p-2 focus:border-2 focus:border-sky-600 focus:outline-none'
						defaultValue={currentData.title}
						onChange={e =>
							setNewData({
								...newData,
								title: e.target.value,
								titleUpdated: true,
							})
						}
					/>
				) : (
					<h2 className='font-bold capitalize'>{currentData.title}</h2>
				)}
			</div>

			{inEdition ? (
				<textarea
					className='w-full rounded-lg border-2 border-gray-300 p-2 focus:border-2 focus:border-sky-600 focus:outline-none'
					defaultValue={currentData.body}
					onChange={e =>
						setNewData({ ...newData, body: e.target.value, bodyUpdated: true })
					}
				/>
			) : (
				<p>{currentData.body}</p>
			)}

			<div
				className={`absolute right-8 flex items-stretch gap-4 ${
					inEdition ? 'opacity-100' : 'opacity-0'
				} transition-opacity duration-300 group-hover:opacity-100`}
			>
				{inEdition && (
					<Button color='green' onClick={() => saveCard()}>
						<FaSave className='text-white' /> Save
					</Button>
				)}
				<Button
					color={inEdition ? 'gray' : 'sky'}
					onClick={() => setInEdition(prev => !prev)}
				>
					<FaPencilAlt className='text-white' />{' '}
					{inEdition ? 'Stop editing' : 'Edit'}
				</Button>
				<Button onClick={() => deletePost(post._id)} color='red'>
					<FaTrashAlt className='text-white' /> Delete
				</Button>
			</div>
		</article>
	)
}
export default PostCard
