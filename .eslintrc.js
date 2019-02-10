module.exports = {
    "extends": "airbnb-base",
    "env": {
        "node": true,
        "es6": true
    },
    "rules" : {
        "import/no-cycle": [3, { maxDepth: 3 }],
        "comma-dangle": [
        2,"only-multiline",
        "error",
        {
          "arrays": "never"
        }
    ],
        "func-names": ["error", "never"],
        "import/no-cycle": ["error", "never"]
    }
};
