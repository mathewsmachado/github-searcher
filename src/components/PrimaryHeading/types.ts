export type PrimaryHeadingProps = {
  children: string;
  color?: 'primary' | 'accent';
  unfilled?: boolean;
};

export type WrapperProps = Omit<PrimaryHeadingProps, 'children'>;
