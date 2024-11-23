"use client";

import React, { ReactNode, useRef, useEffect } from 'react';
import { PrimaryButton } from '@/buttons/PrimaryButton';

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
            document.addEventListener('click', () => { closeDialog() });
        } else {
            dialogRef.current?.close();
            document.removeEventListener('click', () => {} );
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
            <dialog ref={dialogRef} className={`
                w-96 px-16 py-8
                justify-between items-center
                flex flex-col gap-8
                rounded-4xl
                bg-white
            `}>
                {children}
                <PrimaryButton
                    text="OK"
                    onClick={clickOk}
                />
            </dialog>
        ) : null

    return dialog;
};

export default Modal;
