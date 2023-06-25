(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{306:function(s,n,a){"use strict";a.r(n);var e=a(14),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"typescript基础"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#typescript基础"}},[s._v("#")]),s._v(" TypeScript基础")]),s._v(" "),n("h2",{attrs:{id:"原始数据类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原始数据类型"}},[s._v("#")]),s._v(" 原始数据类型")]),s._v(" "),n("p",[s._v("JavaScript 的类型分为两种：原始数据类型（Primitive data types）和对象类型（Object types）。"),n("br"),s._v("\n原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol 和 ES10 中的新类型 BigInt。")]),s._v(" "),n("h2",{attrs:{id:"类型声明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#类型声明"}},[s._v("#")]),s._v(" 类型声明")]),s._v(" "),n("p",[n("strong",[s._v("作用：指定 ts变量（参数、形参）的类型")]),n("br"),s._v("\n【案例】下面这一段代码在js是中可以正常执行的，但是在ts中编译器会进行类型检测，当"),n("code",[s._v("num")]),s._v("被赋值为数字后，ts默认它是数值类型，因此赋值字符串的时候会报错。同样的在执行方法时，传参与要求的类型不同时也会报错。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// hello.ts\n\nlet num = 30;\nnum = 'kolento';\n//Type 'string' is not assignable to type 'number'\n\nfunction hello(name:string){\n    console.log(name);\n}\nhello(123)\n//Argument of type 'number' is not assignable to parameter of type 'string'.\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h2",{attrs:{id:"基础数据类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基础数据类型"}},[s._v("#")]),s._v(" 基础数据类型")]),s._v(" "),n("h4",{attrs:{id:"布尔类型-boolean"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#布尔类型-boolean"}},[s._v("#")]),s._v(" 布尔类型 boolean")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("let flag:boolean=true;\nflag=false;\nflag=123 //类型报错\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h4",{attrs:{id:"数值类型-number"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数值类型-number"}},[s._v("#")]),s._v(" 数值类型 number")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("let a:number=10; //十进制\nlet b:number=0b1010 //二进制\nlet c:number=0o12 //八进制\nlet d:number = 0xa //十六进制\na=11;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h4",{attrs:{id:"字符串类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字符串类型"}},[s._v("#")]),s._v(" 字符串类型")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("let str:string='123';\nstr = '456';\nstr = 456 //类型报错\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h4",{attrs:{id:"undefined和null"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#undefined和null"}},[s._v("#")]),s._v(" undefined和null")]),s._v(" "),n("p",[s._v("这两个平时用的不多，了解即可。\n这两个类型除了赋值"),n("code",[s._v("undefined")]),s._v("和"),n("code",[s._v("null")]),s._v("以外，还可以作为其他类型的子类型(严格模式下会报错)")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("let u:undefined = undefined;\nlet n:null=null;\nu=123 //类型报错\n\nlet b:number=undefined; //严格模式才会报错\nlet c:string=null; //严格模式才会报错\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"引用数据类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#引用数据类型"}},[s._v("#")]),s._v(" 引用数据类型")]),s._v(" "),n("h4",{attrs:{id:"数组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[s._v("#")]),s._v(" 数组")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 定义数据1\nlet arr1:[]=[];\nlet arr2:number[]=[1,2,3];\narr2=['1']; //类型报错 数组中只能赋值数值类型\n\n// 定义数组2 泛型(先声明数组，尖括号里声明数组元素的类型)\nlet arr3:Array<number>=[1,2,3];\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h4",{attrs:{id:"对象-表示非原始类型-除了number、string、boolean之外的类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#对象-表示非原始类型-除了number、string、boolean之外的类型"}},[s._v("#")]),s._v(" 对象 表示非原始类型（除了number、string、boolean之外的类型）")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("let obj:object={}\nobj=123 //报错 只能表示非原始类型\nobj='123'; //报错 只能表示非原始类型\nobj=false; //报错 只能表示非原始类型\nobj=null;\nobj=undefined;\nobj=[];\nobj=new String();\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h4",{attrs:{id:"any和void两种类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#any和void两种类型"}},[s._v("#")]),s._v(" any和void两种类型")]),s._v(" "),n("p",[n("code",[s._v("any")]),s._v(":表示任何类型"),n("br"),s._v("\n当无法确定后台返回的值类型或者多种类型的情况下可以使用any类型，随意赋值都不会报错。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("let a:any=123;\na=true;\na='123';\na=[];\na={};\n\n//数组赋值\nlet arr:any[]=[1,'2',true];\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[n("code",[s._v("void")]),s._v(":表示空值，没有任何返回值的函数"),n("br"),s._v("\n即表示函数返回"),n("code",[s._v("undefined")]),s._v("，类似方法中最后 "),n("code",[s._v("return undefined")]),s._v(" 的效果，因此当函数没有返回值的时候，我们可以把他定义为"),n("code",[s._v("void")]),s._v("类型。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function a():void{\n    console.log(1234)\n    // return undefined\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"类型推论"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#类型推论"}},[s._v("#")]),s._v(" 类型推论")]),s._v(" "),n("p",[s._v("如果没有明确指定类型，那么"),n("code",[s._v("typescript")]),s._v("会依照类型推论的规则，推断出一个类型,类似"),n("code",[s._v("go")]),s._v("的类型推导。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("let x = 123;\nx='hello'; \n//类型报错 此处ts已经推导x为数值类型，因此赋值字符串报错\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("1.定义变量时，给变量赋值，则定义类型为值所对应的类型。\n2.定义变量时，没有赋值，则定义为"),n("code",[s._v("any")]),s._v("类型")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('let a = 123; //将a定义为数值 则推断为数值类型\na = ""; //类型报错\n\nlet b; // 定义变量不赋值 推断变量为any类型\n// 以下所有赋值都可以执行\nb=1;\nb="2";\nb=[];\nb={};\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"联合类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#联合类型"}},[s._v("#")]),s._v(" 联合类型")]),s._v(" "),n("p",[s._v("表示取值可以为 多种类型 中的一种。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('//通过 | 进行多种类型的联合定义\nlet f:boolean | number | string= true;\nf=1;\nf=false;\nf="123";\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h4",{attrs:{id:"注意"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[s._v("#")]),s._v(" 注意")]),s._v(" "),n("p",[n("strong",[s._v("由于联合类型中可能存在多个类型，因此只能访问次联合类型中多有类型里共有的属性或方法。")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("let f:boolean | number | string= true;\n// f=1;\n// f=false;\n// f=\"123\";\n\nf.toString();\nf.length; // 报错 类型“true”上不存在属性“length”\nf.split(''); // 报错 类型“true”上不存在属性“split”\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h2",{attrs:{id:"接口-interfaces"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#接口-interfaces"}},[s._v("#")]),s._v(" 接口 interfaces")]),s._v(" "),n("p",[s._v("接口是对对象行为的一种约束。\n使用了 对应接口 后的对象，必须与接口的形状（属性名、属性值类型、树形个数）完全一致，否则会报错。"),n("br")]),s._v(" "),n("h4",{attrs:{id:"注意-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注意-2"}},[s._v("#")]),s._v(" 注意")]),s._v(" "),n("p",[s._v("1.接口的首字母需要大写"),n("br"),s._v("\n2.定义的变量比接口少或者多了一些树形是不允许的")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 定义一个接口\ninterface Person{\n    name:string,\n    age:number\n}\n\n//正常使用 声明一个对象，设置接口为Person\nlet kolento:Person={\n    name:'kolento',\n    age:20\n}\n\n// 报错 类型 \"{ name: string; }\" 中缺少属性 \"age\"，但类型 \"Person\" 中需要该属性。\nlet kolento:Person={\n    name:'kolento',\n}\n\n// 报错 不能将类型“{ name: string; age: number; sex: string; }”分配给类型“Person”。\n  对象字面量只能指定已知属性，并且“sex”不在类型“Person”中。\nlet kolento:Person={\n    name:'kolento',\n    age:20,\n    sex:'mail',\n}\n\n// 报错 不能将类型“string”分配给类型“number”。\nlet kolento:Person={\n    name:'kolento',\n    age:'20',\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br")])]),n("h4",{attrs:{id:"可选属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#可选属性"}},[s._v("#")]),s._v(" 可选属性")]),s._v(" "),n("p",[s._v("在接口中的属性名后添加"),n("code",[s._v("?")]),s._v("，表示这个属性可有可无")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 定义一个接口\ninterface Person{\n    name:string,\n    age:number,\n    sex?:string\n}\n\n// 在没有sex属性的情况下也不会报错\nlet kolento:Person={\n    name:'kolento',\n    age:20,\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h4",{attrs:{id:"任意属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#任意属性"}},[s._v("#")]),s._v(" 任意属性")]),s._v(" "),n("p",[s._v("在接口中设置 任意属性 后，可以在变量中添加对应类型的属性。"),n("br"),s._v(" "),n("strong",[s._v("属性名：[propName:string]")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("interface Person{\n    name:string,\n    age:number,\n    sex?:string,\n    [propName:string]:any\n}\n\n// 此时再添加一个新的属性 height 也不会报错了\nlet kolento:Person={\n    name:'kolento',\n    age:20,\n    height:180\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[n("strong",[s._v("注意：")]),n("br"),s._v("\n1.一旦定义了任意属性，那么其他属性（确定的属性和可选属性）的类型，都必须是它的子集。"),n("br"),s._v("\n2.一个接口中只能定义一个任意属性，如果有多个类型的属性，可以在任意属性中使用联合类型或者"),n("code",[s._v("any")]),s._v("类型")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 报错 类型“number”的属性“age”不能赋给“string”索引类型“string”\ninterface Person{\n    name:string,\n    age:number,\n    sex?:string,\n    [propName:string]:string\n}\n\n// 使用联合类型后 先前对于age的报错消失了\ninterface Person{\n    name:string,\n    age:number,\n    sex?:string,\n    [propName:string]:string | number | boolean\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("这里由于任意属性的类型为"),n("code",[s._v("string")]),s._v("，而"),n("code",[s._v("age")]),s._v("是"),n("code",[s._v("number")]),s._v("类型，并不是 任意属性string类型的子集，因此报错。")]),s._v(" "),n("h4",{attrs:{id:"只读属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#只读属性"}},[s._v("#")]),s._v(" 只读属性")]),s._v(" "),n("p",[s._v("只读属性意味着，属性只能被读取，不能被修改。在属性名前添加关键字"),n("code",[s._v("readonly")]),s._v("即可。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("interface Person{\n    readonly id:number,\n    name:string,\n    age:number,\n    sex?:string,\n    [propName:string]:string | number |boolean\n}\n\n// 报错 无法为“id”赋值，因为它是只读属性\nkolento.id=123\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);