import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// ============================================================================
// 1. CHARACTER DEFINITIONS & ANIMATION MAPPING
// ============================================================================
const CHARACTER_CONFIGS = {
    chen: {
        id: 'chen',
        code: 'CHR_0005_CHEN',
        name: 'CHEN QUANYI',
        faction: 'ENDFIELD INDUSTRIES // SPECIALIST GUARD',
        weaponName: 'ASPIRANT SWORD (wpn_sword_0015)',
        shortWeapon: 'Aspirant Sword (0015)',
        comboDesc: '5-Hit Rapid Dual/Single Slash + Dash Attack',
        dashDesc: 'Forward Tactical Sprint Dash',
        totalAnimsText: '33 Core + 539 Archive Clips',
        desc: 'Pendekar pedang gesit dengan rangkaian kombo 5-tebasan cepat dan kemampuan Dash Attack kilat. Sangat efektif bermanuver di lorong-lorong Backrooms Level 1.',
        accentColor: '#00e5ff',
        scale: 0.62,
        urls: ['./assets/Chen/chen.glb?v=2', '../Chen/chen.glb?v=2'],
        animMap: {
            // Locomotion
            idle: 'A_actor_chen_battle_loop',
            relax_idle: 'A_actor_chen_relax_loop',
            walk: 'A_actor_girl_walk_loop',
            run: 'A_actor_girl_run_loop',
            sprint: 'A_actor_girl_sprint_loop',
            jump_start: 'A_actor_girl_idle_jump_start_l',
            fall_loop: 'A_actor_girl_fall_loop_l',
            jump_land: 'A_actor_girl_idle_jump_land_l',
            // Smooth Forward Dash
            dash: 'A_actor_chen_sprint_dash_l',
            dodge_b: 'A_actor_girl_battle_dodge_b_l_01',
            // Combat
            battle_idle: 'A_actor_chen_battle_loop',
            attack_1: 'A_actor_chen_battle_attack_01',
            attack_2: 'A_actor_chen_battle_attack_02',
            attack_3: 'A_actor_chen_battle_attack_03',
            attack_4: 'A_actor_chen_battle_attack_04',
            attack_5: 'A_actor_chen_battle_attack_05',
            dash_attack: 'A_actor_chen_battle_dash_attack',
            power_attack: 'A_actor_chen_battle_power_attack',
            skill: 'A_actor_chen_battle_normal_skill',
            combo_skill: 'A_actor_chen_battle_combo_skill',
            ult: 'A_actor_chen_battle_skill_ult',
            // UI Animations
            ui_overview_start: 'A_actor_chen_ui_overview_start',
            ui_overview_loop: 'A_actor_chen_ui_overview_loop',
            ui_to_weapon: 'A_actor_chen_ui_overview_to_weapon',
            ui_weapon_loop: 'A_actor_chen_ui_overview_weapon_loop',
            ui_to_equip: 'A_actor_chen_ui_overview_to_equip',
            ui_equip_loop: 'A_actor_chen_ui_overview_equip_loop',
            ui_to_skill: 'A_actor_chen_ui_overview_to_skill',
            ui_skill_loop: 'A_actor_chen_ui_overview_skill_loop',
            ui_to_relax: 'A_actor_chen_ui_idle_to_relax',
            ui_relax_loop: 'A_actor_chen_ui_relax_loop',
            ui_team_idle: 'A_actor_chen_uiteam_idle_01'
        }
    },
    laevatein: {
        id: 'laevatein',
        code: 'CHR_0016_LAEVAT',
        name: 'LAEVATEIN',
        faction: 'ENDFIELD INDUSTRIES // FLAME STRIKER',
        weaponName: 'LAEVATEIN CLAYMORE (wpn_claym_0006)',
        shortWeapon: 'Molten Claymore (0006)',
        comboDesc: '5-Hit Molten Greatsword Cleave + Dash Attack',
        dashDesc: 'Forward Flame Sprint Dash',
        totalAnimsText: '37 Core + 412 Archive Clips',
        desc: 'Operator berelemen api dengan pedang besar Laevatein. Setiap tebasan menghasilkan ayunan pedang besar yang kuat di lorong Backrooms.',
        accentColor: '#ff5522',
        scale: 0.62,
        urls: ['./assets/laevatein/laevatein.glb?v=2', '../laevatein/laevatein.glb?v=2'],
        animMap: {
            // Locomotion (uses A_actor_lady_* inside laevatein.glb)
            idle: 'A_actor_laevat_battle_loop',
            relax_idle: 'A_actor_lady_idle_loop',
            walk: 'A_actor_lady_walk_loop',
            run: 'A_actor_lady_run_loop',
            sprint: 'A_actor_lady_sprint_loop',
            jump_start: 'A_actor_lady_idle_jump_start_l',
            fall_loop: 'A_actor_lady_fall_loop_l',
            jump_land: 'A_actor_lady_idle_jump_land_l',
            // Smooth Forward Dash
            dash: 'A_actor_lady_sprint_dash_l',
            dodge_b: 'A_actor_lady_battle_dodge_b_l_01',
            // Combat
            battle_idle: 'A_actor_laevat_battle_loop',
            attack_1: 'A_actor_laevat_battle_attack_01',
            attack_2: 'A_actor_laevat_battle_attack_02',
            attack_3: 'A_actor_laevat_battle_attack_03',
            attack_4: 'A_actor_laevat_battle_attack_04',
            attack_5: 'A_actor_laevat_battle_attack_05',
            dash_attack: 'A_actor_laevat_battle_dash_attack',
            power_attack: 'A_actor_laevat_battle_power_attack',
            skill: 'A_actor_laevat_battle_normal_skill01',
            combo_skill: 'A_actor_laevat_battle_combo_skill',
            ult: 'A_actor_laevat_battle_skill_ult',
            // UI Animations
            ui_overview_start: 'A_actor_laevat_ui_overview_start',
            ui_overview_loop: 'A_actor_laevat_ui_overview_loop',
            ui_to_weapon: 'A_actor_laevat_ui_overview_to_weapon',
            ui_weapon_loop: 'A_actor_laevat_ui_overview_weapon_loop',
            ui_to_equip: 'A_actor_laevat_ui_overview_to_equip',
            ui_equip_loop: 'A_actor_laevat_ui_overview_equip_loop',
            ui_to_skill: 'A_actor_laevat_ui_overview_to_skill',
            ui_skill_loop: 'A_actor_laevat_ui_overview_skill_loop',
            ui_to_relax: 'A_actor_laevat_ui_idle_to_relax',
            ui_relax_loop: 'A_actor_laevat_ui_relax_loop',
            ui_team_idle: 'A_actor_laevat_uiteam_idle_01'
        }
    }
};

