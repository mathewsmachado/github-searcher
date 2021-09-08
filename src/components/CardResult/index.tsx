import { MdKeyboardArrowRight } from 'react-icons/md';

import { Card } from 'components/Card';
import { Avatar, AvatarProps } from 'components/Avatar';
import { VsButton } from 'components/VsButton';

import * as S from './styles';

export type CardResultProps = Omit<AvatarProps, 'as' | 'href' | 'direction'>;

export function CardResult({
  name,
  pictureUrl,
  username,
  type,
  about,
}: CardResultProps) {
  return (
    <S.CardResultWrapper>
      <Card>
        <Avatar
          name={name}
          pictureUrl={pictureUrl}
          username={username}
          type={type}
          about={about}
          direction='row'
        />
        {type === 'repo' && (
          <S.IconsWrapper>
            <VsButton minimal />
            <S.ArrowIcon>
              <MdKeyboardArrowRight title='right arrow icon' />
            </S.ArrowIcon>
          </S.IconsWrapper>
        )}
        {type === 'user' && (
          <S.ArrowIcon>
            <MdKeyboardArrowRight title='right arrow icon' />
          </S.ArrowIcon>
        )}
      </Card>
    </S.CardResultWrapper>
  );
}

export { CardResultWrapper } from './styles';
