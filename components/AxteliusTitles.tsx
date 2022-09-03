import React from 'react'

const AxteliusTitles: React.FC = (props) => {
	return (
		<div
			data-testid="axtelius-titles"
			className="mt-8 text-center font-mono text-2xl text-black dark:text-white md:text-6xl"
		>
			<h1>
				<span className="font-extrabold">www</span>.axtelius.se
			</h1>
			<h1>
				www.<span className="font-extrabold">axtelius</span>.se
			</h1>
			<h1>
				www.axtelius.<span className="font-extrabold">se</span>
			</h1>
		</div>
	)
}

export default AxteliusTitles
