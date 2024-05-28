import { extendTheme } from "@chakra-ui/react";

import textStyles from "./text-styles";
import styles from "./styles";
import colors from "./colors";

const theme = extendTheme({ textStyles, styles, colors });

export default theme;
