import { HStack, Input, Stack, Text } from "@chakra-ui/react";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { FreqRangeContext } from "../../providers/FreqRangeProvider";
import { PrimaryButton } from "../atoms/PrimaryButton";

export const FreqRangeInput = () => {
  const [ lowerBound, setLowerBound ] = useState("1");
  const [ upperBound, setUpperBound ] = useState("10000");
  const [ isValid, setIsValid ] = useState(false);

  const onChangeLowerBound = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setLowerBound("1");
    } else {
      setLowerBound(e.target.value);
    }
  }
  const onChangeUpperBound = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setUpperBound("10000");
    } else {
      setUpperBound(e.target.value);
    }
  }

  const freqRange = useContext(FreqRangeContext).params;
  const setFreqRange = useContext(FreqRangeContext).setParams;  

  useEffect(() => {
    let isValid = true;
    if (isValid && Number.isNaN(parseFloat(lowerBound))) isValid = false;
    if (isValid && Number.isNaN(parseFloat(upperBound))) isValid = false;
    if (isValid && Number(lowerBound) < 1) isValid = false;
    if (isValid && Number(lowerBound) >= Number(upperBound)) isValid = false;
    if (isValid && Number(lowerBound) === freqRange.lowerBound && Number(upperBound) === freqRange.upperBound) isValid = false;
    setIsValid(isValid);
  }, [lowerBound, upperBound]);

  const onClickSetRange = () => {
    setFreqRange({
      lowerBound: Number(lowerBound),
      upperBound: Number(upperBound),
    });
  };

  const onClickResetRange = () => {
    setFreqRange({
      lowerBound: 1,
      upperBound: 10000,
    });
  };

  return (
    <Stack spacing="2">
      <Text fontSize="lg" as="ins" color="gray.600">
        Graph Range (Frequency)
      </Text>
      <HStack pl={4} pr={4}>
        <Input size="md" placeholder="lower bound" onChange={onChangeLowerBound} />
        <Input size="md" placeholder="upper bound" onChange={onChangeUpperBound} />
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