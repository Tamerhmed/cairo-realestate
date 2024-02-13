import Image from 'next/image';
import { Button, Flex, Input } from 'antd';
import { UserButton, currentUser } from '@clerk/nextjs';

export default async  function Home() {
	const loggedInUser = await currentUser();
	console.log(loggedInUser);
	return (
		<main>
			<h1>Realestate</h1>
			<UserButton />
		</main>
	);
}