const LOOPING_ACTIONS = new Set([
    'idle', 'relax_idle', 'walk', 'run', 'sprint', 'fall_loop', 'battle_idle',
    'ui_overview_loop', 'ui_weapon_loop', 'ui_equip_loop',
    'ui_skill_loop', 'ui_relax_loop', 'ui_team_idle'
]);

// ============================================================================
// 2. PROCEDURAL SOUND SYNTHESIZER (Web Audio API)
// ============================================================================
class SoundFX {
    constructor() {
        this.ctx = null;
    }

    init() {
        if (!this.ctx) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (AudioCtx) this.ctx = new AudioCtx();
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    playSlash(comboStep = 1, isHeavy = false) {
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;

        const dur = isHeavy ? 0.30 : 0.17;
        const bufSize = Math.floor(this.ctx.sampleRate * dur);
        const buf = this.ctx.createBuffer(1, bufSize, this.ctx.sampleRate);
        const data = buf.getChannelData(0);
        for (let i = 0; i < bufSize; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufSize, 1.6);
        }
        const noise = this.ctx.createBufferSource();
        noise.buffer = buf;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        const baseFreq = isHeavy ? 420 : 650 + comboStep * 110;
        filter.frequency.setValueAtTime(baseFreq, now);
        filter.frequency.exponentialRampToValueAtTime(180, now + dur);
        filter.Q.value = 1.8;

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.28, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + dur);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);
        noise.start(now);
    }

    playDash() {
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const dur = 0.18;
        const bufSize = Math.floor(this.ctx.sampleRate * dur);
        const buf = this.ctx.createBuffer(1, bufSize, this.ctx.sampleRate);
        const data = buf.getChannelData(0);
        for (let i = 0; i < bufSize; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.sin((i / bufSize) * Math.PI);
        }
        const noise = this.ctx.createBufferSource();
        noise.buffer = buf;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'highpass';
        filter.frequency.setValueAtTime(450, now);
        filter.frequency.exponentialRampToValueAtTime(1600, now + dur);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.20, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + dur);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);
        noise.start(now);
    }

    playJump(isLand = false) {
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        if (isLand) {
            osc.frequency.setValueAtTime(125, now);
            osc.frequency.exponentialRampToValueAtTime(42, now + 0.12);
            gain.gain.setValueAtTime(0.20, now);
            gain.gain.exponentialRampToValueAtTime(0.005, now + 0.12);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now);
            osc.stop(now + 0.12);
        } else {
            osc.frequency.setValueAtTime(150, now);
            osc.frequency.exponentialRampToValueAtTime(310, now + 0.11);
            gain.gain.setValueAtTime(0.14, now);
            gain.gain.exponentialRampToValueAtTime(0.005, now + 0.11);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now);
            osc.stop(now + 0.11);
        }
    }

    playStep() {
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(95 + Math.random() * 25, now);
        osc.frequency.exponentialRampToValueAtTime(38, now + 0.06);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.06);
    }

    playUISelect() {
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(660, now);
        osc.frequency.setValueAtTime(990, now + 0.045);
        gain.gain.setValueAtTime(0.10, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.13);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.13);
    }
}

const sfx = new SoundFX();

// ============================================================================
// 3. SCENE, RENDERER, CAMERA & LIGHTING SETUP
// ============================================================================
const container = document.getElementById('canvas-container');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x18150d);
scene.fog = new THREE.FogExp2(0x1b180e, 0.048);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.06, 120);

const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;
container.appendChild(renderer.domElement);

// Warm Ambient + Hemisphere lighting for Backrooms Level 1
const ambientLight = new THREE.AmbientLight(0xfff8e7, 1.15);
scene.add(ambientLight);

const hemiLight = new THREE.HemisphereLight(0xfff6d6, 0x4a4025, 1.1);
hemiLight.position.set(0, 5, 0);
scene.add(hemiLight);

// Main shadow-casting light that follows the player inside the Backrooms
const playerKeyLight = new THREE.DirectionalLight(0xfff2c2, 1.25);
playerKeyLight.castShadow = true;
playerKeyLight.shadow.mapSize.width = 2048;
playerKeyLight.shadow.mapSize.height = 2048;
playerKeyLight.shadow.camera.near = 0.5;
playerKeyLight.shadow.camera.far = 15;
const shadowBounds = 4.5;
playerKeyLight.shadow.camera.left = -shadowBounds;
playerKeyLight.shadow.camera.right = shadowBounds;
playerKeyLight.shadow.camera.top = shadowBounds;
playerKeyLight.shadow.camera.bottom = -shadowBounds;
playerKeyLight.shadow.bias = -0.0005;
scene.add(playerKeyLight);
scene.add(playerKeyLight.target);

// Ceiling Fluorescent Point Lights distributed across the Backrooms corridors
const corridorLights = [];
const lightCoords = [
    [0, 2.52, 2.0],
    [0, 2.52, -3.5],
    [0, 2.52, 7.5],
    [-5.5, 2.52, 2.0],
    [5.5, 2.52, 2.0],
    [-5.5, 2.52, -4.5],
    [5.5, 2.52, -4.5],
    [-5.5, 2.52, 8.0],
    [5.5, 2.52, 8.0]
];
for (const [lx, ly, lz] of lightCoords) {
    const pl = new THREE.PointLight(0xffe89e, 1.2, 10.0, 1.5);
    pl.position.set(lx, ly, lz);
    scene.add(pl);
    corridorLights.push(pl);
}

// ============================================================================
// 4. GAME STATE, PHYSICS & COLLISION DATA
// ============================================================================
const wallMeshes = [];
const raycaster = new THREE.Raycaster();

// Player Anchor Group in World Space
const playerGroup = new THREE.Group();
const SPAWN_POS = new THREE.Vector3(0.0, 0.015, 2.0);
playerGroup.position.copy(SPAWN_POS);
scene.add(playerGroup);

// Loaded Character Registry
const characters = {};
let activeCharId = 'chen';
let currentActionName = '';

// Movement & Input State
const keys = {
    w: false, a: false, s: false, d: false,
    shift: false
};

const playerState = {
    vel: new THREE.Vector3(0, 0, 0),
    isGrounded: true,
    floorY: 0.015,
    ceilingY: 2.68,
    facingAngle: 0,
    // Action state machine: 'locomotion' | 'jump' | 'dash' | 'attack' | 'skill'
    mode: 'locomotion',
    actionTimer: 0,
    actionDuration: 0,
    // Combo system
    comboStep: 0,
    comboQueued: false,
    comboResetTimer: 0,
    // UI transition timer
    uiTransitionTimer: 0,
    uiPendingLoopKey: null,
    // Footstep timer
    stepTimer: 0
};

