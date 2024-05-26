import { extendTheme } from "@chakra-ui/react";

import { breakpoints } from "./breakpoints";
import textStyles from "./text-styles";
import styles from "./styles";
import colors from "./colors";

const theme = extendTheme({ breakpoints, textStyles, styles, colors });

export default theme;
