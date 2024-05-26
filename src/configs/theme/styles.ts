import { StyleFunctionProps } from "@chakra-ui/react";

const styles = {
  global: (props: StyleFunctionProps) => ({
    "*": {
      "::-webkit-scrollbar": {
        display: "none",
      },
    },
  }),
};

export default styles;
