import NewPost from './components/NewPost'
import PostList from './components/PostList'
import { createContext, useState } from 'react'
import { Toaster } from 'react-hot-toast'

interface AppContextProps {
	refresh: boolean
	setRefresh: React.Dispatch<React.SetStateAction<boolean>>
}

export const AppContext = createContext<AppContextProps>({
	refresh: false,
	setRefresh: () => {},
})

function App() {
	const [refresh, setRefresh] = useState(false)
	return (
		<AppContext.Provider value={{ refresh, setRefresh }}>
			<Toaster />
			<div className='flex min-h-screen flex-col items-center gap-12 bg-sky-200 py-10'>
				<NewPost />
				<PostList />
			</div>
		</AppContext.Provider>
	)
}

export default App
