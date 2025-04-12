import { Dispatch, ReactNode, SetStateAction, useEffect } from "react";
import { createPortal } from "react-dom";
import { IoCloseSharp } from "react-icons/io5";

type ModalProps = {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  title: ReactNode | string;
  portalTarget?: HTMLElement;
};

export const Modal = ({
  showModal,
  setShowModal,
  title,
  portalTarget,
  children,
}: ModalProps) => {
  const root = document.getElementById("bodyRoot");
  const modalRoot = document.getElementById("modalRoot");
  portalTarget = portalTarget ?? modalRoot!;

  useEffect(() => {
    root?.classList.toggle("blur-xs", showModal);
  }, [showModal]);

  return (
    showModal &&
    createPortal(
      <div className="fixed min-w-screen min-h-screen bg-black/60 top-0 left-0 flex items-center justify-center z-50 text-white">
        <div className="bg-[#424769] rounded-lg p-4 min-w-sm max-w-xl">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>{title}</div>
            <button
              type="button"
              className="cursor-pointer p-2 hover:text-[#F6B17A]"
              onClick={() => setShowModal(false)}
            >
              <IoCloseSharp className="w-6 h-6" />
            </button>
          </div>
          <hr className="pb-4" />
          {children}
        </div>
      </div>,
      portalTarget
    )
  );
};
