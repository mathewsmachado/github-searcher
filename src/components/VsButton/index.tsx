import { Button, ButtonProps } from 'components/Button';
import { Vs } from 'components/Vs';

export function VsButton({
  minimal = false,
  ...props
}: Omit<ButtonProps, 'color'>) {
  return (
    <Button minimal={minimal} {...props}>
      <Vs color={minimal ? 'accent' : 'secondary'} />
    </Button>
  );
}
