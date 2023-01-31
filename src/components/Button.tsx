const Button = ({
	children,
	onClick,
	color,
}: {
	children: React.ReactNode
	onClick: () => void
	color?: string
}) => {
	const getColor = (color: string) => `bg-${color}-600 hover:bg-${color}-400`

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
