import { ReactNode } from 'react';
import { Button } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  onClick: () => void;
};

export const PrimaryButton = ((props: Props) => {
  const { children, disabled = false, isLoading = false, onClick } = props;
  return (
    <Button
      bg={disabled ? "gray.500" : "teal.400"}
      color="white"
      disabled={disabled}
      isLoading={isLoading}
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
