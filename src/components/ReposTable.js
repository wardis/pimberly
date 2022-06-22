import {
  Link,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Spinner,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export const ReposTable = ({ repos, loading }) => {
  if (loading) return <Spinner />;

  return repos.length ? (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Repo Name</Th>
            <Th>Author</Th>
            <Th isNumeric># of Stars</Th>
          </Tr>
        </Thead>
        <Tbody>
          {repos.map(repo => {
            const { id, name, owner, stargazers_count, html_url } = repo;

            return (
              <Tr key={id}>
                <Td>
                  <Link href={html_url} isExternal>
                    {name} <ExternalLinkIcon mx="2px" />
                  </Link>
                </Td>
                <Td>{owner.login}</Td>
                <Td isNumeric>{stargazers_count}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  ) : (
    ''
  );
};
