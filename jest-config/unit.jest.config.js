export default {
    verbose: true,
    roots: [
        "../"
    ],
    collectCoverage: true,
    reporters: [
        'default',
        ['jest-junit', {
                outputDirectory: 'junit-reports',
                outPutName: 'unit-junit.xml'
            }
        ]
    ],
    coverageReporters: ["cobertura", "text", ["text-summary", {"file": "summary.txt"}]],
    coverageDirectory: "../coverage-reports",
    moduleFileExtensions: [
        "js"
    ],
    transform: {"^.+\\.js$": "babel-jest"},
    testRegex: [".*[^IT](\\.test\\.js)"]
}