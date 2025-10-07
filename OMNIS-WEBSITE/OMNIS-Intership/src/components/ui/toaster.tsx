'use client';

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';
import { CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, variant, ...props }) {
        const getIcon = () => {
          switch (variant) {
            case 'success':
              return <CheckCircle className="h-5 w-5 text-omnis-mint-green" />;
            case 'destructive':
              return <AlertCircle className="h-5 w-5 text-red-500" />;
            case 'warning':
              return <AlertTriangle className="h-5 w-5 text-omnis-vibrant-orange" />;
            case 'info':
              return <Info className="h-5 w-5 text-omnis-electric-cyan" />;
            default:
              return <Info className="h-5 w-5" />;
          }
        };

        return (
          <Toast key={id} variant={variant} {...props}>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-0.5">
                {getIcon()}
              </div>
              <div className="flex-1">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </div>
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}