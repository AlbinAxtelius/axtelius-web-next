import {
	mdiGit,
	mdiLanguageHtml5,
	mdiLanguageJavascript,
	mdiLanguageTypescript,
	mdiTailwind
} from '@mdi/js'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import AxteliusTitles from '../components/AxteliusTitles'
import Contacts from '../components/Contacts'
import TechnologyTile, { TintColor } from '../components/TechnologyTile'
import { getContactInfo } from '../services/FirebaseService'
import { ContactInfo } from '../types'

type Props = {
	contactInfo: ContactInfo[]
}

export default function Home({ contactInfo }: Props) {
	return (
		<div className="container h-screen py-6 mx-auto">
			<div className="flex flex-col items-center justify-between h-full">
				<AxteliusTitles />
				<div className="flex items-center justify-center">
					<TechnologyTile
						tooltip="Tailwind CSS"
						path={mdiTailwind}
						tintColor={TintColor.green}
					/>
					<TechnologyTile
						tooltip="TypeScript"
						path={mdiLanguageTypescript}
						tintColor={TintColor.blue}
					/>
					<TechnologyTile
						tooltip="HTML"
						path={mdiLanguageHtml5}
						tintColor={TintColor.orange}
					/>
					<TechnologyTile
						tooltip="Git"
						path={mdiGit}
						tintColor={TintColor.red}
					/>
					<TechnologyTile
						tooltip="JavaScript"
						path={mdiLanguageJavascript}
						tintColor={TintColor.yellow}
					/>
				</div>
				<Contacts contactInfo={contactInfo} />
			</div>
		</div>
	)
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	const contactInfo = await getContactInfo().catch(() => [])

	return {
		props: {
			contactInfo
		}
	}
}
