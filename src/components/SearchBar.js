import { useState, useEffect } from 'react';
import axios from 'axios';

import { HStack, Input, Button } from '@chakra-ui/react';

export const SearchBar = ({
  setLoading,
  setRepos,
  setTotalRepos,
  perPage,
  currentPage,
}) => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    if (term === '') return;

    fetchRepos();
  }, [currentPage]);

  const handleSubmit = e => {
    e.preventDefault();
    if (term === '') return;

    fetchRepos();
  };

  const fetchRepos = async () => {
    setLoading(true);

    const url = 'https://api.github.com/search/repositories';
    await axios
      .get(url, {
        params: {
          sort: 'stars',
          per_page: perPage,
          q: term,
          page: currentPage,
        },
      })
      .then(res => {
        const { data } = res;
        if (data.items.length) {
          setRepos(data.items);
          setTotalRepos(data.total_count);
        }
      })
      .catch(err => console.log(err));

    setLoading(false);
  };

  return (
    <HStack as="form" onSubmit={handleSubmit}>
      <Input
        placeholder="Search term..."
        onChange={e => setTerm(e.target.value)}
      />
      <Button type="submit" variant="outline">
        Search
      </Button>
    </HStack>
  );
};
