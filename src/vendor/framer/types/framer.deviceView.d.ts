
declare namespace Framer {
    export class DeviceView {
        constructor(options?: any);
        readonly context: any
        readonly platform: string;
        readonly screenSize: any;
        readonly isPortrait: boolean;
        readonly isLandscape: boolean;
        readonly handSwitchingSupported: boolean;
        readonly nextHand: any | boolean;

        fullScreen: boolean;
        deviceType: string;
        hideBezel: boolean;
        deviceScale: number;
        contentScale: number;
        orientation: any;
        orientationName: string;
        screen: Screen

        setupContext(): void;
        customize(deviceProps: any): void;
        setDeviceScale(deviceScale: number, animate: boolean): void;
        setContentScale(contentScale: number, animate: boolean): void;
        setOrientation(orientation: any, animate: boolean, suggestedSize: any | null): void;
        rotateLeft(animate: boolean): void;
        rotateRight(animate: boolean): void;
        setHand(hand: any): void;
        handImageUrl(hand: any): string;
        toInspect(): string;
        prepareForSnapshot(): void;
    }

}




