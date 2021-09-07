import { useState, useEffect, ReactNode, MouseEvent } from 'react';

import { debounce } from 'utils/performance';
import { CloseButton } from 'components/CloseButton';
import { VsSeparator } from 'components/VsSeparator';

import * as S from './styles';

type ModalBase = S.Props & {
  onClose: () => void;
  modalOneContent: ReactNode;
  closeButton?: boolean;
};

type ModalSingle = {
  type?: 'single';
  modalTwoContent?: undefined;
};

type ModalDouble = {
  type: 'double';
  modalTwoContent: ReactNode;
};

type ModalProps = ModalBase & (ModalSingle | ModalDouble);

function preventClosing(event: MouseEvent<HTMLElement>) {
  event.stopPropagation();
}

function Modal({
  isOpen,
  onClose,
  modalOneContent,
  modalTwoContent,
  type = 'single',
  closeButton = true,
}: ModalProps) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (type !== 'double') return;

    function updateWindowWidth() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', debounce(updateWindowWidth, 100));
    // eslint-disable-next-line consistent-return
    return () =>
      window.removeEventListener('resize', debounce(updateWindowWidth, 100));
  }, []);

  return (
    <S.Overlay onClick={onClose} isOpen={isOpen} type={type}>
      <S.ContentWrapper onClick={preventClosing}>
        {closeButton && <CloseButton onClick={onClose} minimal />}
        {modalOneContent}
      </S.ContentWrapper>
      {type === 'double' && (
        <>
          <VsSeparator
            orientation={windowWidth > 768 ? 'vertical' : 'horizontal'}
          />
          <S.ContentWrapper onClick={preventClosing}>
            {closeButton && <CloseButton onClick={onClose} minimal />}
            {modalTwoContent}
          </S.ContentWrapper>
        </>
      )}
    </S.Overlay>
  );
}

export { Modal };
export { ContentWrapper } from './styles';
export type { ModalProps };
