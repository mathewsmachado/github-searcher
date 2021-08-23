import { MouseEvent, ReactNode } from 'react';

import { CloseButton } from 'components/CloseButton';

import * as S from './styles';

type Props = S.Props & {
  children: ReactNode;
  onModalClose: () => void;
  closeButton?: boolean;
};

export function Modal({
  children,
  isOpen,
  onModalClose,
  closeButton = true,
}: Props) {
  function preventClosing(event: MouseEvent<HTMLElement>) {
    event.stopPropagation();
  }

  return (
    <S.Overlay onClick={onModalClose} isOpen={isOpen}>
      <S.ContentWrapper onClick={preventClosing}>
        {closeButton && <CloseButton onClick={onModalClose} minimal />}
        {children}
      </S.ContentWrapper>
    </S.Overlay>
  );
}
