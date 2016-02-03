// MAIN GAME FILE
var Scene = THREE.Scene;
var Renderer = THREE.WebGLRenderer;
var PerspectiveCamera = THREE.PerspectiveCamera;
var CubeGeometry = THREE.CubeGeometry;
var PlaneGeometry = THREE.PlaneGeometry;
var LambertMaterial = THREE.MeshLambertMaterial;
var Mesh = THREE.Mesh;
var SpotLight = THREE.SpotLight;
var PointLight = THREE.PointLight;
var Control = objects.Control;
var GUI = dat.GUI;
var Color = THREE.Color;
var Vector3 = THREE.Vector3;
var object3d = THREE.Object3D;
var scene;
var renderer;
var camera;
var cubeGeometry;
var planeGeometry;
var cubeMaterial;
var planeMaterial;
var cube;
var plane;
var spotLight;
var pointLight;
var control;
var gui;
var stats;
var humanoid = new object3d;
var cube1;
var cube2;
var cube3;
var cube4;
var cube5;
var cube6;
var cube7;
var cube8;
var cube9;
var cube10;
var cube11;
function init() {
    // Instantiate a new Scene object
    scene = new Scene();
    setupRenderer(); // setup the default renderer
    setupCamera(); // setup the camera
    //Add a Cube to make the foot of humanoid
    cubeGeometry = new CubeGeometry(1, 1, 2);
    cubeMaterial = new LambertMaterial({ color: 0x00ff00, opacity: 0.5 });
    cube = new Mesh(cubeGeometry, cubeMaterial);
    cube.castShadow = true;
    cube.position.x = 2;
    // cube.position.y=0.5;
    cube.position.y = -10;
    cube.position.z = 3;
    //scene.add(cube);
    humanoid.add(cube);
    cubeGeometry = new CubeGeometry(1, 1, 2);
    cubeMaterial = new LambertMaterial({ color: 0x00ff00, opacity: 0.5 });
    cube = new Mesh(cubeGeometry, cubeMaterial);
    cube.castShadow = true;
    cube.position.x = 4;
    cube.position.y = 0.5;
    cube.position.z = 3;
    //scene.add(cube);
    humanoid.add(cube);
    cubeGeometry = new CubeGeometry(1, 1, 2);
    cube1 = new Mesh(cubeGeometry, cubeMaterial);
    cube1.castShadow = true;
    cube1.position.x = 2;
    //cube1.position.y=0.5;
    cube1.position.y = -10;
    cube1.position.z = -3;
    humanoid.add(cube1);
    cubeGeometry = new CubeGeometry(2, 6, 2);
    cube2 = new Mesh(cubeGeometry, cubeMaterial);
    cube2.castShadow = true;
    cube2.position.x = 1;
    //cube2.position.y=3;
    cube2.position.y = -7.5;
    cube2.position.z = -3;
    humanoid.add(cube2);
    cubeGeometry = new CubeGeometry(2, 6, 2);
    cube3 = new Mesh(cubeGeometry, cubeMaterial);
    cube3.castShadow = true;
    cube3.position.x = 1;
    //cube3.position.y=3;
    cube3.position.y = -7.5;
    cube3.position.z = 3;
    humanoid.add(cube3);
    cubeGeometry = new CubeGeometry(4, 10, 10);
    cube4 = new Mesh(cubeGeometry, cubeMaterial);
    cube4.castShadow = true;
    cube4.position.x = 1;
    //cube4.position.y=11;
    cube4.position.y = 0.5;
    cube4.position.z = 0;
    humanoid.add(cube4);
    cubeGeometry = new CubeGeometry(2, 2, 2);
    cube5 = new Mesh(cubeGeometry, cubeMaterial);
    cube5.castShadow = true;
    cube5.position.x = 1;
    //cube5.position.y=17;
    cube5.position.y = 6.5;
    cube5.position.z = 0;
    humanoid.add(cube5);
    cubeGeometry = new CubeGeometry(4, 4, 4);
    cube6 = new Mesh(cubeGeometry, cubeMaterial);
    cube6.castShadow = true;
    cube6.position.x = 1;
    //cube6.position.y=19;
    cube6.position.y = 8.5;
    cube6.position.z = 0;
    humanoid.add(cube6);
    cubeGeometry = new CubeGeometry(2, 2, 6);
    cube7 = new Mesh(cubeGeometry, cubeMaterial);
    cube7.castShadow = true;
    cube7.position.x = 1;
    //cube7.position.y=14;
    cube7.position.y = 3.5;
    cube7.position.z = 8;
    humanoid.add(cube7);
    cubeGeometry = new CubeGeometry(2, 2, 6);
    cube8 = new Mesh(cubeGeometry, cubeMaterial);
    cube8.castShadow = true;
    cube8.position.x = 1;
    //cube8.position.y=14;
    cube8.position.y = 3.5;
    cube8.position.z = -8;
    humanoid.add(cube8);
    cubeGeometry = new CubeGeometry(2, .5, 1);
    cube9 = new Mesh(cubeGeometry, cubeMaterial);
    cube9.castShadow = true;
    cube9.position.x = 2.2;
    //cube9.position.y=20;
    cube9.position.y = 9.5;
    cube9.position.z = 1;
    humanoid.add(cube9);
    cubeGeometry = new CubeGeometry(2, .5, 1);
    cube10 = new Mesh(cubeGeometry, cubeMaterial);
    cube10.castShadow = true;
    cube10.position.x = 2.2;
    //cube10.position.y=20;
    cube10.position.y = 9.5;
    cube10.position.z = -1;
    humanoid.add(cube10);
    cubeGeometry = new CubeGeometry(2, .5, 1.5);
    cube11 = new Mesh(cubeGeometry, cubeMaterial);
    cube11.castShadow = true;
    cube11.position.x = 2;
    //cube11.position.y=18;
    cube11.position.y = 7.5;
    cube11.position.z = 0;
    humanoid.add(cube11);
    scene.add(humanoid);
    //Add a Plane to the Scene
    planeGeometry = new PlaneGeometry(60, 60);
    planeMaterial = new LambertMaterial({ color: 0xCCCCCC, opacity: 0.5 });
    plane = new Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow = true;
    plane.rotation.x = -0.5 * Math.PI;
    //plane.position.y = -2;
    plane.position.y = -12.5;
    scene.add(plane);
    console.log("Added Plane Primative to scene...");
    // Add a SpotLight to the scene
    spotLight = new SpotLight(0xffffff);
    //	spotLight.position.set (10, 20, 20);
    spotLight.position.set(35, 35, -30);
    spotLight.rotation.set(-0.8, 42.7, 19.5);
    //spotLight.lookAt(plane.position);
    spotLight.castShadow = true;
    scene.add(spotLight);
    console.log("Added Spot Light to Scene");
    // add extras
    gui = new GUI();
    //control = new Control(0.005, 0.005,0.005, cubeMaterial.opacity, cubeMaterial.color.getHex());
    control = new Control(0.005, 0.005, 0.005, cubeMaterial.opacity, cubeMaterial.color.getHex());
    addControl(control);
    addStatsObject();
    document.body.appendChild(renderer.domElement);
    gameLoop(); // render the scene	
}
function addControl(controlObject) {
    gui.add(controlObject, 'XrotationSpeed', -0.01, 0.01);
    gui.add(controlObject, 'YrotationSpeed', -0.01, 0.01);
    gui.add(controlObject, 'ZrotationSpeed', -0.01, 0.01);
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
function gameLoop() {
    stats.update();
    // render using requestAnimationFrame
    requestAnimationFrame(gameLoop);
    cube.material.transparent = true;
    cube.material.opacity = control.opacity;
    cube.material.color = new Color(control.color);
    humanoid.rotation.y += control.YrotationSpeed;
    humanoid.rotation.x += control.XrotationSpeed;
    humanoid.rotation.z += control.ZrotationSpeed;
    // humanoid.rotation.z+=control.rotationSpeedz;
    renderer.render(scene, camera);
}
// Setup default renderer
function setupRenderer() {
    renderer = new Renderer();
    renderer.setClearColor(0xCCCCCC, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;
    console.log("Finished setting up Renderer...");
}
// Setup main camera for the scene
function setupCamera() {
    camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = 70;
    camera.position.y = 31;
    camera.position.z = -70;
    camera.lookAt(scene.position);
    console.log("Finished setting up Camera...");
}
//# sourceMappingURL=game.js.map