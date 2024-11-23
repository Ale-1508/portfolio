"use client";

import React, { ReactNode, useRef, useEffect, useCallback } from 'react';
import { PrimaryButton } from '@/buttons/PrimaryButton';

interface ModalProps {
    title: string;
    onClose: () => void;
    onOk: () => void;
    children: ReactNode;
    isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ onClose, onOk, children, isOpen }: ModalProps) => {
    const dialogRef = useRef<null | HTMLDialogElement>(null)

    const closeDialog = useCallback(() => {
        dialogRef.current?.close();
        onClose();
    }, [onClose]);

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

    useEffect(() => {
        console.log("open")
        if(isOpen){
            dialogRef.current?.showModal();
            document.addEventListener('click', () => { closeDialog() });
        } else {
            dialogRef.current?.close();
            document.removeEventListener('click', () => {} );
        }
    }, [isOpen, closeDialog]);

    return dialog;
};

export default Modal;
