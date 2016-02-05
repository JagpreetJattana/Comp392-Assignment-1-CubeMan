var objects;
(function (objects) {
    var Control = (function () {
        //constructor(rotationSpeedx: number,rotationSpeedy: number,rotationSpeedz: number, opacity: number, color:number) {
        function Control(zoom, rotationSpeedx, rotationSpeedy, rotationSpeedz, opacity, color) {
            this.XrotationSpeed = rotationSpeedx;
            this.YrotationSpeed = rotationSpeedy;
            this.ZrotationSpeed = rotationSpeedz;
            this.opacity = opacity;
            this.color = color;
            this.Zoom = zoom;
        }
        return Control;
    })();
    objects.Control = Control;
})(objects || (objects = {}));
//# sourceMappingURL=control.js.map