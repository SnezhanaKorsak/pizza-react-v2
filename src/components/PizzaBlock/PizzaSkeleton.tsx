import React from 'react';
import ContentLoader from 'react-content-loader';

function PizzaSkeleton() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={465}
      viewBox="0 0 280 465"
      backgroundColor="#d7d6d6"
      foregroundColor="#ecebeb"
    >
      <circle cx="140" cy="130" r="130" />
      <rect x="0" y="280" rx="0" ry="0" width="280" height="20" />
      <rect x="0" y="315" rx="0" ry="0" width="280" height="90" />
      <rect x="150" y="420" rx="30" ry="30" width="130" height="45" />
      <rect x="0" y="430" rx="0" ry="0" width="90" height="25" />
    </ContentLoader>
  );
}

export default PizzaSkeleton;
