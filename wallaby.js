module.exports = function (wallaby) {

    return {
        files: [
            //     { pattern: 'node_modules/core-js/client/shim.js', instrument: false },
            // { pattern: 'node_modules/zone.js/dist/zone.js', instrument: false },
            //     { pattern: 'node_modules/reflect-metadata/Reflect.js', instrument: false },
            //     { pattern: 'node_modules/systemjs/dist/system.src.js', instrument: false },
            { pattern: 'systemjs.config.js', instrument: false },
            { pattern: 'systemjs.config.extras.js', instrument: false },
            { pattern: 'app/**/*.spec.ts', ignore: true },
            'app/**/*.ts'
        ],

        tests: [
            'app/**/*.spec.ts',
        ],

        // telling wallaby to serve jspm_packages project folder "as is"" from the wallaby.js web server
        middleware: (app, express) => {
            app.use('/node_modules', express.static(require('path').join(__dirname, 'node_modules')));
        },

        env: {
            type: 'node'
        },

        testFramework: 'jasmine',

        debug: true
    };
};