// Camera Orbit State (proportioned for 0.62 character scale inside 2.71m Backrooms)
const camState = {
    yaw: 0,
    pitch: 0.20,
    distance: 1.85,
    currentPos: new THREE.Vector3(0, 1.15, 3.85),
    currentLookAt: new THREE.Vector3(0, 0.82, 2.0),
    // UI Mode showcase rotation
    isUIMode: false,
    uiCharYaw: 0,
    isDraggingUI: false,
    lastMouseX: 0,
    currentUIPose: 'overview'
};

// ============================================================================
// 5. ASSET LOADING (BACKROOMS + CHEN QUANYI + LAEVATEIN)
// ============================================================================
const gltfLoader = new GLTFLoader();

function loadGLBWithFallback(urls, onProgress) {
    return new Promise((resolve, reject) => {
        let idx = 0;
        const tryNext = () => {
            if (idx >= urls.length) {
                reject(new Error(`Gagal memuat model dari: ${urls.join(', ')}`));
                return;
            }
            const url = urls[idx++];
            gltfLoader.load(
                url,
                (gltf) => resolve(gltf),
                onProgress,
                () => tryNext()
            );
        };
        tryNext();
    });
}

const loadingBar = document.getElementById('loading-bar');
const loadingPercent = document.getElementById('loading-percent');
const loadingStatus = document.getElementById('loading-status');
const loadingScreen = document.getElementById('loading-screen');

function setProgress(pct, statusText) {
    const clamped = Math.min(100, Math.round(pct));
    if (loadingBar) loadingBar.style.width = `${clamped}%`;
    if (loadingPercent) loadingPercent.textContent = `${clamped}%`;
    if (statusText && loadingStatus) loadingStatus.textContent = statusText;
}

async function initGame() {
    try {
        // 1. Load Backrooms Level 1 Environment
        setProgress(5, 'Memuat Environment BackroomLevel1Env.glb...');
        const backroomGLTF = await loadGLBWithFallback(
            ['./assets/BackroomLevel1Env.glb', '../BackroomLevel1Env.glb'],
            (e) => {
                if (e.total) setProgress(5 + (e.loaded / e.total) * 25);
            }
        );
        setupBackroomsEnvironment(backroomGLTF.scene);

        // 2. Load Chen Quanyi
        setProgress(32, 'Memuat Karakter 3D: CHEN QUANYI (chen.glb)...');
        const chenGLTF = await loadGLBWithFallback(
            CHARACTER_CONFIGS.chen.urls,
            (e) => {
                if (e.total) setProgress(32 + (e.loaded / e.total) * 33);
            }
        );
        setupCharacterModel('chen', chenGLTF);

        // 3. Load Laevatein
        setProgress(66, 'Memuat Karakter 3D: LAEVATEIN (laevatein.glb)...');
        const laevGLTF = await loadGLBWithFallback(
            CHARACTER_CONFIGS.laevatein.urls,
            (e) => {
                if (e.total) setProgress(66 + (e.loaded / e.total) * 32);
            }
        );
        setupCharacterModel('laevatein', laevGLTF);

        // 4. Activate initial character (Chen Quanyi)
        setProgress(100, 'Siap! Memasuki Backrooms Level 1...');
        switchCharacter('chen', { playUIAnim: false, playSound: false });

        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => loadingScreen.classList.add('hidden'), 500);
        }, 250);

        requestAnimationFrame(animate);
    } catch (err) {
        console.error(err);
        if (loadingStatus) {
            loadingStatus.textContent = `Error: ${err.message}`;
            loadingStatus.style.color = '#ff5252';
        }
    }
}

function setupBackroomsEnvironment(envScene) {
    envScene.updateMatrixWorld(true);

    envScene.traverse((child) => {
        if (!child.isMesh) return;

        const meshName = (child.name || '').toLowerCase();
        const parentName = (child.parent?.name || '').toLowerCase();
        const matName = (child.material?.name || '').toLowerCase();

        const oldMat = child.material;
        if (oldMat) {
            const isLightPanel = matName.includes('ceiling_light') || meshName.includes('mesh_11');
            const newMat = new THREE.MeshStandardMaterial({
                map: oldMat.map || null,
                color: oldMat.color ? oldMat.color.clone() : new THREE.Color(0xffffff),
                roughness: isLightPanel ? 0.2 : 0.85,
                metalness: 0.05,
                emissive: isLightPanel ? new THREE.Color(0xfff3b0) : new THREE.Color(0xffffff),
                emissiveMap: oldMat.map || null,
                emissiveIntensity: isLightPanel ? 2.2 : 0.32,
                side: THREE.DoubleSide
            });
            child.material = newMat;
        }

        child.receiveShadow = true;

        if (
            parentName.includes('piece1') ||
            parentName.includes('backwall') ||
            matName.includes('wallpaper') ||
            matName.includes('plinth') ||
            matName.includes('panel')
        ) {
            child.castShadow = true;
            wallMeshes.push(child);
        }
    });

    scene.add(envScene);
}

// ============================================================================
// 6. ANIME SHADING & CHARACTER MODEL SETUP
// ============================================================================
function applyAnimeMaterialFixes(mesh) {
    const meshName = (mesh.name || '').toLowerCase();
    const parentName = (mesh.parent?.name || '').toLowerCase();

    // Hide Unity NPR mask/proxy meshes that have RGB-only textures (no alpha channel)
    // and would otherwise render as opaque grey blocks over the forehead and eyes.
    if (
        meshName.includes('hairshadow') ||
        meshName.includes('eyeshadow') ||
        meshName.includes('eyewhiteshadow') ||
        meshName.includes('_hs_') ||
        meshName.includes('shadowproxy') ||
        parentName.includes('shadowproxy')
    ) {
        mesh.visible = false;
        return;
    }

    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    const updatedMats = mats.map((mat) => {
        if (!mat) return mat;
        const matName = (mat.name || '').toLowerCase();

        // Hide if material itself is a shadow mask pass
        if (
            matName.includes('hairshadow') ||
            matName.includes('eyeshadow') ||
            matName.includes('eyewhiteshadow')
        ) {
            mesh.visible = false;
            return mat;
        }

        // Convert to crisp Anime NPR shading:
        // Use flat, high-roughness diffuse + strong self-illumination from the base texture
        // so skin, face, eyes, hair, and outfit look vibrant and cel-shaded in the Backrooms.
        const isFaceOrEye = (
            matName.includes('face') ||
            matName.includes('iris') ||
            matName.includes('brow') ||
            matName.includes('eye') ||
            matName.includes('body')
        );
        const isBrow = matName.includes('brow');
        const isCutoutCloth = matName.includes('cloth') || matName.includes('skirt') || matName.includes('plush');

        mat.roughness = 0.92;
        mat.metalness = 0.0;
        mat.side = THREE.DoubleSide;

        if (mat.map) {
            mat.map.colorSpace = THREE.SRGBColorSpace;
            mat.emissive = new THREE.Color(0xffffff);
            mat.emissiveMap = mat.map;
            mat.emissiveIntensity = isFaceOrEye ? 0.78 : 0.65;
        }

        if (isBrow) {
            mat.transparent = true;
            mat.alphaTest = 0.35;
            mat.depthWrite = false;
        } else if (isCutoutCloth) {
            mat.transparent = false;
            mat.alphaTest = 0.4;
            mat.depthWrite = true;
        } else {
            mat.transparent = false;
            mat.depthWrite = true;
        }

        mat.needsUpdate = true;
        return mat;
    });

    mesh.material = Array.isArray(mesh.material) ? updatedMats : updatedMats[0];
}

