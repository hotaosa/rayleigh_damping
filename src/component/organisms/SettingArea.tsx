import { Input } from "@chakra-ui/react";
import { ChangeEvent, useContext, useState } from "react";
import { RayleighContext } from "../../providers/RayleighProvider";
import { calcRayleighParams } from "../../util/calcRayleighParams";
import { PrimaryButton } from "../atoms/PrimaryButton";

export const SettingArea = (() => {
  const [ freq1, setFreq1 ] = useState('');
  const [ damp1, setDamp1 ] = useState('');
  const [ freq2, setFreq2 ] = useState('');
  const [ damp2, setDamp2 ] = useState('');

  const { params, setParams } = useContext(RayleighContext);
  let disabled = false;

  const onChangeFreq1 = (e: ChangeEvent<HTMLInputElement>) => {
    setFreq1(e.target.value);
  }
  const onChangeDamp1 = (e: ChangeEvent<HTMLInputElement>) => {
    setDamp1(e.target.value);
  }
  const onChangeFreq2 = (e: ChangeEvent<HTMLInputElement>) => {
    setFreq2(e.target.value);
  }
  const onChangeDamp2 = (e: ChangeEvent<HTMLInputElement>) => {
    setDamp2(e.target.value);
  }

  const onClickCalculate = () => {
    let allValid: boolean = true;
    if (Number.isNaN(freq1)) allValid = false;
    if (Number.isNaN(damp1)) allValid = false;
    if (Number.isNaN(freq2)) allValid = false;
    if (Number.isNaN(damp2)) allValid = false;
    if (allValid) {
      setParams(calcRayleighParams(Number(freq1), Number(damp1), Number(freq2), Number(damp2)));
    } else {
      setParams({ isValid: false, alpha: 0, beta: 0 });
    }
  }

  return (
    <>
      <Input w={100} placeholder="Freq-1" onChange={onChangeFreq1} />
      <Input w={100} placeholder="Damp-1" onChange={onChangeDamp1} />
      <br />
      <Input w={100} placeholder="Freq-2" onChange={onChangeFreq2} />
      <Input w={100} placeholder="Damp-2" onChange={onChangeDamp2} />
      <br />
      <PrimaryButton disabled={disabled} onClick={onClickCalculate} >
        Calculate
      </PrimaryButton>
    </>
  );
});