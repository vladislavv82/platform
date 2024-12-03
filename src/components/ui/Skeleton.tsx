interface SkeletonProps {
	width?: string;
	height?: string;
	mb?: string;
}

export function Skeleton({ width = "100%", height = "20px", mb = "10px" }: SkeletonProps) {
	return (
		<div
			className={`animate-pulse bg-gray-300 rounded-full`}
			style={{ width, height, marginBottom: mb }}
		>
			&nbsp;
		</div>
	)
}
