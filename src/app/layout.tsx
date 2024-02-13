import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/providers/theme-provider';
import { ClerkProvider } from '@clerk/nextjs';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['300', '400', '500', '900', '700'],
});

export const metadata: Metadata = {
	title: 'Cairo realestate',
	description: 'Real Estate & Property for sale in VIC',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body className={roboto.className}>
					<ThemeProvider>{children}</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
