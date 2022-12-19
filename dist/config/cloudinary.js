"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: "izicketor",
    api_key: "474924459178937",
    api_secret: "YF6Jtv9qJr0qyZWKdeNDarjn-kM",
    secure: true,
});
exports.default = cloudinary_1.v2;
