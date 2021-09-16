import { createPortal } from 'react-dom';
import { useState, useEffect, ReactNode } from 'react';

import { debounce } from 'utils/performance';
import { CloseButton } from 'components/CloseButton';
import { VsSeparator } from 'components/VsSeparator';
import { Overlay } from 'components/Overlay';

import * as S from './styles';

export type ModalProps = Pick<S.Props, 'isOpen'> & {
  onClose: () => void;
  modalOneContent: ReactNode;
  modalTwoContent?: ReactNode;
  closeButton?: boolean;
};

export type ModalValidTypes = Pick<S.Props, 'type'>;

export function Modal({
  isOpen,
  onClose,
  modalOneContent,
  modalTwoContent,
  closeButton = true,
}: ModalProps) {
  const type = modalTwoContent ? 'double' : 'single';

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (type !== 'double') return;

    const updateWindowWidth = debounce(() => {
      setWindowWidth(window.innerWidth);
    }, 100);

    window.addEventListener('resize', updateWindowWidth);
    // eslint-disable-next-line consistent-return
    return () => window.removeEventListener('resize', updateWindowWidth);
  }, [type]);

  return createPortal(
    <S.ModalWrapper isOpen={isOpen} type={type}>
      <Overlay isVisible={isOpen} onClick={onClose} />
      <S.ModalContentWrapper>
        {closeButton && <CloseButton onClick={onClose} minimal />}
        {modalOneContent}
      </S.ModalContentWrapper>
      {type === 'double' && (
        <>
          <VsSeparator
            orientation={windowWidth > 768 ? 'vertical' : 'horizontal'}
          />
          <S.ModalContentWrapper>
            {closeButton && <CloseButton onClick={onClose} minimal />}
            {modalTwoContent}
          </S.ModalContentWrapper>
        </>
      )}
    </S.ModalWrapper>,
    document.getElementById('modal-root')!
  );
}

export { ModalWrapper, ModalContentWrapper } from './styles';