function setupCharacterModel(charId, gltf) {
    const config = CHARACTER_CONFIGS[charId];
    const modelRoot = gltf.scene;
    modelRoot.scale.setScalar(config.scale);

    modelRoot.traverse((child) => {
        const nameLower = (child.name || '').toLowerCase();
        if (nameLower.includes('shadowproxy')) {
            child.visible = false;
            return;
        }
        if (child.isMesh || child.isSkinnedMesh) {
            child.castShadow = true;
            // Disable self-shadowing on anime characters to keep face/body shading clean
            child.receiveShadow = false;
            child.frustumCulled = false;
            applyAnimeMaterialFixes(child);
        }
    });

    const mixer = new THREE.AnimationMixer(modelRoot);
    const clipLookup = {};
    for (const clip of gltf.animations) {
        clipLookup[clip.name] = clip;
    }

    const actions = {};
    for (const [logicalKey, clipName] of Object.entries(config.animMap)) {
        const clip = clipLookup[clipName];
        if (clip) {
            const action = mixer.clipAction(clip);
            if (LOOPING_ACTIONS.has(logicalKey)) {
                action.setLoop(THREE.LoopRepeat, Infinity);
            } else {
                action.setLoop(THREE.LoopOnce, 1);
                action.clampWhenFinished = true;
            }
            actions[logicalKey] = action;
        }
    }

    modelRoot.visible = false;
    playerGroup.add(modelRoot);

    characters[charId] = {
        id: charId,
        config,
        group: modelRoot,
        mixer,
        actions
    };
}

// ============================================================================
// 7. ANIMATION CONTROLLER (CLEAN CROSSFADE WITHOUT T-POSE SNAPPING)
// ============================================================================
function switchAnimation(actionKey, { fadeDuration = 0.16, timeScale = 1.0, forceRestart = false } = {}) {
    const charObj = characters[activeCharId];
    if (!charObj) return null;

    const nextAction = charObj.actions[actionKey];
    if (!nextAction) return null;

    if (currentActionName === actionKey && !forceRestart) {
        nextAction.timeScale = timeScale;
        return nextAction;
    }

    const prevAction = charObj.actions[currentActionName];
    nextAction.reset();
    nextAction.setEffectiveTimeScale(timeScale);
    nextAction.setEffectiveWeight(1);
    nextAction.play();

    if (prevAction && prevAction !== nextAction) {
        prevAction.crossFadeTo(nextAction, fadeDuration, false);
    }

    currentActionName = actionKey;

    const uiClipEl = document.getElementById('ui-current-clip-name');
    if (uiClipEl) {
        const rawClipName = charObj.config.animMap[actionKey] || actionKey;
        uiClipEl.textContent = rawClipName;
    }

    return nextAction;
}

function switchCharacter(targetCharId, { playUIAnim = false, playSound = true } = {}) {
    if (!characters[targetCharId]) return;

    for (const [id, obj] of Object.entries(characters)) {
        obj.group.visible = (id === targetCharId);
        if (id !== targetCharId && obj.mixer) {
            obj.mixer.stopAllAction();
        }
    }

    activeCharId = targetCharId;
    currentActionName = '';
    const cfg = CHARACTER_CONFIGS[targetCharId];

    // Reset transient combat state
    playerState.comboStep = 0;
    playerState.comboQueued = false;
    playerState.actionTimer = 0;
    playerState.actionDuration = 0;
    playerState.uiTransitionTimer = 0;
    playerState.uiPendingLoopKey = null;

    if (playSound) {
        sfx.playUISelect();
    }

    if (camState.isUIMode || playUIAnim) {
        setActivePoseTabUI('overview');
        camState.currentUIPose = 'overview';
        playUIPose('overview', true);
    } else {
        playerState.mode = 'locomotion';
        switchAnimation('idle', { fadeDuration: 0.15, forceRestart: true });
    }

    updateCharacterHUDAndDossier(cfg);
}

function updateCharacterHUDAndDossier(cfg) {
    // Top-right Squad Pills
    document.getElementById('squad-slot-chen')?.classList.toggle('active', cfg.id === 'chen');
    document.getElementById('squad-slot-laevat')?.classList.toggle('active', cfg.id === 'laevatein');

    // 3D Character UI Modal Cards & Dossier
    document.getElementById('ui-card-chen')?.classList.toggle('active', cfg.id === 'chen');
    document.getElementById('ui-card-laevat')?.classList.toggle('active', cfg.id === 'laevatein');

    const badgeChen = document.getElementById('badge-deployed-chen');
    const badgeLaev = document.getElementById('badge-deployed-laevat');
    if (badgeChen) badgeChen.textContent = cfg.id === 'chen' ? 'ACTIVE' : 'STANDBY';
    if (badgeLaev) badgeLaev.textContent = cfg.id === 'laevatein' ? 'ACTIVE' : 'STANDBY';

    const dId = document.getElementById('ui-dossier-id');
    const dName = document.getElementById('ui-dossier-name');
    const dFac = document.getElementById('ui-dossier-faction');
    const dDesc = document.getElementById('ui-dossier-desc');
    const sWpn = document.getElementById('ui-stat-weapon');
    const sCmb = document.getElementById('ui-stat-combo');
    const sDsh = document.getElementById('ui-stat-dash');
    const sAnm = document.getElementById('ui-stat-anims');

    if (dId) dId.textContent = `OPERATOR FILE // ${cfg.code}`;
    if (dName) dName.textContent = cfg.name;
    if (dFac) dFac.textContent = cfg.faction;
    if (dDesc) dDesc.textContent = cfg.desc;
    if (sWpn) sWpn.textContent = cfg.shortWeapon;
    if (sCmb) sCmb.textContent = cfg.comboDesc;
    if (sDsh) sDsh.textContent = cfg.dashDesc;
    if (sAnm) sAnm.textContent = cfg.totalAnimsText;
}

// ============================================================================
// 8. 3D CHARACTER SWITCH UI SHOWCASE MODE (C KEY)
// ============================================================================
const charUIModal = document.getElementById('char-ui-modal');
const fieldHud = document.getElementById('field-hud');

