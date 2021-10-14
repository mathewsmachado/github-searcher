import { createPortal } from 'react-dom';
import { ReactNode } from 'react';

import { CloseButton } from 'app/components/CloseButton';
import { Overlay } from 'app/components/Overlay';

import * as S from './styles';

export type ModalProps = S.Props & {
  onClose: () => void;
  children: ReactNode;
};

export function Modal({ isOpen, onClose, children }: ModalProps) {
  return createPortal(
    <S.ModalWrapper isOpen={isOpen}>
      <Overlay isVisible={isOpen} onClick={onClose} />
      <S.ModalContentWrapper>
        <CloseButton onClick={onClose} minimal />
        {children}
      </S.ModalContentWrapper>
    </S.ModalWrapper>,
    document.getElementById('modal-root')!
  );
}

export { ModalWrapper, ModalContentWrapper } from './styles';
