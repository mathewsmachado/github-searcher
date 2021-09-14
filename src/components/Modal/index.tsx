import { useState, useEffect, ReactNode } from 'react';

import { debounce } from 'utils/performance';
import { CloseButton } from 'components/CloseButton';
import { VsSeparator } from 'components/VsSeparator';
import { Overlay } from 'components/Overlay';

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

    const updateWindowWidth = debounce(() => {
      setWindowWidth(window.innerWidth);
    }, 100);

    window.addEventListener('resize', updateWindowWidth);
    // eslint-disable-next-line consistent-return
    return () => window.removeEventListener('resize', updateWindowWidth);
  }, [type]);

  return (
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
    </S.ModalWrapper>
  );
}

export { ModalWrapper, ModalContentWrapper } from './styles';
