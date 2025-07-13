import Heading1 from "@/components/Heading1";
import Heading2 from "@/components/Heading2";
import Heading3 from "@/components/Heading3";
import LinkText from "@/components/LinkText";
import Section from "@/components/Section";
import SectionItem from "@/components/SectionItem";
import SectionWrap from "@/components/SectionWrap";
import Text1 from "@/components/Text1";
import LinkWrap from "@/components/linkWrap";
import myImage from "../../public/me.webp";

const Navigation = () => {
	return (
		<nav className="sticky top-0 flex h-[60px] items-center bg-primary shadow-md z-10">
			<a
				href="/"
				className="ml-6 text-xl font-bold decoration-2 hover:underline"
			>
				motoshira.net
			</a>
		</nav>
	);
};

const SubSectionWrap = ({ children }: { children: React.ReactNode }) => {
	return <div className="flex flex-col w-full space-y-4">{children}</div>;
};

function App() {
	return (
		<div className="h-full w-full relative">
			<div className="top-0 left-0 h-full w-full absolute">
				<Navigation />
				<main className="relative">
					<SectionWrap>
						<Section>
							<img
								height="312"
								width="312"
								src={myImage.src}
								className="mx-auto rounded-[50%] shadow-md"
								alt="my Logo"
							/>
							<Heading1>motoshira</Heading1>
							<p className="text-gray-600 text-lg lg:text-xl">Kohei Hosoki</p>
						</Section>
					</SectionWrap>
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
									<Text1>
										に参加させていただいた際に提出した課題一覧です。
									</Text1>
								</p>
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
			</div>
		</div>
	);
}

const Page = () => {
	return (
		<div className="flex h-screen w-screen items-center justify-center bg-gray-100">
			<App />
		</div>
	);
};

export default Page;
