import React from "react";
import { Box } from "@chakra-ui/react";
import BasisSection from "@/components/Layout/BasisSection";
import TabMenu from "@/components/TabMenu/TabMenu";
import UserList from "./UserList";

const Users = () => {
  return (
    <BasisSection>
      <TabMenu />
      <Box mt="24px" w="100%">
        <UserList />
      </Box>
    </BasisSection>
  );
};

export default Users;
