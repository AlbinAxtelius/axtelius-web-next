import Link from 'next/link';

export default function Custom404() {
	return (
		<div className="flex items-center justify-center w-screen h-screen">
			<div className="flex flex-col items-center space-y-4">
				<h1 className="space-x-2 text-4xl text-blue-500">
					<span>404</span>
					<span className="inline-block w-px h-12 -my-2 bg-black"></span>
					<span className="text-base text-black">Page not found</span>
				</h1>
				<Link passHref href={'/'}>
					<a className="px-4 py-2 transition-colors duration-200 bg-blue-100 rounded-md group hover:bg-blue-200">
						<span className="text-sm text-blue-500 transition-colors duration-200 group-hover:text-blue-600">
							Back to safety
						</span>
					</a>
				</Link>
			</div>
		</div>
	);
}
