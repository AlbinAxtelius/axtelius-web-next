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
		<div className="inline-flex w-full md:w-auto flex-col md:flex-row md:space-x-4">
			{contactInfo.map((contact, index) => {
				return (
					<a
						key={index}
						href={contact.link}
						target={'_blank'}
						rel="noopener noreferrer"
						className="flex group items-center font-mono py-2 px-4 rounded-md relative w-full md:w-44 cursor-pointer transition-colors duration-200 bg-white hover:bg-slate-100"
					>
						<Icon
							path={iconDictionary[contact.icon]}
							className="h-12 w-12 subpixel-antialiased text-slate-200 absolute z-0 right-0 top-0 m-1 transition-colors duration-200 group-hover:text-slate-300"
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
