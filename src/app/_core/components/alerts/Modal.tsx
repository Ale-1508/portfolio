"use client";

import React, { ReactNode, useRef, useEffect, useCallback } from 'react';
import { PrimaryButton } from '@/buttons/PrimaryButton';
import { SimpleLoadingAnimation } from '@/components/loading/SimpleLoadingAnimation';

interface ModalProps {
    title: string;
    onClose: () => void;
    onOk: () => void;
    children: ReactNode;
    isOpen: boolean;
    isWaiting: boolean;
    loadingMessage?: string
}

const Modal: React.FC<ModalProps> = ({ onClose, onOk, isWaiting, children, isOpen, loadingMessage="Loading..." }: ModalProps) => {
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
                w-64 sm:w-96 px-16 py-8
                justify-between items-center
                flex flex-col gap-8
                rounded-4xl
                text-lg text-primary-700
                font-sans font-medium
                bg-white
            `}>
                {
                    isWaiting
                    ? <>   
                        <div className={`pt-8 pb-2`}>
                            <SimpleLoadingAnimation />
                        </div>
                        <p className={`pb-8`}>{loadingMessage}</p>
                    </>
                    : <>
                        {children}
                        <PrimaryButton
                            text="OK"
                            onClick={clickOk}
                        />
                    </>
                }
            </dialog>
        ) : null

    useEffect(() => {
        console.log(isWaiting)
        if(isOpen){
            dialogRef.current?.showModal();
            document.addEventListener('click', () => { closeDialog() });
        } else {
            dialogRef.current?.close();
            document.removeEventListener('click', () => {} );
        }
    }, [isOpen, closeDialog, isWaiting]);

    return dialog;
};

export default Modal;
