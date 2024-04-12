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
import { defineAsyncComponent, ref, onMounted } from "vue";
import axios from 'axios';
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


// 添加立方体
const geometry = new THREE.BoxGeometry(10, 10, 10);
geometry.scale(1, 1, -1);

onMounted(async () => {
  const surgeryknifeItem = new Item();
  surgeryknifeItem.setItemInfo('手术刀');
  const labdeskItem = new Item();
  labdeskItem.setItemInfo('手术刀');

  function createVideoEle(videoURL, detailContent) {
    // 创建一个视频元素
    const videoElement = document.createElement('video');
    videoElement.src = videoURL;
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
      const detailBox = document.createElement('div');
      detailBox.innerHTML = detailContent;
      detailBox.style.position = 'absolute';
      detailBox.style.top = '50%';
      detailBox.style.left = '50%';
      detailBox.style.transform = 'translate(-50%, -50%)';
      detailBox.style.backgroundColor = 'white';
      detailBox.style.padding = '20px';
      detailBox.style.borderRadius = '10px';
      detailBox.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
      detailBox.style.zIndex = '9999';

      const closeButton = document.createElement('button');
      closeButton.innerText = '关闭';
      closeButton.style.position = 'absolute';
      closeButton.style.top = '10px';
      closeButton.style.right = '10px';
      closeButton.style.backgroundColor = 'red';
      closeButton.style.color = 'white';
      closeButton.style.border = 'none';
      closeButton.style.padding = '5px 10px';
      closeButton.style.borderRadius = '5px';
      closeButton.addEventListener('click', () => {
        videoContainer.removeChild(detailBox);
      });

      detailBox.appendChild(closeButton);
      videoContainer.appendChild(detailBox);

    });

    // 创建操作流程按钮
    const workflowButton = document.createElement('button');
    workflowButton.innerText = '操作视频演示';
    workflowButton.style.position = 'absolute';
    workflowButton.style.top = '10px'; // 垂直居中
    workflowButton.style.left = '80px'; // 水平居中
    workflowButton.style.color = 'white'; // 设置文字颜色为白色
    workflowButton.style.backgroundColor = 'blue'; // 设置背景颜色为蓝色
    workflowButton.style.border = 'none'; // 移除边框
    workflowButton.style.padding = '5px 10px'; // 设置内边距
    workflowButton.style.borderRadius = '5px'; // 设置圆角

    videoContainer.appendChild(workflowButton);
    videoContainer.appendChild(detailsButton);

    document.body.appendChild(videoContainer); // 将视频框添加到文档中
    videoElement.play(); // 播放视频
  }

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
    new THREE.Vector3(-13, -1, -7)
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
    new THREE.Vector3(3.5, 0, -1.5)
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
    new THREE.Vector3(10, -1, -7)
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
    "前台详情",
    new THREE.Vector3(-1, 0, 4)
  );
  scene.add(desk.mesh);

  desk.onClick(() => {
    createVideoEle(surgeryknifeItem.itemURL, surgeryknifeItem.itemDetail);
  });

  //创建手术刀流程
  const surgeryknife = new SpriteCanvas(
    camera,
    "手术刀",
    new THREE.Vector3(-5, 9.5, 34)
  );
  scene.add(surgeryknife.mesh);

  // 点击手术刀时弹出视频框
  surgeryknife.onClick(() => {
    createVideoEle(surgeryknifeItem.itemURL, surgeryknifeItem.itemDetail);
  });

  //创建化验台流程
  const labdesk = new SpriteCanvas(
    camera,
    "化验台",
    new THREE.Vector3(1, 0, 12)
  );
  scene.add(labdesk.mesh);

  // 点击化验台时弹出视频框
  labdesk.onClick(() => {
    createVideoEle(surgeryknifeItem.itemURL, surgeryknifeItem.itemDetail);
  });

  //创建影像台流程
  const film = new SpriteCanvas(
    camera,
    "CT检查",
    new THREE.Vector3(12, 0, 18)
  );
  scene.add(film.mesh);

  // 点击影像台时弹出视频框
  film.onClick(() => {
    createVideoEle(surgeryknifeItem.itemURL, surgeryknifeItem.itemDetail);
  });

  //创建手术台流程
  const surgerydesk = new SpriteCanvas(
    camera,
    "手术操控台",
    new THREE.Vector3(-5, 9.5, 32)
  );
  scene.add(surgerydesk.mesh);
    // 点击手术仪器时弹出视频框
    surgerydesk.onClick(() => {
    createVideoEle(surgeryknifeItem.itemURL, surgeryknifeItem.itemDetail);
  });


  //创建手术仪器流程
  const surgeryEquipment = new SpriteCanvas(
    camera,
    "手术仪器",
    new THREE.Vector3(-7, 9.5, 32)
  );
  scene.add(surgeryEquipment.mesh);

  // 点击手术仪器时弹出视频框
  surgeryEquipment.onClick(() => {
    createVideoEle(surgeryknifeItem.itemURL, surgeryknifeItem.itemDetail);
  });

  //创建免疫室流程
  const immRoom = new SpriteCanvas(
    camera,
    "免疫室详情",
    new THREE.Vector3(8, -1, -5)
  );
  scene.add(immRoom.mesh);

  // 点击手术仪器时弹出视频框
  immRoom.onClick(() => {
    createVideoEle(surgeryknifeItem.itemURL, surgeryknifeItem.itemDetail);
  });

  //创建免疫室流程
  const pathRoom = new SpriteCanvas(
    camera,
    "病理室详情",
    new THREE.Vector3(-8, 0, 6)
  );
  scene.add(pathRoom.mesh);

  // 点击手术仪器时弹出视频框
  pathRoom.onClick(() => {
    createVideoEle(surgeryknifeItem.itemURL, surgeryknifeItem.itemDetail);
  });

  
  //创建诊室流程
  const consultRoom = new SpriteCanvas(
    camera,
    "诊室详情",
    new THREE.Vector3(-16, -1, -7)
  );
  scene.add(consultRoom.mesh);

  // 点击手术仪器时弹出视频框
  consultRoom.onClick(() => {
    createVideoEle(surgeryknifeItem.itemURL, surgeryknifeItem.itemDetail);
  });

  //创建动物仓标签
  const livingRoom = new SpriteCanvas(
    camera,
    "动物仓",
    new THREE.Vector3(-6, 10, 21)
  );
  scene.add(livingRoom.mesh);

  // 点击动物仓时弹出视频框
  livingRoom.onClick(() => {
    createVideoEle(surgeryknifeItem.itemURL, surgeryknifeItem.itemDetail);
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

class Item {
  constructor() {
    this.itemURL = '';
    this.itemDetail = '';
  }

  async setItemInfo(itemName) {
    try {
      const response = await axios.get('/3DVirtualTour/item', {
        headers: {
          Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' // 替换为实际的身份验证 token
        }
      });
      const data = response.data;
      // 检查响应状态
      if (data.status === 0 && data.data && data.data.length > 0) {
        // 找到物品项
        const item = data.data.find(item => item.itemName === itemName);
        if (item) {
          this.itemURL = item.itemURL; // 设置物品的 URL
          this.itemDetail = item.itemIntro; // 设置物品的详情
        } else {
          console.error('物品未找到');
        }
      } else {
        console.error('获取物品信息失败:', data.message);
      }
    } catch (error) {
      console.error('获取物品信息出错:', error);
    }
  }
}

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
