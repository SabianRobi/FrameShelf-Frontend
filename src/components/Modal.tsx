import { Dispatch, ReactNode, SetStateAction, PropsWithChildren } from 'react';
import { createPortal } from "react-dom";
import { IoCloseSharp } from "react-icons/io5";

type ModalProps = PropsWithChildren & {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  title: ReactNode;
  portalTarget?: HTMLElement;
};

export const Modal = ({
  showModal,
  setShowModal,
  title,
  portalTarget,
  children,
}: ModalProps) => {
  const modalRoot = document.getElementById("modalRoot");
  portalTarget = portalTarget ?? modalRoot!;

  return (
    showModal && <>
      { createPortal(
        <div className="fixed min-w-screen min-h-screen top-0 left-0 bg-black/30  flex items-center justify-center z-1 text-foreground backdrop-blur-xs">
          <div className="bg-background rounded-lg p-4 min-w-sm max-w-xl">
            { /* Header */ }
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">{ title }</h2>
              <button
                type="button"
                className="cursor-pointer p-2 hover:text-primary"
                onClick={ () => setShowModal(false) }
              >
                <IoCloseSharp className="w-6 h-6" />
              </button>
            </div>
            <hr className="pb-4" />

            { /* Body */ }
            { children }
          </div>
        </div>,
        portalTarget
      ) }
    </>
  );
};
