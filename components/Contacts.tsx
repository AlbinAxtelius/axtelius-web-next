import { mdiEmailOutline, mdiGithub, mdiLinkedin } from '@mdi/js'
import { Icon } from '@mdi/react'
import { ContactInfo } from '../types'

type Props = {
	contactInfo: ContactInfo[]
}

const iconDictionary = {
	email: mdiEmailOutline,
	linkedin: mdiLinkedin,
	github: mdiGithub
}

export default function Contacts({ contactInfo }: Props) {
	return (
		<div className="inline-flex w-full flex-col px-8 text-black dark:text-white md:w-auto md:flex-row md:space-x-4 md:px-0">
			{contactInfo.map((contact, index) => {
				return (
					<a
						key={index}
						href={contact.link}
						target={'_blank'}
						rel="noopener noreferrer"
						className="group relative flex w-full cursor-pointer items-center rounded-md bg-white px-4 py-2 font-mono transition-colors duration-200 hover:bg-slate-100 dark:bg-black dark:hover:bg-zinc-900 md:w-44"
					>
						<Icon
							path={iconDictionary[contact.icon]}
							className="absolute top-0 right-0 z-0 m-1 h-12 w-12 text-slate-200 subpixel-antialiased transition-colors duration-200 group-hover:text-slate-300"
						/>
						<div className="z-10 flex flex-col">
							<h2 className="font-bold ">{contact.title}</h2>
							<span className="text-xs text-zinc-500">{contact.alias}</span>
						</div>
					</a>
				)
			})}
		</div>
	)
}