function openCharacterUI() {
    if (camState.isUIMode) return;
    camState.isUIMode = true;
    camState.uiCharYaw = 0;

    if (document.pointerLockElement) {
        document.exitPointerLock();
    }

    fieldHud.classList.add('hidden');
    charUIModal.classList.remove('hidden');

    // Stop any ongoing field movement
    keys.w = keys.a = keys.s = keys.d = keys.shift = false;
    playerState.vel.set(0, 0, 0);
    playerState.mode = 'locomotion';

    sfx.playUISelect();
    setActivePoseTabUI('overview');
    camState.currentUIPose = 'overview';
    playUIPose('overview', true);
}

function closeCharacterUI() {
    if (!camState.isUIMode) return;
    camState.isUIMode = false;
    camState.uiCharYaw = 0;
    playerState.uiTransitionTimer = 0;
    playerState.uiPendingLoopKey = null;

    const charObj = characters[activeCharId];
    if (charObj) {
        charObj.group.rotation.y = 0;
    }

    charUIModal.classList.add('hidden');
    fieldHud.classList.remove('hidden');

    sfx.playUISelect();
    playerState.mode = 'locomotion';
    switchAnimation('idle', { fadeDuration: 0.18, forceRestart: true });

    try {
        container.requestPointerLock?.();
    } catch (_) { /* ignore */ }
}

function toggleCharacterUI() {
    if (camState.isUIMode) {
        closeCharacterUI();
    } else {
        openCharacterUI();
    }
}

function setActivePoseTabUI(poseKey) {
    document.querySelectorAll('.pose-tab').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.pose === poseKey);
    });
}

function playUIPose(poseKey, playTransition = true) {
    const charObj = characters[activeCharId];
    if (!charObj) return;
    camState.currentUIPose = poseKey;
    setActivePoseTabUI(poseKey);

    const transitions = {
        overview: ['ui_overview_start', 'ui_overview_loop'],
        weapon: ['ui_to_weapon', 'ui_weapon_loop'],
        equip: ['ui_to_equip', 'ui_equip_loop'],
        skill: ['ui_to_skill', 'ui_skill_loop'],
        relax: ['ui_to_relax', 'ui_relax_loop'],
        team: [null, 'ui_team_idle']
    };

    const [startKey, loopKey] = transitions[poseKey] || [null, 'ui_overview_loop'];
    if (playTransition && startKey && charObj.actions[startKey]) {
        const act = switchAnimation(startKey, { fadeDuration: 0.16, forceRestart: true });
        const dur = act ? act.getClip().duration : 0.8;
        playerState.uiTransitionTimer = Math.max(0.2, dur - 0.12);
        playerState.uiPendingLoopKey = loopKey;
    } else {
        playerState.uiTransitionTimer = 0;
        playerState.uiPendingLoopKey = null;
        switchAnimation(loopKey, { fadeDuration: 0.2, forceRestart: true });
    }
}

// ============================================================================
// 9. COMBAT (LEFT CLICK ATTACK) & DASH (RIGHT CLICK) HANDLERS
// ============================================================================
function flashActionSlot(slotId) {
    const el = document.getElementById(slotId);
    if (!el) return;
    el.classList.add('triggered');
    setTimeout(() => el.classList.remove('triggered'), 160);
}

function showComboPopup(step, labelText) {
    const comboDisplay = document.getElementById('combo-display');
    const comboNum = document.getElementById('combo-number');
    const comboTag = document.getElementById('combo-anim-tag');
    if (!comboDisplay || !comboNum || !comboTag) return;

    comboDisplay.classList.remove('hidden');
    comboNum.textContent = step;
    comboTag.textContent = labelText;
    playerState.comboResetTimer = 2.2;
}

function getDesiredMoveDirection() {
    const moveZ = (keys.w ? 1 : 0) - (keys.s ? 1 : 0);
    const moveX = (keys.d ? 1 : 0) - (keys.a ? 1 : 0);
    if (moveZ === 0 && moveX === 0) return null;

    const forward = new THREE.Vector3(-Math.sin(camState.yaw), 0, -Math.cos(camState.yaw));
    const right = new THREE.Vector3(Math.cos(camState.yaw), 0, -Math.sin(camState.yaw));
    return new THREE.Vector3()
        .addScaledVector(forward, moveZ)
        .addScaledVector(right, moveX)
        .normalize();
}

// LEFT CLICK -> Attack Combo (1..5) or Dash Attack
function handleAttackInput() {
    if (camState.isUIMode) return;

    const charObj = characters[activeCharId];
    if (!charObj) return;

    flashActionSlot('slot-lmb');

    const inputDir = getDesiredMoveDirection();
    if (inputDir) {
        playerState.facingAngle = Math.atan2(inputDir.x, inputDir.z);
        playerGroup.rotation.y = playerState.facingAngle;
    }

    // If currently Dashing (or Sprinting fast), Left Click triggers DASH ATTACK
    if (playerState.mode === 'dash' || (playerState.mode === 'locomotion' && keys.shift && inputDir)) {
        if (charObj.actions.dash_attack) {
            playerState.mode = 'attack';
            playerState.comboStep = 1;
            playerState.comboQueued = false;

            const act = switchAnimation('dash_attack', { fadeDuration: 0.08, timeScale: 1.12, forceRestart: true });
            const clipDur = act ? act.getClip().duration / 1.12 : 0.65;
            playerState.actionTimer = 0;
            playerState.actionDuration = clipDur * 0.80;

            playerState.vel.x = Math.sin(playerState.facingAngle) * 4.2;
            playerState.vel.z = Math.cos(playerState.facingAngle) * 4.2;

            sfx.playSlash(3, true);
            showComboPopup('DASH', 'DASH ATTACK');
            return;
        }
    }

    // If already in an attack, queue or advance to the next combo hit
    if (playerState.mode === 'attack') {
        if (playerState.actionTimer > playerState.actionDuration * 0.42) {
            playerState.comboQueued = false;
            executeNextComboAttack();
        } else {
            playerState.comboQueued = true;
        }
        return;
    }

    if (playerState.comboResetTimer <= 0) {
        playerState.comboStep = 0;
    }
    executeNextComboAttack();
}

