import { HStack, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { RayleighContext } from "../../providers/RayleighProvider";
import { FreqAndDamp } from "../../types/FreqAndDamp";
import { calcRayleighParams } from "../../util/calcRayleighParams";
import { PrimaryButton } from "../atoms/PrimaryButton";

export const FDInput = () => {
  const [ freq1, setFreq1 ] = useState("");
  const [ damp1, setDamp1 ] = useState("");
  const [ freq2, setFreq2 ] = useState("");
  const [ damp2, setDamp2 ] = useState("");
  const [ fD, setFD ] = useState<FreqAndDamp>({isValid: false, freq1: 0, damp1: 0, freq2: 0, damp2: 0});

  const onChangeFreq1 = (e: ChangeEvent<HTMLInputElement>) => { setFreq1(e.target.value); }
  const onChangeDamp1 = (e: ChangeEvent<HTMLInputElement>) => { setDamp1(e.target.value); }
  const onChangeFreq2 = (e: ChangeEvent<HTMLInputElement>) => { setFreq2(e.target.value); }
  const onChangeDamp2 = (e: ChangeEvent<HTMLInputElement>) => { setDamp2(e.target.value); }
  
  const setRayleighParams = useContext(RayleighContext).setParams;

  useEffect(() => {
    let isValid = true;
    if (isValid && (freq1 === "" || Number.isNaN(parseFloat(freq1)))) isValid = false;
    if (isValid && (damp1 === "" || Number.isNaN(parseFloat(damp1)))) isValid = false;
    if (isValid && (freq2 === "" || Number.isNaN(parseFloat(freq2)))) isValid = false;
    if (isValid && (damp2 === "" || Number.isNaN(parseFloat(damp2)))) isValid = false;
    if (isValid && Number(freq1) === 0) isValid = false;
    if (isValid && Number(freq2) === 0) isValid = false;
    if (isValid && Number(freq1) === Number(freq2)) isValid = false;
    setFD({isValid, freq1: Number(freq1), damp1: Number(damp1), freq2: Number(freq2), damp2: Number(damp2)});
  }, [freq1, damp1, freq2, damp2]);

  const onClickCalculate = () => {
    setRayleighParams(calcRayleighParams(fD));
  };

  return (
    <Stack>
      <HStack>
        <Input size="md" placeholder="Freq-1" onChange={onChangeFreq1} />
        <Input size="md" placeholder="Damp-1" onChange={onChangeDamp1} />
      </HStack>
      <HStack>
        <Input size="md" placeholder="Freq-2" onChange={onChangeFreq2} />
        <Input size="md" placeholder="Damp-2" onChange={onChangeDamp2} />
      </HStack>
      <PrimaryButton disabled={!fD.isValid} onClick={onClickCalculate}>
        Calculate
      </PrimaryButton>
    </Stack>
  );
};