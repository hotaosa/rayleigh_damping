import {
  Box,
  HStack,
  Input,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { GraphRangeContext } from "../../providers/GraphProvider";
import { RayleighContext } from "../../providers/RayleighProvider";
import { calcRayleighParams } from "../../util/calcRayleighParams";
import { PrimaryButton } from "../atoms/PrimaryButton";

export const SettingArea = () => {
  const [freq1, setFreq1] = useState("");
  const [damp1, setDamp1] = useState("");
  const [freq2, setFreq2] = useState("");
  const [damp2, setDamp2] = useState("");
  const [rayleighIsInvalid, setRayleighIsInvalid] = useState(true);

  const [xLowerBound, setXLowerBound] = useState("");
  const [xUpperBound, setXUpperBound] = useState("");
  const [yLowerBound, setYLowerBound] = useState("");
  const [yUpperBound, setYUpperBound] = useState("");
  const [graphRangeIsInvalid, setGraphRangeIsInvalid] = useState(true);

  const setRayleighParams = useContext(RayleighContext).setParams;
  const setGraphRangeParams = useContext(GraphRangeContext).setParams;

  useEffect(() => {
    let invalid = false;
    if (!invalid && (freq1 === "" || Number.isNaN(parseFloat(freq1))))
      invalid = true;
    if (!invalid && (damp1 === "" || Number.isNaN(parseFloat(damp1))))
      invalid = true;
    if (!invalid && (freq2 === "" || Number.isNaN(parseFloat(freq2))))
      invalid = true;
    if (!invalid && (damp2 === "" || Number.isNaN(parseFloat(damp2))))
      invalid = true;
    if (!invalid && Number(freq1) === Number(freq2)) invalid = true;
    setRayleighIsInvalid(invalid);
  }, [freq1, damp1, freq2, damp2]);

  useEffect(() => {
    let invalid = false;
    if (
      !invalid &&
      (xLowerBound === "" || Number.isNaN(parseFloat(xLowerBound)))
    )
      invalid = true;
    if (
      !invalid &&
      (xUpperBound === "" || Number.isNaN(parseFloat(xUpperBound)))
    )
      invalid = true;
    if (
      !invalid &&
      (yLowerBound === "" || Number.isNaN(parseFloat(yLowerBound)))
    )
      invalid = true;
    if (
      !invalid &&
      (yUpperBound === "" || Number.isNaN(parseFloat(yUpperBound)))
    )
      invalid = true;
    if (!invalid && Number(xLowerBound) <= 0) invalid = true;
    if (!invalid && Number(xLowerBound) >= Number(xUpperBound)) invalid = true;
    if (!invalid && Number(yLowerBound) >= Number(yUpperBound)) invalid = true;
    setGraphRangeIsInvalid(invalid);
  }, [xLowerBound, xUpperBound, yLowerBound, yUpperBound]);

  const onChangeFreq1 = (e: ChangeEvent<HTMLInputElement>) => {
    setFreq1(e.target.value);
  };
  const onChangeDamp1 = (e: ChangeEvent<HTMLInputElement>) => {
    setDamp1(e.target.value);
  };
  const onChangeFreq2 = (e: ChangeEvent<HTMLInputElement>) => {
    setFreq2(e.target.value);
  };
  const onChangeDamp2 = (e: ChangeEvent<HTMLInputElement>) => {
    setDamp2(e.target.value);
  };
  const onChangeXLowerBound = (e: ChangeEvent<HTMLInputElement>) => {
    setXLowerBound(e.target.value);
  };
  const onChangeXUpperBound = (e: ChangeEvent<HTMLInputElement>) => {
    setXUpperBound(e.target.value);
  };
  const onChangeYLowerBound = (e: ChangeEvent<HTMLInputElement>) => {
    setYLowerBound(e.target.value);
  };
  const onChangeYUpperBound = (e: ChangeEvent<HTMLInputElement>) => {
    setYUpperBound(e.target.value);
  };

  const onClickCalculate = () => {
    setRayleighParams(
      calcRayleighParams(
        Number(freq1),
        Number(damp1),
        Number(freq2),
        Number(damp2)
      )
    );
  };

  const onClickUpdateRange = () => {
    setGraphRangeParams({
      xLowerBound: Number(xLowerBound),
      xUpperBound: Number(xUpperBound),
      yLowerBound: Number(yLowerBound),
      yUpperBound: Number(yUpperBound),
    });
  };

  return (
    <Stack spacing="5" pt={3} pb={3}>
      <Stack spacing="1" pl={3} pr={3}>
        <Text fontSize="lg" as="ins" color="gray.600">
          Input Parameters
        </Text>
        <Tabs colorScheme="teal">
          <TabList color="gray.400">
            <Tab>F-D</Tab>
            <Tab>α-β</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Stack>
                <HStack>
                  <Input
                    size="md"
                    placeholder="Freq-1"
                    onChange={onChangeFreq1}
                  />
                  <Input
                    size="md"
                    placeholder="Damp-1"
                    onChange={onChangeDamp1}
                  />
                </HStack>
                <HStack>
                  <Input
                    size="md"
                    placeholder="Freq-2"
                    onChange={onChangeFreq2}
                  />
                  <Input
                    size="md"
                    placeholder="Damp-2"
                    onChange={onChangeDamp2}
                  />
                </HStack>
              </Stack>
            </TabPanel>
            <TabPanel>
              <Stack>
                <HStack>
                  <Input size="md" placeholder="α" onChange={onChangeFreq1} />
                  <Input size="md" placeholder="β" onChange={onChangeDamp1} />
                </HStack>
                <Box h={10} />
              </Stack>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <PrimaryButton disabled={rayleighIsInvalid} onClick={onClickCalculate}>
          Calculate
        </PrimaryButton>
      </Stack>
      <Stack spacing="2" pl={3} pr={3}>
        <Text fontSize="lg" as="ins" color="gray.600">
          Graph Range
        </Text>
        <HStack pl={4} pr={4}>
          <Input
            size="md"
            placeholder="X lower bound"
            onChange={onChangeXLowerBound}
          />
          <Input
            size="md"
            placeholder="X upper bound"
            onChange={onChangeXUpperBound}
          />
        </HStack>
        <HStack pl={4} pr={4}>
          <Input
            size="md"
            placeholder="Y lower bound"
            onChange={onChangeYLowerBound}
          />
          <Input
            size="md"
            placeholder="Y upper bound"
            onChange={onChangeYUpperBound}
          />
        </HStack>
        <Box h={1} />
        <PrimaryButton
          disabled={graphRangeIsInvalid}
          onClick={onClickUpdateRange}
        >
          Update Range
        </PrimaryButton>
      </Stack>
    </Stack>
  );
};
