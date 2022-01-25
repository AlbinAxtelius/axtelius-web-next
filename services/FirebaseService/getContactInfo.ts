import {
	collection,
	getDocs,
	getFirestore,
	query
} from 'firebase/firestore/lite';
import { ContactInfo } from '../../types';
import { app } from './_firebase';

export const getContactInfo = async (): Promise<ContactInfo[]> => {
	const firestore = getFirestore(app);

	const contactInfo = await getDocs(
		query(collection(firestore, 'contactsInfo'))
	);

	if (contactInfo.empty) {
		throw new Error('Contact info not found');
	}

	return contactInfo.docs.map((doc) => doc.data() as ContactInfo);
};
