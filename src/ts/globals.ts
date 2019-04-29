import { vec3 } from "gl-matrix";

const DEFAULT_EYE = vec3.fromValues(0, 0, 3);
const DEFAULT_CENTER = vec3.fromValues(0, 0, -1);
const DEFAULT_UP = vec3.fromValues(0, 1, 0);
const viewDelta = 0.01;
// Side length of random lookup textures
const RAND_SIZE = 1024;

const featureToggles = {
    zFunctionType: 0,
    shadingType: 0,
    zFunctionIterations: 10,
    rayMarchIterations: 100,
    backgroundType: 1,
    useCosineBias: 0,
    useDirectLighting: 0,
    resolution: 512
};

export {
    DEFAULT_EYE,
    DEFAULT_CENTER,
    DEFAULT_UP,
    viewDelta,
    RAND_SIZE,
    featureToggles
}