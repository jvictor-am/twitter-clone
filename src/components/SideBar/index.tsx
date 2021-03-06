import React from 'react';

import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search on Twitter" />
        <SearchIcon />
      </SearchWrapper>
      <StickyBox>
        <Body>
          <List
            title="Maybe you like..."
            elements={[
              <FollowSuggestion name="Nolbert" nickname="@nolbert" />,
              <FollowSuggestion name="Pawel" nickname="@pawel" />,
              <FollowSuggestion name="Keenan" nickname="@keenan" />,
            ]}
          />
          <List title="What is happening..." elements={[<News />, <News />]} />
          <List title="What is happening..." elements={[<News />, <News />]} />
          <List title="What is happening..." elements={[<News />, <News />]} />
          <List title="What is happening..." elements={[<News />, <News />]} />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
