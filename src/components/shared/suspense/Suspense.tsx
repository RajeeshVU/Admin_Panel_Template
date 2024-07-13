import { FC } from 'react';

interface SuspenseProps {
  
}

const SuspenseComponent: FC<SuspenseProps> = ({}) => {
  return (
    <>
      <h1 style={{color:"red"}}>Loading</h1>
    </>
  );
};

export default SuspenseComponent;