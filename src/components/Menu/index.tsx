import { useCallback, useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

import { theme } from 'styles/theme';
import { throttle } from 'utils/performance';
import { Logo } from 'components/Logo';
import { SocialMediaIcons } from 'components/SocialMediaIcons';
import { Overlay } from 'components/Overlay';

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

  function open() {
    setIsOpen(true);
  }

  const close = useCallback(() => setIsOpen(false), [setIsOpen]);

  useEffect(() => {
    const throttleClose = throttle(close, 4000);

    window.addEventListener('resize', throttleClose);
    return () => window.removeEventListener('resize', throttleClose);
  }, [close]);

  return (
    <S.MenuWrapper isOpen={isOpen}>
      <Overlay isVisible={isOpen} onClick={close} />
      <Logo githubColor='secondary' />

      <S.OpenClose>
        {isOpen && (
          <IoMdClose
            size={30}
            color={theme.color.secondary}
            title='close menu icon'
            onClick={close}
          />
        )}
        {!isOpen && (
          <FiMenu
            size={30}
            color={theme.color.secondary}
            title='open menu icon'
            onClick={open}
          />
        )}
      </S.OpenClose>

      <S.RightSide>
        <S.Nav>
          {navItems.map(({ text, link }) => (
            <S.NavItem key={text} href={link}>
              {text}
            </S.NavItem>
          ))}
        </S.Nav>
        <SocialMediaIcons
          usernames={{ github: 'mathewsmachado', linkedin: 'mathewsmachado' }}
        />
      </S.RightSide>
    </S.MenuWrapper>
  );
}

export { MenuWrapper, MenuHeight } from './styles';
