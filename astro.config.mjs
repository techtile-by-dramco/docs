// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Techtile Docs',
			favicon: '/techtile-favicon.svg',
			logo: {
				light: './src/assets/techtile-logo-light.svg',
				dark: './src/assets/techtile-logo-dark.svg',
				alt: 'Techtile',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/techtile-by-dramco' }],
			sidebar: [
				{
					label: 'Infrastructure',
					items: [
						{ label: 'Overview', slug: 'infrastructure/overview' },
						{ label: 'Physical Structure', slug: 'infrastructure/physical' },
						{ label: 'Network Backbone', slug: 'infrastructure/network' },
						{ label: 'Time & Synchronization', slug: 'infrastructure/time' },
						{ label: 'Power & PoE', slug: 'infrastructure/power' },
						{ label: 'Tile Node Platform', slug: 'infrastructure/tile-node' },
						{ label: 'RF Subsystem', slug: 'infrastructure/rf' },
						{ label: 'DAQ Stack', slug: 'infrastructure/daq' },
						{ label: 'Qualisys Motion Capture', slug: 'infrastructure/qualisys' },
					],
				},
				{
					label: 'Operations',
					items: [
						{ label: 'Dashboard', slug: 'operations/dashboard' },
						{ label: 'Remote Access', slug: 'operations/remote-access' },
						{ label: 'Virtual Machines', slug: 'operations/virtual-machines' },
						{ label: 'Tile Management', slug: 'operations/tile-management' },
						{ label: 'Running Experiments', slug: 'operations/running-experiments' },
					],
				},
			],
		}),
	],
});
