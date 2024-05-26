import { AtSignIcon, StarIcon } from "@chakra-ui/icons";
import { Center, HStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import NextAsLink from "../NextAsLink";

type RouterValueType = "users" | "bookmark";

const routers: Record<"id", RouterValueType>[] = [
  {
    id: "users",
  },
  {
    id: "bookmark",
  },
];

type ExtractArrayElementType<T> = T extends readonly (infer U)[] ? U : never;

type Router = ExtractArrayElementType<typeof routers>;
type RouterId = Router["id"];

const TabMenu = () => {
  const router = useRouter();

  return (
    <HStack justifyContent="space-between" w="100%">
      {routers.map((item) => {
        const { id } = item;
        return (
          <NextAsLink href={`/${id}`} width="100%" h="100%" key={id}>
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
