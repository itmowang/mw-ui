import { default as default_2 } from 'react';
import { ReactNode } from 'react';

export declare const Alert: default_2.FC;

export declare const Button: default_2.FC<ButtonProps>;

declare interface ButtonProps {
    children: ReactNode;
    type?: "primary" | "secondary" | "success" | "info" | "warning" | "danger";
}

export { }
