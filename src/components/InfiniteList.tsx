import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { Box, Center, Spinner, StackProps, VStack } from "@chakra-ui/react";
import React from "react";

interface InfiniteListProps<T> extends StackProps {
  data?: T[];
  hasMore: boolean;
  isFetching: boolean;
  renderItem?: (item: T, index: number) => React.ReactNode;
  onFetchMore: () => void;
  listEmptyComponent?: React.ReactNode;
}

const InfiniteList = <T,>({
  data,
  hasMore,
  isFetching,
  renderItem,
  onFetchMore,
  listEmptyComponent,
  ...props
}: InfiniteListProps<T>) => {
  const { targetRef: bottomRef } = useIntersectionObserver({
    callback: () => {
      if (!isFetching && hasMore) {
        onFetchMore();
      }
    },
    options: {
      root: null,
      rootMargin: "0px",
    },
  });

  if (!data) {
    return (
      <Center w={"100%"} h={"100%"} flex={1}>
        {listEmptyComponent}
      </Center>
    );
  }

  return (
    <VStack as={"ul"} spacing={"0px"} w={"100%"} {...props}>
      {data?.map((item, index) => (
        <Box as={"li"} listStyleType={"none"} w={"100%"} key={index}>
          {renderItem?.(item, index)}
        </Box>
      ))}
      <Box ref={bottomRef}>
        {isFetching && (
          <Center>
            <Spinner size={"sm"} />
          </Center>
        )}
      </Box>
    </VStack>
  );
};

export default InfiniteList;
