# 🔥 Remove properties from object

easy-to-use, zero-dependency property remover.

**Typedefinitions are built-in**

[![build](https://img.shields.io/github/workflow/status/barisbored/remove-properties/Build%20and%20Test?logo=github&style=for-the-badge)](https://github.com/barisbored/remove-properties)
[![supportServer](https://img.shields.io/discord/711995199945179187?color=7289DA&label=Support&logo=discord&style=for-the-badge)](https://discord.gg/BjEJFwh)
[![totalDownloads](https://img.shields.io/npm/dt/remove-properties?color=CC3534&logo=npm&style=for-the-badge)](http://npmjs.com/remove-properties)
[![weeklyDownloads](https://img.shields.io/npm/dw/remove-properties?color=CC3534&logo=npm&style=for-the-badge)](http://npmjs.com/remove-properties)
[![version](https://img.shields.io/npm/v/remove-properties?color=red&label=Version&logo=npm&style=for-the-badge)](http://npmjs.com/remove-properties)
[![stars](https://img.shields.io/github/stars/barisbored/remove-properties?color=yellow&logo=github&style=for-the-badge)](https://github.com/barisbored/remove-properties)
[![license](https://img.shields.io/github/license/barisbored/remove-properties?logo=github&style=for-the-badge)](https://github.com/barisbored/remove-properties)

# 🐮 Installation

-   Using NPM: `npm install remove-properties --save`
-   Using Yarn: `yarn add remove-properties`

# 🧶 Usage

```js
const { removeProperties } = require("remove-properties");

const myObj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7 };

removeProperties(myObj, ["a", "c", "f"]); // => { b: 2, d: 4, e: 5, g: 7 }
```

# 🎈 Options

| Name   | Type          | Required | Default |
| ------ | ------------- | -------- | ------- |
| obj    | Object        | ✔️       | -       |
| remove | Array{string} | ✔️       | -       |

# 🧦 Contributing

Feel free to use GitHub's features.
