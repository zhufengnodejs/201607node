 var name = 'zfpx';
 var age = 8;
 /*//let 在同一个作用域不能声明二次
 //let 不会进行预解释，所以没有变量提升，在声明变不能访问
 //console.log(desc);
 let desc = name+' is '+age+' years old!';
 var desc = `${name} is ${age} years old!`;
 {
     console.log(desc);
     //let desc = 'hello';
 }
 //console.log(desc);

 var str = `<ul>
             <li>a</li>
            </ul>
            `;
 console.log(str);*/

 var desc = "${name} is ${age} years old!";
 function translate(str){
    return str.replace(/\$\{(\w+)\}/g,function(){
       console.log(arguments);
      return eval(arguments[1]);
    });
 }
 console.log(desc);
 console.log(translate(desc));//zfpx is 8 years old.