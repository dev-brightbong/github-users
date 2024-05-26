import { WarningIcon } from "@chakra-ui/icons";
import { Box, Center, HStack, Text } from "@chakra-ui/react";
import React from "react";

const ListEmptyView = () => {
  return (
    <Center>
      <WarningIcon />
      <Text textStyle={"title-b"}>사용자를 찾지 못했습니다.</Text>
    </Center>
  );
};

export default ListEmptyView;
