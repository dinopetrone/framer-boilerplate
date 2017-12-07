



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

    interface LayerOptions {
        context?: any
        label?: any
        custom?: any
        animationOptions?: any
        ignoreEvents?: boolean
        width?: number
        height?: number
        visible?: boolean
        opacity?: number
        index?: number
        clip?: any
        scrollHorizontal?: boolean
        scrollVertical?: boolean
        scroll?: any
        x?: number | Function
        y?: number | Function
        z?: number | Function
        scaleX?: number
        scaleY?: number
        scaleZ?: number
        skewX?: number
        skewY?: number
        skew?: number
        scale?: number
        originX?: number
        originY?: number
        originZ?: number
        perspective?: any
        perspectiveOriginX?: any
        perspectiveOriginY?: any
        rotationX?: number
        rotationY?: number
        rotationZ?: number
        rotation?: number
        blur?: any
        brightness?: any
        saturate?: any
        hueRotate?: any
        contrast?: any
        invert?: any
        grayscale?: any
        sepia?: any
        blending?: any
        backgroundBlur?: any
        backgroundBrightness?: any
        backgroundSaturate?: any
        backgroundHueRotate?: any
        backgroundContrast?: any
        backgroundInvert?: any
        backgroundGrayscale?: any
        backgroundSepia?: any
        shadow?: any
        shadows?: any
        backgroundColor?: any
        color?: any
        borderRadius?: any
        borderColor?: any
        borderWidth?: any
        borderStyle?: any
        force2d?: any
        flat?: any
        backfaceVisible?: any
        name?: any
        matrix?: any
        transformMatrix?: any
        matrix3d?: any
        cornerRadius?: any
        point?: any
        size?: any
        frame?: any
        minX?: number
        midX?: number
        maxX?: number
        minY?: number
        midY?: number
        maxY?: number
        constraintValues?: any
        htmlIntrinsicSize?: any
        canvasFrame?: any
        screenFrame?: any
        style?: any
        classList?: any
        html?: any
        image?: string
        gradient?: any
        parent?: any
        children?: any
        siblings?: any
        descendants?: any
        superLayer?: any
        subLayers?: any
        siblingLayers?: any
        isAnimating?: any
        states?: any
        stateNames?: any
        draggable?: any
        pinchable?: any
        scrollFrame?: any
        scrollX?: number
        scrollY?: number
        shadowX?: number
        shadowY?: number
        shadowBlur?: number
        shadowColor?: string

    }

    export class Layer {

        static context?: any
        label?: any
        custom?: any
        animationOptions?: any
        ignoreEvents?: boolean
        width?: number
        height?: number
        visible?: boolean
        opacity?: number
        index?: number
        clip?: any
        scrollHorizontal?: boolean
        scrollVertical?: boolean
        scroll?: any
        x?: number | Function
        y?: number | Function
        z?: number | Function
        scaleX?: number
        scaleY?: number
        scaleZ?: number
        skewX?: number
        skewY?: number
        skew?: number
        scale?: number
        originX?: number
        originY?: number
        originZ?: number
        perspective?: any
        perspectiveOriginX?: any
        perspectiveOriginY?: any
        rotationX?: number
        rotationY?: number
        rotationZ?: number
        rotation?: number
        blur?: any
        brightness?: any
        saturate?: any
        hueRotate?: any
        contrast?: any
        invert?: any
        grayscale?: any
        sepia?: any
        blending?: any
        backgroundBlur?: any
        backgroundBrightness?: any
        backgroundSaturate?: any
        backgroundHueRotate?: any
        backgroundContrast?: any
        backgroundInvert?: any
        backgroundGrayscale?: any
        backgroundSepia?: any
        shadow?: any
        shadows?: any
        backgroundColor?: any
        color?: any
        borderRadius?: any
        borderColor?: any
        borderWidth?: any
        borderStyle?: any
        force2d?: any
        flat?: any
        backfaceVisible?: any
        name?: any
        matrix?: any
        transformMatrix?: any
        matrix3d?: any
        cornerRadius?: any
        point?: any
        size?: any
        frame?: any
        minX?: number
        midX?: number
        maxX?: number
        minY?: number
        midY?: number
        maxY?: number
        constraintValues?: any
        htmlIntrinsicSize?: any
        canvasFrame?: any
        screenFrame?: any
        style?: any
        classList?: any
        html?: any
        image?: string
        gradient?: any
        parent?: any
        children?: any
        siblings?: any
        descendants?: any
        superLayer?: any
        subLayers?: any
        siblingLayers?: any
        isAnimating?: any
        states?: any
        stateNames?: any
        draggable?: any
        pinchable?: any
        scrollFrame?: any
        scrollX?: number
        scrollY?: number
        shadowX?: number
        shadowY?: number
        shadowBlur?: number
        shadowColor?: string



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
        onTap(fn: () => void): void
        destroy(): void
        addListener(eventName: string, listener: Function): void
        on(eventName: string, listener: Function): void
        horizontalPageIndex(page: any): number
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


    export class PageComponent extends Layer {
        readonly content: any

        constructor(options?: LayerOptions);
        addPage(layer: any, dir?: string): void
        // page, animate = true, animationOptions = null
        snapToPage(page: Framer.Layer, animate?: boolean, options?: any)

    }

    export class Align {
        static center(layer: Layer, property, offset?: number): any
        static left(layer: Layer, property, offset?: number): any
        static right(layer: Layer, property, offset?: number): any
        static top(layer: Layer, property, offset?: number): any
        static bottom(layer: Layer, property, offset?: number): any
    }

}


