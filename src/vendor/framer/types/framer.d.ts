
interface LayerOptions {
    backgroundColor?: string
    x?: number
    y?: number
}


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

    export class Layer {

        readonly context: any
        readonly transformMatrix: any;
        readonly matrix3d: any;

        label: string;
        custom: any;
        animationOptions: any;
        ignoreEvents: boolean;
        width: number;
        height: number;
        visible: boolean;
        opacity: number;
        index: number;
        clip: boolean;
        scrollHorizontal: boolean;
        scrollVertical: boolean;
        scroll: boolean;
        x: number;
        y: number;
        z: number;
        scaleX: number;
        scaleY: number;
        scaleZ: number;
        scale: number;
        skewX: number;
        skewY: number;
        skew: number;
        originX: number;
        originY: number;
        originZ: number;
        perspective: any;
        perspectiveOriginX: any;
        perspectiveOriginY: any;
        rotationX: number;
        rotationY: number;
        rotationZ: number;
        rotation: number;
        blur: number;
        brightness: number;
        saturate: number;
        hueRotate: number;
        contrast: number;
        invert: number;
        grayscale: number;
        sepia: number;
        blending: string;
        backgroundBlur: number;
        backgroundBrightness: number;
        backgroundSaturate: number;
        backgroundHueRotate: number;
        backgroundContrast: number;
        backgroundInvert: number;
        backgroundGrayscale: number;
        backgroundSepia: number;

        shadows: any;
        backgroundColor: any;
        color: any;
        borderRadius: number;
        borderColor: any;
        borderWidth: number;
        borderStyle: any;
        force2d: boolean;
        flat: boolean;
        backfaceVisible: boolean;
        name: string;
        matrix: any;
        cornerRadius: number;
        point: any;
        size: any;
        frame: any;
        minX: number;
        midX: number;
        maxX: number;
        minY: number;
        midY: number;
        maxY: number;
        constraintValues: any;
        htmlIntrinsicSize: any;
        canvasFrame: any;
        screenFrame: any;

        constructor(options?: LayerOptions);
        updateShadowsProperty(prop, value): void;
        updateShadowStyle(): void;
        parentChanged(newParent: any, oldParent: any): void;
        setParentPreservingConstraintValues(parent: any): void
        convertPointToScreen(point: any): any;
        convertPointToCanvas(point: any): any;
        convertPointToCanvas(point: any, layer: Layer): Layer;
        contentFrame(): any;
        totalFrame(): any;
        centerFrame(): any;
        center(): any;
        onClick(fn: () => void): void
        destroy(): void
    }

    export class Screen {
        constructor(options?: any);
        static readonly width: number;
        static readonly height: number;
        static readonly canvasFrame: number;
        static readonly midX: number;
        static readonly midY: number;
        static readonly size: any;
        static readonly frame: any;
        static readonly device: Framer.DeviceView;
        static backgroundColor: any;
        static perspective: any;
        static perspectiveOriginX: any;
        static perspectiveOriginY: any;

        toInspect(): void;
        onResize(cb: () => void): void;
        convertPointToLayer(point: any, layer: any): any;
        convertPointToCanvas(point: any): any;

        onEdgeSwipe(cb: () => void): void;
        onEdgeSwipeStart(cb: () => void): void;
        onEdgeSwipeEnd(cb: () => void): void;

        onEdgeSwipeTop(cb: () => void): void;
        onEdgeSwipeTopStart(cb: () => void): void;
        onEdgeSwipeTopEnd(cb: () => void): void;

        onEdgeSwipeRight(cb: () => void): void;
        onEdgeSwipeRightStart(cb: () => void): void;
        onEdgeSwipeRightEnd(cb: () => void): void;

        onEdgeSwipeBottom(cb: () => void): void;
        onEdgeSwipeBottomStart(cb: () => void): void;
        onEdgeSwipeBottomEnd(cb: () => void): void;

        onEdgeSwipeLeft(cb: () => void): void;
        onEdgeSwipeLeftStart(cb: () => void): void;
        onEdgeSwipeLeftEnd(cb: () => void): void;
    }

}


