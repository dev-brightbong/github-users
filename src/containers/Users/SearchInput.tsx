import { Button, Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

const SearchInput = () => {
  const router = useRouter();
  const [input, setInput] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleSearch = () => {
    if (input === "") return;
    router.push({ pathname: "/users", query: { query: input } }, "", {
      shallow: true,
    });
  };
  return (
    <InputGroup>
      <Input
        mb="24px"
        placeholder="유저를 검색해보세요."
        value={input}
        onChange={onChangeInput}
      />
      <InputRightAddon>
        <Button onClick={handleSearch}>검색</Button>
      </InputRightAddon>
    </InputGroup>
  );
};

export default SearchInput;
