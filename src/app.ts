let flipCard = require("flipCard")




let device = new Framer.DeviceView();
device.setupContext()
device.deviceType = "apple-iphone-x-space-gray"
device.contentScale = 1;

let frontLayer = new Framer.Layer(
    {
        x: 12,
        y: 12,
        backgroundColor: "blue"
    }
)
let backLayer = new Framer.Layer(
    {
        x: 12,
        y: 12,
        backgroundColor: "red"
    }
)


flipCard.flipCard(frontLayer, backLayer, 1600, "spring(300,20,0)")


// circle.onClick(() => {
//     console.log("")
// })


// circle.onClick(() => {
//     console.log(Framer.Screen.size);

//     circle.destroy()
// });

