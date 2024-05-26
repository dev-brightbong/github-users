import { extendTheme } from '@chakra-ui/react';

import { breakpoints } from './breakpoints';
import textStyles from './text-styles';

const theme = extendTheme({ breakpoints, textStyles });

export default theme;
