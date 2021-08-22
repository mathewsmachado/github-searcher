import { IoMdClose } from 'react-icons/io';

import { theme } from 'styles/theme';
import { Button, ButtonProps } from 'components/Button';

export function CloseButton({
  color = 'accent',
  minimal = false,
  ...props
}: ButtonProps) {
  return (
    <Button color={color} minimal={minimal} {...props}>
      <IoMdClose
        title='Close icon'
        size='100%'
        color={minimal ? theme.color[color] : theme.color.secondary}
      />
    </Button>
  );
}
