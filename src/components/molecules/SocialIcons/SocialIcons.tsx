import { ReactNode } from "react";

export interface SocialIconsProps {
	profiles: Array<{
		url: string;
		name: string;
		icon: ReactNode;
	}>;
}

const SocialIcons = ({ profiles }: SocialIconsProps) => {
	return (
		<ul className="flex gap-6">
			{profiles.map(({ url, name, icon }) => (
				<li
					className="text-2xl opacity-70 hover:opacity-100 transition"
					key={name}
				>
					<a href={url} target="_blank" rel="noopener noreferrer" title={name}>
						{icon}
					</a>
				</li>
			))}
		</ul>
	);
};

export { SocialIcons };
