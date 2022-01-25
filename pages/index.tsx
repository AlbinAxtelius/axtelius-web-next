import { GetStaticProps, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import AxteliusTitles from '../components/AxteliusTitles';
import Contacts from '../components/Contacts';
import { getContactInfo } from '../services/FirebaseService';
import { ContactInfo } from '../types';

type Props = {
	contactInfo: ContactInfo[];
};

export default function Home({ contactInfo }: Props) {
	return (
		<div className="container mx-auto py-6 h-screen">
			<div className="flex flex-col items-center justify-between h-full">
				<AxteliusTitles />
				<Contacts contactInfo={contactInfo} />
			</div>
		</div>
	);
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	const contactInfo = await getContactInfo().catch(() => []);

	return {
		props: {
			contactInfo
		}
	};
};
