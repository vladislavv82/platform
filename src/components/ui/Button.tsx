import cn from 'clsx'
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type TypeButton = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
	children,
	className,
	...rest
}: PropsWithChildren<TypeButton>) {
	return (
		<button
			className={cn(
				'bg-[#6365f185] px-4 py-2 mt-5 transition-colors hover:bg-[#5e60eb85] active:bg-[#4547d185] rounded-lg',
				className
			)}
			{...rest}
		>
			{children}
		</button>
	)
}
