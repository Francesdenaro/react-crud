const Button = ({
	children,
	onClick,
	color,
}: {
	children: React.ReactNode
	onClick: () => void
	color?: string
}) => {
	const getColor = (color: string) => {
		switch (color) {
			case 'green':
				return 'bg-green-600 hover:bg-green-700'
			case 'red':
				return 'bg-red-600 hover:bg-red-700'
			case 'sky':
				return 'bg-sky-600 hover:bg-sky-700'
			default:
				return 'bg-gray-600 hover:bg-gray-700'
		}
	}

	return (
		<button
			onClick={onClick}
			className={`${
				color ? getColor(color) : 'bg-gray-600 hover:bg-gray-400'
			} flex items-center gap-2 self-end rounded-lg px-4 py-2 text-sm text-white`}
		>
			{children}
		</button>
	)
}

export default Button
