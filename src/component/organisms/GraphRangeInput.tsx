import { HStack, Input, Stack, Text } from "@chakra-ui/react";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { GraphRangeContext } from "../../providers/GraphProvider";
import { PrimaryButton } from "../atoms/PrimaryButton";

export const GraphRangeInput = () => {
  const [ xLowerBound, setXLowerBound ] = useState("10");
  const [ xUpperBound, setXUpperBound ] = useState("1000");
  const [ yLowerBound, setYLowerBound ] = useState("0");
  const [ yUpperBound, setYUpperBound ] = useState("1");
  const [ isValid, setIsValid ] = useState(false);

  const onChangeXLowerBound = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setXLowerBound("10");
    } else {
      setXLowerBound(e.target.value);
    }
  }
  const onChangeXUpperBound = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setXUpperBound("1000");
    } else {
      setXUpperBound(e.target.value);
    }
  }
  const onChangeYLowerBound = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setYLowerBound("0");
    } else {
      setYLowerBound(e.target.value);
    }
  }
  const onChangeYUpperBound = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setYUpperBound("1");
    } else {
      setYUpperBound(e.target.value);
    }
  }

  const setGraphRange = useContext(GraphRangeContext).setParams;

  useEffect(() => {
    let isValid = true;
    if (isValid && Number.isNaN(parseFloat(xLowerBound))) isValid = false;
    if (isValid && Number.isNaN(parseFloat(xUpperBound))) isValid = false;
    if (isValid && Number.isNaN(parseFloat(yLowerBound))) isValid = false;
    if (isValid && Number.isNaN(parseFloat(yUpperBound))) isValid = false;
    if (isValid && Number(xLowerBound) <= 1) isValid = false;
    if (isValid && Number(yLowerBound) < 0) isValid = false;
    if (isValid && Number(xLowerBound) >= Number(xUpperBound)) isValid = false;
    if (isValid && Number(yLowerBound) >= Number(yUpperBound)) isValid = false;
    setIsValid(isValid);
  }, [xLowerBound, xUpperBound, yLowerBound, yUpperBound]);

  const onClickSetRange = () => {
    setGraphRange({
      xLowerBound: Number(xLowerBound),
      xUpperBound: Number(xUpperBound),
      yLowerBound: Number(yLowerBound),
      yUpperBound: Number(yUpperBound)
    });
  };

  const onClickResetRange = () => {
    setGraphRange({
      xLowerBound: 10,
      xUpperBound: 10000,
      yLowerBound: 0,
      yUpperBound: 1
    });
  };

  return (
    <Stack spacing="2">
      <Text fontSize="lg" as="ins" color="gray.600">
        Graph Range
      </Text>
      <HStack pl={4} pr={4}>
        <Input size="md" placeholder="X lower bound" onChange={onChangeXLowerBound} />
        <Input size="md" placeholder="X upper bound" onChange={onChangeXUpperBound} />
      </HStack>
      <HStack pl={4} pr={4}>
        <Input size="md" placeholder="Y lower bound" onChange={onChangeYLowerBound} />
        <Input size="md" placeholder="Y upper bound" onChange={onChangeYUpperBound} />
      </HStack>
      <Stack pl={4} pr={4}>
      <PrimaryButton disabled={!isValid} onClick={onClickSetRange}>
        Set Range
      </PrimaryButton>
      <PrimaryButton onClick={onClickResetRange}>
        Reset Range
      </PrimaryButton>
      </Stack>
    </Stack>
  );
};