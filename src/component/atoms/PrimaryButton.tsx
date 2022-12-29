import { ReactNode } from 'react';
import { Button } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void;
};

export const PrimaryButton = ((props: Props) => {
  const { children, disabled = false, onClick } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      disabled={disabled}
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
