import React from "react";

import { Box, VStack } from "@chakra-ui/react";
import BasisHeader from "../Header/BasisHeader";
import styled from "@emotion/styled";

interface BasisLayoutProps {
  header?: React.ReactNode;
  children: React.ReactNode;
}

const BasisLayout = ({
  header = <BasisHeader />,
  children,
}: BasisLayoutProps) => {
  return (
    <>
      <VStack
        as="main"
        aria-label="메인 컨텐츠 영역"
        aria-roledescription="메인 컨텐츠 영역"
        spacing={0}
        pt="52px"
        px="16px"
        m="0 auto"
        maxW="430px"
        h="100%"
      >
        {header}
        <Box as="section" aria-label="컨텐츠 영역" w="100%">
          {children}
        </Box>
      </VStack>
    </>
  );
};

export default BasisLayout;
