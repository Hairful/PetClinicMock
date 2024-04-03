<template>
  <div>
  <div class="container" ref="container"></div>
  <div class="map">
    <div class="tag" ref="tagDiv"></div>
    <!-- <img src="../assets/map.gif" alt="" /> -->
  </div>
  <div class="loading" v-if="progress != 100"></div>
  <div class="progress" v-if="progress != 100">
    <img src="../assets/loading.gif" alt="" />
    <span>医院加载中：{{ progress }}%</span>
  </div>
  <div class="title">3D导览</div>
</div>
</template>

<script setup>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { ref, onMounted } from "vue";
import gsap from "gsap";
import SpriteCanvas from "../three/SpriteCanvas";

let tagDiv = ref(null);
let progress = ref(0);
// 初始化场景
const scene = new THREE.Scene();

// 初始化相机
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
// 设置相机位置
camera.position.set(0, 0, 0);
// 初始化渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

const container = ref(null);

const render = () => {
  renderer.render(scene, camera);
  requestAnimationFrame(render);
};

// 创建辅助坐标轴
// const axes = new THREE.AxesHelper(5);
// scene.add(axes);

// 添加立方体
const geometry = new THREE.BoxGeometry(50, 50, 50);
const geometry = new THREE.BoxGeometry(50, 50, 50);
geometry.scale(1, 1, -1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// 挂载完毕之后获取dom
onMounted(() => {
  // function moveTag(name) {
  //   let positions = {
  //     前台: [100, 110],
  //     厨房: [180, 190],
  //     阳台: [50, 50],
  //     化验室: [160, 40],
  //     走廊: [150, 90],
  //   };
  //   if (positions[name]) {
  //     gsap.to(tagDiv.value, {
  //       duration: 1,
  //       x: positions[name][0],
  //       y: positions[name][1],
  //       ease: "power3.inOut",
  //     });
  //   }
  // }
  tagDiv.value.style.cssText = `
    transform: translate(100px,110px);
  `;

  // 创建前台
  // 创建前台
  let livingIndex = 0;
  let livingUrl = "./img/frontdesk/";
  let livingUrl = "./img/frontdesk/";
  let livingPosition = new THREE.Vector3(0, 0, 0);
  const living = new Room("前台", livingIndex, livingUrl, livingPosition);
  const living = new Room("前台", livingIndex, livingUrl, livingPosition);

  // 创建走廊
  let kitPosition = new THREE.Vector3(3, 10, 5);
  let kitIndex = 4;
  let textureUrl = "./img/corridor/";
  // 创建走廊
  let kitPosition = new THREE.Vector3(3, 10, 5);
  let kitIndex = 4;
  let textureUrl = "./img/corridor/";
  let kitEuler = new THREE.Euler(0, -Math.PI / 2, 0);
  const room = new Room("走廊", kitIndex, textureUrl, kitPosition, kitEuler);
  const room = new Room("走廊", kitIndex, textureUrl, kitPosition, kitEuler);
  // 创建文字精灵
  const text = new SpriteCanvas(camera, "走廊", new THREE.Vector3(3, 0, 0.5));
  const text = new SpriteCanvas(camera, "走廊", new THREE.Vector3(3, 0, 0.5));
  // text.mesh.rotation.y = Math.PI / 3;
  scene.add(text.mesh);
  text.onClick(() => {
    console.log("走廊");
    console.log("走廊");
    gsap.to(camera.position, {
      x: kitPosition.x,
      y: kitPosition.y,
      z: kitPosition.z,
      duration: 1,
    });
    //moveTag("走廊");
    //moveTag("走廊");
  });

  // 创建前台文字精灵
  // 创建前台文字精灵
  const textLiving = new SpriteCanvas(
    camera,
    "前台",
    new THREE.Vector3(4, 8, 1)
    "前台",
    new THREE.Vector3(4, 8, 1)
  );
  scene.add(textLiving.mesh);
  textLiving.onClick(() => {
    console.log("前台");
    console.log("前台");
    gsap.to(camera.position, {
      x: livingPosition.x,
      y: livingPosition.y,
      z: livingPosition.z,
      duration: 1,
    });
    //moveTag("前台");
    //moveTag("前台");
  });

// 创建化验室
  let labPosition = new THREE.Vector3(3, 0, 12);
  let labIndex = 9;
  let labUrl = "./img/lab/";
  let labEuler = new THREE.Euler(0, -Math.PI / 2, 0);
  const lab = new Room("化验室", labIndex, labUrl, labPosition, labEuler);

    // 创建化验室文字精灵
  const labtext = new SpriteCanvas(
// 创建化验室
  let labPosition = new THREE.Vector3(3, 0, 12);
  let labIndex = 9;
  let labUrl = "./img/lab/";
  let labEuler = new THREE.Euler(0, -Math.PI / 2, 0);
  const lab = new Room("化验室", labIndex, labUrl, labPosition, labEuler);

    // 创建化验室文字精灵
  const labtext = new SpriteCanvas(
    camera,
    "化验室",
    new THREE.Vector3(1, 0, 4.5)
    "化验室",
    new THREE.Vector3(1, 0, 4.5)
  );
  scene.add(labtext.mesh);
  labtext.onClick(() => {
    console.log("化验室");
  scene.add(labtext.mesh);
  labtext.onClick(() => {
    console.log("化验室");
    gsap.to(camera.position, {
      x: labPosition.x,
      y: labPosition.y,
      z: labPosition.z,
      x: labPosition.x,
      y: labPosition.y,
      z: labPosition.z,
      duration: 1,
    });
    //moveTag("前台");
    //moveTag("前台");
  });

   // 创建化验室回前台文字精灵
   const fro1text = new SpriteCanvas(
   // 创建化验室回前台文字精灵
   const fro1text = new SpriteCanvas(
    camera,
    "前台",
    new THREE.Vector3(3, 0, 11)
    "前台",
    new THREE.Vector3(3, 0, 11)
  );
  scene.add(fro1text.mesh);
  fro1text.onClick(() => {
    console.log("前台");
  scene.add(fro1text.mesh);
  fro1text.onClick(() => {
    console.log("前台");
    gsap.to(camera.position, {
      x: livingPosition.x,
      y: livingPosition.y,
      z: livingPosition.z,
      duration: 1,
    });
    //moveTag("前台");
    //moveTag("前台");
  });

  // 创建病理室
  let pathPosition = new THREE.Vector3(-8, 0, 5);
  let pathIndex = 12;
  let pathUrl = "./img/pathology/";
  let pathEuler = new THREE.Euler(0, -Math.PI / 2, 0);
  const path = new Room("病理室", pathIndex, pathUrl, pathPosition, pathEuler);

    // 创建病理室室文字精灵
  const pathtext = new SpriteCanvas(
  // 创建病理室
  let pathPosition = new THREE.Vector3(-8, 0, 5);
  let pathIndex = 12;
  let pathUrl = "./img/pathology/";
  let pathEuler = new THREE.Euler(0, -Math.PI / 2, 0);
  const path = new Room("病理室", pathIndex, pathUrl, pathPosition, pathEuler);

    // 创建病理室室文字精灵
  const pathtext = new SpriteCanvas(
    camera,
    "病理室",
    new THREE.Vector3(-4, 0, 1.3)
    "病理室",
    new THREE.Vector3(-4, 0, 1.3)
  );
  scene.add(pathtext.mesh);
  pathtext.onClick(() => {
    console.log("病理室");
  scene.add(pathtext.mesh);
  pathtext.onClick(() => {
    console.log("病理室");
    gsap.to(camera.position, {
      x: pathPosition.x,
      y: pathPosition.y,
      z: pathPosition.z,
      x: pathPosition.x,
      y: pathPosition.y,
      z: pathPosition.z,
      duration: 1,
    });
    //moveTag("前台");
    //moveTag("前台");
  });

  // 创建病理室回前台文字精灵
  const fro2text = new SpriteCanvas(
  // 创建病理室回前台文字精灵
  const fro2text = new SpriteCanvas(
    camera,
    "前台",
    new THREE.Vector3(-6, 0, 4)
    "前台",
    new THREE.Vector3(-6, 0, 4)
  );
  scene.add(fro2text.mesh);
  fro2text.onClick(() => {
    console.log("前台");
  scene.add(fro2text.mesh);
  fro2text.onClick(() => {
    console.log("前台");
    gsap.to(camera.position, {
      x: livingPosition.x,
      y: livingPosition.y,
      z: livingPosition.z,
      duration: 1,
    });
    //moveTag("前台");
    //moveTag("前台");
  });

  // 创建诊室
  let conPosition = new THREE.Vector3(-15, -1, -5);
  let conIndex = 6;
  let conUrl = "./img/consultroom/";
  let conEuler = new THREE.Euler(0, -Math.PI / 2, 0);
  const con = new Room("诊室", conIndex, conUrl, conPosition, conEuler);

    // 创建免疫室室文字精灵
  const context = new SpriteCanvas(
  // 创建诊室
  let conPosition = new THREE.Vector3(-15, -1, -5);
  let conIndex = 6;
  let conUrl = "./img/consultroom/";
  let conEuler = new THREE.Euler(0, -Math.PI / 2, 0);
  const con = new Room("诊室", conIndex, conUrl, conPosition, conEuler);

    // 创建免疫室室文字精灵
  const context = new SpriteCanvas(
    camera,
    "诊室",
    new THREE.Vector3(-3, 0, -0.5)
    new THREE.Vector3(-3, 0, -0.5)
  );
  scene.add(context.mesh);
  context.onClick(() => {
    console.log("诊室");
    gsap.to(camera.position, {
      x: conPosition.x,
      y: conPosition.y,
      z: conPosition.z,
      duration: 1,
    });
    //moveTag("前台");
  });

  // 创建诊室回前台文字精灵
  const fro3text = new SpriteCanvas(
    camera,
    "前台",
    new THREE.Vector3(-15, -1, -5)
  );
  scene.add(fro3text.mesh);
  fro3text.onClick(() => {
    console.log("前台");
    gsap.to(camera.position, {
      x: livingPosition.x,
      y: livingPosition.y,
      z: livingPosition.z,
      duration: 1,
    });
    //moveTag("前台");
  });

  // 创建免疫室
  let immPosition = new THREE.Vector3(8, -1, -6);
  let immIndex = 11;
  let immUrl = "./img/imm/";
  let immEuler = new THREE.Euler(0, -Math.PI / 2, 0);
  const imm = new Room("免疫室", immIndex, immUrl, immPosition, immEuler);

    // 创建免疫室室文字精灵
  const immtext = new SpriteCanvas(
    camera,
    "免疫室",
    new THREE.Vector3(3, 0, -1.5)
  );
  scene.add(immtext.mesh);
  immtext.onClick(() => {
    console.log("免疫室");
    gsap.to(camera.position, {
      x: immPosition.x,
      y: immPosition.y,
      z: immPosition.z,
      duration: 1,
    });
    //moveTag("前台");
  });

  // 创建免疫室回前台文字精灵
  const fro4text = new SpriteCanvas(
    camera,
    "前台",
    new THREE.Vector3(8, -1, -5)
  );
  scene.add(fro4text.mesh);
  fro4text.onClick(() => {
    console.log("前台");
    gsap.to(camera.position, {
      x: livingPosition.x,
      y: livingPosition.y,
      z: livingPosition.z,
      duration: 1,
    });
    //moveTag("前台");
  });

  // 创建手术准备室
<<<<<<< HEAD
  let psurPosition = new THREE.Vector3(15, 11, 15);
  let psurIndex = 7;
  let psurUrl = "./img/presur/";
  let psurEuler = new THREE.Euler(0, -Math.PI / 2, 0);
  const psur = new Room("免疫室", psurIndex, psurUrl, psurPosition, psurEuler);
=======
  let psurPosition = new THREE.Vector3(15, 15, 15);
  let psurIndex = 7;
  let psurUrl = "./img/presur/";
  let psurEuler = new THREE.Euler(0, -Math.PI / 2, 0);
  const psur = new Room("手术准备室", psurIndex, psurUrl, psurPosition, psurEuler);
>>>>>>> parent of e124f35f ([feat] devise virtualtour)

    // 创建免疫室室文字精灵
  const psurtext = new SpriteCanvas(
    camera,
    "手术准备室",
    new THREE.Vector3(4, 10, 9)
  );
  scene.add(psurtext.mesh);
  psurtext.onClick(() => {
    console.log("手术准备室");
    gsap.to(camera.position, {
      x: psurPosition.x,
      y: psurPosition.y,
      z: psurPosition.z,
      duration: 1,
    });
    //moveTag("前台");
  });

  // 创建免疫室回前台文字精灵
  const fro5text = new SpriteCanvas(
    camera,
<<<<<<< HEAD
    "前台",
    new THREE.Vector3(3, 10, -2)
  );
  scene.add(fro5text.mesh);
  fro4text.onClick(() => {
=======
    "走廊",
    new THREE.Vector3(16, 15, 15)
  );
  scene.add(fro5text.mesh);
  fro5text.onClick(() => {
>>>>>>> parent of e124f35f ([feat] devise virtualtour)
    console.log("走廊");
    gsap.to(camera.position, {
      x: kitPosition.x,
      y: kitPosition.y,
      z: kitPosition.z,
      duration: 1,
    });
    //moveTag("前台");
  });

<<<<<<< HEAD

  // 创建住院室
  let impPosition = new THREE.Vector3(-5, 10, 18);
  let impIndex = 10;
  let impUrl = "./img/impatient/";
  let impEuler = new THREE.Euler(0, -Math.PI / 2, 0);
  const imp = new Room("住院室", impIndex, impUrl, impPosition, impEuler);

    // 创建住院室文字精灵
  const imptext = new SpriteCanvas(
    camera,
    "住院室",
    new THREE.Vector3(-1, 10, 9)
  );
  scene.add(imptext.mesh);
  imptext.onClick(() => {
    console.log("住院室");
    gsap.to(camera.position, {
      x: impPosition.x,
      y: impPosition.y,
      z: impPosition.z,
=======
    // 创建手术室
  let surPosition = new THREE.Vector3(20, 20, 20);
  let surIndex = 15;
  let surUrl = "./img/sur/";
  let surEuler = new THREE.Euler(0, -Math.PI / 2, 0);
  const sur = new Room("手术室", surIndex, surUrl, surPosition, surEuler);

    // 创建免疫室室文字精灵
  const surtext = new SpriteCanvas(
    camera,
    "手术室",
    new THREE.Vector3(15, 15, 13)
  );
  scene.add(surtext.mesh);
  surtext.onClick(() => {
    console.log("手术室");
    gsap.to(camera.position, {
      x: surPosition.x,
      y: surPosition.y,
      z: surPosition.z,
>>>>>>> parent of e124f35f ([feat] devise virtualtour)
      duration: 1,
    });
    //moveTag("前台");
    //moveTag("前台");
  });

<<<<<<< HEAD
  // 创建住院室回走廊文字精灵
  const fro7text = new SpriteCanvas(
    camera,
    "走廊",
    new THREE.Vector3(-5, 10, 16)
  );
   scene.add(fro7text.mesh);
  fro7text.onClick(() => {
=======
  // 创建免疫室回前台文字精灵
  const fro6text = new SpriteCanvas(
    camera,
    "走廊",
    new THREE.Vector3(20, 20, 18)
  );
  scene.add(fro6text.mesh);
  fro6text.onClick(() => {
>>>>>>> parent of e124f35f ([feat] devise virtualtour)
    console.log("走廊");
    gsap.to(camera.position, {
      x: kitPosition.x,
      y: kitPosition.y,
      z: kitPosition.z,
      x: kitPosition.x,
      y: kitPosition.y,
      z: kitPosition.z,
      duration: 1,
    });
    //moveTag("前台");
  });
 
    //moveTag("前台");
  });
 
    container.value.appendChild(renderer.domElement);
  render();

  let isMouseDown = false;

  // 监听鼠标按下事件
  window.addEventListener(
    "mousedown",
    () => {
      isMouseDown = true;
    },
    false
  );
  // 监听鼠标抬起事件
  window.addEventListener(
    "mouseup",
    () => {
      isMouseDown = false;
    },
    false
  );
  // 监听鼠标移动事件
  window.addEventListener(
    "mousemove",
    (e) => {
      if (isMouseDown) {
        camera.rotation.y += (e.movementX / window.innerWidth) * Math.PI;
        // camera.rotation.x += (e.movementY / window.innerHeight) * Math.PI;
      }
    },
    false
  );
  });
  

class Room {
  constructor(
    name,
    roomIndex,
    textureUrl,
    position = new THREE.Vector3(0, 0, 0),
    euler = new THREE.Euler(0, 0, 0)
  ) {
    this.name = name;
    // 添加立方体
    const geometry = new THREE.BoxGeometry(10, 10, 10);
    geometry.scale(1, 1, -1);
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);

    // 4_b,
    var arr = [
      `${roomIndex}_l`,
      `${roomIndex}_r`,
      `${roomIndex}_u`,
      `${roomIndex}_d`,
      `${roomIndex}_b`,
      `${roomIndex}_f`,
    ];
    var boxMaterials = [];

    arr.forEach((item) => {
      // 纹理加载
      let texture = new THREE.TextureLoader().load(`${textureUrl}/${item}.jpg`);
      // 创建材质
      if (item === `${roomIndex}_u` || item === `${roomIndex}_d`) {
        texture.rotation = Math.PI;
        texture.center = new THREE.Vector2(0.5, 0.5);
        boxMaterials.push(new THREE.MeshBasicMaterial({ map: texture }));
      } else {
        boxMaterials.push(new THREE.MeshBasicMaterial({ map: texture }));
      }
    });
    const cube = new THREE.Mesh(geometry, boxMaterials);
    cube.position.copy(position);
    cube.rotation.copy(euler);
    // cube.geometry.scale(1, 1, -1);
    scene.add(cube);

    THREE.DefaultLoadingManager.onProgress = function (item, loaded, total) {
      console.log(item, loaded, total);
      progress.value = new Number((loaded / total) * 100).toFixed(2);
    };
  }
}

</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.container {
  height: 100vh;
  width: 100vw;
  background-color: #f0f0f0;
}

.map {
  width: 300px;
  height: 260px;
  position: absolute;
  left: 0;
  bottom: 0;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.map > img {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.map > .tag {
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  background-image: url(./assets/location.png);
  background-size: cover;
  z-index: 1;
}
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(./assets/loading.png);
  background-size: cover;
  filter: blur(50px);
  z-index: 100;
}
.progress {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 101;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #fff;
}
.progress > img {
  padding: 0 15px;
}

.title {
  width: 180px;
  height: 40px;
  position: fixed;
  right: 100px;
  top: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  line-height: 40px;
  text-align: center;
  color: #fff;
  border-radius: 5px;
  z-index: 110;
}
</style>
