import { GetStaticProps } from 'next'
import AxteliusTitles from '../components/AxteliusTitles'
import Contacts from '../components/Contacts'
import { getContactInfo } from '../services/FirebaseService'
import { ContactInfo } from '../types'

type Props = {
	contactInfo: ContactInfo[]
}

export default function Home({ contactInfo }: Props) {
	return (
		<div className="min-h-screen w-screen bg-white dark:bg-black">
			<div className="mx-auto h-screen py-6">
				<div className="flex h-full flex-col items-center justify-between">
					<AxteliusTitles />
					<Contacts contactInfo={contactInfo} />
				</div>
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
