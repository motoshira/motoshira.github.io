import { ReactNode, ReactElement } from 'react';
import Text1 from '@/components/Text1';

type Props = {
  href: string;
  children: ReactNode;
}

const LinkText = ({ href, children }: Props): ReactElement => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-2 text-blue-600 hover:opacity-70"
    >
      <Text1>{children}</Text1>
    </a>
  );
};

export default LinkText;
