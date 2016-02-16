module.exports = {
    "root": {
        "src": "./src",
        "dest": "./public"
    },

    "tasks": {
        "browserSync": {
            "server": {
                "baseDir": "public"
            }
        },

        "js": {
            "src": "static/js",
            "dest": "static/js",
            "extractSharedJs": true,
            "extensions": ["js"]
        },

        "jsi": {
            "dest": "static/sinclude/jsi"
        },

        "css": {
            "src": "static/css",
            "dest": "static/css",
            "autoprefixer": {
                "browsers": ["last 3 version"]
            },
            "sass": {
                "indentedSyntax": true
            },
            "extensions": ["sass", "scss", "css"]
        },

        "cssi": {
            "dest": "static/sinclude/cssi"
        },

        "html": {
            "src": "html",
            "dest": "./",
            "dataFile": "data/global.json",
            "htmlmin": {
                "collapseWhitespace": true
            },
            "extensions": ["html", "json"],
            "excludeFolders": ["layouts", "shared", "macros", "data"]
        },

        "images": {
            "src": "static/images",
            "dest": "static/images",
            "extensions": ["jpg", "png", "svg", "gif"]
        },

        "fonts": {
            "src": "fonts",
            "dest": "fonts",
            "extensions": ["woff2", "woff", "eot", "ttf", "svg"]
        },

        "iconFont": {
            "src": "icons",
            "dest": "fonts",
            "sassDest": "generated",
            "extensions": ["woff2", "woff", "eot", "ttf", "svg"]
        },

        "svgSprite": {
            "src": "sprites",
            "dest": "images",
            "extensions": ["svg"]
        }
    }
};