function executeNextComboAttack() {
    const charObj = characters[activeCharId];
    if (!charObj) return;

    const inputDir = getDesiredMoveDirection();
    if (inputDir) {
        playerState.facingAngle = Math.atan2(inputDir.x, inputDir.z);
        playerGroup.rotation.y = playerState.facingAngle;
    }

    playerState.comboStep = (playerState.comboStep % 5) + 1;
    const step = playerState.comboStep;
    const actionKey = `attack_${step}`;

    playerState.mode = 'attack';
    playerState.comboQueued = false;

    const speedMult = step === 5 ? 1.10 : 1.18;
    const act = switchAnimation(actionKey, { fadeDuration: 0.08, timeScale: speedMult, forceRestart: true });
    const rawDur = act ? act.getClip().duration / speedMult : 0.60;

    playerState.actionTimer = 0;
    playerState.actionDuration = rawDur * (step === 5 ? 0.80 : 0.66);

    const lungeSpeed = step === 5 ? 3.2 : 1.9;
    playerState.vel.x = Math.sin(playerState.facingAngle) * lungeSpeed;
    playerState.vel.z = Math.cos(playerState.facingAngle) * lungeSpeed;

    sfx.playSlash(step, step === 5);
    showComboPopup(step, `ATTACK 0${step}`);
}

// RIGHT CLICK -> Clean Forward Dash (No exploding particles)
function handleDashInput() {
    if (camState.isUIMode) return;

    const charObj = characters[activeCharId];
    if (!charObj) return;

    flashActionSlot('slot-rmb');

    const inputDir = getDesiredMoveDirection();
    if (inputDir) {
        playerState.facingAngle = Math.atan2(inputDir.x, inputDir.z);
        playerGroup.rotation.y = playerState.facingAngle;
    }

    playerState.mode = 'dash';
    playerState.comboQueued = false;

    const dashSpeed = 6.2;
    playerState.vel.x = Math.sin(playerState.facingAngle) * dashSpeed;
    playerState.vel.z = Math.cos(playerState.facingAngle) * dashSpeed;

    const act = switchAnimation('dash', { fadeDuration: 0.06, timeScale: 1.15, forceRestart: true });
    const rawDur = act ? act.getClip().duration / 1.15 : 0.45;
    playerState.actionTimer = 0;
    playerState.actionDuration = Math.min(0.42, rawDur * 0.78);

    sfx.playDash();
}

// Special Skills (E = Normal Skill, F = Combo Skill, Q = Ultimate, R = Power Attack)
function handleSpecialSkill(skillKey, labelText, slotId) {
    if (camState.isUIMode) return;
    const charObj = characters[activeCharId];
    if (!charObj || !charObj.actions[skillKey]) return;

    if (slotId) flashActionSlot(slotId);

    const inputDir = getDesiredMoveDirection();
    if (inputDir) {
        playerState.facingAngle = Math.atan2(inputDir.x, inputDir.z);
        playerGroup.rotation.y = playerState.facingAngle;
    }

    playerState.mode = 'skill';
    playerState.comboQueued = false;

    const act = switchAnimation(skillKey, { fadeDuration: 0.10, timeScale: 1.08, forceRestart: true });
    const rawDur = act ? act.getClip().duration / 1.08 : 1.0;
    playerState.actionTimer = 0;
    playerState.actionDuration = rawDur * 0.80;

    playerState.vel.x = Math.sin(playerState.facingAngle) * 2.5;
    playerState.vel.z = Math.cos(playerState.facingAngle) * 2.5;

    sfx.playSlash(5, true);
    showComboPopup('SKILL', labelText);
}

// SPACEBAR -> Jump
function handleJumpInput() {
    if (camState.isUIMode) return;
    if (!playerState.isGrounded) return;

    playerState.isGrounded = false;
    playerState.vel.y = 4.4;
    playerState.mode = 'jump';

    sfx.playJump(false);
    switchAnimation('jump_start', { fadeDuration: 0.08, timeScale: 1.1, forceRestart: true });
}

// ============================================================================
// 10. WALL COLLISION & SMOOTH VELOCITY LOCOMOTION
// ============================================================================
const COLLISION_RAYS = [
    new THREE.Vector3(0, 0, 1),
    new THREE.Vector3(0, 0, -1),
    new THREE.Vector3(1, 0, 0),
    new THREE.Vector3(-1, 0, 0),
    new THREE.Vector3(0.7071, 0, 0.7071),
    new THREE.Vector3(-0.7071, 0, 0.7071),
    new THREE.Vector3(0.7071, 0, -0.7071),
    new THREE.Vector3(-0.7071, 0, -0.7071)
];

function moveWithWallCollisions(dx, dz) {
    if (dx * dx + dz * dz < 1e-9) return;

    const playerRadius = 0.28;
    const targetPos = playerGroup.position.clone();
    targetPos.x = THREE.MathUtils.clamp(targetPos.x + dx, -12.3, 12.2);
    targetPos.z = THREE.MathUtils.clamp(targetPos.z + dz, -12.9, 14.4);

    if (wallMeshes.length > 0) {
        const origin = new THREE.Vector3(targetPos.x, targetPos.y + 0.55, targetPos.z);
        for (const dir of COLLISION_RAYS) {
            raycaster.set(origin, dir);
            raycaster.far = playerRadius;
            const hits = raycaster.intersectObjects(wallMeshes, false);
            if (hits.length > 0 && hits[0].distance < playerRadius) {
                const pushBack = playerRadius - hits[0].distance;
                targetPos.x -= dir.x * pushBack;
                targetPos.z -= dir.z * pushBack;
                origin.set(targetPos.x, targetPos.y + 0.55, targetPos.z);
            }
        }
    }

    playerGroup.position.x = targetPos.x;
    playerGroup.position.z = targetPos.z;
}

