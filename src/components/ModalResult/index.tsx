import { Modal, ModalProps, ModalSingle, ModalDouble } from 'components/Modal';

import { Content, ContentProps } from './content';
import { ModalResultWrapper } from './styles';

type Base = Pick<ModalProps, 'isOpen' | 'onClose'> & {
  modalOneContent: ContentProps;
};

type Single = Pick<ModalSingle, 'type'> & {
  modalTwoContent?: undefined;
};

type Double = Pick<ModalDouble, 'type'> & {
  modalTwoContent: ContentProps;
};

type ModalResultProps = Base & (Single | Double);

function ModalResult({
  type,
  isOpen,
  onClose,
  modalOneContent,
  modalTwoContent,
}: ModalResultProps) {
  return (
    <ModalResultWrapper>
      {type === 'single' && (
        <Modal
          type='single'
          isOpen={isOpen}
          onClose={onClose}
          modalOneContent={<Content {...modalOneContent} />}
        />
      )}
      {type === 'double' && !!modalTwoContent && (
        <Modal
          type='double'
          isOpen={isOpen}
          onClose={onClose}
          modalOneContent={<Content {...modalOneContent} />}
          modalTwoContent={<Content {...modalTwoContent} />}
        />
      )}
    </ModalResultWrapper>
  );
}

export { ModalResult };
export type { ModalResultProps };
