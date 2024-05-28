import React from "react";
import { StarIcon } from "@chakra-ui/icons";
import { HStack, Image, StackProps, Text, VStack } from "@chakra-ui/react";

import useBookmark from "@/store/bookmark/useBookmark";
import { BookmarkType } from "@/store/bookmark/useBookmarkStore";

const fallbackSrc = "https://via.placeholder.com/150";

interface UserCardProps extends StackProps {
  hasBookmark?: boolean;
  item: BookmarkType[number];
}

const UserCard = ({ hasBookmark, item, ...props }: UserCardProps) => {
  const { login, avatar_url } = item || {};
  const { handler } = useBookmark();

  const onClickCard = () => {
    if (!handler.hasBookmark(item.id)) {
      handler.addBookmark(item);
    } else handler.removeBookmark(item.id);
  };

  return (
    <VStack
      w="100%"
      px="12px"
      py="18px"
      mb="24px"
      bgColor={"gray.50"}
      {...props}
    >
      <HStack w="100%" align={"flex-start"} justifyContent={"space-between"}>
        <HStack _hover={{ cursor: "pointer" }} onClick={onClickCard}>
          <StarIcon
            color={handler.hasBookmark(item.id) ? "yellow.400" : "gray.300"}
          />
          <Text wordBreak={"break-all"} textStyle="text-r">@{login}</Text>
        </HStack>

        <Image
          src={avatar_url}
          alt={avatar_url}
          fallbackSrc={fallbackSrc}
          width={"80px"}
          height={"80px"}
          borderRadius={"8px"}
        />
      </HStack>
    </VStack>
  );
};

export default UserCard;
