import type { Dispatch, ReactNode, SetStateAction, PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import { IoCloseSharp } from "react-icons/io5";

type ModalProps = PropsWithChildren & {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
    title: ReactNode;
    portalTarget?: HTMLElement;
};

export const Modal = ({ showModal, setShowModal, title, portalTarget, children }: ModalProps) => {
    const modalRoot = document.getElementById("modalRoot");
    portalTarget = portalTarget ?? modalRoot!;

    return (
        showModal && (
            <>
                {createPortal(
                    <div className="text-foreground fixed top-0 left-0 z-1 flex min-h-screen min-w-screen items-center justify-center bg-black/30 backdrop-blur-xs">
                        <div className="bg-background max-w-xl min-w-sm rounded-lg p-4">
                            {/* Header */}
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-bold">{title}</h2>
                                <button
                                    className="hover:text-primary cursor-pointer p-2"
                                    onClick={() => setShowModal(false)}
                                    type="button"
                                >
                                    <IoCloseSharp className="h-6 w-6" />
                                </button>
                            </div>
                            <hr className="pb-4" />

                            {/* Body */}
                            {children}
                        </div>
                    </div>,
                    portalTarget
                )}
            </>
        )
    );
};
