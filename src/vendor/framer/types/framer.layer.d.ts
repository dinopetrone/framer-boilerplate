declare namespace Framer {

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
        animate(val: string, opts?: {}): void
    }


}




