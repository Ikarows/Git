const greeter = require('./greeter.js');

import './main.css';//使用require导入css文件
import './main2.css';//使用require导入css文件

document.querySelector("#root").appendChild(greeter());

console.log('3456456');
