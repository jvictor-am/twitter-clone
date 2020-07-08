import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        {/* <EditButton>Edit Profile</EditButton> */}
        <EditButton outlined>Edit Profile</EditButton>

        <h1>João Mesquita</h1>
        <h2>@joao_mesquita</h2>

        <p>
          Developer at <a href="https://www.linkedin.com">LinkedIn</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São paulo, Brazil
          </li>
          <li>
            <CakeIcon />
            Born on August 3, 1993
          </li>
        </ul>

        <Followage>
          <span>
            following <strong>100</strong>
          </span>
          <span>
            <strong>99 </strong>followers
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
