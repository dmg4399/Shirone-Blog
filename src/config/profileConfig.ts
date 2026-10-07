import type { ProfileConfig } from "@/types/config";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 博主资料：头像 / 名称 / 简介 / 社交链接（侧栏 Profile 卡片、页脚、RSS 作者等消费）。
 * 类型见 src/types/config.ts。
 */
export const profileConfig: ProfileConfig = withUserConfig("profile", {
	avatar: "assets/images/reference-profile-avatar.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "₫₥",
	bio: "躬身入局，心为主理，行有尺度，自持本心.",
	statsPreview: true,
	links: [
		// 尚未配置的社交入口保留占位链接。
		{ name: "QQ群", icon: "simple-icons:tencentqq", url: "#" },
		{
			name: "Bilibili",
			icon: "simple-icons:bilibili",
			url: "https://space.bilibili.com/651199847",
		},
		{
			name: "GitHub",
			icon: "simple-icons:github",
			url: "https://github.com/dmg4399",
		},
		{ name: "Email", icon: "material-symbols:mail-outline", url: "#" },
		{ name: "RSS", icon: "material-symbols:rss-feed", url: "#" },
	],
});