function updatePlayerPhysics(dt) {
    // 1. In 3D Character UI Showcase Mode
    if (camState.isUIMode) {
        const charObj = characters[activeCharId];
        if (charObj) {
            charObj.group.rotation.y = camState.uiCharYaw;
        }
        if (playerState.uiTransitionTimer > 0) {
            playerState.uiTransitionTimer -= dt;
            if (playerState.uiTransitionTimer <= 0 && playerState.uiPendingLoopKey) {
                const loopKey = playerState.uiPendingLoopKey;
                playerState.uiPendingLoopKey = null;
                switchAnimation(loopKey, { fadeDuration: 0.22 });
            }
        }
        return;
    }

    // 2. Combo popup reset timer
    if (playerState.comboResetTimer > 0) {
        playerState.comboResetTimer -= dt;
        if (playerState.comboResetTimer <= 0) {
            playerState.comboStep = 0;
            document.getElementById('combo-display')?.classList.add('hidden');
        }
    }

    // 3. Vertical Jump & Gravity Physics
    if (!playerState.isGrounded) {
        playerState.vel.y -= 12.5 * dt;
        playerGroup.position.y += playerState.vel.y * dt;

        if (playerState.vel.y < -0.4 && currentActionName !== 'fall_loop') {
            switchAnimation('fall_loop', { fadeDuration: 0.14 });
        }

        if (playerGroup.position.y <= playerState.floorY) {
            playerGroup.position.y = playerState.floorY;
            playerState.vel.y = 0;
            playerState.isGrounded = true;
            sfx.playJump(true);

            const inputDir = getDesiredMoveDirection();
            playerState.mode = 'locomotion';
            if (inputDir) {
                switchAnimation(keys.shift ? 'sprint' : 'run', { fadeDuration: 0.12 });
            } else {
                switchAnimation('idle', { fadeDuration: 0.16 });
            }
        }
    }

    // 4. Active Dash / Attack / Skill Timer & Impulse Decay
    if (playerState.mode === 'dash' || playerState.mode === 'attack' || playerState.mode === 'skill') {
        playerState.actionTimer += dt;

        // Apply friction to horizontal impulse velocity
        const friction = playerState.mode === 'dash' ? 7.5 : 10.5;
        playerState.vel.x -= playerState.vel.x * Math.min(1, friction * dt);
        playerState.vel.z -= playerState.vel.z * Math.min(1, friction * dt);

        moveWithWallCollisions(playerState.vel.x * dt, playerState.vel.z * dt);

        const inputDir = getDesiredMoveDirection();
        const canCancelEarly = (
            playerState.mode === 'attack' &&
            !playerState.comboQueued &&
            inputDir &&
            playerState.actionTimer > playerState.actionDuration * 0.78
        );

        if (playerState.actionTimer >= playerState.actionDuration || canCancelEarly) {
            if (playerState.mode === 'attack' && playerState.comboQueued) {
                playerState.comboQueued = false;
                executeNextComboAttack();
                return;
            }
            playerState.mode = 'locomotion';
        } else {
            return;
        }
    }

    // 5. Smooth WASD Locomotion (Run / Sprint / Idle)
    const inputDir = getDesiredMoveDirection();
    const isSprinting = keys.shift;
    const maxSpeed = isSprinting ? 4.4 : 2.75;

    if (inputDir) {
        // Smoothly rotate character towards movement direction
        const targetAngle = Math.atan2(inputDir.x, inputDir.z);
        let angleDiff = targetAngle - playerState.facingAngle;
        while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
        while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
        playerState.facingAngle += angleDiff * Math.min(1, dt * 14);
        playerGroup.rotation.y = playerState.facingAngle;

        const accel = 14.0;
        playerState.vel.x += (inputDir.x * maxSpeed - playerState.vel.x) * Math.min(1, accel * dt);
        playerState.vel.z += (inputDir.z * maxSpeed - playerState.vel.z) * Math.min(1, accel * dt);

        if (playerState.isGrounded) {
            playerState.stepTimer += dt * (isSprinting ? 1.45 : 1.0);
            if (playerState.stepTimer >= 0.34) {
                playerState.stepTimer = 0;
                sfx.playStep();
            }
        }
    } else {
        const friction = 12.0;
        playerState.vel.x -= playerState.vel.x * Math.min(1, friction * dt);
        playerState.vel.z -= playerState.vel.z * Math.min(1, friction * dt);
        playerState.stepTimer = 0.25;
    }

    moveWithWallCollisions(playerState.vel.x * dt, playerState.vel.z * dt);

    // Choose clean locomotion animation based on horizontal speed & input
    if (playerState.isGrounded && playerState.mode === 'locomotion') {
        const horizSpeed = Math.hypot(playerState.vel.x, playerState.vel.z);
        if (!inputDir && horizSpeed < 0.35) {
            switchAnimation('idle', { fadeDuration: 0.18 });
        } else if (isSprinting) {
            switchAnimation('sprint', { fadeDuration: 0.16, timeScale: 1.05 });
        } else {
            switchAnimation('run', { fadeDuration: 0.16, timeScale: 1.05 });
        }
    }
}

// ============================================================================
// 11. CAMERA CONTROLLER (PROPORTIONED FOR 0.62 SCALE IN BACKROOMS)
// ============================================================================
function updateCamera(dt) {
    const p = playerGroup.position;

    if (camState.isUIMode) {
        const frontAngle = playerState.facingAngle;
        const camDist = 1.38;
        const desiredCamPos = new THREE.Vector3(
            p.x + Math.sin(frontAngle) * camDist,
            p.y + 0.72,
            p.z + Math.cos(frontAngle) * camDist
        );
        const desiredLookAt = new THREE.Vector3(
            p.x,
            p.y + 0.66,
            p.z
        );

        camState.currentPos.lerp(desiredCamPos, Math.min(1, dt * 8));
        camState.currentLookAt.lerp(desiredLookAt, Math.min(1, dt * 8));
        camera.position.copy(camState.currentPos);
        camera.lookAt(camState.currentLookAt);

        if (Math.abs(camera.fov - 42) > 0.2) {
            camera.fov = THREE.MathUtils.lerp(camera.fov, 42, dt * 8);
            camera.updateProjectionMatrix();
        }
        return;
    }

    // Field Mode FOV
    const isFast = playerState.mode === 'dash' || (keys.shift && getDesiredMoveDirection());
    const targetFov = isFast ? 65 : 60;
    if (Math.abs(camera.fov - targetFov) > 0.2) {
        camera.fov = THREE.MathUtils.lerp(camera.fov, targetFov, dt * 8);
        camera.updateProjectionMatrix();
    }

    const pivot = new THREE.Vector3(p.x, p.y + 0.82, p.z);

    const horizDist = camState.distance * Math.cos(camState.pitch);
    const vertDist = camState.distance * Math.sin(camState.pitch);

    const idealOffset = new THREE.Vector3(
        Math.sin(camState.yaw) * horizDist,
        vertDist,
        Math.cos(camState.yaw) * horizDist
    );

    const idealPos = pivot.clone().add(idealOffset);
    idealPos.y = THREE.MathUtils.clamp(idealPos.y, p.y + 0.20, 2.50);

    // Camera Wall Collision Raycast
    const rayVec = idealPos.clone().sub(pivot);
    const maxDist = rayVec.length();
    if (maxDist > 0.05 && wallMeshes.length > 0) {
        raycaster.set(pivot, rayVec.clone().normalize());
        raycaster.far = maxDist;
        const hits = raycaster.intersectObjects(wallMeshes, false);
        if (hits.length > 0) {
            const safeDist = Math.max(0.35, hits[0].distance - 0.15);
            idealPos.copy(pivot).addScaledVector(rayVec.normalize(), safeDist);
        }
    }

    camState.currentPos.lerp(idealPos, Math.min(1, dt * 18));
    camState.currentLookAt.lerp(pivot, Math.min(1, dt * 20));

    camera.position.copy(camState.currentPos);
    camera.lookAt(camState.currentLookAt);

    // Update shadow key light to follow player
    playerKeyLight.position.set(p.x + 1.8, p.y + 3.8, p.z + 1.8);
    playerKeyLight.target.position.copy(p);
}

