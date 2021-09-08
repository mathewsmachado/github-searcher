import { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

import { theme } from 'styles/theme';
import { throttle } from 'utils/performance';
import { Logo } from 'components/Logo';
import { SocialMediaIcons } from 'components/SocialMediaIcons';

import * as S from './styles';

type NavItem = Readonly<Record<'text' | 'link', string>>;

// TODO: fix links
const navItems: NavItem[] = [
  { text: 'Search User', link: 'https://github.com/mathewsmachado' },
  { text: 'Search Repo', link: 'https://github.com/mathewsmachado' },
  { text: 'Repo Battle', link: 'https://github.com/mathewsmachado' },
  { text: 'Contact Us', link: 'https://github.com/mathewsmachado' },
];

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function close() {
      setIsOpen(false);
    }

    window.addEventListener('resize', throttle(close, 4000));
    return () => window.removeEventListener('resize', throttle(close, 4000));
  }, []);

  function toggleOpen() {
    setIsOpen((prevState) => !prevState);
  }

  const socialMediaUsernames = {
    github: 'mathewsmachado',
    linkedin: 'mathewsmachado',
  };

  const openCloseIconsProps = {
    size: 30,
    color: theme.color.secondary,
    onClick: toggleOpen,
  };

  return (
    <S.MenuWrapper isOpen={isOpen}>
      <Logo githubColor='secondary' />
      <S.OpenCloseWrapper>
        {isOpen && (
          <IoMdClose title='close menu icon' {...openCloseIconsProps} />
        )}
        {!isOpen && <FiMenu title='open menu icon' {...openCloseIconsProps} />}
      </S.OpenCloseWrapper>
      <S.RightSideWrapper>
        <S.Nav>
          {navItems.map(({ text, link }) => (
            <S.NavItem key={text} href={link}>
              {text}
            </S.NavItem>
          ))}
        </S.Nav>
        <SocialMediaIcons usernames={socialMediaUsernames} />
      </S.RightSideWrapper>
    </S.MenuWrapper>
  );
}

export { MenuWrapper } from './styles';
