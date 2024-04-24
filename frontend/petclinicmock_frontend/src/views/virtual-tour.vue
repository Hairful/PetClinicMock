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
     <!-- 第一个按钮 -->
      <button @click="exit3DNavigation" style="padding: 10px 20px; background-color: #4CAF50; color: white; border: none; cursor: pointer; border-radius: 5px;">返回主页</button>

     <!-- 第二个按钮 -->
      <button @click="exit3DtoRole" style="padding: 10px 20px; background-color: #008CBA; color: white; border: none; cursor: pointer; border-radius: 5px;">返回角色扮演</button>
  </div>
</template>

<script setup>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { defineAsyncComponent, ref, onMounted, onUnmounted } from "vue";
import axios from 'axios';
import gsap from "gsap";
import SpriteCanvas from "../three/SpriteCanvas";



let tagDiv = ref(null);
let progress = ref(0);
// 创建一个响应式引用来存储传递的参数
const receivedParam = ref('');
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
camera.position.set(3, 10, 5);
// 初始化渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

const container = ref(null);
const meshs = [];


const render = () => {
  renderer.render(scene, camera);
  requestAnimationFrame(render);
};

// 添加立方体
const geometry = new THREE.BoxGeometry(10, 10, 10);
geometry.scale(1, 1, -1);

function popstateHandler() {
  const previousUrl = document.referrer; // 获取前一个页面的 URL
  window.location.href = '/menu';
}

window.addEventListener('popstate', popstateHandler);

 // 定义处理点击事件的函数
 const exit3DtoRole = () => {
  // window.removeEventListener('click');
  // 从 DOM 中移除整个容器
  // 移除所有子元素
  // 假设 meshs 是一个包含多个 mesh 的数组
  while (meshs.length > 0) {
    var mesh = meshs[0].mesh; // 获取数组中第一个元素对应的 mesh
    // 移除第一个元素对应的 mesh
    if (mesh && mesh.parentNode) {
        mesh.parentNode.removeChild(mesh);
    }
    // 从数组中删除第一个元素
    meshs.shift();
  }
  // var previousPageURL = document.referrer;
  // 设置要返回的页面
  window.location.href = '/role-play-menu';
 
};

 // 定义处理点击事件的函数
 const exit3DNavigation = () => {
  // window.removeEventListener('click');
  // 从 DOM 中移除整个容器
  // 移除所有子元素
  // 假设 meshs 是一个包含多个 mesh 的数组
  while (meshs.length > 0) {
    var mesh = meshs[0].mesh; // 获取数组中第一个元素对应的 mesh
    // 移除第一个元素对应的 mesh
    if (mesh && mesh.parentNode) {
        mesh.parentNode.removeChild(mesh);
    }
    // 从数组中删除第一个元素
    meshs.shift();
  }


  // var previousPageURL = document.referrer;
  // 设置要返回的页面
  window.location.href = '/menu';
 
};

