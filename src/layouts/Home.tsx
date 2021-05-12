import { Box, Button, Spinner, Text } from "@chakra-ui/react";

import { CountsTable } from "../components/CountsTable";
import { useCounts } from "../hooks/useCounts";

export const Home = () => {
  const { isLoading, isError, isFetching, data, refetch } = useCounts();

  if (isLoading) {
    return (
      <Box>
        <Spinner size="xl" />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box>
        <Text>An error occurred, try again.</Text>
        <Button onClick={() => refetch()} disabled={isFetching}>
          Try again
        </Button>
      </Box>
    );
  }

  return <CountsTable title="Events from orders" counts={data} />;
};
