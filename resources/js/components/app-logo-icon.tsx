import { HTMLAttributes } from 'react';

export default function AppLogoIcon(props: HTMLAttributes<HTMLImageElement>) {
    return <img src="/logo.webp" alt="logo" {...props} />;
}
