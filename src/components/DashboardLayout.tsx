import type { PropsWithChildren } from 'react'

import { Sidebar } from './sidebar/Sidebar'
import { Header } from './ui/Header'

export default function DashboardLayout({
	children
}: PropsWithChildren<unknown>) {
	return (
		<div className="z-20 grid 2xl:grid-cols-[1.1fr_50fr] grid-cols-[1fr_50fr] gap-5 min-h-full ">
			<Sidebar />
			<main className="flex flex-col p-big-layout overflow-x-hidden relative gap-5 content__container">
				<Header />
				{children}
			</main>
		</div>
	)
}
