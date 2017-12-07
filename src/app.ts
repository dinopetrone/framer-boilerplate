let flipCard = require("flipCard")




let device = new Framer.DeviceView();
device.setupContext()
device.deviceType = "apple-iphone-x-space-gray"
device.contentScale = 1;

// let frontLayer = new Framer.Layer(
//     {
//         x: 12,
//         y: 12,
//         image: "images/circle.png"
//         // backgroundColor: "blue"
//     }
// )
// let backLayer = new Framer.Layer(
//     {
//         x: 12,
//         y: 12,
//         backgroundColor: "red"
//     }
// )


// flipCard.flipCard(frontLayer, backLayer, 1600, "spring(300,20,0)")


// circle.onClick(() => {
//     console.log("")
// })


// circle.onClick(() => {
//     console.log(Framer.Screen.size);

//     circle.destroy()
// });



let acuraApp = new Framer.PageComponent(
    {
        height: Framer.Screen.height,
        backgroundColor: "#1B1C1E",
        width: Framer.Screen.width,
        scrollVertical: false,
        contentInset: {
            right: 20
        }
    }
)