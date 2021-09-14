import { Modal, ModalProps } from 'components/Modal';

import { Content, ContentProps } from './content';
import { ModalResultWrapper } from './styles';

export type ModalResultProps = Pick<ModalProps, 'isOpen' | 'onClose'> & {
  modalOneContent: ContentProps;
  modalTwoContent?: ContentProps;
};

export function ModalResult({
  isOpen,
  onClose,
  modalOneContent,
  modalTwoContent,
}: ModalResultProps) {
  const type = modalTwoContent ? 'double' : 'single';

  return (
    <ModalResultWrapper type={type}>
      {type === 'single' && (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          modalOneContent={<Content {...modalOneContent} />}
        />
      )}
      {type === 'double' && !!modalTwoContent && (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          modalOneContent={<Content {...modalOneContent} />}
          modalTwoContent={<Content {...modalTwoContent} />}
        />
      )}
    </ModalResultWrapper>
  );
}

export { ModalResultWrapper } from './styles';
