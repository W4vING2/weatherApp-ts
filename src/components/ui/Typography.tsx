interface TypographyProps {
	title: string
}

export default function Typography(props: TypographyProps) {
	return <p className='text-white font-bold text-xl'>{props.title}</p>
}
