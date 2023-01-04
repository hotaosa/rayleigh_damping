import { Text, Tooltip, useClipboard } from '@chakra-ui/react';
import { useEffect } from 'react';

type Props = {
  children: string;
  prefix?: string;
  fontSize?: string;
  color?: string;
};

export const CopyableText = ((props: Props) => {
  const { children, prefix = "", fontSize = "md", color = "gray.600"} = props;
  const { onCopy, value, setValue } = useClipboard(children);

  useEffect(() => {
    setValue(children);
  }, [children]);

  return (
    <Tooltip label="Copy to clipboard">
      <Text onClick={onCopy} fontSize={fontSize} color={color} _hover={{ cursor: "pointer", opacity: 0.8 }}>
        {prefix}{children}
      </Text>
    </Tooltip>
  );
});
