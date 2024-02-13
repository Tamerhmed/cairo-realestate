import React from 'react';
import { ConfigProvider } from 'antd';

export default function ThemeProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<ConfigProvider
				theme={{
					token: {
						colorPrimary: '#40c6e0',
					},
					components: {
						Button: {
							controlHeight: 40,
							boxShadow: 'none',
							colorPrimaryActive: '#40c6e0',
							controlOutline: 'none',
						},
						Input: {
							controlHeight: 45,
							boxShadow: 'none',
							activeShadow: 'none',
						},
					},
				}}
			>
				{children}
			</ConfigProvider>
		</div>
	);
}
