const NewPost = () => {
	return (
		<form className='flex w-full max-w-4xl flex-col items-start gap-8 rounded-xl bg-white py-8 px-12'>
			<h2 className='text-3xl font-bold text-sky-600'>Add new post</h2>
			<div className='flex flex-col gap-2'>
				<label htmlFor='title'>Title</label>
				<input
					type='text'
					name='title'
					id='title'
					className='w-80 rounded-lg border-2 border-gray-300 p-2 focus:border-2 focus:border-sky-600 focus:outline-none'
				/>
			</div>
			<div className='flex w-full flex-col gap-2'>
				<label htmlFor='body'>Body</label>
				<textarea
					name='body'
					className='rounded-lg border-2 border-gray-300 focus:border-2 focus:border-sky-600 focus:outline-none'
					id='body'
				/>
			</div>
			<button
				type='submit'
				className='rounded-lg bg-sky-600 px-4 py-2 text-white'
			>
				Submit
			</button>
		</form>
	)
}
export default NewPost
