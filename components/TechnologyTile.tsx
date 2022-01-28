import { Transition } from '@headlessui/react'
import { mdiGit } from '@mdi/js'
import Icon from '@mdi/react'
import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'

export enum TintColor {
	blue = 'blue',
	green = 'green',
	orange = 'orange',
	red = 'red',
	yellow = 'yellow'
}

type ColorTint = {
	[key in TintColor]: string
}

const backgroundsColors: ColorTint = {
	[TintColor.blue]: 'hover:bg-blue-100',
	[TintColor.green]: 'hover:bg-green-100',
	[TintColor.orange]: 'hover:bg-orange-100',
	[TintColor.red]: 'hover:bg-red-100',
	[TintColor.yellow]: 'hover:bg-yellow-100'
}

const textColors: ColorTint = {
	[TintColor.blue]: 'hover:text-blue-500',
	[TintColor.green]: 'hover:text-green-500',
	[TintColor.orange]: 'hover:text-orange-500',
	[TintColor.red]: 'hover:text-red-500',
	[TintColor.yellow]: 'hover:text-yellow-500'
}

type Props = {
	tintColor: TintColor
	path: string
	tooltip: string
}

export default function TechnologyTile({ tintColor, path, tooltip }: Props) {
	const [isHovered, setIsHovered] = useState(false)

	const _setIsHovering = () => setIsHovered(true)
	const _setIsNotHovering = () => setIsHovered(false)

	return (
		<div
			className={classNames(
				backgroundsColors[tintColor],
				textColors[tintColor],
				'relative',
				'inline-block py-2 px-4 rounded-md text-gray-400 cursor-pointer transition-colors duration-200'
			)}
			onMouseEnter={_setIsHovering}
			onMouseLeave={_setIsNotHovering}
		>
			<Icon path={path} className="w-8 h-8 fill-current" />
			<Transition
				show={isHovered}
				enter="transition-opacity duration-200"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="transition-opacity duration-200"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
				className="pointer-events-none"
			>
				<Tooltip text={tooltip} />
			</Transition>
		</div>
	)
}

function Tooltip({ text }: { text: string }) {
	const tooltipRef = useRef<HTMLDivElement>(null!)

	useEffect(() => {
		const { left, right } = tooltipRef.current.getBoundingClientRect()

		if (left < 0) {
			tooltipRef.current.style.marginLeft = `${Math.abs(left)}px`
		} else if (right > window.innerWidth) {
			tooltipRef.current.style.marginLeft = `${-right + window.innerWidth}px`
		}
	}, [])

	return (
		<div
			ref={tooltipRef}
			className="absolute z-50 px-2 py-1 my-2 leading-none transform -translate-x-1/2 bg-gray-500 rounded-md top-full left-1/2 translate"
		>
			<span className="text-xs text-white whitespace-nowrap">{text}</span>
		</div>
	)
}
