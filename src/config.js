export const API_URL = window.location.hostname === "localhost" ? "mongodb://localhost:27017" : "add your theia server side url";
console.log(
    "API_URL :",
    API_URL
);