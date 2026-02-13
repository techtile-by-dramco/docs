import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				component: z
					.enum([
						'physical',
						'network',
						'time',
						'power',
						'tile-node',
						'rf',
						'daq',
						'qualisys',
						'operations',
						'cross-cutting',
					])
					.optional(),
				status: z.enum(['draft', 'reviewed', 'stable']).default('draft'),
				last_verified: z.union([z.date(), z.string().regex(/^\d{4}-\d{2}-\d{2}$/)]).optional(),
				sources: z.array(z.string()).default([]),
				sensitivity: z.enum(['public', 'internal', 'restricted']).default('public'),
				depends_on: z.array(z.string()).default([]),
				provides_to: z.array(z.string()).default([]),
				critical_paths: z.array(z.string()).default([]),
			}),
		}),
	}),
};
