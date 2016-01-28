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


var cube1: Mesh;
var cube2: Mesh;
var cube3: Mesh;
var cube4: Mesh;
var cube5: Mesh;
var cube6: Mesh;


function init() {
    // Instantiate a new Scene object
	scene = new Scene();
	
	setupRenderer(); // setup the default renderer
	
	setupCamera(); // setup the camera
	
    //Add a Cube to the Scene
	cubeGeometry = new CubeGeometry(1, 1, 2);
	cubeMaterial = new LambertMaterial({color:0x00ff00, opacity:0.5});
	cube = new Mesh(cubeGeometry, cubeMaterial);
	cube.castShadow = true;
    cube.position.x=2;
    cube.position.y=0.5;
    cube.position.z=3;
	scene.add(cube);
    
    cubeGeometry = new CubeGeometry(1, 1, 2);
	cube1 = new Mesh(cubeGeometry, cubeMaterial);
	cube1.castShadow = true;
    cube1.position.x=2;
    cube1.position.y=0.5;
    cube1.position.z=-3;
	scene.add(cube1);
    
   	cubeGeometry = new CubeGeometry(2, 6, 2);
	cube2 = new Mesh(cubeGeometry, cubeMaterial);
	cube2.castShadow = true;
    cube2.position.x=1;
    cube2.position.y=3;
    cube2.position.z=-3;
	scene.add(cube2);
    
    cubeGeometry = new CubeGeometry(2, 6, 2);
	cube3 = new Mesh(cubeGeometry, cubeMaterial);
	cube3.castShadow = true;
    cube3.position.x=1;
    cube3.position.y=3;
    cube3.position.z=3;
	scene.add(cube3);
    
    cubeGeometry = new CubeGeometry(4, 10, 10);
	cube4 = new Mesh(cubeGeometry, cubeMaterial);
	cube4.castShadow = true;
    cube4.position.x=1;
    cube4.position.y=11;
    cube4.position.z=0;
	scene.add(cube4);
	
	
    //Add a Plane to the Scene
	planeGeometry = new PlaneGeometry(20, 20);
	planeMaterial = new LambertMaterial({color:0xCCCCCC, opacity: 0.5});
	plane = new Mesh(planeGeometry, planeMaterial);
	plane.receiveShadow = true;
	
	plane.rotation.x = -0.5 * Math.PI;
	plane.position.y = -2;
	
	scene.add(plane);
	console.log("Added Plane Primative to scene...");
	
	// Add a SpotLight to the scene
	spotLight = new SpotLight(0xffffff);
	spotLight.position.set (10, 20, 20);
	spotLight.castShadow = true;
	scene.add(spotLight);
	console.log("Added Spot Light to Scene");
	
	// add extras
	gui = new GUI();
	control = new Control(0.005,  cubeMaterial.opacity, cubeMaterial.color.getHex());
	addControl(control);
	
	addStatsObject();
	
	document.body.appendChild(renderer.domElement);
	gameLoop(); // render the scene	
}

function addControl(controlObject: Control):void {
	gui.add(controlObject, 'rotationSpeed',-0.01,0.01);
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
	//cube.rotation.y += control.rotationSpeed;
	
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
	camera.position.x =35;
	camera.position.y = 32;
	camera.position.z = -30;
	camera.lookAt(scene.position);
	console.log("Finished setting up Camera...");
}
