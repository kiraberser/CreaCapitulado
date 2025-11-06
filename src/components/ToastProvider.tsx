"use client";

import { Toaster } from 'react-hot-toast';

export function ToastProvider() {
  return (
    <Toaster 
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: '#fff',
          color: '#333',
        },
        success: {
          iconTheme: {
            primary: '#66BB6A',
            secondary: '#fff',
          },
        },
        error: {
          iconTheme: {
            primary: '#EF5350',
            secondary: '#fff',
          },
        },
      }}
    />
  );
}

