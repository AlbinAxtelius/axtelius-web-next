import { GetStaticProps, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
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
		<div className="container h-screen py-6 mx-auto">
			<div className="flex flex-col items-center justify-between h-full">
				<AxteliusTitles />
				{/* <Image src={'/logo.svg'} alt="logo" height={500} width={500} /> */}
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
