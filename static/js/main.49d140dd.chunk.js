(this["webpackJsonpfrontend-examples"]=this["webpackJsonpfrontend-examples"]||[]).push([[0],{14:function(e,t,n){e.exports={result_table:"TaskResult_result_table__2lDMu"}},19:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(3),s=n.n(a),i=n(12),r=n.n(i),o=(n(19),n(6)),l=n(1),c=n(2),u=n(5),h=n(4),d=n(11),p=n.n(d),m=n(13),f=n(9),g=n.n(f);function j(e){return new Promise((function(t){return setTimeout(t,e)}))}var x,b=n(0),v=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={example:e.getActualOrNewExample(),answer:"",isRight:null},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.getCurrentOrNewTask();return Object(b.jsxs)("div",{className:"wrap",children:[Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("h1",{children:"\u0417\u0430\u0434\u0430\u043d\u0438\u0435"}),Object(b.jsx)("button",{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",onClick:this.props.openConfiguration,children:Object(b.jsx)("svg",{className:g.a.options_btn+" header_btn",xmlns:"http://www.w3.org/2000/svg",width:"30.548",height:"30.548",viewBox:"0 0 30.548 30.548",children:Object(b.jsxs)("g",{id:"settings",transform:"translate(0 0)",children:[Object(b.jsx)("path",{id:"\u041a\u043e\u043d\u0442\u0443\u0440_6","data-name":"\u041a\u043e\u043d\u0442\u0443\u0440 6",d:"M16.233,30.548H14.316A2.815,2.815,0,0,1,11.5,27.736v-.649a12.333,12.333,0,0,1-1.915-.795l-.46.46a2.812,2.812,0,0,1-3.978,0L3.8,25.4a2.812,2.812,0,0,1,0-3.978l.459-.459a12.333,12.333,0,0,1-.795-1.915H2.812A2.815,2.815,0,0,1,0,16.233V14.316A2.815,2.815,0,0,1,2.812,11.5h.649a12.336,12.336,0,0,1,.795-1.915l-.46-.46a2.812,2.812,0,0,1,0-3.978L5.152,3.8a2.812,2.812,0,0,1,3.977,0l.459.459A12.344,12.344,0,0,1,11.5,3.461V2.812A2.815,2.815,0,0,1,14.316,0h1.917a2.815,2.815,0,0,1,2.812,2.812v.649a12.332,12.332,0,0,1,1.915.795l.46-.46a2.812,2.812,0,0,1,3.978,0l1.355,1.355a2.812,2.812,0,0,1,0,3.978l-.459.459a12.333,12.333,0,0,1,.795,1.915h.649a2.815,2.815,0,0,1,2.812,2.812v1.917a2.815,2.815,0,0,1-2.812,2.812h-.649a12.336,12.336,0,0,1-.795,1.915l.46.46a2.812,2.812,0,0,1,0,3.978L25.4,26.752a2.812,2.812,0,0,1-3.977,0l-.459-.459a12.344,12.344,0,0,1-1.915.795v.649A2.815,2.815,0,0,1,16.233,30.548ZM9.887,24.413a10.549,10.549,0,0,0,2.734,1.135.9.9,0,0,1,.671.867v1.321a1.023,1.023,0,0,0,1.022,1.022h1.917a1.023,1.023,0,0,0,1.022-1.022V26.415a.9.9,0,0,1,.671-.867,10.549,10.549,0,0,0,2.734-1.135.9.9,0,0,1,1.088.138l.936.936a1.022,1.022,0,0,0,1.445,0l1.356-1.356a1.022,1.022,0,0,0,0-1.445l-.936-.936a.9.9,0,0,1-.138-1.088,10.548,10.548,0,0,0,1.135-2.734.9.9,0,0,1,.867-.671h1.321a1.023,1.023,0,0,0,1.022-1.022V14.316a1.023,1.023,0,0,0-1.022-1.022H26.415a.9.9,0,0,1-.867-.671,10.55,10.55,0,0,0-1.135-2.734A.9.9,0,0,1,24.551,8.8l.936-.936a1.022,1.022,0,0,0,0-1.445L24.131,5.062a1.022,1.022,0,0,0-1.445,0L21.749,6a.9.9,0,0,1-1.088.138A10.549,10.549,0,0,0,17.927,5a.9.9,0,0,1-.671-.867V2.812A1.023,1.023,0,0,0,16.233,1.79H14.316a1.023,1.023,0,0,0-1.022,1.022V4.134A.9.9,0,0,1,12.622,5,10.549,10.549,0,0,0,9.888,6.135.9.9,0,0,1,8.8,6l-.936-.936a1.022,1.022,0,0,0-1.445,0L5.062,6.417a1.022,1.022,0,0,0,0,1.445L6,8.8a.9.9,0,0,1,.138,1.088A10.548,10.548,0,0,0,5,12.622a.9.9,0,0,1-.867.671H2.812A1.024,1.024,0,0,0,1.79,14.316v1.917a1.023,1.023,0,0,0,1.022,1.022H4.134A.9.9,0,0,1,5,17.926a10.55,10.55,0,0,0,1.135,2.734A.9.9,0,0,1,6,21.749l-.936.936a1.022,1.022,0,0,0,0,1.445l1.356,1.356a1.022,1.022,0,0,0,1.445,0l.936-.936a.9.9,0,0,1,1.089-.137Z",fill:"#395273"}),Object(b.jsx)("path",{id:"\u041a\u043e\u043d\u0442\u0443\u0440_7","data-name":"\u041a\u043e\u043d\u0442\u0443\u0440 7",d:"M151.247,157.893a6.647,6.647,0,1,1,6.647-6.647A6.654,6.654,0,0,1,151.247,157.893Zm0-11.5a4.857,4.857,0,1,0,4.857,4.857A4.862,4.862,0,0,0,151.247,146.39Z",transform:"translate(-135.972 -135.972)",fill:"#395273"})]})})})]}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("form",{onSubmit:this.submitHandler.bind(this),children:[Object(b.jsx)("div",{className:g.a.name,children:Object(b.jsxs)("h2",{children:["\u041f\u0440\u0438\u043c\u0435\u0440 \u2116",e.currentExampleNumber," \u0438\u0437 ",e.taskSettings.examplesCount]})}),Object(b.jsxs)("div",{className:g.a.state_example_string,children:[this.state.example.string," ="]}),Object(b.jsxs)("div",{className:g.a.answer_input_answer_wrap,children:[Object(b.jsx)("input",{className:g.a.input_text+" input_text",type:"text",value:this.state.answer,onChange:this.changeHandler.bind(this)}),Object(b.jsx)("button",{className:"".concat(g.a.answer_btn_agree," ").concat(this.answerResultClass),type:"submit",title:"\u041e\u0442\u0432\u0435\u0442\u0438\u0442\u044c",children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25.828",height:"16.828",viewBox:"0 0 25.828 16.828",children:Object(b.jsxs)("g",{id:"\u0421\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c_7","data-name":"\u0421\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c 7",transform:"translate(-498.086 -285.473)",children:[Object(b.jsx)("line",{id:"\u041b\u0438\u043d\u0438\u044f_13","data-name":"\u041b\u0438\u043d\u0438\u044f 13",x2:"9",y2:"9",transform:"translate(499.5 291.887)",fill:"none",stroke:"#fff",strokeLinecap:"round",strokeWidth:"2"}),Object(b.jsx)("line",{id:"\u041b\u0438\u043d\u0438\u044f_14","data-name":"\u041b\u0438\u043d\u0438\u044f 14",y1:"14",x2:"14",transform:"translate(508.5 286.887)",fill:"none",stroke:"#fff",strokeLinecap:"round",strokeWidth:"2"})]})})})]})]})})]})}},{key:"changeHandler",value:function(e){this.setState({answer:e.target.value})}},{key:"submitHandler",value:function(){var e=Object(m.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==(n=this.state.answer)){e.next=4;break}return e.abrupt("return");case 4:if(this.setState({answer:""}),(a=this.state.example).answer=+n,!this.getCurrentOrNewTask().isSolved){e.next=10;break}return this.props.openTaskResult(),e.abrupt("return");case 10:return this.setState({example:this.getActualOrNewExample(),isRight:a.isSolved}),e.next=13,j(1e3);case 13:this.setState({isRight:null});case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"answerResultClass",get:function(){var e=this.state.isRight;return null===e?"":e?"write-answer":"wrong-answer"}},{key:"getCurrentOrNewTask",value:function(){return this.props.taskProvider.getCurrentOrNewTask()}},{key:"getActualOrNewExample",value:function(){return this.props.exampleProvider.getActualOrNewExample(this.getCurrentOrNewTask())}}]),n}(s.a.Component);!function(e){e[e.Add=1]="Add",e[e.Sub=2]="Sub",e[e.Mult=3]="Mult",e[e.Div=4]="Div"}(x||(x={}));var O=function(){function e(t,n,a){Object(l.a)(this,e),this.first=t,this.operation=n,this.second=a,this.answer=null}return Object(c.a)(e,[{key:"hasAnswer",get:function(){return null!==this.answer}},{key:"string",get:function(){var e,t=(e={},Object(o.a)(e,x.Add,"+"),Object(o.a)(e,x.Sub,"-"),Object(o.a)(e,x.Mult,"*"),Object(o.a)(e,x.Div,":"),e);return"".concat(this.first," ").concat(t[this.operation]," ").concat(this.second)}},{key:"isSolved",get:function(){return this.answer===this.solution}},{key:"solution",get:function(){switch(this.operation){case x.Add:return this.first+this.second;case x.Sub:return this.first-this.second;case x.Mult:return this.first*this.second}return this.first/this.second}}],[{key:"createFromValues",value:function(t,n){return new e(t.first,n,t.second)}}]),e}(),k=function(){function e(t){Object(l.a)(this,e),this.exampleGenerator=t}return Object(c.a)(e,[{key:"getActualOrNewExample",value:function(e){var t=e.lastExample;if(null!==t&&!t.hasAnswer)return t;var n=this.exampleGenerator.generate(e);return null===t||(null===t||void 0===t?void 0:t.isSolved)||(n=new O(null===t||void 0===t?void 0:t.first,null===t||void 0===t?void 0:t.operation,null===t||void 0===t?void 0:t.second)),e.examples.push(n),n}}]),e}(),w=function(){function e(t){Object(l.a)(this,e),this.taskSettings=t,this.examples=[]}return Object(c.a)(e,[{key:"currentExampleNumber",get:function(){return this.solvedExamplesCount+this.examples.filter((function(e){return!e.hasAnswer})).length}},{key:"rightExamplesCount",get:function(){return this.solvedExamplesCount-this.wrongExamplesCount}},{key:"wrongExamplesCount",get:function(){return this.examples.filter((function(e){return e.hasAnswer&&!e.isSolved})).length}},{key:"solvedExamplesCount",get:function(){return this.solvedExamples.length}},{key:"solvedExamples",get:function(){return this.examples.filter((function(e){return e.isSolved}))}},{key:"remainedExamplesCount",get:function(){return this.taskSettings.examplesCount-this.solvedExamplesCount}},{key:"isSolved",get:function(){return 0===this.remainedExamplesCount}},{key:"lastExample",get:function(){var e=this.examples.length;return 0===e?null:this.examples[e-1]}}]),e}(),S=function(){function e(t){Object(l.a)(this,e),this.taskSettingsManager=t,this.currentTask=null}return Object(c.a)(e,[{key:"getCurrentOrNewTask",value:function(){return null==this.currentTask&&(this.currentTask=new w(this.taskSettingsManager.getCurrentSettings())),this.currentTask}},{key:"cleanCurrentTask",value:function(){this.currentTask=null}}]),e}(),_="task-settings-v2",y=function(){function e(t,n){Object(l.a)(this,e),this.taskSettingsNormalizer=t,this.profileProvider=n}return Object(c.a)(e,[{key:"getCurrentSettings",value:function(){var e=localStorage.getItem(_);return null===e?{examplesCount:10,operations:[x.Add],addSettings:this.profileProvider.defaultAddProfile.exampleSettings,multSettings:this.profileProvider.defaultMultProfile.exampleSettings}:JSON.parse(e)}},{key:"saveTaskSettings",value:function(e){this.taskSettingsNormalizer.normalize(e),localStorage.setItem(_,JSON.stringify(e))}}]),e}();function C(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function N(e){return e/100<=Math.random()}var A=function(){function e(t,n){Object(l.a)(this,e),this.operationGeneratorCollection=t,this.coefficientGenerator=n}return Object(c.a)(e,[{key:"generate",value:function(e){var t=this.getOperation(e),n=this.operationGeneratorCollection.getGenerator(t),a=e.taskSettings,s=[x.Add,x.Sub].includes(t)?a.addSettings:a.multSettings,i=n.generate(s);if(N(15))return i;for(var r=0,o=1;o<=100;o++){var l=n.generate(s),c=this.coefficientGenerator.getUniqueCoefficient(l,e);c>r&&(i=l,r=c)}return i}},{key:"getOperation",value:function(e){var t=e.taskSettings.operations;return t[C(0,t.length-1)]}}]),e}(),V=n(7),P=function(){function e(){Object(l.a)(this,e)}return Object(c.a)(e,[{key:"getUniqueCoefficient",value:function(e,t){var n,a=1,s=t.solvedExamples,i=s.length||1,r=Object(V.a)(s);try{for(r.s();!(n=r.n()).done;){var o=n.value;e.first===o.first&&e.operation===o.operation&&e.second===o.second&&(a-=.6/i),e.solution===o.solution&&(a-=.4/i)}}catch(l){r.e(l)}finally{r.f()}return a}}]),e}(),M=function(){function e(t){Object(l.a)(this,e),this.generators=t}return Object(c.a)(e,[{key:"getGenerator",value:function(e){var t,n=Object(V.a)(this.generators);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(e===a.operation)return a}}catch(s){n.e(s)}finally{n.f()}throw new DOMException("Generator with ".concat(e," does not exist"))}}]),e}(),R=function e(t,n){Object(l.a)(this,e),this.first=t,this.second=n};function T(e,t,n){if(t>n)throw new DOMException("".concat(t," is greater than ").concat(n));return e<t?t:e>n?n:e}function E(e,t){return e>t?t:e}var z=function(){function e(){Object(l.a)(this,e),this.operation=void 0}return Object(c.a)(e,[{key:"generate",value:function(e){return O.createFromValues(this.generateValues(e),this.operation)}}]),e}(),H=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).operation=x.Add,e}return Object(c.a)(n,[{key:"generateValues",value:function(e){var t=C(e.minValue,e.maxValue),n=T(e.minValue,e.minResult-t,e.maxResult-t),a=C(n,T(e.maxValue,n,e.maxResult-t));return N(60)?new R(t,a):new R(a,t)}}]),n}(z);function L(e){return Object.keys(e)}function G(e,t){var n,a=Object(V.a)(L(e));try{for(a.s();!(n=a.n()).done;){var s=n.value;if(e[s]!==t[s])return!1}}catch(i){a.e(i)}finally{a.f()}return!0}var D,F=function(){function e(){Object(l.a)(this,e),this.coefficients={10:[5,6,8,9],20:[14,15,17,19]}}return Object(c.a)(e,[{key:"getRating",value:function(e){for(var t=this.getTaskCoefficients(e),n=0;n<t.length&&!(e.rightExamplesCount<t[n]);n++);return n+1}},{key:"getTaskCoefficients",value:function(e){this.coefficients;var t=L(this.coefficients).reduce((function(t,n){return e.solvedExamplesCount>=+n?n:t})),n=+t;return this.coefficients[t].map((function(t){return Math.round(t*e.solvedExamplesCount/n)}))}}]),e}(),I=function(){function e(t){Object(l.a)(this,e),this.originalGenerator=t,this.operation=void 0;var n=t.operation;if(![x.Add,x.Mult].includes(n))throw new DOMException("You can not revert ".concat(n," operation example generation"));this.operation=n+1}return Object(c.a)(e,[{key:"generate",value:function(e){var t=this.originalGenerator.generate(e);return new O(t.solution,this.operation,t.second)}}]),e}(),J=function(){function e(t){Object(l.a)(this,e),this.exampleSettingsNormalizer=t}return Object(c.a)(e,[{key:"normalize",value:function(e){e.examplesCount<1&&(e.examplesCount=10),0===e.operations.length&&e.operations.push(x.Add),this.exampleSettingsNormalizer.normalizeAddSettings(e.addSettings),this.exampleSettingsNormalizer.normalizeMultSettings(e.multSettings)}}]),e}(),W=function(){function e(t){Object(l.a)(this,e),this.normalizeAddProfile=void 0,this.normalizeMultProfile=void 0,this.normalizeAddProfile=this.normalizeProfile.bind(this,t.normalizeAddSettings),this.normalizeMultProfile=this.normalizeProfile.bind(this,t.normalizeMultSettings)}return Object(c.a)(e,[{key:"defaultAddProfile",get:function(){var e={name:"\u0412 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445 10",exampleSettings:{minValue:1,maxValue:9,minResult:0,maxResult:0}};return this.normalizeAddProfile(e),e}},{key:"addProfiles",get:function(){var e=[this.defaultAddProfile,{name:"\u0412 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445 20",exampleSettings:{minValue:1,maxValue:19,minResult:0,maxResult:0}},{name:"\u0412 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445 100",exampleSettings:{minValue:10,maxValue:90,minResult:0,maxResult:0}},{name:"\u0412 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445 10 000 (\u0432 \u0441\u0442\u043e\u043b\u0431\u0438\u043a)",exampleSettings:{minValue:100,maxValue:9900,minResult:0,maxResult:0}},{name:"\u041e\u0442 -100 \u0434\u043e 100",exampleSettings:{minValue:-100,maxValue:100,minResult:-100,maxResult:100}}];return e.map(this.normalizeAddProfile),e}},{key:"defaultMultProfile",get:function(){var e=this.getMultProfile(1,9);return this.normalizeMultProfile(e),e}},{key:"multProfiles",get:function(){var e=[this.getMultProfile(1,3),this.getMultProfile(1,6),this.getMultProfile(1,9),this.getMultProfile(3,9),this.getMultProfile(10,1e3)];return e.map(this.normalizeMultProfile),e}},{key:"getMultProfile",value:function(e,t){return{name:"\u041e\u0442 ".concat(e," \u0434\u043e ").concat(t),exampleSettings:{minValue:e,maxValue:t,minResult:Math.pow(e,2),maxResult:Math.pow(t,2)}}}},{key:"normalizeProfile",value:function(e,t){e(t.exampleSettings)}}]),e}(),B=function(){function e(){Object(l.a)(this,e)}return Object(c.a)(e,[{key:"normalizeAddSettings",value:function(e){e.minValue=E(e.minValue,e.maxValue);var t=e.maxValue+e.minValue;e.minResult=T(e.minResult,2*e.minValue,t),e.maxResult=T(e.maxResult,t,2*e.maxValue)}},{key:"normalizeMultSettings",value:function(e){["minValue","maxValue"].forEach((function(t){0>=e[t]&&(e[t]=1)})),e.minValue=E(e.minValue,e.maxValue);var t=e.maxValue*e.minValue;e.minResult=T(e.minResult,Math.pow(e.minValue,2),t),e.maxResult=T(e.maxResult,t,Math.pow(e.maxValue,2))}}]),e}(),Z=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(b.jsx)("button",{onClick:this.props.onClick,title:"\u043d\u0430\u0447\u0430\u0442\u044c \u043d\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435",children:Object(b.jsx)("svg",{className:"header_btn",xmlns:"http://www.w3.org/2000/svg",width:"22.412",height:"18.824",viewBox:"0 0 22.412 18.824",children:Object(b.jsxs)("g",{id:"\u0421\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c_5","data-name":"\u0421\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c 5",transform:"translate(-781.088 -594.088)",children:[Object(b.jsx)("line",{id:"\u041b\u0438\u043d\u0438\u044f_6","data-name":"\u041b\u0438\u043d\u0438\u044f 6",x1:"20",transform:"translate(782.5 603.5)",fill:"none",stroke:"#395273",strokeLinecap:"round",strokeWidth:"2"}),Object(b.jsx)("line",{id:"\u041b\u0438\u043d\u0438\u044f_7","data-name":"\u041b\u0438\u043d\u0438\u044f 7",y1:"8",x2:"9",transform:"translate(782.5 595.5)",fill:"none",stroke:"#395273",strokeLinecap:"round",strokeWidth:"2"}),Object(b.jsx)("line",{id:"\u041b\u0438\u043d\u0438\u044f_8","data-name":"\u041b\u0438\u043d\u0438\u044f 8",x2:"9",y2:"8",transform:"translate(782.5 603.5)",fill:"none",stroke:"#395273",strokeLinecap:"round",strokeWidth:"2"})]})})})}}]),n}(s.a.Component),Y=n(14),q=n.n(Y),U=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.taskProvider.getCurrentOrNewTask();return Object(b.jsxs)("div",{className:"wrap",children:[Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("h1",{children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0437\u0430\u0434\u0430\u043d\u0438\u044f"}),Object(b.jsx)(Z,{onClick:this.props.startNewTask})]}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:["\u0420\u0435\u0448\u0435\u043d\u043e \u043f\u0440\u0438\u043c\u0435\u0440\u043e\u0432: ",e.solvedExamplesCount]}),Object(b.jsxs)("li",{children:["\u041e\u0448\u0438\u0431\u043e\u043a: ",e.wrongExamplesCount]}),Object(b.jsxs)("li",{children:["\u041e\u0446\u0435\u043d\u043a\u0430: ",this.props.ratingGenerator.getRating(e)]})]}),Object(b.jsx)("h2",{children:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"}),Object(b.jsxs)("table",{className:q.a.result_table,children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"\u2116"}),Object(b.jsx)("th",{children:"\u041f\u0440\u0438\u043c\u0435\u0440"}),Object(b.jsx)("th",{children:"\u041e\u0442\u0432\u0435\u0442"})]})}),Object(b.jsx)("tbody",{children:this.showExamples(e)})]})]})]})}},{key:"showExamples",value:function(e){var t,n=[],a=1,s=Object(V.a)(e.examples);try{for(s.s();!(t=s.n()).done;){var i=t.value;n.push(Object(b.jsxs)("tr",{className:i.isSolved?"right-answer":"wrong-answer",children:[Object(b.jsx)("td",{children:a}),Object(b.jsx)("td",{children:i.string}),Object(b.jsx)("td",{children:i.answer})]})),i.isSolved&&a++}}catch(r){s.e(r)}finally{s.f()}return n}}]),n}(s.a.Component),X=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={value:e.props.exampleSettings[e.props.name].toString()},e}return Object(c.a)(n,[{key:"render",value:function(){return Object(b.jsx)("input",{className:"input_text",type:"number",value:this.state.value,onChange:this.changeHandler.bind(this),disabled:this.props.disabled})}},{key:"changeHandler",value:function(e){var t=this.props.exampleSettings,n=e.target.value;t[this.props.name]=+n,this.setState({value:n})}}]),n}(s.a.Component),Q=n(8),K=n.n(Q),$=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={isSettingsOpened:!1,taskSettings:e.props.taskSettings,exampleSettings:e.props.exampleSettings},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.operations.map(this.renderOperationCheckbox.bind(this));return Object(b.jsxs)("div",{className:K.a.settings_container,children:[Object(b.jsx)("div",{className:K.a.operation_checkboxes_list,children:t}),Object(b.jsx)("form",{children:this.props.profiles.map(this.renderProfile.bind(this))}),Object(b.jsxs)("div",{className:"".concat(K.a.settings," ").concat(this.state.isSettingsOpened?K.a.settings_opened:""),children:[Object(b.jsxs)("button",{className:K.a.settings_btn,onClick:function(){return e.setState({isSettingsOpened:!e.state.isSettingsOpened})},children:["\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",Object(b.jsx)("svg",{className:K.a.settings_arrow,xmlns:"http://www.w3.org/2000/svg",width:"17.762",height:"10.295",viewBox:"0 0 17.762 10.295",children:Object(b.jsxs)("g",{id:"\u0421\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c_8","data-name":"\u0421\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c 8",transform:"translate(-497.153 -854.352)",children:[Object(b.jsx)("line",{id:"\u041b\u0438\u043d\u0438\u044f_19","data-name":"\u041b\u0438\u043d\u0438\u044f 19",x2:"7.467",y2:"7.467",transform:"translate(513.5 863.233) rotate(180)",fill:"none",stroke:this.state.isSettingsOpened?"#395273":"#fff",strokeLinecap:"round",strokeWidth:"2"}),Object(b.jsx)("line",{id:"\u041b\u0438\u043d\u0438\u044f_20","data-name":"\u041b\u0438\u043d\u0438\u044f 20",x1:"7.467",y2:"7.467",transform:"translate(506.034 863.233) rotate(180)",fill:"none",stroke:this.state.isSettingsOpened?"#395273":"#fff",strokeLinecap:"round",strokeWidth:"2"})]})})]}),this.renderSettings(this.state.exampleSettings)]})]})}},{key:"operations",get:function(){var e=this.props.baseOperation;return[e,e+1]}},{key:"renderProfile",value:function(e){var t=this.isInputDisabled;return Object(b.jsxs)("label",{className:K.a.input_radio_wrap,children:[Object(b.jsx)("input",{type:"radio",name:"profile",checked:!t&&G(this.state.exampleSettings,e.exampleSettings),disabled:t,onChange:this.changeRadioHandler.bind(this,e)}),e.name]},e.name)}},{key:"isInputDisabled",get:function(){var e=this;return!this.props.taskSettings.operations.some((function(t){return e.operations.includes(t)}))}},{key:"changeRadioHandler",value:function(e){var t=this.state.exampleSettings;!function(e,t){var n,a=Object(V.a)(L(t));try{for(a.s();!(n=a.n()).done;){var s=n.value;e[s]=t[s]}}catch(i){a.e(i)}finally{a.f()}}(t,e.exampleSettings),this.setState({exampleSettings:t})}},{key:"renderSettings",value:function(e){var t=this.isInputDisabled,n=JSON.stringify([t,e]);return this.state.isSettingsOpened?Object(b.jsxs)("table",{children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{}),Object(b.jsx)("th",{children:"\u041c\u0438\u043d\u0438\u043c\u0443\u043c"}),Object(b.jsx)("th",{children:"\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c"})]})}),Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435"}),Object(b.jsx)("td",{children:Object(b.jsx)(X,{exampleSettings:e,name:"minValue",disabled:t},n)}),Object(b.jsx)("td",{children:Object(b.jsx)(X,{exampleSettings:e,name:"maxValue",disabled:t},n)})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"}),Object(b.jsx)("td",{children:Object(b.jsx)(X,{exampleSettings:e,name:"minResult",disabled:t},n)}),Object(b.jsx)("td",{children:Object(b.jsx)(X,{exampleSettings:e,name:"maxResult",disabled:t},n)})]})]})]}):""}},{key:"renderOperationCheckbox",value:function(e){var t,n=(t={},Object(o.a)(t,x.Add,"\u0421\u043b\u043e\u0436\u0435\u043d\u0438\u0435"),Object(o.a)(t,x.Sub,"\u0412\u044b\u0447\u0438\u0442\u0430\u043d\u0438\u0435"),Object(o.a)(t,x.Mult,"\u0423\u043c\u043d\u043e\u0436\u0435\u043d\u0438\u0435"),Object(o.a)(t,x.Div,"\u0414\u0435\u043b\u0435\u043d\u0438\u0435"),t);return Object(b.jsxs)("div",{className:K.a.main_operation_checkox_block,children:[Object(b.jsx)("input",{className:K.a.main_operation_checkox,id:"MainOperationCheckox"+e,type:"checkbox",checked:this.state.taskSettings.operations.includes(e),onChange:this.changeCheckboxHandler.bind(this,e)}),Object(b.jsx)("label",{htmlFor:"MainOperationCheckox"+e,children:n[e]},e)]})}},{key:"changeCheckboxHandler",value:function(e){var t=this.state.taskSettings,n=t.operations.filter((function(t){return t!==e}));t.operations.includes(e)||n.push(e),t.operations=n,this.setState({taskSettings:t})}}]),n}(s.a.Component),ee=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={examplesCount:e.getCurrentTaskSettings().examplesCount.toString(),taskSettings:e.getCurrentTaskSettings()},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state.taskSettings;return Object(b.jsxs)("div",{className:"wrap",children:[Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("h1",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0437\u0430\u0434\u0430\u043d\u0438\u044f"}),Object(b.jsx)(Z,{onClick:this.clickHandler.bind(this)})]}),Object(b.jsxs)("div",{className:"container",children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u0438\u043c\u0435\u0440\u043e\u0432:",Object(b.jsx)("div",{children:Object(b.jsx)("input",{className:"input_text",type:"number",value:this.state.examplesCount,onChange:this.changeExamplesCountHandler.bind(this)})}),Object(b.jsx)($,{baseOperation:x.Add,taskSettings:e,exampleSettings:e.addSettings,profiles:this.props.profileProvider.addProfiles}),Object(b.jsx)($,{baseOperation:x.Mult,taskSettings:e,exampleSettings:e.multSettings,profiles:this.props.profileProvider.multProfiles})]})]})}},{key:"changeExamplesCountHandler",value:function(e){var t=this.state.taskSettings,n=e.target.value;t.examplesCount=+n,this.setState({examplesCount:n})}},{key:"clickHandler",value:function(){this.props.taskSettingsManager.saveTaskSettings(this.state.taskSettings),this.props.startNewTask()}},{key:"getCurrentTaskSettings",value:function(){return this.props.taskSettingsManager.getCurrentSettings()}}]),n}(s.a.Component),te=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).operation=x.Mult,e}return Object(c.a)(n,[{key:"generateValues",value:function(e){var t=C(e.minValue,e.maxValue),n=T(e.minValue,e.minResult/t,e.maxResult/t),a=C(n,T(e.maxValue,n,e.maxResult/t));return N(60)?new R(t,a):new R(a,t)}}]),n}(z),ne=new H,ae=new te,se=new k(new A(new M([ne,new I(ne),ae,new I(ae)]),new P)),ie=new B,re=new J(ie),oe=new W(ie),le=new y(re,oe),ce=new S(le),ue=new F;!function(e){e[e.Solve=1]="Solve",e[e.TaskResult=2]="TaskResult",e[e.TaskConfig=3]="TaskConfig"}(D||(D={}));var he=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={page:D.Solve},e}return Object(c.a)(n,[{key:"render",value:function(){var e,t=(e={},Object(o.a)(e,D.Solve,Object(b.jsx)(v,{taskProvider:ce,exampleProvider:se,openConfiguration:this.openPage.bind(this,D.TaskConfig),openTaskResult:this.openPage.bind(this,D.TaskResult)})),Object(o.a)(e,D.TaskResult,Object(b.jsx)(U,{ratingGenerator:ue,taskProvider:ce,startNewTask:this.startNewTask.bind(this)})),Object(o.a)(e,D.TaskConfig,Object(b.jsx)(ee,{profileProvider:oe,taskSettingsManager:le,startNewTask:this.startNewTask.bind(this)})),e);return Object(b.jsx)(b.Fragment,{children:t[this.state.page]})}},{key:"startNewTask",value:function(){ce.cleanCurrentTask(),this.openPage(D.Solve)}},{key:"openPage",value:function(e){this.setState({page:e})}}]),n}(s.a.Component),de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(he,{})}),document.getElementById("root")),de()},8:function(e,t,n){e.exports={settings_container:"OperationSettings_settings_container__3fXro",main_operation_checkox:"OperationSettings_main_operation_checkox__Nt6xQ",operation_checkboxes_list:"OperationSettings_operation_checkboxes_list__11YZs",main_operation_checkox_block:"OperationSettings_main_operation_checkox_block__6EGC6",input_radio_wrap:"OperationSettings_input_radio_wrap__377TX",settings:"OperationSettings_settings__3JtJh",settings_btn:"OperationSettings_settings_btn__3NTSk",settings_arrow:"OperationSettings_settings_arrow__fElCI",settings_opened:"OperationSettings_settings_opened__GonmL"}},9:function(e,t,n){e.exports={options_btn:"Solve_options_btn__3lvny",answer_input_answer_wrap:"Solve_answer_input_answer_wrap__1TDgF",answer_btn_agree:"Solve_answer_btn_agree__LYnoG",state_example_string:"Solve_state_example_string__3S1oz"}}},[[22,1,2]]]);
//# sourceMappingURL=main.49d140dd.chunk.js.map