import { Heading } from '@/components/ui/Heading'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Личный кабинет'
}

export default function HomeLkPage() {
	return (
		<>
			<div className="">
				<Heading title="Личный кабинет" />
				<br />
			</div>
		</>
	)
}
