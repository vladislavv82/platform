import { forwardRef } from 'react'

interface InputFieldProps {
	id: string
	label: string
	extra?: string
	placeholder: string
	variant?: string
	state?: 'error' | 'success'
	disabled?: boolean
	type?: string
	isNumber?: boolean
	sup?: string
}

export const Field = forwardRef<HTMLInputElement, InputFieldProps>(
	(
		{
			sup,
			label,
			id,
			extra,
			type,
			placeholder,
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			state,
			disabled,
			isNumber,
			...rest
		},
		ref
	) => {
		return (
			<div className={`${extra}`}>
				<label
					htmlFor={id}
					className={`text-lg text-white/60 dark:text-white ml-1.5 font-medium opacity-60`}
				>
					{label}
				</label>
				<sup className="text-[tomato]">{sup}</sup>
				<input
					ref={ref}
					disabled={disabled}
					type={type}
					id={id}
					placeholder={placeholder}
					className="w-full p-2 border border-neutral-500 rounded focus:outline-none focus:border-indigo-500 bg-transparent text-white transition-colors mt-1"
					onKeyDown={event => {
						if (
							isNumber &&
							!/[0-9]/.test(event.key) &&
							event.key !== 'Backspace' &&
							event.key !== 'Tab' &&
							event.key !== 'Enter' &&
							event.key !== 'ArrowLeft' &&
							event.key !== 'ArrowRight'
						) {
							event.preventDefault()
						}
					}}
					{...rest}
				/>
			</div>
		)
	}
)

Field.displayName = 'field'
