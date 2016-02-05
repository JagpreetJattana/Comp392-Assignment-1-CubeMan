module objects {
	export class Control {
		XrotationSpeed: number;
        YrotationSpeed:number;
        ZrotationSpeed:number;
        Zoom:number;
		opacity: number;
		color: number; // hexadecimal value of the color
		//constructor(rotationSpeedx: number,rotationSpeedy: number,rotationSpeedz: number, opacity: number, color:number) {
            constructor(zoom:number,rotationSpeedx: number,rotationSpeedy: number,rotationSpeedz: number, opacity: number, color:number) {
			this.XrotationSpeed = rotationSpeedx;
            this.YrotationSpeed=rotationSpeedy;
            this.ZrotationSpeed=rotationSpeedz;
			this.opacity = opacity;
			this.color = color;
            this.Zoom=zoom;
		}
	}
}