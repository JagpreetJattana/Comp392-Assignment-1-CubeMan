// MAIN GAME FILE


import Scene = THREE.Scene;
import Renderer = THREE.WebGLRenderer;
import PerspectiveCamera = THREE.PerspectiveCamera;
import CubeGeometry = THREE.CubeGeometry;
import PlaneGeometry = THREE.PlaneGeometry;
import LambertMaterial = THREE.MeshLambertMaterial;
import Mesh = THREE.Mesh;
import SpotLight = THREE.SpotLight;
import PointLight = THREE.PointLight;
import Control = objects.Control;
import GUI = dat.GUI;
import Color = THREE.Color;
import Vector3 = THREE.Vector3;
import object3d=THREE.Object3D;

var scene: Scene;
var renderer: Renderer;
var camera: PerspectiveCamera;
var cubeGeometry: CubeGeometry;
var planeGeometry: PlaneGeometry;
var cubeMaterial: LambertMaterial;
var planeMaterial: LambertMaterial;
var cube: Mesh;
var plane: Mesh;
var spotLight: SpotLight;
var pointLight: PointLight;
var control: Control;

var gui: GUI;
var stats:Stats;
var humanoid=new object3d;

//these are the cubes used to make the cubeman
var cube1: Mesh;
var cube2: Mesh;
var cube3: Mesh;
var cube4: Mesh;
var cube5: Mesh;
var cube6: Mesh;
var cube7: Mesh;
var cube8: Mesh;
var cube9: Mesh;
var cube10: Mesh;
var cube11: Mesh;



function init() {
    // Instantiate a new Scene object
	scene = new Scene();
	
	setupRenderer(); // setup the default renderer
	
	setupCamera(); // setup the camera
	
    //Add a Cube to make the foot of humanoid
	cubeGeometry = new CubeGeometry(1, 1, 2);
	cubeMaterial = new LambertMaterial({color:0x00ff00, opacity:0.5});
	cube = new Mesh(cubeGeometry, cubeMaterial);
	cube.castShadow = true;
    cube.position.x=2;  
   cube.position.y=-10;
    cube.position.z=3;	
    humanoid.add(cube);
    
     //Add a Cube to make the foot of humanoid
    cubeGeometry = new CubeGeometry(1, 1, 2);
	cube1 = new Mesh(cubeGeometry, cubeMaterial);
	cube1.castShadow = true;
    cube1.position.x=2;
    cube1.position.y=-10;
    cube1.position.z=-3;
	humanoid.add(cube1);
    
    //Add a Cube to make the leg of humanoid
   	cubeGeometry = new CubeGeometry(2, 6, 2);
	cube2 = new Mesh(cubeGeometry, cubeMaterial);
	cube2.castShadow = true;
    cube2.position.x=1;
    cube2.position.y=-7.5;
    cube2.position.z=-3;
	humanoid.add(cube2);
    
    //Add a Cube to make the leg of humanoid
    cubeGeometry = new CubeGeometry(2, 6, 2);
	cube3 = new Mesh(cubeGeometry, cubeMaterial);
	cube3.castShadow = true;
    cube3.position.x=1;
    cube3.position.y=-7.5;
    cube3.position.z=3;
	humanoid.add(cube3);
    
    //Add a Cube to make the stomach of humanoid
    cubeGeometry = new CubeGeometry(4, 10, 10);
	cube4 = new Mesh(cubeGeometry, cubeMaterial);
	cube4.castShadow = true;
    cube4.position.x=1;
    cube4.position.y=0.5;
    cube4.position.z=0;
	humanoid.add(cube4);
    
    //Add a Cube to make the neck of humanoid
    cubeGeometry = new CubeGeometry(2, 2, 2);
	cube5 = new Mesh(cubeGeometry, cubeMaterial);
	cube5.castShadow = true;
    cube5.position.x=1;
    cube5.position.y=6.5;
    cube5.position.z=0;
	humanoid.add(cube5);
    
    //Add a Cube to make the face of humanoid
    cubeGeometry = new CubeGeometry(4, 4, 4);
	cube6 = new Mesh(cubeGeometry, cubeMaterial);
	cube6.castShadow = true;
    cube6.position.x=1;
    cube6.position.y=8.5;
    cube6.position.z=0;
	humanoid.add(cube6);
    
    
    //Add a Cube to make the arm of humanoid
    cubeGeometry = new CubeGeometry(2, 2, 6);
	cube7 = new Mesh(cubeGeometry, cubeMaterial);
	cube7.castShadow = true;
    cube7.position.x=1;
    cube7.position.y=3.5;
    cube7.position.z=8;
	humanoid.add(cube7);
    
    
    //Add a Cube to make the arm of humanoid
    cubeGeometry = new CubeGeometry(2, 2, 6);
	cube8 = new Mesh(cubeGeometry, cubeMaterial);
	cube8.castShadow = true;
    cube8.position.x=1;
    cube8.position.y=3.5;
    cube8.position.z=-8;
	humanoid.add(cube8);
    
    //Add a Cube to make the eye of humanoid
    cubeGeometry = new CubeGeometry(2, .5, 1);
	cube9 = new Mesh(cubeGeometry, cubeMaterial);
	cube9.castShadow = true;
    cube9.position.x=2.2;
    cube9.position.y=9.5;
    cube9.position.z=1;
	humanoid.add(cube9);
    
    //Add a Cube to make the eye of humanoid
    cubeGeometry = new CubeGeometry(2, .5, 1);
	cube10 = new Mesh(cubeGeometry, cubeMaterial);
	cube10.castShadow = true;
    cube10.position.x=2.2;
    cube10.position.y=9.5;
    cube10.position.z=-1;
	humanoid.add(cube10);
    
    //Add a Cube to make the mouth of humanoid    
    cubeGeometry = new CubeGeometry(2, .5, 1.5);
	cube11 = new Mesh(cubeGeometry, cubeMaterial);
	cube11.castShadow = true;
    cube11.position.x=2;
    cube11.position.y=7.5;
    cube11.position.z=0;
	humanoid.add(cube11);
    
   
	//adding humanoid to scene
	scene.add(humanoid);
    
    //Add a Plane to the Scene
	planeGeometry = new PlaneGeometry(60, 60);
	planeMaterial = new LambertMaterial({color:0x0033CC, opacity: 0.5});
	plane = new Mesh(planeGeometry, planeMaterial);
	plane.receiveShadow = true;
	
	plane.rotation.x = -0.5 * Math.PI;
	plane.position.y = -12.5;
	
	scene.add(plane);
	console.log("Added Plane Primative to scene...");
	
	// Add a SpotLight to the scene
	spotLight = new SpotLight(0xffffff);
	spotLight.position.set (21, 70, 19);
    spotLight.lookAt(new Vector3(0, 0, 0));
    spotLight.castShadow = true;
	scene.add(spotLight);
	console.log("Added Spot Light to Scene");
	
	// add extras
	gui = new GUI();
	control = new Control(0.005,0.005,0.005, cubeMaterial.opacity, cubeMaterial.color.getHex());
 	addControl(control);
	addStatsObject();
	document.body.appendChild(renderer.domElement);
	gameLoop(); // render the scene	
}

