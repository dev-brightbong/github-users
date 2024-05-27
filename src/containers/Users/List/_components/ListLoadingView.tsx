import React from "react";

import {
  Box,
  HStack,
  Skeleton,
  SkeletonCircle,
  StackProps,
} from "@chakra-ui/react";

interface ListLoadingViewProps extends StackProps {}

const ListLoadingView = ({ ...props }: ListLoadingViewProps) => {
  return (
    <Box
      px="20px"
      pt={"16px"}
      pb="20px"
      bgColor={"gray.50"}
      borderRadius={"xs"}
      w="100%"
      mb="24px"
      {...props}
    >
      <HStack align="flex-start">
        <HStack w="100%" justifyContent={"space-between"}>
          <Skeleton w="180px" h="20px" />
        </HStack>
        <SkeletonCircle width="100px" height={"80px"} borderRadius={"lg"} />
      </HStack>
    </Box>
  );
};

export default ListLoadingView;
