(function (global) {

    // map tells the System loader where to look for things
    var map = {
        'app': 'dist', // 'dist',
        'rxjs': 'node_modules/rxjs',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        '@angular': 'node_modules/@angular',
        "angular2-jwt": "node_modules/angular2-jwt/angular2-jwt.js",
        'ng2-charts': 'node_modules/ng2-charts',
        'ng2-cytoscape/dist': 'node_modules/ng2-cytoscape/dist',
        'ng2-simplegantt/dist': 'node_modules/ng2-simplegantt/dist',
        'angular2-localstorage/dist': 'node_modules/angular2-localstorage/dist',
        'lodash': 'node_modules/lodash/lodash.js'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'dist': {main: 'main.js', defaultExtension: 'js'},
        'rxjs': {defaultExtension: 'js'},
        'angular2-in-memory-web-api': {defaultExtension: 'js'},
        'ng2-charts': {defaultExtension: 'js'},
        'angular2-localstorage/dist': {main: 'index.js', defaultExtension: 'js'},
        'ng2-cytoscape/dist': {main: 'index.js', defaultExtension: 'js'},
        'ng2-simplegantt/dist': {main: 'index.js', defaultExtension: 'js'}
    };

    var packageNames = [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/router-deprecated',
        '@angular/testing',
        '@angular/upgrade'
    ];

    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    packageNames.forEach(function (pkgName) {
        packages[pkgName] = {main: 'index.js', defaultExtension: 'js'};
    });

    var config = {
        map: map,
        packages: packages
    }

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) {
        global.filterSystemConfig(config);
    }

    System.config(config);

})(this);