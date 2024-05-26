import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

const LOGO = "/images/github-logo-vector.png";

const BasisHeader = () => {
  return (
    <HStack
      as="header"
      position={["sticky", "-webkit-sticky"]}
      zIndex={99}
      top={0}
      w="100%"
      bgColor="white"
      px="16px"
      py="14px"
      borderBottom="1px solid"
    >
      <HStack as={"nav"} w={"100%"} justify={"space-between"} align={"center"}>
        <Image width={100} height={50} src={LOGO} alt={LOGO} />

        <Text textStyle="title-middle-b" textAlign={"center"}>
          GitHub Users List
        </Text>
      </HStack>
    </HStack>
  );
};

export default BasisHeader;
