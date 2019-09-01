declare var pc: any;

pc.script.legacy = false;

const options = {
    ASSET_PREFIX: "",
    SCRIPT_PREFIX: "",
    SCENE_PATH: "798649.json",
    CONTEXT_OPTIONS: {
        'antialias': true,
        'alpha': false,
        'preserveDrawingBuffer': false,
        'preferWebGl2': true
    },
    SCRIPTS: [  ],
    CONFIG_FILENAME: "config.json",
    INPUT_SETTINGS: {
        useKeyboard: true,
        useMouse: true,
        useGamepads: false,
        useTouch: true
    },
    PRELOAD_MODULES: [
    ],
}

import {startApplication} from "./__start__";
startApplication(options);

import {createLoadingScreen} from "./__loading__";
pc.script.createLoadingScreen(app => createLoadingScreen(app, options));