onMounted(async () => {
  
  
  const rooms = [];
  
  
  const frontdeskItem = new Item();
  frontdeskItem.setItemInfo('前台');

  const surgeryknifeItem = new Item();
  surgeryknifeItem.setItemInfo('手术刀');

  const labdeskItem = new Item();
  labdeskItem.setItemInfo('化验台');

  const filmItem = new Item();
  filmItem.setItemInfo('影像台');

  const surgerydeskItem = new Item();
  surgerydeskItem.setItemInfo('手术操控台');

  const surgeryEquipmentItem = new Item();
  surgeryEquipmentItem.setItemInfo('手术仪器');

  const immItem = new Item();
  immItem.setItemInfo('免疫室');

  const pathItem = new Item();
  pathItem.setItemInfo('病理室');

  const conItem = new Item();
  conItem.setItemInfo('诊室');

  const livingItem = new Item();
  livingItem.setItemInfo('动物仓');

  const washingItem = new Item();
  washingItem.setItemInfo('动物洗浴区');

  const medItem = new Item();
  medItem.setItemInfo('药品');

  const weighItem = new Item();
  weighItem.setItemInfo('称量仪器');

  const specItem = new Item();
  specItem.setItemInfo('专科诊室');

  const archItem = new Item();
  archItem.setItemInfo('档案室');

  const preItem = new Item();
  preItem.setItemInfo('手术准备室');

  const proItem = new Item();
  proItem.setItemInfo('处理室');

  const proEquipItem = new Item();
  proEquipItem.setItemInfo('处理设备');
  // 检查 URL 查询参数是否存在
 function checkForQueryParam(rooms) {
  const queryParams = new URLSearchParams(window.location.search);
  if (queryParams.has('roomID')) {
    //如果存在，则获取参数的值并存储
    // receivedParam.value = 0;
    receivedParam.value = queryParams.get('roomID');
    camera.position.set(rooms[receivedParam.value].position.x,rooms[receivedParam.value].position.y,rooms[receivedParam.value].position.z);
    moveTag(rooms[receivedParam.value].name);
    // camera.position.set(rooms[receivedParam.value].position.x,rooms[receivedParam.value].position.y,rooms[receivedParam.value].position.z);
    //在此处你可以对参数进行进一步处理
    console.log('Received parameter:', receivedParam.value);
  }
}

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
    videoContainer.style.zIndex = '99999';
    videoContainer.appendChild(videoElement);

    // 创建关闭按钮
    const closeButton = document.createElement('button');
    closeButton.innerText = 'X';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '8px';
    closeButton.style.right = '10px';
    closeButton.style.color = '#f8f8f8'; // 设置文字颜色为白色
    closeButton.style.backgroundColor = 'transparent'; // 设置背景颜色为红色
    closeButton.style.border = 'none'; // 移除边框
    closeButton.style.padding = '5px 10px'; // 设置内边距
    closeButton.style.borderRadius = '50%'; // 圆形按钮
    closeButton.style.fontSize = '17px'; // 调整字体大小
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
    closeButton.style.fontSize = '17px'; // 调整字体大小
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
      closeButton.innerText = 'X';
      closeButton.style.position = 'absolute';
      closeButton.style.top = '-5px';
      closeButton.style.right = '10px';
      closeButton.style.backgroundColor = 'white'; // 透明背景
      closeButton.style.color = 'red';
      closeButton.style.border = 'none';
      closeButton.style.padding = '0'; // 减少内边距
      closeButton.style.width = '30px'; // 增加宽度
      closeButton.style.height = '30px'; // 增加高度
      closeButton.style.borderRadius = '50%'; // 圆形按钮
      closeButton.style.fontSize = '17px'; // 调整字体大小
      closeButton.addEventListener('click', () => {
        videoContainer.removeChild(detailBox);
      });

      detailBox.appendChild(closeButton);
      videoContainer.appendChild(detailBox);
      // 添加拖拽功能
      makeDraggable(detailBox);

    });

    

    // 创建操作流程按钮
    const workflowButton = document.createElement('button');
    workflowButton.innerText = '视频演示';
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

    // // 监听页面即将关闭事件
    // window.addEventListener('beforeunload', () => {
    //   document.body.removeChild(videoContainer);
    //   videoElement.pause();
    // });
     // 监听页面 unload 事件
     // 监听浏览器的历史变化事件
    window.addEventListener('popstate', () => {
        document.body.removeChild(videoContainer);
    });

    // 阻止事件冒泡
    videoContainer.addEventListener('click', (event) => {
        event.stopPropagation();
    });
    // 添加拖拽功能
    makeDraggable(videoContainer);
  }

  function makeDraggable(element) {
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(element.id + '-header')) {
        // 如果存在标题栏，则标题栏用于拖动
        document.getElementById(element.id + '-header').onmousedown = dragMouseDown;
    } else {
        // 否则，直接在元素上点击拖动
        element.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // 获取鼠标点击位置与元素当前位置的差值
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // 鼠标移动时调用 elementDrag 函数
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // 计算元素新的位置
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // 设置元素新的位置
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // 停止拖动时清除事件监听
        document.onmouseup = null;
        document.onmousemove = null;
    }
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
  rooms.push(living);

  // 创建走廊
  let kitPosition = new THREE.Vector3(3, 10, 5);
  let kitIndex = 4;
  let textureUrl = "./img/corridor/";
  let kitEuler = new THREE.Euler(0, -Math.PI / 2, 0);
  const room = new Room("走廊", kitIndex, textureUrl, kitPosition, kitEuler);
  rooms.push(room);
  // 创建文字精灵
  const text = new SpriteCanvas(camera, "走廊", new THREE.Vector3(3, 0, 0.5));
  // text.mesh.rotation.y = Math.PI / 3;
  scene.add(text.mesh);
  meshs.push(text);
  meshs.push(text);
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
  meshs.push(textLiving);
  meshs.push(textLiving);
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
  rooms.push(lab);

  // 创建化验室文字精灵
  const labtext = new SpriteCanvas(
    camera,
    "化验室",
    new THREE.Vector3(1, 0, 4.5)
  );
  scene.add(labtext.mesh);
  meshs.push(labtext);
  meshs.push(labtext);
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
  meshs.push(fro1text);
  meshs.push(fro1text);
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
  rooms.push(path);

  // 创建病理室室文字精灵
  const pathtext = new SpriteCanvas(
    camera,
    "病理室",
    new THREE.Vector3(-4, 0, 1.3)
  );
  scene.add(pathtext.mesh);
  meshs.push(pathtext);
  meshs.push(pathtext);
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
  meshs.push(fro2text);
  meshs.push(fro2text);
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
  rooms.push(con);

  // 创建诊室文字精灵
  const context = new SpriteCanvas(
    camera,
    "诊室",
    new THREE.Vector3(-3, 0, -0.5)
  );
  scene.add(context.mesh);
  meshs.push(context);
  meshs.push(context);
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
  meshs.push(fro3text);
  meshs.push(fro3text);
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
  rooms.push(imm);

  // 创建免疫室室文字精灵
  const immtext = new SpriteCanvas(
    camera,
    "免疫室",
    new THREE.Vector3(3.5, 0, -1.5)
  );
  scene.add(immtext.mesh);
  meshs.push(immtext);
  meshs.push(immtext);
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
  meshs.push(fro4text);
  meshs.push(fro4text);
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
  rooms.push(psur);

  // 创建手术准备室室文字精灵
  const psurtext = new SpriteCanvas(
    camera,
    "手术准备室",
    new THREE.Vector3(3, 10, 7.5)
  );
  scene.add(psurtext.mesh);
  meshs.push(psurtext);
  meshs.push(psurtext);
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
  meshs.push(fro5text);
  meshs.push(fro5text);
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
  rooms.push(dis);

  // 创建处理室室文字精灵
  const distext = new SpriteCanvas(
    camera,
    "处理室",
    new THREE.Vector3(8, 10, 16)
  );
  scene.add(distext.mesh);
  meshs.push(distext);
  meshs.push(distext);
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
  meshs.push(fro6text);
  meshs.push(fro6text);
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
  rooms.push(imp);

  // 创建住院室文字精灵
  const imptext = new SpriteCanvas(
    camera,
    "住院室",
    new THREE.Vector3(-1, 10, 7)
  );
  scene.add(imptext.mesh);
  meshs.push(imptext);
  meshs.push(imptext);
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
  meshs.push(fro7text);
  meshs.push(fro7text);
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
  rooms.push(sur);

  // 创建手术室文字精灵
  const surtext = new SpriteCanvas(
    camera,
    "手术室",
    new THREE.Vector3(-4, 10, 19)
  );
  scene.add(surtext.mesh);
  meshs.push(surtext);
  meshs.push(surtext);
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
  meshs.push(fro8text);
  meshs.push(fro8text);
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
  rooms.push(phar);

  // 创建药房文字精灵
  const phartext = new SpriteCanvas(
    camera,
    "药房",
    new THREE.Vector3(-2, 10, 32)
  );
  scene.add(phartext.mesh);
  meshs.push(phartext);
  meshs.push(phartext);
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
  meshs.push(fro9text);
  meshs.push(fro9text);
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
  rooms.push(spec);

  // 创建专科室文字精灵
  const spectext = new SpriteCanvas(
    camera,
    "专科诊室",
    new THREE.Vector3(8, 10, 38.5)
  );
  scene.add(spectext.mesh);
  meshs.push(spectext);
  meshs.push(spectext);
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
  meshs.push(fro10text);
  meshs.push(fro10text);
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
  rooms.push(ima);

  // 创建影像室室文字精灵
  const imatext = new SpriteCanvas(
    camera,
    "影像室",
    new THREE.Vector3(5, 0, 12)
  );
  scene.add(imatext.mesh);
  meshs.push(imatext);
  meshs.push(imatext);
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
  meshs.push(fro11text);
  meshs.push(fro11text);
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
  meshs.push(fro12text);
  meshs.push(fro12text);
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

  // 创建档案室
  let arcPosition = new THREE.Vector3(10, 20, 10);
  let arcIndex = 66;
  let arcUrl = "./img/arc/";
  let arcEuler = new THREE.Euler(0, -Math.PI / 2, 0);
  const arc = new Room("档案室", arcIndex, arcUrl, arcPosition, arcEuler);
  rooms.push(arc);

  // 创建影像室室文字精灵
  const arctext = new SpriteCanvas(
    camera,
    "档案室",
    new THREE.Vector3(3, 11, 1)
  );
  scene.add(arctext.mesh);
  meshs.push(arctext);
  meshs.push(arctext);
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
    new THREE.Vector3(10, 20, 8)
  );
  scene.add(fro13text.mesh);
  meshs.push(fro13text);
  meshs.push(fro13text);
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

  // camera.position.set(rooms[0].position.x,rooms[0].position.y,rooms[0].position.z);
  checkForQueryParam(rooms);
 

  //创建前台流程
  const desk = new SpriteCanvas(
    camera,
    "前台详情",
    new THREE.Vector3(-1, 0, 4)
  );
  scene.add(desk.mesh);
  meshs.push(desk);
  meshs.push(desk);

  desk.onClick(() => {
    createVideoEle(frontdeskItem.itemURL, frontdeskItem.itemDetail);
  });

  //创建手术刀流程
  const surgeryknife = new SpriteCanvas(
    camera,
    "手术刀",
    new THREE.Vector3(-5, 9.5, 34)
  );
  scene.add(surgeryknife.mesh);
  meshs.push(surgeryknife);
  meshs.push(surgeryknife);

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
  meshs.push(labdesk);
  meshs.push(labdesk);

  // 点击化验台时弹出视频框
  labdesk.onClick(() => {
    createVideoEle(labdeskItem.itemURL, labdeskItem.itemDetail);
  });

  //创建影像台流程
  const film = new SpriteCanvas(
    camera,
    "CT检查",
    new THREE.Vector3(12, 0, 18)
  );
  scene.add(film.mesh);
  meshs.push(film);
  meshs.push(film);

  // 点击影像台时弹出视频框
  film.onClick(() => {
    createVideoEle(filmItem.itemURL, filmItem.itemDetail);
  });

  //创建手术台流程
  const surgerydesk = new SpriteCanvas(
    camera,
    "手术操控台",
    new THREE.Vector3(-5, 9.5, 32)
  );
  scene.add(surgerydesk.mesh);
  meshs.push(surgerydesk);
  meshs.push(surgerydesk);
  // 点击手术仪器时弹出视频框
  surgerydesk.onClick(() => {
    createVideoEle(surgerydeskItem.itemURL, surgerydeskItem.itemDetail);
  });


  //创建手术仪器流程
  const surgeryEquipment = new SpriteCanvas(
    camera,
    "手术实践",
    new THREE.Vector3(-7, 9.5, 32)
  );
  scene.add(surgeryEquipment.mesh);
  meshs.push(surgeryEquipment);
  meshs.push(surgeryEquipment);

  // 点击手术仪器时弹出视频框
  surgeryEquipment.onClick(() => {
    createVideoEle(surgeryEquipmentItem.itemURL, surgeryEquipmentItem.itemDetail);
  });

  //创建免疫室流程
  const immRoom = new SpriteCanvas(
    camera,
    "免疫室详情",
    new THREE.Vector3(8, -1, -5)
  );
  scene.add(immRoom.mesh);
  meshs.push(immRoom);
  meshs.push(immRoom);

  // 点击免疫室时弹出视频框
  immRoom.onClick(() => {
    createVideoEle(immItem.itemURL, immItem.itemDetail);
  });

  //创建病理室流程
  const pathRoom = new SpriteCanvas(
    camera,
    "病理室详情",
    new THREE.Vector3(-8, 0, 6)
  );
  scene.add(pathRoom.mesh);
  meshs.push(pathRoom);
  meshs.push(pathRoom);

  // 点击病理室时弹出视频框
  pathRoom.onClick(() => {
    createVideoEle(pathItem.itemURL, pathItem.itemDetail);
  });


  //创建诊室流程
  const consultRoom = new SpriteCanvas(
    camera,
    "诊室详情",
    new THREE.Vector3(-16, -1, -7)
  );
  scene.add(consultRoom.mesh);
  meshs.push(consultRoom);
  meshs.push(consultRoom);

  // 点击诊室时弹出视频框
  consultRoom.onClick(() => {
    createVideoEle(conItem.itemURL, conItem.itemDetail);
  });

  //创建动物仓标签
  const livingRoom = new SpriteCanvas(
    camera,
    "动物仓",
    new THREE.Vector3(-6, 10, 21)
  );
  scene.add(livingRoom.mesh);
  meshs.push(livingRoom);
  meshs.push(livingRoom);

  // 点击动物仓时弹出视频框
  livingRoom.onClick(() => {
    createVideoEle(livingItem.itemURL, livingItem.itemDetail);
  });

  //创建动物洗浴区标签
  const washingRoom = new SpriteCanvas(
    camera,
    "宠物洗浴区",
    new THREE.Vector3(-8, 10, 18)
  );
  scene.add(washingRoom.mesh);
  meshs.push(washingRoom);
  meshs.push(washingRoom);

  // 点击动物洗浴区时弹出视频框
  washingRoom.onClick(() => {
    createVideoEle(washingItem.itemURL, washingItem.itemDetail);
  });

  //创建药房详情标签
  const med = new SpriteCanvas(
    camera,
    "药房详情",
    new THREE.Vector3(2, 11, 42)
  );
  scene.add(med.mesh);
  meshs.push(med);
  meshs.push(med);

  // 点击药品时弹出视频框
  med.onClick(() => {
    createVideoEle(medItem.itemURL, medItem.itemDetail);
  });

  //创建称量仪器标签
  const medEquipment = new SpriteCanvas(
    camera,
    "称量仪器",
    new THREE.Vector3(2, 9.5, 40)
  );
  scene.add(medEquipment.mesh);
  meshs.push(medEquipment);
  meshs.push(medEquipment);

  // 点击称量仪器时弹出视频框
  medEquipment.onClick(() => {
    createVideoEle(weighItem.itemURL, weighItem.itemDetail);
  });

  //创建特殊诊室详情
  const specDetail = new SpriteCanvas(
    camera,
    "专诊详情",
    new THREE.Vector3(13, 10, 39)
  );
  scene.add(specDetail.mesh);
  meshs.push(specDetail);
  meshs.push(specDetail);

  // 点击特殊诊室时弹出视频框
  specDetail.onClick(() => {
    createVideoEle(specItem.itemURL, specItem.itemDetail);
  });

  //创建档案室详情
  const arcDetail = new SpriteCanvas(
    camera,
    "档案详情",
    new THREE.Vector3(9, 20, 9)
  );
  scene.add(arcDetail.mesh);
  meshs.push(arcDetail);
  meshs.push(arcDetail);
  // 点击档案室时弹出视频框
  arcDetail.onClick(() => {
    createVideoEle(archItem.itemURL, archItem.itemDetail);
  });

  //创建手术准备室详情
  const preDetail = new SpriteCanvas(
    camera,
    "准备室详情",
    new THREE.Vector3(6, 10, 18)
  );
  scene.add(preDetail.mesh);
  meshs.push(preDetail);
  meshs.push(preDetail);

  // 点击手术准备室时弹出视频框
  preDetail.onClick(() => {
    createVideoEle(preItem.itemURL, preItem.itemDetail);
  });

  //创建处理台详情
  const proDetail = new SpriteCanvas(
    camera,
    "处理台",
    new THREE.Vector3(13.8, 8.8, 10)
  );
  scene.add(proDetail.mesh);
  meshs.push(proDetail);
  meshs.push(proDetail);

  // 点击处理台时弹出视频框
  proDetail.onClick(() => {
    createVideoEle(proItem.itemURL, proItem.itemDetail);
  });

  //创建处理室设备详情
  const proEquipment = new SpriteCanvas(
    camera,
    "处理实践",
    new THREE.Vector3(16, 10.5, 9)
  );
  scene.add(proEquipment.mesh);
  meshs.push(proEquipment);
  meshs.push(proEquipment);

  // 点击处理台设备时弹出视频框
  proEquipment.onClick(() => {
    createVideoEle(proEquipItem.itemURL, proEquipItem.itemDetail);
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
          Authorization: `${localStorage.getItem('Token')}` // 替换为实际的身份验证 token
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
    this.position = position;
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
