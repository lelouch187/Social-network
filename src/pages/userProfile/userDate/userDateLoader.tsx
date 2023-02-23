import { FC } from 'react';
import ContentLoader from 'react-content-loader';

const UserDateLoader: FC = () => (
  <ContentLoader
    speed={2}
    width={900}
    height={236}
    viewBox="0 0 900 236"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="0" y="259" rx="10" ry="10" width="280" height="25" />
    <rect x="1" y="298" rx="13" ry="13" width="280" height="83" />
    <rect x="1" y="412" rx="6" ry="6" width="92" height="27" />
    <rect x="125" y="404" rx="22" ry="22" width="153" height="43" />
    <circle cx="95" cy="95" r="75" />
    <rect x="190" y="15" rx="0" ry="0" width="410" height="32" />
    <rect x="190" y="70" rx="0" ry="0" width="410" height="31" />
    <rect x="190" y="121" rx="0" ry="0" width="410" height="35" />
    <rect x="190" y="180" rx="0" ry="0" width="410" height="36" />
  </ContentLoader>
);

export default UserDateLoader;
