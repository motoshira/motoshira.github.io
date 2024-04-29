import Section from '@/components/Section';
import Heading1 from '@/components/Heading1';
import Heading2 from '@/components/Heading2';
import Heading3 from '@/components/Heading3';
import Text1 from '@/components/Text1';
import SectionItem from '@/components/SectionItem';
import LinkText from '@/components/LinkText';
import Bubbles from './components/Bubbles';

const Navigation = () => {
  return (
    <nav className="sticky top-0 flex h-[60px] items-center bg-primary shadow-md">
      <a
        href="/"
        className="ml-6 text-xl font-bold decoration-2 hover:underline"
      >
        motoshira.net
      </a>
    </nav>
  );
};

const HobbySubSectionWrap = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col w-full space-y-1">{children}</div>;
};

// TODO Rewrite with WebGLx
/* const Bubbles = () => {
 *   const [isPC, setIsPC] = useState(false);
 *   const bubbleAmount = isPC ? 30 : 10;
 *   useEffect(() => {
 *     window
 *       .matchMedia('screen and (min-width: 768px)')
 *       .addEventListener('change', (e) => {
 *         setIsPC(e.matches);
 *       });
 *   }, []);
 *   return (
 *     <div className="pointer-events-none h-[100vh] w-[100vw] bg-transparent fixed top-0 left-0">
 *       {(() => {
 *         const bubbles = [];
 *         for (let i = 0; i < bubbleAmount; i++) {
 *           bubbles.push(<Bubble key={i} />);
 *         }
 *         return bubbles;
 *       })()}
 *     </div>
 *   );
 * }; */

function App() {
  return (
    <div className="h-full w-full relative">
      <div className="top-0 left-0 h-full w-full">
        <Navigation />
        <main className="py-6">
          <Section>
            <img
              height="312"
              width="312"
              src="/me.webp"
              className="mx-auto rounded-[50%] shadow-md"
              alt="my Logo"
            />
          </Section>
          <Section>
            <Heading1>motoshira</Heading1>
            <p className="text-gray-600 text-lg lg:text-xl">Kohei Hosoki</p>
          </Section>
          <Section>
            <Heading2>Applications</Heading2>
            <SectionItem>
              <Text1>Coming soon...</Text1>
            </SectionItem>
          </Section>
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
          <Section>
            <Heading2>Likes</Heading2>
            <HobbySubSectionWrap>
              <Heading3>Web開発</Heading3>
              <p>
                <Text1>
                  Web開発全般に興味があります。
                  <br />
                  最近はフロントエンド分野、特にアニメーション (CSS/Canvas
                  2D/WebGL等)
                  を利用したインタラクションによるユーザー体験の向上に関心があります。
                </Text1>
              </p>
            </HobbySubSectionWrap>
            <HobbySubSectionWrap>
              <Heading3>プログラミング言語</Heading3>
              <p>
                <Text1>
                  TypeScriptの他、Clojure/Common
                  LispといったLisp系言語が好きです。
                  <br />
                  最近はWebGLを利用した3Dグラフィックスの実装に興味があり、GLSLを勉強中です。
                  <br />
                  現在、doxasさん主催の
                  <LinkText href="https://webgl.souhonzan.org/entry/?v=2635">
                    WebGLスクール
                  </LinkText>
                  を受講しています。
                </Text1>
              </p>
            </HobbySubSectionWrap>
            <HobbySubSectionWrap>
              <Heading3>趣味</Heading3>
              <p>
                <Text1>読書やアニメ鑑賞、カラオケ、カフェ巡りなど</Text1>
              </p>
            </HobbySubSectionWrap>
          </Section>
          <Section>
            <Heading2>Education</Heading2>
            <SectionItem>
              <Text1>
                Bachelor of Medicine, Kanazawa University, 2015-2021
              </Text1>
            </SectionItem>
          </Section>
          <Section>
            <Heading2>Links</Heading2>
            <ul className="ml-3 list-inside">
              {[
                {
                  label: 'GitHub',
                  url: 'https://github.com/motoshira',
                },
                {
                  label: 'Bluesky',
                  url: 'https://bsky.app/profile/motoshira.bsky.social',
                },
                {
                  label: 'X (Twitter)',
                  url: 'https://twitter.com/darjeeling743',
                },
                {
                  label: 'AtCoder',
                  url: 'https://atcoder.jp/users/motoshira',
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
        </main>
      </div>
      <Bubbles />
    </div>
  );
}

export default App;
