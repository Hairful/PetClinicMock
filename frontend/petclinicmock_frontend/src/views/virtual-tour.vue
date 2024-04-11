<template>
  <div class="container" ref="container">
    <div class="map">
      <div class="tag" ref="tagDiv">
        <img src="../assets/location.png" alt="" />
      </div>
      <img src="../assets/map1.jpg" alt="" />
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
import { defineAsyncComponent,ref, onMounted } from "vue";
import gsap from "gsap";
import SpriteCanvas from "../three/SpriteCanvas";


let tagDiv = ref(null);
let progress = ref(0);

// 初始化场景
const scene = new THREE.Scene();

// 获取相应物品的URL
async function getItemURL(itemName) {
    try {
        const response = await fetch('http://localhost:3000/getItemDetail');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const item = data.data.find(item => item.itemName === itemName);
        if (item) {
            return item.itemURL;
        } else {
            console.error('物品未找到');
            return null;
        }
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return null;
    }
}



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
const geometry = new THREE.BoxGeometry(10, 10, 10);
geometry.scale(1, 1, -1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// 挂载完毕之后获取dom

// function moveTag(name) {
// let positions = {
// 前台: [100, 110],
// 厨房: [180, 190],
// 阳台: [50, 50],
// 化验室: [160, 40],
// 走廊: [150, 90],
// };
// if (positions[name]) {
// gsap.to(tagDiv.value, {
// duration: 1,
// x: positions[name][0],
// y: positions[name][1],
// ease: "power3.inOut",
// });
// }
// }
onMounted( async() => {

  function moveTag(name) {
    let positions = {
      前台: [45, 120],
      免疫室: [53, 45],
      病理室: [70, 190],
      诊室: [38, 190],
      走廊: [140, 150],
      化验室: [105, 110],
      手术准备室: [140, 45],
      处理室: [180, 45],
      住院室: [165, 150],
      手术室: [185, 170],
      影像室: [105, 42],
      药房: [210, 190],
      注射室: [251, 70],
      专科诊室: [235, 200],
      档案室: [240, 70],
    };
    if (positions[name]) {
      gsap.to(tagDiv.value, {
        duration: 1,
        x: positions[name][0],
        y: positions[name][1],
        ease: "power3.inOut",
      });
    }
  }
  tagDiv.value.style.cssText = `
transform: translate(100px,110px);
`;

  // 创建前台
  let livingIndex = 0;
  let livingUrl = "./img/frontdesk/";
  let livingPosition = new THREE.Vector3(0, 0, 0);
  const living = new Room("前台", livingIndex, livingUrl, livingPosition);

  // 创建走廊
  let kitPosition = new THREE.Vector3(3, 10, 5);
  let kitIndex = 4;
  let textureUrl = "./img/corridor/";
  let kitEuler = new THREE.Euler(0, -Math.PI / 2, 0);
  const room = new Room("走廊", kitIndex, textureUrl, kitPosition, kitEuler);
  // 创建文字精灵
  const text = new SpriteCanvas(camera, "走廊", new THREE.Vector3(3, 0, 0.5));
  // text.mesh.rotation.y = Math.PI / 3;
  scene.add(text.mesh);
  text.onClick(() => {
    console.log("走廊");
    gsap.to(camera.position, {
      x: kitPosition.x,
      y: kitPosition.y,
      z: kitPosition.z,
      duration: 1,
    });
    moveTag("走廊");
  });

  // 创建前台文字精灵
  const textLiving = new SpriteCanvas(
    camera,
    "前台",
    new THREE.Vector3(4, 8, 1)
  );
  scene.add(textLiving.mesh);
  textLiving.onClick(() => {
    console.log("前台");
    gsap.to(camera.position, {
      x: livingPosition.x,
      y: livingPosition.y,
      z: livingPosition.z,
      duration: 1,
    });
    moveTag("前台");
  });

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
  );
  scene.add(labtext.mesh);
  labtext.onClick(() => {
    console.log("化验室");
    gsap.to(camera.position, {
      x: labPosition.x,
      y: labPosition.y,
      z: labPosition.z,
      duration: 1,
    });
    moveTag("化验室");
  });

  // 创建化验室回前台文字精灵
  const fro1text = new SpriteCanvas(
    camera,
    "前台",
    new THREE.Vector3(3, 0, 11)
  );
  scene.add(fro1text.mesh);
  fro1text.onClick(() => {
    console.log("前台");
    gsap.to(camera.position, {
      x: livingPosition.x,
      y: livingPosition.y,
      z: livingPosition.z,
      duration: 1,
    });
    moveTag("前台");
  });

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
  );
  scene.add(pathtext.mesh);
  pathtext.onClick(() => {
    console.log("病理室");
    gsap.to(camera.position, {
      x: pathPosition.x,
      y: pathPosition.y,
      z: pathPosition.z,
      duration: 1,
    });
    moveTag("病理室");
  });

  // 创建病理室回前台文字精灵
  const fro2text = new SpriteCanvas(
    camera,
    "前台",
    new THREE.Vector3(-6, 0, 4)
  );
  scene.add(fro2text.mesh);
  fro2text.onClick(() => {
    console.log("前台");
    gsap.to(camera.position, {
      x: livingPosition.x,
      y: livingPosition.y,
      z: livingPosition.z,
      duration: 1,
    });
    moveTag("前台");
  });

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
  );
  scene.add(context.mesh);
  context.onClick(() => {
    scene.add(context.mesh);
    context.onClick(() => {
      console.log("诊室");
      gsap.to(camera.position, {
        x: conPosition.x,
        y: conPosition.y,
        z: conPosition.z,
        duration: 1,
      });
      moveTag("诊室");
    });
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
    moveTag("前台");
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
    moveTag("免疫室");
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
    moveTag("前台");
  });

  // 创建手术准备室
  let psurPosition = new THREE.Vector3(8, 10, 18);
  let psurIndex = 7;
  let psurUrl = "./img/presur/";
  let psurEuler = new THREE.Euler(0, -Math.PI / 2, 0);
  const psur = new Room("手术准备室", psurIndex, psurUrl, psurPosition, psurEuler);

  // 创建免疫室室文字精灵
  const psurtext = new SpriteCanvas(
    camera,
    "手术准备室",
    new THREE.Vector3(3, 10, 7.5)
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
    moveTag("手术准备室");
  });

  // 创建手术准备室回走廊文字精灵
  const fro5text = new SpriteCanvas(
    camera,
    "走廊",
    new THREE.Vector3(11.5, 10, 18)
  );
  scene.add(fro5text.mesh);
  fro5text.onClick(() => {
    console.log("走廊");
    gsap.to(camera.position, {
      x: kitPosition.x,
      y: kitPosition.y,
      z: kitPosition.z,
      duration: 1,
    });
    moveTag("前台");
  });

  // 创建处理室
  let disPosition = new THREE.Vector3(16, 10, 12);
  let disIndex = 1;
  let disUrl = "./img/dis/";
  let disEuler = new THREE.Euler(0, -Math.PI / 2, 0);
  const dis = new Room("处理室", disIndex, disUrl, disPosition, disEuler);

  // 创建处理室室文字精灵
  const distext = new SpriteCanvas(
    camera,
    "处理室",
    new THREE.Vector3(8, 10, 16)
  );
  scene.add(distext.mesh);
  distext.onClick(() => {
    console.log("处理室");
    gsap.to(camera.position, {
      x: disPosition.x,
      y: disPosition.y,
      z: disPosition.z,
      duration: 1,
    });
    moveTag("处理室");
  });

  // 创建处理室回手术准备室文字精灵
  const fro6text = new SpriteCanvas(
    camera,
    "走廊",
    new THREE.Vector3(16, 10, 14)
  );
  scene.add(fro6text.mesh);
  fro6text.onClick(() => {
    console.log("走廊");
    gsap.to(camera.position, {
      x: kitPosition.x,
      y: kitPosition.y,
      z: kitPosition.z,
      duration: 1,
    });
    moveTag("走廊");
  });

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
    new THREE.Vector3(-1, 10, 7)
  );
  scene.add(imptext.mesh);
  imptext.onClick(() => {
    console.log("住院室");
    gsap.to(camera.position, {
      x: impPosition.x,
      y: impPosition.y,
      z: impPosition.z,
      duration: 1,
    });
    moveTag("住院室");
  });

  // 创建住院室回走廊文字精灵
  const fro7text = new SpriteCanvas(
    camera,
    "回走廊",
    new THREE.Vector3(-7, 10, 16)
  );
  scene.add(fro7text.mesh);
  fro7text.onClick(() => {
    console.log("回走廊");
    gsap.to(camera.position, {
      x: kitPosition.x,
      y: kitPosition.y,
      z: kitPosition.z,
      duration: 1,
    });
    moveTag("走廊");
  });

  // 创建手术室
  let surPosition = new THREE.Vector3(-5, 10, 30);
  let surIndex = 15;
  let surUrl = "./img/sur/";
  let surEuler = new THREE.Euler(0, -Math.PI / 2, 0);
  const sur = new Room("手术室", surIndex, surUrl, surPosition, surEuler);

  // 创建手术室文字精灵
  const surtext = new SpriteCanvas(
    camera,
    "手术室",
    new THREE.Vector3(-4, 10, 19)
  );
  scene.add(surtext.mesh);
  surtext.onClick(() => {
    console.log("手术室");
    gsap.to(camera.position, {
      x: surPosition.x,
      y: surPosition.y,
      z: surPosition.z,
      duration: 1,
    });
    moveTag("手术室");
  });

  // 创建手术室回住院室文字精灵
  const fro8text = new SpriteCanvas(
    camera,
    "住院室",
    new THREE.Vector3(-5, 10, 28)
  );
  scene.add(fro8text.mesh);
  fro8text.onClick(() => {
    console.log("住院室");
    gsap.to(camera.position, {
      x: impPosition.x,
      y: impPosition.y,
      z: impPosition.z,
      duration: 1,
    });
    moveTag("住院室");
  });

  // 创建药房
  let pharPosition = new THREE.Vector3(5, 10, 40);
  let pharIndex = 14;
  let pharUrl = "./img/phar/";
  let pharEuler = new THREE.Euler(0, -Math.PI / 2, 0);
  const phar = new Room("药房", pharIndex, pharUrl, pharPosition, pharEuler);

  // 创建药房文字精灵
  const phartext = new SpriteCanvas(
    camera,
    "药房",
    new THREE.Vector3(-2, 10, 32)
  );
  scene.add(phartext.mesh);
  phartext.onClick(() => {
    console.log("药房");
    gsap.to(camera.position, {
      x: pharPosition.x,
      y: pharPosition.y,
      z: pharPosition.z,
      duration: 1,
    });
    moveTag("药房");
  });

  // 创建药房回手术室文字精灵
  const fro9text = new SpriteCanvas(
    camera,
    "手术室",
    new THREE.Vector3(2, 10, 36)
  );
  scene.add(fro9text.mesh);
  fro9text.onClick(() => {
    console.log("手术室");
    gsap.to(camera.position, {
      x: surPosition.x,
      y: surPosition.y,
      z: surPosition.z,
      duration: 1,
    });
    moveTag("手术室");
  });

  // 创建专科诊室
  let specPosition = new THREE.Vector3(15, 10, 40);
  let specIndex = 8;
  let specUrl = "./img/spec/";
  let specEuler = new THREE.Euler(0, -Math.PI / 2, 0);
  const spec = new Room("专科诊室", specIndex, specUrl, specPosition, specEuler);

  // 创建专科室文字精灵
  const spectext = new SpriteCanvas(
    camera,
    "专科诊室",
    new THREE.Vector3(8, 10, 38.5)
  );
  scene.add(spectext.mesh);
  spectext.onClick(() => {
    console.log("专科诊室");
    gsap.to(camera.position, {
      x: specPosition.x,
      y: specPosition.y,
      z: specPosition.z,
      duration: 1,
    });
    moveTag("专科诊室");
  });

  // 创建专科诊室回药房文字精灵
  const fro10text = new SpriteCanvas(
    camera,
    "药房",
    new THREE.Vector3(14, 10, 43)
  );
  scene.add(fro10text.mesh);
  fro10text.onClick(() => {
    console.log("药房");
    gsap.to(camera.position, {
      x: pharPosition.x,
      y: pharPosition.y,
      z: pharPosition.z,
      duration: 1,
    });
    moveTag("药房");
  });

  // 创建影像室
  let imaPosition = new THREE.Vector3(12, 0, 20);
  let imaIndex = 88;
  let imaUrl = "./img/ima/";
  let imaEuler = new THREE.Euler(0, -Math.PI / 2, 0);
  const ima = new Room("影像室", imaIndex, imaUrl, imaPosition, imaEuler);

  // 创建影像室室文字精灵
  const imatext = new SpriteCanvas(
    camera,
    "影像室",
    new THREE.Vector3(5, 0, 12)
  );
  scene.add(imatext.mesh);
  imatext.onClick(() => {
    console.log("影像室");
    gsap.to(camera.position, {
      x: imaPosition.x,
      y: imaPosition.y,
      z: imaPosition.z,
      duration: 1,
    });
    moveTag("影像室");
  });

  // 创建影像室回化验室文字精灵
  const fro11text = new SpriteCanvas(
    camera,
    "化验室",
    new THREE.Vector3(8, 0, 18)
  );
  scene.add(fro11text.mesh);
  fro11text.onClick(() => {
    console.log("化验室");
    gsap.to(camera.position, {
      x: labPosition.x,
      y: labPosition.y,
      z: labPosition.z,
      duration: 1,
    });
    moveTag("化验室");
  });

  // 创建影像室回化验室文字精灵
  const fro12text = new SpriteCanvas(
    camera,
    "回前台",
    new THREE.Vector3(16, 0, 18)
  );
  scene.add(fro12text.mesh);
  fro12text.onClick(() => {
    console.log("回前台");
    gsap.to(camera.position, {
      x: livingPosition.x,
      y: livingPosition.y,
      z: livingPosition.z,
      duration: 1,
    });
    moveTag("前台");
  });

  // 创建影像室
  let arcPosition = new THREE.Vector3(10, 30, 10);
  let arcIndex = 66;
  let arcUrl = "./img/arc/";
  let arcEuler = new THREE.Euler(0, -Math.PI / 2, 0);
  const arc = new Room("档案室", arcIndex, arcUrl, arcPosition, arcEuler);

  // 创建影像室室文字精灵
  const arctext = new SpriteCanvas(
    camera,
    "档案室",
    new THREE.Vector3(3, 11, 1)
  );
  scene.add(arctext.mesh);
  arctext.onClick(() => {
    console.log("档案室");
    gsap.to(camera.position, {
      x: arcPosition.x,
      y: arcPosition.y,
      z: arcPosition.z,
      duration: 1,
    });
    moveTag("档案室");
  });

  // 创建影像室回化验室文字精灵
  const fro13text = new SpriteCanvas(
    camera,
    "回二楼走廊",
    new THREE.Vector3(10, 30, 8)
  );
  scene.add(fro13text.mesh);
  fro13text.onClick(() => {
    console.log("回二楼走廊");
    gsap.to(camera.position, {
      x: kitPosition.x,
      y: kitPosition.y,
      z: kitPosition.z,
      duration: 1,
    });
    moveTag("走廊");
  });

  //创建前台流程
  const desk = new SpriteCanvas(
    camera,
    "桌子",
    new THREE.Vector3(-1, 0, 4)
  );
  scene.add(desk.mesh);

  // 创建一个视频元素
  const videoElement = document.createElement('video');
  videoElement.src = getItemURL("手术刀");
  videoElement.controls = true; // 显示视频控制条
  videoElement.style.width = '100%'; // 设置视频框的宽度
  videoElement.style.height = '100%'; // 设置视频框的高度

  // 创建一个包含视频元素的div
  const videoContainer = document.createElement('div');
  videoContainer.style.position = 'absolute'; // 绝对定位
  videoContainer.style.top = '50%'; // 垂直居中
  videoContainer.style.left = '50%'; // 水平居中
  videoContainer.style.transform = 'translate(-50%, -50%)'; // 居中
  videoContainer.style.width = '400px'; // 设置视频框的宽度
  videoContainer.style.height = '300px'; // 设置视频框的高度
  videoContainer.style.backgroundColor = 'black'; // 设置背景颜色为黑色
  videoContainer.appendChild(videoElement);

  // 创建关闭按钮
  const closeButton = document.createElement('button');
  closeButton.innerText = '关闭';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '10px';
  closeButton.style.right = '10px';
  closeButton.style.color = 'white'; // 设置文字颜色为白色
  closeButton.style.backgroundColor = 'red'; // 设置背景颜色为红色
  closeButton.style.border = 'none'; // 移除边框
  closeButton.style.padding = '5px 10px'; // 设置内边距
  closeButton.style.borderRadius = '5px'; // 设置圆角
  closeButton.addEventListener('click', () => {
    document.body.removeChild(videoContainer); // 移除视频框
    videoElement.pause(); // 暂停视频播放
  });

  videoContainer.appendChild(closeButton);

  // 创建详情按钮
  const detailsButton = document.createElement('button');
  detailsButton.innerText = '详情';
  detailsButton.style.position = 'absolute';
  detailsButton.style.top = '10px';
  detailsButton.style.left = '10px';
  detailsButton.style.color = 'white'; // 设置文字颜色为白色
  detailsButton.style.backgroundColor = 'green'; // 设置背景颜色为绿色
  detailsButton.style.border = 'none'; // 移除边框
  detailsButton.style.padding = '5px 10px'; // 设置内边距
  detailsButton.style.borderRadius = '5px'; // 设置圆角
  detailsButton.addEventListener('click', () => {
    const textBox = document.createElement('textarea');
  textBox.innerText = '这是详情信息';
  textBox.style.width = '300px';
  textBox.style.height = '200px';
  textBox.style.padding = '10px';
  textBox.style.backgroundColor = 'white';
  textBox.style.color = 'black';
  textBox.style.position = 'absolute';
  textBox.style.top = '50%';
  textBox.style.left = '50%';
  textBox.style.transform = 'translate(-50%, -50%)';
  // 创建关闭按钮
  const closeButtont1 = document.createElement('button');
closeButtont1.innerText = '关闭';
closeButtont1.style.position = 'absolute';
closeButtont1.style.top = '0';
closeButtont1.style.left = '0';
closeButtont1.style.color = 'red'; // 设置文字颜色为红色
closeButtont1.style.backgroundColor = 'white'; // 设置背景颜色为白色
closeButtont1.style.border = 'none'; // 移除边框
closeButtont1.style.padding = '5px 10px'; // 设置内边距
closeButtont1.style.borderRadius = '5px'; // 设置圆角
closeButtont1.addEventListener('click', () => {
  document.body.removeChild(textBox); // 移除文本框
});

  textBox.appendChild(closeButtont1); // 将关闭按钮添加到文本框中
  document.body.appendChild(textBox); // 将文本框添加到页面中
  
 });

  // 创建操作流程按钮
  const workflowButton = document.createElement('button');
  workflowButton.innerText = '操作流程';
  workflowButton.style.position = 'absolute';
  workflowButton.style.top = '10px'; // 垂直居中

  workflowButton.style.left = '80px'; // 水平居中
  workflowButton.style.color = 'white'; // 设置文字颜色为白色
  workflowButton.style.backgroundColor = 'blue'; // 设置背景颜色为蓝色
  workflowButton.style.border = 'none'; // 移除边框
  workflowButton.style.padding = '5px 10px'; // 设置内边距
  workflowButton.style.borderRadius = '5px'; // 设置圆角
  workflowButton.addEventListener('click', () => {
    // 添加你的操作流程按钮点击事件处理逻辑
  });
  videoContainer.appendChild(workflowButton);
  videoContainer.appendChild(detailsButton);

  // 点击桌子时弹出视频框
  desk.onClick(() => {
    document.body.appendChild(videoContainer); // 将视频框添加到文档中
    videoElement.play(); // 播放视频
  });


  //创建手术刀流程
  const surgeryknife = new SpriteCanvas(
    camera,
    "手术刀",
    new THREE.Vector3(-5, 9.5, 34)
  );
  scene.add(surgeryknife.mesh);


  
  // 创建一个视频元素
  const video1Element = document.createElement('video');
  video1Element.src = './videos/surgeryknife.mp4';
  video1Element.controls = true; // 显示视频控制条
  video1Element.style.width = '100%'; // 设置视频框的宽度
  video1Element.style.height = '100%'; // 设置视频框的高度

  // 创建一个包含视频元素的div
  const video1Container = document.createElement('div');
  video1Container.style.position = 'absolute'; // 绝对定位
  video1Container.style.top = '50%'; // 垂直居中
  video1Container.style.left = '50%'; // 水平居中
  video1Container.style.transform = 'translate(-50%, -50%)'; // 居中
  video1Container.style.width = '400px'; // 设置视频框的宽度
  video1Container.style.height = '300px'; // 设置视频框的高度
  video1Container.style.backgroundColor = 'black'; // 设置背景颜色为黑色
  video1Container.appendChild(video1Element);

  // 创建关闭按钮
  const closeButton1 = document.createElement('button');
  closeButton1.innerText = '关闭';
  closeButton1.style.position = 'absolute';
  closeButton1.style.top = '10px';
  closeButton1.style.right = '10px';
  closeButton1.style.color = 'white'; // 设置文字颜色为白色
  closeButton1.style.backgroundColor = 'red'; // 设置背景颜色为红色
  closeButton1.style.border = 'none'; // 移除边框
  closeButton1.style.padding = '5px 10px'; // 设置内边距
  closeButton1.style.borderRadius = '5px'; // 设置圆角
  closeButton1.addEventListener('click', () => {
    document.body.removeChild(video1Container); // 移除视频框
    video1Element.pause(); // 暂停视频播放
  });

  video1Container.appendChild(closeButton1);

  // 创建详情按钮
  const detailsButton1 = document.createElement('button');
  detailsButton1.innerText = '详情';
  detailsButton1.style.position = 'absolute';
  detailsButton1.style.top = '10px';
  detailsButton1.style.left = '10px';
  detailsButton1.style.color = 'white'; // 设置文字颜色为白色
  detailsButton1.style.backgroundColor = 'green'; // 设置背景颜色为绿色
  detailsButton1.style.border = 'none'; // 移除边框
  detailsButton1.style.padding = '5px 10px'; // 设置内边距
  detailsButton1.style.borderRadius = '5px'; // 设置圆角
  detailsButton1.addEventListener('click', () => {
    // 添加你的详情按钮点击事件处理逻辑
  });
  // 创建操作流程按钮
  const workflowButton1 = document.createElement('button');
  workflowButton1.innerText = '操作流程';
  workflowButton1.style.position = 'absolute';
  workflowButton1.style.top = '10px'; // 垂直居中

  workflowButton1.style.left = '80px'; // 水平居中
  workflowButton1.style.color = 'white'; // 设置文字颜色为白色
  workflowButton1.style.backgroundColor = 'blue'; // 设置背景颜色为蓝色
  workflowButton1.style.border = 'none'; // 移除边框
  workflowButton1.style.padding = '5px 10px'; // 设置内边距
  workflowButton1.style.borderRadius = '5px'; // 设置圆角
  workflowButton1.addEventListener('click', () => {
    // 添加你的操作流程按钮点击事件处理逻辑
  });
  video1Container.appendChild(workflowButton1);
  video1Container.appendChild(detailsButton1);

  // 点击桌子时弹出视频框
  surgeryknife.onClick(() => {
    document.body.appendChild(video1Container); // 将视频框添加到文档中
    video1Element.play(); // 播放视频
  });

  //创建化验台流程
  const labdesk = new SpriteCanvas(
    camera,
    "化验台",
    new THREE.Vector3(1, 0, 12)
  );
  scene.add(labdesk.mesh);

  // 创建一个视频元素
  const video2Element = document.createElement('video');
  video2Element.src = './videos/labdesk.mp4';
  video2Element.controls = true; // 显示视频控制条
  video2Element.style.width = '100%'; // 设置视频框的宽度
  video2Element.style.height = '100%'; // 设置视频框的高度

  // 创建一个包含视频元素的div
  const video2Container = document.createElement('div');
  video2Container.style.position = 'absolute'; // 绝对定位
  video2Container.style.top = '50%'; // 垂直居中
  video2Container.style.left = '50%'; // 水平居中
  video2Container.style.transform = 'translate(-50%, -50%)'; // 居中
  video2Container.style.width = '400px'; // 设置视频框的宽度
  video2Container.style.height = '300px'; // 设置视频框的高度
  video2Container.style.backgroundColor = 'black'; // 设置背景颜色为黑色
  video2Container.appendChild(video2Element);

  // 创建关闭按钮
  const closeButton2 = document.createElement('button');
  closeButton2.innerText = '关闭';
  closeButton2.style.position = 'absolute';
  closeButton2.style.top = '10px';
  closeButton2.style.right = '10px';
  closeButton2.style.color = 'white'; // 设置文字颜色为白色
  closeButton2.style.backgroundColor = 'red'; // 设置背景颜色为红色
  closeButton2.style.border = 'none'; // 移除边框
  closeButton2.style.padding = '5px 10px'; // 设置内边距
  closeButton2.style.borderRadius = '5px'; // 设置圆角
  closeButton2.addEventListener('click', () => {
    document.body.removeChild(video2Container); // 移除视频框
    video2Element.pause(); // 暂停视频播放
  });

  video2Container.appendChild(closeButton2);

  // 创建详情按钮
  const detailsButton2 = document.createElement('button');
  detailsButton2.innerText = '详情';
  detailsButton2.style.position = 'absolute';
  detailsButton2.style.top = '10px';
  detailsButton2.style.left = '10px';
  detailsButton2.style.color = 'white'; // 设置文字颜色为白色
  detailsButton2.style.backgroundColor = 'green'; // 设置背景颜色为绿色
  detailsButton2.style.border = 'none'; // 移除边框
  detailsButton2.style.padding = '5px 10px'; // 设置内边距
  detailsButton2.style.borderRadius = '5px'; // 设置圆角
  detailsButton2.addEventListener('click', () => {
    // 添加你的详情按钮点击事件处理逻辑
  });
  // 创建操作流程按钮
  const workflowButton2 = document.createElement('button');
  workflowButton2.innerText = '操作流程';
  workflowButton2.style.position = 'absolute';
  workflowButton2.style.top = '10px'; // 垂直居中

  workflowButton2.style.left = '80px'; // 水平居中
  workflowButton2.style.color = 'white'; // 设置文字颜色为白色
  workflowButton2.style.backgroundColor = 'blue'; // 设置背景颜色为蓝色
  workflowButton2.style.border = 'none'; // 移除边框
  workflowButton2.style.padding = '5px 10px'; // 设置内边距
  workflowButton2.style.borderRadius = '5px'; // 设置圆角
  workflowButton2.addEventListener('click', () => {
    // 添加你的操作流程按钮点击事件处理逻辑
  });
  video2Container.appendChild(workflowButton2);
  video2Container.appendChild(detailsButton2);

  // 点击桌子时弹出视频框
  labdesk.onClick(() => {
    document.body.appendChild(video2Container); // 将视频框添加到文档中
    video2Element.play(); // 播放视频
  });

  //创建影像台流程
  const film = new SpriteCanvas(
    camera,
    "CT检查",
    new THREE.Vector3(12, 0, 18)
  );
  scene.add(film.mesh);

  // 创建一个视频元素
  const video3Element = document.createElement('video');
  video3Element.src = './videos/film.mp4';
  video3Element.controls = true; // 显示视频控制条
  video3Element.style.width = '100%'; // 设置视频框的宽度
  video3Element.style.height = '100%'; // 设置视频框的高度

  // 创建一个包含视频元素的div
  const video3Container = document.createElement('div');
  video3Container.style.position = 'absolute'; // 绝对定位
  video3Container.style.top = '50%'; // 垂直居中
  video3Container.style.left = '50%'; // 水平居中
  video3Container.style.transform = 'translate(-50%, -50%)'; // 居中
  video3Container.style.width = '400px'; // 设置视频框的宽度
  video3Container.style.height = '300px'; // 设置视频框的高度
  video3Container.style.backgroundColor = 'black'; // 设置背景颜色为黑色
  video3Container.appendChild(video3Element);

  // 创建关闭按钮
  const closeButton3 = document.createElement('button');
  closeButton3.innerText = '关闭';
  closeButton3.style.position = 'absolute';
  closeButton3.style.top = '10px';
  closeButton3.style.right = '10px';
  closeButton3.style.color = 'white'; // 设置文字颜色为白色
  closeButton3.style.backgroundColor = 'red'; // 设置背景颜色为红色
  closeButton3.style.border = 'none'; // 移除边框
  closeButton3.style.padding = '5px 10px'; // 设置内边距
  closeButton3.style.borderRadius = '5px'; // 设置圆角
  closeButton3.addEventListener('click', () => {
    document.body.removeChild(video3Container); // 移除视频框
    video3Element.pause(); // 暂停视频播放
  });

  video3Container.appendChild(closeButton3);

  // 创建详情按钮
  const detailsButton3 = document.createElement('button');
  detailsButton3.innerText = '详情';
  detailsButton3.style.position = 'absolute';
  detailsButton3.style.top = '10px';
  detailsButton3.style.left = '10px';
  detailsButton3.style.color = 'white'; // 设置文字颜色为白色
  detailsButton3.style.backgroundColor = 'green'; // 设置背景颜色为绿色
  detailsButton3.style.border = 'none'; // 移除边框
  detailsButton3.style.padding = '5px 10px'; // 设置内边距
  detailsButton3.style.borderRadius = '5px'; // 设置圆角
  detailsButton3.addEventListener('click', () => {
    // 添加你的详情按钮点击事件处理逻辑
  });
  // 创建操作流程按钮
  const workflowButton3 = document.createElement('button');
  workflowButton3.innerText = '操作流程';
  workflowButton3.style.position = 'absolute';
  workflowButton3.style.top = '10px'; // 垂直居中

  workflowButton3.style.left = '80px'; // 水平居中
  workflowButton3.style.color = 'white'; // 设置文字颜色为白色
  workflowButton3.style.backgroundColor = 'blue'; // 设置背景颜色为蓝色
  workflowButton3.style.border = 'none'; // 移除边框
  workflowButton3.style.padding = '5px 10px'; // 设置内边距
  workflowButton3.style.borderRadius = '5px'; // 设置圆角
  workflowButton3.addEventListener('click', () => {
    // 添加你的操作流程按钮点击事件处理逻辑
  });
  video3Container.appendChild(workflowButton3);
  video3Container.appendChild(detailsButton3);

  // 点击桌子时弹出视频框
  film.onClick(() => {
    document.body.appendChild(video3Container); // 将视频框添加到文档中
    video3Element.play(); // 播放视频
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

.map>img {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.tag {
  position: absolute;
  top: 120;
  left: 40;
  width: 30px;
  height: 30px;
  background-image: url('../assets/location.png');
  background-size: cover;
  z-index: 1000;
}

.tag>img {
  width: 70%;
  height: 70%;
  position: absolute;
  left: 0;
  top: 0;
}

.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url('./assets/loading.png');
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

.progress>img {
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
