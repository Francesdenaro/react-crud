import { useState } from 'react'
import { useContext } from 'react'
import { apiURL, AppContext } from '../App'
import { toast } from 'react-hot-toast'

const NewPost = () => {
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	const ctx = useContext(AppContext)

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			await fetch(`${apiURL}/posts`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ title, body }),
			})
			ctx.setRefresh(!ctx.refresh)
			toast.success('Posts added successfully!')
			setTitle('')
			setBody('')
		} catch (error) {
			console.error(error)
			toast.error('Something went wrong')
		}
	}

	return (
		<form
			onSubmit={e => handleSubmit(e)}
			className='flex w-full max-w-4xl flex-col items-start gap-8 rounded-xl bg-white py-8 px-12 shadow'
		>
			<h2 className='text-3xl font-bold text-sky-600'>Add new post</h2>
			<div className='flex flex-col gap-2'>
				<label htmlFor='title'>Title</label>
				<input
					required
					onChange={e => setTitle(e.target.value)}
					type='text'
					name='title'
					id='title'
					className='w-80 rounded-lg border-2 border-gray-300 p-2 focus:border-2 focus:border-sky-600 focus:outline-none'
				/>
			</div>
			<div className='flex w-full flex-col gap-2'>
				<label htmlFor='body'>Body</label>
				<textarea
					required
					onChange={e => setBody(e.target.value)}
					name='body'
					className='h-24 rounded-lg border-2 border-gray-300 p-2 focus:border-2 focus:border-sky-600 focus:outline-none'
					id='body'
				/>
			</div>
			<button
				type='submit'
				className='rounded-lg bg-sky-600 px-4 py-2 text-white transition duration-300 hover:bg-sky-700'
			>
				+ Add post
			</button>
		</form>
	)
}
export default NewPost