function addControl(controlObject: Control):void {
	gui.add(controlObject, 'XrotationSpeed',-0.01,0.01);
    gui.add(controlObject, 'YrotationSpeed',-0.01,0.01);
    gui.add(controlObject, 'ZrotationSpeed',-0.01,0.01);
	gui.add(controlObject, 'opacity', 0.1, 1);
	gui.addColor(controlObject, 'color');
}

function addStatsObject() {
	stats = new Stats();
	stats.setMode(0);
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.left = '0px';
	stats.domElement.style.top = '0px';
	document.body.appendChild(stats.domElement);
}

// Setup main game loop
function gameLoop():void {
	stats.update();
	
	// render using requestAnimationFrame
	requestAnimationFrame(gameLoop);
	
	cube.material.transparent = true;
	cube.material.opacity = control.opacity;
	cube.material.color = new Color(control.color);
	humanoid.rotation.y += control.YrotationSpeed;
    humanoid.rotation.x+=control.XrotationSpeed;
    humanoid.rotation.z+=control.ZrotationSpeed;

	renderer.render(scene, camera);
}

// Setup default renderer
function setupRenderer():void {
	renderer = new Renderer();
	renderer.setClearColor(0xCCCCCC, 1.0);
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.shadowMapEnabled = true;
	console.log("Finished setting up Renderer...");
}

// Setup main camera for the scene
function setupCamera():void {
	camera = new PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
	camera.position.x =70;
	camera.position.y = 31;
	camera.position.z = -70;
	camera.lookAt(scene.position);
	console.log("Finished setting up Camera...");
}
