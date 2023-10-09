import { proxy } from 'valtio';

// can utilize these states within entire react application
const state = proxy({
    // intro = are we on homepage or not
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png'
});

export default state;