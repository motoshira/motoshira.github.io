import Section from '@/components/Section';
import SectionWrap from '@/components/SectionWrap';
import Heading1 from '@/components/Heading1';
import Heading2 from '@/components/Heading2';
import Text1 from '@/components/Text1';
import SectionItem from './components/SectionItem';
import Text2 from '@/components/Text2';
import LinkText from './components/LinkText';

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

function App() {
  return (
    <div className="h-full w-full">
      <Navigation />
      <main className="py-6">
        <SectionWrap>
          <Section>
            <img
              height="312"
              width="312"
              src="/me.webp"
              className="mx-auto rounded-[50%] shadow-md"
              alt="my Logo"
            />
          </Section>
        </SectionWrap>
        <SectionWrap>
          <Section>
            <Heading1>motoshira</Heading1>
            <p className="text-gray-600 text-lg lg:text-xl">Kohei Hosoki</p>
          </Section>
        </SectionWrap>
        <SectionWrap>
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
                <Text1>2021/4~ TOYOKUMO Inc.</Text1>
              </li>
            </ul>
          </Section>
          <Section>
            <Heading2>Likes</Heading2>
            <div className="[&_ul]:list-inside [&_ul]:list-disc [&_ul]:pl-6 [&_ul_ul]:list-[circle]">
              <ul>
                <li>
                  <Text2>Programming Languages</Text2>
                  <ul>
                    <li>
                      <Text2>TypeScript</Text2>
                    </li>
                    <li>
                      <Text2>Clojure</Text2>
                    </li>
                    <li>
                      <Text2>Common Lisp</Text2>
                    </li>
                  </ul>
                </li>
                <li>
                  <Text2>Hobby</Text2>
                  <ul>
                    <li>
                      <Text2>Reading 📕</Text2>
                    </li>
                    <li>
                      <Text2>Watch anime 📺</Text2>
                    </li>
                    <li>
                      <Text2>Karaoke 🎤</Text2>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
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
        </SectionWrap>
      </main>
    </div>
  );
}

export default App;
