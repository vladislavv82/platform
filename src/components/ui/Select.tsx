import React from 'react'
import cn from 'clsx'

interface Option<T> {
	value: T // Измените на дженерик для поддержки различных enum
	label: string
}

interface TypeSelectProps<T> {
	options: Option<T>[]
	onChange: (value: Option<T>) => void
	placeholder?: string
    label: string
	className?: string
}

const Select = <T,>({
	options,
	onChange,
    label,
	placeholder,

	className
}: TypeSelectProps<T>) => {
	return (
		<div>
			<label
				className={`text-sm text-white/60 dark:text-white ml-1.5 font-medium opacity-60`}
			>
				{label}
			</label>
			<select
				className={cn(
					'bg-[#2C2F55] text-white px-4 py-2 mt-5 transition-colors',
					className
				)}
				onChange={e => {
					const selectedOption = options.find(
						option => option.value === (e.target.value as unknown as T)
					)
					if (selectedOption) {
						onChange(selectedOption)
					}
				}}
			>
				<option value="" disabled>
					{placeholder}
				</option>
				{options.map(option => (
					<option
						key={option.value as unknown as string}
						value={option.value as unknown as string}
					>
						{option.label}
					</option>
				))}
			</select>
		</div>
	)
}

export default Select
