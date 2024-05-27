import React, { memo, useState } from "react";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const SearchInput = () => {
  const router = useRouter();
  const [input, setInput] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === "") return;
    router.push({ pathname: "/users", query: { query: input } }, "", {
      shallow: true,
    });
  };
  return (
    <Box as="form" onSubmit={handleSearch}>
      <InputGroup>
        <Input
          mb="24px"
          placeholder="유저를 검색해보세요."
          value={input}
          onChange={onChangeInput}
        />
        <InputRightAddon>
          <Button type="submit">검색</Button>
        </InputRightAddon>
      </InputGroup>
    </Box>
  );
};

export default memo(SearchInput);
