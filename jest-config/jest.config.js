export default {
    verbose: true,
    roots: [
        "../"
    ],
    moduleFileExtensions: [
        "js"
    ],
    transform: {"^.+\\.js$": "babel-jest"},
    testRegex: "((\\.|/*.)(test))\\.js?$"
}