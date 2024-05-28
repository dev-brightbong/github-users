import React from "react";
import { useRouter } from "next/router";
import { AtSignIcon, StarIcon } from "@chakra-ui/icons";
import { Center, HStack, Text } from "@chakra-ui/react";
import { TAB_MENU } from "@/constants/tab-menu";
import NextAsLink from "../NextAsLink";

const TabMenu = () => {
  const router = useRouter();

  const query = router.query.query;

  return (
    <HStack justifyContent="space-between" w="100%">
      {TAB_MENU.map((item) => {
        const { id } = item;
        const href = query
          ? { pathname: `/${id}`, query: { query } }
          : { pathname: `/${id}` };

        return (
          <NextAsLink href={href} width="100%" h="100%" key={id}>
            <Center w="100%" gap="20px">
              <Text
                textStyle="title-b"
                borderBottom={router.pathname === `/${id}` ? "1px solid" : ""}
                _hover={{ cursor: "pointer" }}
              >
                {id === "users" && <AtSignIcon />}
                {id === "bookmark" && <StarIcon color="yellow.300" />}
                {id}
              </Text>
            </Center>
          </NextAsLink>
        );
      })}
    </HStack>
  );
};

export default TabMenu;
