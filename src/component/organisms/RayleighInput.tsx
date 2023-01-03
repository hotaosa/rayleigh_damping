import { Box, HStack, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { RayleighContext } from "../../providers/RayleighProvider";
import { Rayleigh } from "../../types/Rayleigh";
import { PrimaryButton } from "../atoms/PrimaryButton";

export const RayleighInput = () => {
  const [alpha, setAlpha] = useState("");
  const [beta, setBeta] = useState("");
  const [rayleigh, setRayleigh] = useState<Rayleigh>({
    isValid: false,
    alpha: 0,
    beta: 0,
  });

  const onChangeAlpha = (e: ChangeEvent<HTMLInputElement>) => {
    setAlpha(e.target.value);
  };
  const onChangeBeta = (e: ChangeEvent<HTMLInputElement>) => {
    setBeta(e.target.value);
  };

  const setRayleighParams = useContext(RayleighContext).setParams;

  useEffect(() => {
    let isValid = true;
    if (isValid && (alpha === "" || Number.isNaN(parseFloat(alpha))))
      isValid = false;
    if (isValid && (beta === "" || Number.isNaN(parseFloat(beta))))
      isValid = false;
    setRayleigh({ isValid, alpha: Number(alpha), beta: Number(beta) });
  }, [alpha, beta]);

  const onClickCalculate = () => {
    setRayleighParams(rayleigh);
  };

  return (
    <Stack>
      <HStack>
        <Input size="md" placeholder="α" onChange={onChangeAlpha} />
        <Input size="md" placeholder="β" onChange={onChangeBeta} />
      </HStack>
      <Box h={10} />
      <PrimaryButton disabled={!rayleigh.isValid} onClick={onClickCalculate}>
        Calculate
      </PrimaryButton>
    </Stack>
  );
};
