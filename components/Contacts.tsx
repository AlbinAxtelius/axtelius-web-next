import { mdiEmailOutline, mdiGithub, mdiLinkedin } from '@mdi/js';
import { Icon } from '@mdi/react';
import { ContactInfo } from '../types';

type Props = {
	contactInfo: ContactInfo[];
};

const iconDictionary = {
	email: mdiEmailOutline,
	linkedin: mdiLinkedin,
	github: mdiGithub
};

export default function Contacts({ contactInfo }: Props) {
	return (
		<div className="inline-flex flex-col w-full px-8 md:w-auto md:flex-row md:space-x-4 md:px-0">
			{contactInfo.map((contact, index) => {
				return (
					<a
						key={index}
						href={contact.link}
						target={'_blank'}
						rel="noopener noreferrer"
						className="relative flex items-center w-full px-4 py-2 font-mono transition-colors duration-200 bg-white rounded-md cursor-pointer group md:w-44 hover:bg-slate-100"
					>
						<Icon
							path={iconDictionary[contact.icon]}
							className="absolute top-0 right-0 z-0 w-12 h-12 m-1 subpixel-antialiased transition-colors duration-200 text-slate-200 group-hover:text-slate-300"
						/>
						<div className="z-10 flex flex-col">
							<h2 className="font-bold">{contact.title}</h2>
							<span className="text-xs text-gray-500">{contact.alias}</span>
						</div>
					</a>
				);
			})}
		</div>
	);
}
