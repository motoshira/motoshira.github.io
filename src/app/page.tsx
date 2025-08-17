import Image, { StaticImageData } from "next/image";
import Heading2 from "@/components/Heading2";
import LinkText from "@/components/LinkText";
import Section from "@/components/Section";
import SectionWrap from "@/components/SectionWrap";
import Text1 from "@/components/Text1";
import myImage from "../../public/me.svg";
import zundamon from "../../public/works/zundamon.jpg";
import { ReactNode } from "react";

const Navigation = () => {
	return (
		<nav className="sticky top-0 h-[60px] w-full bg-primary z-10">
			<div className="mx-auto flex h-full items-stretch w-full md:max-w-[60%]">
				<h1 className="flex flex-row items-stretch px-6 text-lg md:text-xl text-header-font font-bold decoration-2 hover:bg-primary-light">
					<a href="/" className="flex flex-row items-center gap-x-4">
						{/* <img src={myImage.src} width={48} height={48} /> */}
						<Image
							src={myImage}
							alt="motoshiraのアイコン"
							width={48}
							height={48}
						/>
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

const WorksItem = ({
	title,
	img,
	description,
}: {
	title: string;
	img: StaticImageData;
	description: ReactNode;
}) => {
	return (
		<div className="flex flex-col items-start space-y-2 p-4 bg-white rounded-lg shadow-md">
			<h3 className="text-left text-base md:text-lg font-bold py-4 ">
				{title}
			</h3>
			<Image
				src={img}
				alt={title}
				className="w-full aspect-16/9 object-contain bg-gray-100 rounded-sm"
			/>
			<p className="py-2">
				<Text1>{description}</Text1>
			</p>
		</div>
	);
};

function App() {
	return (
		<>
			<Navigation />
			<main>
				<SectionWrap>
					<Section>
						<Heading2>Profile</Heading2>
						<SubSectionWrap>
							<p>
								<Text1>
									2021年に大学を卒業後、BtoB
									SaaS企業でソフトウェアエンジニアをしています。
								</Text1>
							</p>
							<p>
								<Text1>
									特に興味のある領域：プロトタイピング、高度なUIとユーザビリティの両立、アクセシビリティ、UIデザイン
								</Text1>
							</p>
							<p>
								<Text1>趣味：読書、ゲーム、カフェ巡り、カレー屋巡り</Text1>
							</p>
						</SubSectionWrap>
					</Section>
				</SectionWrap>
				<SectionWrap>
					<Section>
						<Heading2>Works</Heading2>
						<SubSectionWrap>
							<div className="grid md:grid-cols-3 md:gap-2">
								<WorksItem
									title="ずんだもんとトレーニング"
									img={zundamon}
									description="筋トレ用のタイマーアプリです。ずんだもんの声でカウントを読み上げます。 (制作中)"
								/>
							</div>
						</SubSectionWrap>
					</Section>
				</SectionWrap>
				<SectionWrap>
					<Section>
						<Heading2>Links</Heading2>
						<ul className="ml-3 list-inside">
							{[
								{
									label: "Zenn",
									url: "https://zenn.dev/motoshira4",
								},
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
