import type { PropsWithChildren } from 'react'

import DashboardLayout from '@/components/DashboardLayout'

export default async function LayoutLk({
	children
}: PropsWithChildren<unknown>) {
	return (
		<DashboardLayout>
			<div className="bg-white/5 grow rounded-lg p-5">{children}</div>
		</DashboardLayout>
	)
}
