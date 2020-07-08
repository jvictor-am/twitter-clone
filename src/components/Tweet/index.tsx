import React from 'react';

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        You Retweeted
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Beaultiful City</strong>
            <span>@beaultiful_city</span>
            <Dot />
            <time>July 8th, 2020</time>
          </Header>

          <Description>Magnificent photo taken by Keenan</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              15
            </Status>
            <Status>
              <RetweetIcon />
              35
            </Status>
            <Status>
              <LikeIcon />
              55
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
