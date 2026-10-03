/**
 * 关于页内容数据（本地模式占位）。
 *
 * 结构对齐 `src/types/aboutConfig.ts`：关于页的技术栈手风琴 / 魔改时间线 /
 * 社交链接卡片（components/organisms/About/*）都从这里读取数据。
 *
 * 注意：这里只是让工程「克隆即可运行」的占位内容，正式内容请按自己的情况替换；
 * 若接入内容仓（shirone.content.json），本文件由同步脚本从内容仓物化生成。
 */
import type {
	AboutMilestone,
	AboutSocialLink,
	AboutTechGroup,
} from "@/types/aboutConfig";

/** 技术栈分组（手风琴，每组 items 渲染为技术卡片） */
export const aboutTechGroups: AboutTechGroup[] = [
	{
		id: "framework",
		label: "框架与语言",
		icon: "material-symbols:code-rounded",
		items: [
			{
				name: "Astro",
				desc: "内容驱动的站点框架",
				icon: "simple-icons:astro",
				url: "https://astro.build",
				color: "#BC52EE",
			},
			{
				name: "Svelte",
				desc: "响应式交互群岛",
				icon: "simple-icons:svelte",
				url: "https://svelte.dev",
				color: "#FF3E00",
			},
		],
	},
];

/** 魔改时间线（占位，请替换为自己的建站记录） */
export const aboutMilestones: AboutMilestone[] = [
	{
		date: "2026.10",
		title: "基于 Shirone 搭建本站",
		desc: "从主题仓库起步，开始搭建属于自己的博客。",
		tag: "起点",
	},
];

/** 站长社交链接（占位，请替换为自己的账号） */
export const aboutSocialLinks: AboutSocialLink[] = [
	{
		platform: "GitHub",
		handle: "your-github",
		note: "代码与开源",
		href: "https://github.com",
		icon: "fa6-brands:github",
		brand: "github",
	},
];
