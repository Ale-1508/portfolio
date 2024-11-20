"use client";

import React, { ReactNode, useRef, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

interface ModalProps {
    title: string;
    onClose: () => void;
    onOk: () => void;
    children: ReactNode;
    isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ title, onClose, onOk, children, isOpen }: ModalProps) => {
    const searchParams = useSearchParams()
    const dialogRef = useRef<null | HTMLDialogElement>(null)
    const showDialog = searchParams.get('showDialog')

    useEffect(() => {
        console.log("ye");
        console.log(isOpen);
        if(isOpen){
            dialogRef.current?.showModal();
        } else {
            dialogRef.current?.close();
        }
    }, [isOpen]);

    const closeDialog = () => {
        dialogRef.current?.close();
        onClose();
    }

    const clickOk = () => {
        onOk();
        closeDialog();
    }

    const dialog: JSX.Element | null = isOpen
        ? (
            <dialog ref={dialogRef}>
                <div>
                    <div>
                        <h1>{title}</h1>
                        <button
                            onClick={closeDialog}
                        >X</button>
                    </div>
                    <div>
                        {children}
                        <div>
                            <button 
                                onClick={clickOk}
                            >
                                Ok
                            </button></div>
                    </div>
                </div>
            </dialog>
        ) : null

    return dialog;
};

export default Modal;
