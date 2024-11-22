"use client";

import React, { ReactNode, useRef, useEffect } from 'react';

interface ModalProps {
    title: string;
    onClose: () => void;
    onOk: () => void;
    children: ReactNode;
    isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ title, onClose, onOk, children, isOpen }: ModalProps) => {
    const dialogRef = useRef<null | HTMLDialogElement>(null)

    useEffect(() => {
        console.log("open")
        if(isOpen){
            dialogRef.current?.showModal();
        } else {
            dialogRef.current?.close();
        }
    }, [isOpen]);
    
    useEffect(() => {
        // bug -> I need to use add event listener only if dialog is visible
        console.log("close")
        if(!isOpen){
            document.addEventListener('click', () => { closeDialog() });
        }

        return( () => {
            document.removeEventListener('click', () => {} );
        } )
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
            <dialog ref={dialogRef} className={`
                w-64 p-16
                rounded-4xl
            `}>
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
