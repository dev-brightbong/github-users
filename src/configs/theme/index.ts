import { extendTheme } from "@chakra-ui/react";

import { breakpoints } from "./breakpoints";
import textStyles from "./text-styles";
import styles from "./styles";

const theme = extendTheme({ breakpoints, textStyles, styles });

export default theme;
