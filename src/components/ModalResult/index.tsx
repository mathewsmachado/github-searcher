import { Modal, ModalProps } from 'components/Modal';

import { Content, ContentProps } from './content';
import { Wrapper } from './styles';

type ModalResultBase = Pick<ModalProps, 'isOpen' | 'onClose'> & {
  modalOneContent: ContentProps;
};

type ModalResultSingle = {
  type: 'single';
  modalTwoContent?: undefined;
};

type ModalResultDouble = {
  type: 'double';
  modalTwoContent: ContentProps;
};

type ModalResultProps = ModalResultBase &
  (ModalResultSingle | ModalResultDouble);

function ModalResult({
  type,
  isOpen,
  onClose,
  modalOneContent,
  modalTwoContent,
}: ModalResultProps) {
  return (
    <Wrapper>
      <Modal
        type={type}
        isOpen={isOpen}
        onClose={onClose}
        modalOneContent={<Content {...modalOneContent} />}
        modalTwoContent={!!modalTwoContent && <Content {...modalTwoContent} />}
      />
    </Wrapper>
  );
}

export { ModalResult };
export type { ModalResultProps };
