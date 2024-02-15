import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import React from 'react';

const DetalhesSkeleton: React.FC = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item width={'100%'} height={300} marginTop={30} />

        <SkeletonPlaceholder.Item
          width={'100%'}
          height={40}
          marginTop={20}
          borderRadius={10}
        />
        <SkeletonPlaceholder.Item
          width={'100%'}
          height={120}
          marginTop={50}
          borderRadius={16}
        />
        <SkeletonPlaceholder.Item
          width={'100%'}
          height={120}
          marginTop={20}
          borderRadius={16}
        />
        <SkeletonPlaceholder.Item
          width={'100%'}
          height={120}
          marginTop={20}
          borderRadius={16}
        />
        <SkeletonPlaceholder.Item
          width={'100%'}
          height={120}
          marginTop={20}
          borderRadius={16}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default DetalhesSkeleton;
