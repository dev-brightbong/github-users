import { StarIcon } from "@chakra-ui/icons";
import { HStack, Image, StackProps, Text, VStack } from "@chakra-ui/react";
import React from "react";

const fallbackSrc = "https://via.placeholder.com/150";

interface CardProps extends StackProps {
  username: string;
  profile: string;
  hasBookmark?: boolean;
}

const Card = ({ username, profile, hasBookmark, ...props }: CardProps) => {
  return (
    <VStack px="12px" py="18px" bgColor={"gray.50"} {...props}>
      <HStack w="100%" align={"flex-start"} justifyContent={"space-between"}>
        <HStack _hover={{ cursor: "pointer" }}>
          <StarIcon color="gray.300" />
          <Text textStyle="text-r">@{username}</Text>
        </HStack>
        <Image
          src={profile}
          alt={profile}
          fallbackSrc={fallbackSrc}
          width={"80px"}
          height={"80px"}
          borderRadius={"8px"}
        />
      </HStack>
    </VStack>
  );
};

export default Card;
