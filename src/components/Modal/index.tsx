import { useState, useEffect, ReactNode, MouseEvent } from 'react';

import { debounce } from 'utils/performance';
import { CloseButton } from 'components/CloseButton';
import { VsSeparator } from 'components/VsSeparator';

import * as S from './styles';

type Base = Pick<S.Props, 'isOpen'> & {
  onClose: () => void;
  modalOneContent: ReactNode;
  closeButton?: boolean;
};

export type ModalSingle = {
  type?: S.Single;
  modalTwoContent?: undefined;
};

export type ModalDouble = {
  type: S.Double;
  modalTwoContent: ReactNode;
};

export type ModalProps = Base & (ModalSingle | ModalDouble);

function preventClosing(event: MouseEvent<HTMLElement>) {
  event.stopPropagation();
}

export function Modal({
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
      <S.ModalWrapper onClick={preventClosing}>
        {closeButton && <CloseButton onClick={onClose} minimal />}
        {modalOneContent}
      </S.ModalWrapper>
      {type === 'double' && (
        <>
          <VsSeparator
            orientation={windowWidth > 768 ? 'vertical' : 'horizontal'}
          />
          <S.ModalWrapper onClick={preventClosing}>
            {closeButton && <CloseButton onClick={onClose} minimal />}
            {modalTwoContent}
          </S.ModalWrapper>
        </>
      )}
    </S.Overlay>
  );
}

export { ModalWrapper } from './styles';
