
declare namespace Framer {


    export class PageComponent extends Layer {
        readonly content: any
        velocityThreshold: any
        closestPage: any
        currentPage: any
        previousPage: any

        constructor(options?: LayerOptions);
        addPage(layer: any, dir?: string): void
        snapToPage(page: Framer.Layer, animate?: boolean, options?: any)
        nextPage(direction?: string, currentPage?: any, withoutCurrentPage?: boolean)
        snapToNextPage(direction?: string, animate?: boolean, animationOptions?: any)
        snapToPreviousPage(animate?: boolean, animationOptions?: any)
        addPage(page: any, direction?: string)
        horizontalPageIndex(page: any): number
        verticalPageIndex(page: any): number
    }



}




