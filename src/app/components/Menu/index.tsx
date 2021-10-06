import { useCallback, useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

import { CREATOR } from 'core/constants';
import { theme } from 'app/styles';
import { throttle } from 'app/utils/performance';
import { Logo } from 'app/components/Logo';
import { Overlay } from 'app/components/Overlay';
import { SocialMediaIcons } from 'app/components/SocialMediaIcons';

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
    const throttledClose = throttle(close, 4000);

    window.addEventListener('resize', throttledClose);
    return () => window.removeEventListener('resize', throttledClose);
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
            // eslint-disable-next-line react/jsx-no-bind
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
          usernames={{ github: CREATOR.USERNAME, linkedin: CREATOR.USERNAME }}
        />
      </S.RightSide>
    </S.MenuWrapper>
  );
}

export { MenuWrapper, MenuHeight } from './styles';
