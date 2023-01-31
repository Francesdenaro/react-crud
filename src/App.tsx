import NewPost from './components/NewPost'
import PostList from './components/PostList'

function App() {
	return (
		<div className='flex min-h-screen flex-col items-center gap-12 bg-sky-200 py-10'>
			<NewPost />
			<PostList />
		</div>
	)
}

export default App
