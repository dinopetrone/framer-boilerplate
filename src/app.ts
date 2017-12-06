let device = new Framer.DeviceView();
device.setupContext()
device.deviceType = "apple-iphone-x-space-gray"
device.contentScale = 1;

let circle = new Framer.Layer(
    {
        x: 12,
        y: 12,
        backgroundColor: "blue"
    }
)

circle.onClick(() => {
    console.log("")
})


circle.onClick(() => {
    console.log(Framer.Screen.size);

    circle.destroy()
});

