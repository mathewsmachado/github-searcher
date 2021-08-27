import { MouseEvent, ReactNode } from 'react';

import { CloseButton } from 'components/CloseButton';

import * as S from './styles';

type Props = S.Props & {
  children: ReactNode;
  onClose: () => void;
  closeButton?: boolean;
};

function preventClosing(event: MouseEvent<HTMLElement>) {
  event.stopPropagation();
}

function Modal({ children, isOpen, onClose, closeButton = true }: Props) {
  return (
    <S.Overlay onClick={onClose} isOpen={isOpen}>
      <S.ContentWrapper onClick={preventClosing}>
        {closeButton && <CloseButton onClick={onClose} minimal />}
        {children}
      </S.ContentWrapper>
    </S.Overlay>
  );
}

export { Modal };
export type { Props as ModalProps };
