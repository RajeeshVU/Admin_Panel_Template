import { FC } from 'react';
import ImageComponent from '../../imageComponent/ImageComponent';
import LoadingGif from '../../../assets/logo/loadingGif.gif'
interface SuspenseProps {
  
}

const SuspenseComponent: FC<SuspenseProps> = ({}) => {
  return (
    <>
      <div className="w-full h-screen bg-[#f9fbfe] flex-col flex justify-center items-center">
          <ImageComponent src={LoadingGif} alt='load gif' className='h-[40%]'/>
      </div>
    </>
  );
};

export default SuspenseComponent;