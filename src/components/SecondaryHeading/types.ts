export type SecondaryHeadingProps = {
  children: string;
  size?: 'huge' | 'xlarge';
  thin?: boolean;
};

export type WrapperProps = Omit<SecondaryHeadingProps, 'children'>;
