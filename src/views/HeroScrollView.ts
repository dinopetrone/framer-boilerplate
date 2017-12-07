export default class extends Framer.PageComponent {
    width = 700
    height = 250
    backgroundColor = "#FFF"
    scrollVertical = false
    scrollHorizontal = false
    x = Framer.Align.center
    y = Framer.Align.center
    originX = 1
    navBar: Framer.Layer
    colorArr: string[]
    tabs: Framer.Layer[]

    constructor(pageItems: string[]) {
        super()
        this.tabs = []
        this.colorArr = pageItems
        this.initNav()
        this.initTabs()

        this.tabs[0].animate("active", { instant: true })
        this.on("change:currentPage", this.onPageChange)
    }

    initNav() {
        this.navBar = new Framer.Layer({
            width: this.width,
            height: 50,
            y: this.height - 50,
            backgroundColor: "#fff",
            shadowY: -5,
            shadowBlur: 10,
            shadowColor: "rgba(0,0,0,0.2)",
            parent: this,
        })

    }

    initTabs() {
        this.colorArr.forEach((item, index) => {
            this.addItem(item, index * this.width, index)
        });
    }

    addItem(color: string, x: number, index: number) {

        let page = new Framer.Layer({
            size: this.size,
            backgroundColor: color,
            x: x,
            parent: this.content,
            name: index
        })

        let pageName = new Framer.Layer({
            html: index + 1,
            width: 100,
            height: 100,
            x: Framer.Align.center,
            y: Framer.Align.center,
            backgroundColor: "",
            parent: page,
            style: {
                fontSize: "160px",
                textAlign: "center",
                fontFamily: "Lato Regular",
            }
        })

        let tab = new Framer.Layer({
            backgroundColor: page.backgroundColor,
            parent: this.navBar,
            height: this.navBar.height,
            width: this.width / this.colorArr.length,
            x: this.width / this.colorArr.length * index,
            opacity: 0.4,
            name: index
        })

        let buttonName = new Framer.Layer({
            html: index + 1,
            width: tab.width,
            height: tab.height,
            x: Framer.Align.center,
            y: Framer.Align.center,
            backgroundColor: "",
            parent: tab,
            style: {
                fontSize: "40px",
                textAlign: "center",
                lineHeight: `${tab.height}px`
            }
        })

        tab.states = {
            active: {
                opacity: 1
            }
        }

        this.tabs.push(tab)

        tab.onTap(() => {
            this.snapToPage(page)
        })

    }

    onPageChange(currentPage) {
        let currentPageIndex = this.horizontalPageIndex(currentPage)

        this.tabs.forEach((tab, index) => {
            if (index == currentPageIndex) {
                tab.animate("active")
            } else {
                tab.animate("default")
            }
        })

    }


}



