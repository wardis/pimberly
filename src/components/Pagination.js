import { HStack, Text, Button } from '@chakra-ui/react';

export const Pagination = ({
  perPage,
  currentPage,
  setCurrentPage,
  totalRepos,
}) => {
  const totalPages = Math.ceil(totalRepos / perPage);

  const prevPageHandler = () => {
    setCurrentPage(prev => (prev > 1 ? prev - 1 : 1));
  };

  const nextPageHandler = () => {
    setCurrentPage(prev =>
      prev < Math.ceil(totalRepos / perPage) ? prev + 1 : totalPages
    );
  };

  return (
    <HStack spacing={8}>
      <Button onClick={prevPageHandler} disabled={currentPage <= 1}>
        Prev
      </Button>
      <Text>
        Count: {totalRepos} | Page: {currentPage}/{totalPages}
      </Text>
      <Button onClick={nextPageHandler} disabled={currentPage >= totalPages}>
        Next
      </Button>
    </HStack>
  );
};
