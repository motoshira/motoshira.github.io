import Heading2 from "@/components/Heading2";
import Heading3 from "@/components/Heading3";
import LinkText from "@/components/LinkText";
import Section from "@/components/Section";
import SectionItem from "@/components/SectionItem";
import SectionWrap from "@/components/SectionWrap";
import Text1 from "@/components/Text1";
import LinkWrap from "@/components/linkWrap";
import myImage from "../../public/me.svg";

const Navigation = () => {
	return (
		<nav className="sticky top-0 h-[60px] w-full bg-primary z-10">
			<div className="mx-auto flex h-full px-2 items-stretch w-full md:max-w-[60%]">
				<h1 className="flex flex-row justify-start items-stretch text-lg text-header-font decoration-2 hover:bg-[color-mix(in_srgb,theme(colors.primary)_70%,white_30%)]">
					<a href="/" className="flex flex-row items-center px-4 gap-x-3">
						<img src={myImage.src} width={48} height={48} />
						<span>motoshira.net</span>
					</a>
				</h1>
			</div>
		</nav>
	);
};

const SubSectionWrap = ({ children }: { children: React.ReactNode }) => {
	return <div className="flex flex-col w-full space-y-4">{children}</div>;
};

function App() {
	return (
		<>
			<Navigation />
			<main>
				<SectionWrap>
					<Section>
						<Heading2>Purpose</Heading2>
						TODO
					</Section>
				</SectionWrap>
				<SectionWrap>
					<Section>
						<Heading2>Works</Heading2>
						<SubSectionWrap>
							<LinkWrap href="https://main.d29mqqgyf3frw5.amplifyapp.com">
								<Heading3>WebGL School 2024 Homework</Heading3>
							</LinkWrap>
							<p>
								<LinkText href="https://webgl.souhonzan.org/entry/?v=2635">
									WebGLスクール第11期
								</LinkText>
								<Text1>に参加した際に提出した課題一覧です。</Text1>
							</p>
						</SubSectionWrap>
					</Section>
				</SectionWrap>
				<SectionWrap>
					<Section>
						<Heading2>Profile</Heading2>
						<SubSectionWrap>
							<p>TODO</p>
						</SubSectionWrap>
					</Section>
				</SectionWrap>
				<SectionWrap>
					<Section>
						<Heading2>Skills</Heading2>
						TODO
					</Section>
				</SectionWrap>
				<SectionWrap>
					<Section>
						<Heading2>Likes</Heading2>
						TODO
					</Section>
				</SectionWrap>

				<SectionWrap>
					<Section>
						<Heading2>Experience</Heading2>
						<ul>
							<li>
								<Text1>2024/4~ 株式会社L is B</Text1>
							</li>
							<li>
								<Text1>2021/4~2024/3 トヨクモ株式会社</Text1>
							</li>
						</ul>
					</Section>
				</SectionWrap>
				<SectionWrap>
					<Section>
						<Heading2>Education</Heading2>
						<SectionItem>
							<Text1>
								Bachelor of Medicine, Kanazawa University, 2015-2021
							</Text1>
						</SectionItem>
					</Section>
				</SectionWrap>
				<SectionWrap>
					<Section>
						<Heading2>Links</Heading2>
						<ul className="ml-3 list-inside">
							{[
								{
									label: "GitHub",
									url: "https://github.com/motoshira",
								},
								{
									label: "Bluesky",
									url: "https://bsky.app/profile/motoshira.bsky.social",
								},
								{
									label: "X (Twitter)",
									url: "https://twitter.com/darjeeling743",
								},
								{
									label: "AtCoder",
									url: "https://atcoder.jp/users/motoshira",
								},
							].map(({ label, url }) => {
								return (
									<li key={label} className="ml-1 list-inside list-disc">
										<LinkText href={url}>{label}</LinkText>
									</li>
								);
							})}
						</ul>
					</Section>
				</SectionWrap>
			</main>
		</>
	);
}

const Page = () => {
	return (
		<div className="w-screen bg-gray-100 relative">
			<App />
		</div>
	);
};

export default Page;
