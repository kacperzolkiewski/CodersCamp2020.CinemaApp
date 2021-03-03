export default {
    clearMocks: true,
    coverageDirectory: "coverage",

    moduleFileExtensions: ["js", "ts"],

    restoreMocks: true,

    roots: ["<rootDir>/src"],

    testEnvironment: "node",

    testMatch: ["**/*.test.(js|ts)"],

    transform: {
        "^.+\\.ts?$": "ts-jest",
    },
}
