
declare namespace Framer {


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




