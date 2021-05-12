import { Box, ChakraProvider, Grid, theme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ColorModeSwitcher } from "./ColorSwitch";
import { Home } from "./layouts/Home";

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Home />
        </Grid>
      </Box>
    </ChakraProvider>
  </QueryClientProvider>
);
