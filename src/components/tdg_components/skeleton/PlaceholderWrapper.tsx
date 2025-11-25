import { ReactNode } from 'react';

import { twMerge } from 'tailwind-merge';

type GradientType = 'light' | 'dark' | 'default' | 'rainbow';

type SkeletonLoaderT = {
	type?: GradientType;
	className?: string;
	children: ReactNode;
};

// https://blog.logrocket.com/guide-adding-gradients-tailwind-css/

const PlaceholderWrapper = ({ type = 'default', className, children }: SkeletonLoaderT) => {
	const gradients: Record<GradientType, string> = {
		default: 'bg-gradient-to-r from-[rgb(180,180,180)] via-[rgb(220,220,220)] to-[rgb(220,220,220)]',
		dark: 'bg-gradient-to-r from-[rgb(180,180,180,0)] via-[rgb(220,220,220,0.5)] to-[rgb(180,180,180,1)]',
		light: 'bg-gradient-to-r from-[rgb(220,220,220,0)] via-[rgb(245,245,245,0.5)] to-[rgb(180,180,180,1)]',
		rainbow: `bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500`,
	};

	return (
		<div className={'relative h-full w-full'}>
			<div
				className={twMerge(
					'flex h-full w-full animate-pulse items-center' + ' justify-center',
					className,
					gradients[type]
				)}
			></div>
			<div className={'absolute inset-0'}>{children}</div>
		</div>
	);
};

export default PlaceholderWrapper;
