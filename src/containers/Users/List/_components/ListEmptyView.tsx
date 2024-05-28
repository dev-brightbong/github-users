import React from "react";
import { WarningIcon } from "@chakra-ui/icons";
import { Center, Text } from "@chakra-ui/react";

const ListEmptyView = () => {
  return (
    <Center>
      <WarningIcon />
      <Text textStyle={"title-b"}>사용자를 찾지 못했습니다.</Text>
    </Center>
  );
};

export default ListEmptyView;
