import { Dialog } from "@material-tailwind/react";
import { FC } from "react";

interface ModalComponentProps {
  open?: boolean;
  children: React.ReactNode;

}

const ModalComponent: FC<ModalComponentProps> = ({
  open = false,
  children,
}) => {
  return (
    <>
      <Dialog
        size="sm"
        open={open}
        className="rounded-sm object-scale-down"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        handler={() => {}}
      >
        <div className="" >
          {children}
        </div>
      </Dialog>
    </>
  );
};

export default ModalComponent;