// ============================================================================
// 12. INPUT EVENT LISTENERS (KEYBOARD, MOUSE, UI BUTTONS)
// ============================================================================
window.addEventListener('keydown', (e) => {
    const code = e.code;

    // Toggle 3D Character UI Showcase with [C] or [Tab]
    if (code === 'KeyC' || code === 'Tab') {
        e.preventDefault();
        toggleCharacterUI();
        return;
    }

    // Confirm / Close Character UI with [Enter] or [Escape]
    if (camState.isUIMode) {
        if (code === 'Enter' || code === 'Escape') {
            e.preventDefault();
            closeCharacterUI();
        } else if (code === 'Digit1') {
            switchCharacter('chen', { playUIAnim: true });
        } else if (code === 'Digit2') {
            switchCharacter('laevatein', { playUIAnim: true });
        }
        return;
    }

    // Quick Character Switch in Field with [1] and [2]
    if (code === 'Digit1' && activeCharId !== 'chen') {
        switchCharacter('chen', { playUIAnim: false, playSound: true });
        return;
    }
    if (code === 'Digit2' && activeCharId !== 'laevatein') {
        switchCharacter('laevatein', { playUIAnim: false, playSound: true });
        return;
    }

    // Movement Keys
    if (code === 'KeyW' || code === 'ArrowUp') keys.w = true;
    if (code === 'KeyS' || code === 'ArrowDown') keys.s = true;
    if (code === 'KeyA' || code === 'ArrowLeft') keys.a = true;
    if (code === 'KeyD' || code === 'ArrowRight') keys.d = true;
    if (code === 'ShiftLeft' || code === 'ShiftRight') keys.shift = true;

    // Jump [Space]
    if (code === 'Space') {
        e.preventDefault();
        handleJumpInput();
    }

    // Combat Skills [E], [F], [Q], [R]
    if (code === 'KeyE') handleSpecialSkill('skill', 'TACTICAL SKILL', 'slot-skill');
    if (code === 'KeyF') handleSpecialSkill('combo_skill', 'COMBO SKILL', 'slot-combo');
    if (code === 'KeyQ') handleSpecialSkill('ult', 'ULTIMATE ART', 'slot-ult');
    if (code === 'KeyR') handleSpecialSkill('power_attack', 'POWER ATTACK', 'slot-lmb');
});

window.addEventListener('keyup', (e) => {
    const code = e.code;
    if (code === 'KeyW' || code === 'ArrowUp') keys.w = false;
    if (code === 'KeyS' || code === 'ArrowDown') keys.s = false;
    if (code === 'KeyA' || code === 'ArrowLeft') keys.a = false;
    if (code === 'KeyD' || code === 'ArrowRight') keys.d = false;
    if (code === 'ShiftLeft' || code === 'ShiftRight') keys.shift = false;
});

window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// Mouse Down: Left Click (Attack) & Right Click (Dash)
window.addEventListener('mousedown', (e) => {
    if (e.target.closest('button') || e.target.closest('.squad-pill') || e.target.closest('#char-ui-modal')) {
        return;
    }

    if (camState.isUIMode) return;

    if (document.pointerLockElement !== container) {
        try {
            container.requestPointerLock?.();
        } catch (_) { /* ignore */ }
    }

    if (e.button === 0) {
        handleAttackInput();
    } else if (e.button === 2) {
        handleDashInput();
    }
});

// Mouse Move: Camera Orbit in Field Mode OR 360 Character Turntable in UI Mode
window.addEventListener('mousemove', (e) => {
    if (camState.isUIMode) {
        if (camState.isDraggingUI) {
            const dx = e.clientX - camState.lastMouseX;
            camState.lastMouseX = e.clientX;
            camState.uiCharYaw += dx * 0.012;
        }
        return;
    }

    if (document.pointerLockElement === container || (e.buttons & 4)) {
        const sensitivity = 0.0022;
        camState.yaw -= e.movementX * sensitivity;
        camState.pitch = THREE.MathUtils.clamp(
            camState.pitch + e.movementY * sensitivity,
            -0.22,
            0.75
        );
    }
});

// Mouse Wheel: Camera Zoom
window.addEventListener('wheel', (e) => {
    if (camState.isUIMode) return;
    camState.distance = THREE.MathUtils.clamp(camState.distance + e.deltaY * 0.0015, 1.05, 3.1);
}, { passive: true });

// 3D Character UI Modal Drag Turntable
const uiDragZone = document.getElementById('char-ui-drag-zone');
if (uiDragZone) {
    uiDragZone.addEventListener('mousedown', (e) => {
        camState.isDraggingUI = true;
        camState.lastMouseX = e.clientX;
    });
}
window.addEventListener('mouseup', () => {
    camState.isDraggingUI = false;
});

// UI Buttons & Interactive Cards
document.getElementById('btn-open-char-ui')?.addEventListener('click', () => {
    openCharacterUI();
});
document.getElementById('btn-close-char-ui')?.addEventListener('click', () => {
    closeCharacterUI();
});
document.getElementById('btn-deploy-char')?.addEventListener('click', () => {
    closeCharacterUI();
});

// Top-Right Quick Squad Pills
document.querySelectorAll('.squad-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
        const targetChar = pill.dataset.char;
        if (targetChar) {
            switchCharacter(targetChar, { playUIAnim: false, playSound: true });
        }
    });
});

// Character Cards inside the 3D Character UI Modal
document.querySelectorAll('.char-select-card').forEach((card) => {
    card.addEventListener('click', () => {
        const targetChar = card.dataset.char;
        if (targetChar) {
            camState.uiCharYaw = 0;
            switchCharacter(targetChar, { playUIAnim: true, playSound: true });
        }
    });
});

// UI Pose Animation Tabs inside the 3D Character UI Modal
document.querySelectorAll('.pose-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
        const poseKey = tab.dataset.pose;
        if (poseKey) {
            sfx.playUISelect();
            playUIPose(poseKey, true);
        }
    });
});

// Combat Animation Preview Buttons inside the 3D Character UI Modal
document.querySelectorAll('.preview-anim-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        const animKey = btn.dataset.preview;
        if (animKey) {
            sfx.playSlash(3, animKey === 'ult');
            const act = switchAnimation(animKey, { fadeDuration: 0.12, timeScale: 1.0, forceRestart: true });
            const dur = act ? act.getClip().duration : 1.0;
            playerState.uiTransitionTimer = Math.max(0.3, dur - 0.1);
            playerState.uiPendingLoopKey = 'ui_overview_loop';
        }
    });
});

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// ============================================================================
// 13. MAIN ANIMATION & RENDER LOOP
// ============================================================================
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);

    const dt = Math.min(clock.getDelta(), 0.1);

    const activeChar = characters[activeCharId];
    if (activeChar && activeChar.mixer) {
        activeChar.mixer.update(dt);
    }

    updatePlayerPhysics(dt);
    updateCamera(dt);

    renderer.render(scene, camera);
}

// Launch Game
initGame();
