import React from 'react';

type Props = {
  title: string;
  toggleDelete: (isDelete: boolean) => void;
};

export const App: React.FC<Props> = ({ title }) => {
  return <div style={{ color: 'red' }}>{title}</div>;
};
