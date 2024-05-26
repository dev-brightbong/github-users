import { StackProps, VStack } from "@chakra-ui/react";
import React from "react";

interface BasisSectionProps extends StackProps {
  children: React.ReactNode;
}
const BasisSection = ({ children, ...props }: BasisSectionProps) => {
  return (
    <VStack
      as="article"
      pt="12px"
      px="8px"
      alignItems="flex-start"
      spacing={0}
      {...props}
    >
      {children}
    </VStack>
  );
};

export default BasisSection;
