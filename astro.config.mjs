// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'EnMoney',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' },
			],
			sidebar: [
				{
					label: '开始使用',
					items: [
						{ label: '快速上手', slug: 'guides/getting-started' },
						{ label: '快速记账', slug: 'guides/quick-recording' },
						{ label: '分类管理', slug: 'guides/categories' },
						{ label: '账户管理', slug: 'guides/accounts' },
						{ label: '存钱与计划', slug: 'guides/savings-planning' },
						{ label: '资产管理', slug: 'guides/assets' },
					],
				},
				{
					label: '关于',
					items: [
						{ label: '产品哲学', slug: 'about/philosophy' },
						{ label: '隐私政策', slug: 'about/privacy' },
						{ label: '联系我们', slug: 'about/contact' },
					],
				},
			],
		}),
	],
});
