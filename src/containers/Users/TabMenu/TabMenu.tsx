import { AtSignIcon, StarIcon } from "@chakra-ui/icons";
import { Center, HStack, Text } from "@chakra-ui/react";
import React from "react";

const TabMenu = () => {
  return (
    <HStack justifyContent="space-between" w="100%">
      <Center w="100%" gap="20px">
        <Text
          textStyle="title-b"
          borderBottom="1px solid"
          _hover={{ cursor: "pointer" }}
        >
          <AtSignIcon />
          users
        </Text>
      </Center>

      <Center w="100%" gap="20px">
        <Text
          textStyle="title-b"
        //   borderBottom="1px solid"
          _hover={{ cursor: "pointer" }}
        >
          <StarIcon color="yellow.300" />
          bookmark
        </Text>
      </Center>
    </HStack>
  );
};

export default TabMenu;
