import React, { Component, useRef, useMemo} from 'react';
import * as THREE from 'three';
import {Canvas, useRender} from 'react-three-fiber';

const random = (min, max) => {
  return Math.random() * (max-min) + min;
}

let imgpaths;

const imgRatio = [];

let mouse = {x: 0, y:0};

function LoadImages() {
      
  const img = [];

  for (let i = 0; i < imgpaths.length/2; i++) {
    // reference object
    const ref = useRef()
    

    // make texture
    const texture = useMemo(() => new THREE.TextureLoader().load(imgpaths[i]), [imgpaths[i]]);

    const scale = 1. + .05 * Math.sin(i);
    const range = 8.;
    const randX = random(-1. * range, range);
    const randY = random(-4., 4.);
    const randZ = random(-1*range, range);

    img.push(<mesh
      ref={ref}
      visible
      key={i}
      position={new THREE.Vector3(randX, randY, randZ)}
      geometry={new THREE.PlaneGeometry(scale, scale*imgRatio[i])}
      material={new THREE.MeshBasicMaterial({map: texture})}
    />);

    useRender(({gl, scene, camera}) => {
      const off = .0007*Math.sin(i*i + .001*Date.now());
      const pos = ref.current.position;
      ref.current.position.set(pos.x + off, pos.y + .1*i*off, pos.z);
      camera.rotation.y = THREE.Math.lerp(-Math.PI/4, Math.PI/4, mouse.x);
      camera.rotation.x = THREE.Math.lerp(-Math.PI/12, Math.PI/12, mouse.y);
      ref.current.lookAt(camera.position);
      gl.render(scene, camera)
    }, true);
  }

  return img;
}

document.onmousemove=(e) => {mouse.x = e.pageX/window.innerWidth; mouse.y = e.pageY/window.innerHeight;}

class Home extends Component {
  componentWillMount() {
    const req = require.context('../public/assets', true, /^\.\/.*\.jpg$/);

    imgpaths = req.keys().map(file => req(file));

    imgpaths.forEach((path) => {
      const i = new Image();
      let ratio;
      i.onload = () => {
        ratio = i.height / i.width;
        imgRatio.push(ratio);
      }
      i.src = path;
    });
  }
  render() {
    return (
      <div>

        <Canvas style={{zIndex: -1, position: 'fixed',top: 0, left: 0, width: window.innerWidth, height: window.innerHeight, overflow: 'hidden'}} >
          <LoadImages />
        </Canvas>

      </div>
    );
  }
}

export default Home;

/*

  onWindowResize();
  window.addEventListener('resize', onWindowResize, false);
  camera.aspect = window.innerWidth/window.innerHeight;

const onWindowResize = function(e) {
  renderer.setSize(window.innerWidth, window.innerHeight);
}

*/
