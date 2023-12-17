import { type ReactElement } from 'react'
import Section from '@/components/Section'
import SectionWrap from '@/components/SectionWrap'
import Heading1 from '@/components/Heading1'
import Heading2 from '@/components/Heading2'
import Text1 from '@/components/Text1';
import SectionItem from './components/SectionItem'

const Navigation = (): ReactElement => {
  return (
    <nav className="sticky top-0 bg-gray-200 h-[60px] flex items-center">
      <a href="/" className="text-xl ml-6 hover:underline decoration-2">
        motoshira.github.io
      </a>
    </nav>
  );
}

function App(): ReactElement {
  return (
    <div className="h-[100dvh] w-full">
      <Navigation />
      <main>
        <SectionWrap>
          <Section>
            <img height="312" width="312" src="/me.webp" className="rounded-[50%] mx-auto" alt="my Logo" />
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
            <Text1>
              Coming soon...
            </Text1>
            </SectionItem>
          </Section>
          <Section>
            <Heading2>Experience</Heading2>
            <ul>
              <li>
                <Text1>2021~ TOYOKUMO Inc.</Text1>
              </li>
            </ul>
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
            <ul>
              {[
                {
                  label: 'GitHub',
                  url: 'https://github.com/motoshira',
                },
                {
                  label: 'X(Twitter)',
                  url: 'https://twitter.com/darjeeling743',
                },
                {
                  label: 'AtCoder',
                  url: 'https://atcoder.jp/users/motoshira',
                },
              ].map(({ label, url }) => {
                return (
                  <li key={label} className="list-disc list-inside ml-1">
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-2"
                    >
                      <Text1>{label}</Text1>
                    </a>
                  </li>
                )
              })}
            </ul>
          </Section>
        </SectionWrap>
      </main>
      <footer>

      </footer>
    </div>
  )
}

export default App