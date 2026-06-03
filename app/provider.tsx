'use client';

import * as React from 'react';

import { Toaster } from "@/components/ui/sonner"

type AppProviderProps = {
    children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <>
            <Toaster />
            {children}
        </>
    )
};