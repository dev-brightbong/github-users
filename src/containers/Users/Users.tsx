import BasisSection from "@/components/Layout/BasisSection";
import React from "react";
import TabMenu from "./TabMenu/TabMenu";
import { Box } from "@chakra-ui/react";
import List from "./List/List";
import Bookmark from "./Bookmark/Bookmark";

const Users = () => {
  return (
    <BasisSection pt="12px">
      <TabMenu />
      <Box mt="24px" w="100%">
        <List />
        <Bookmark />
      </Box>
    </BasisSection>
  );
};

export default Users;
