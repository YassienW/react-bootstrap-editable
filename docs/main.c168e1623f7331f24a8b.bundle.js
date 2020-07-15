(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1242:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(229);var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_src_Editable__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(47),_storybook_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(70),_storybook_addon_info__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(108),_Center__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(60);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)("Functions",module).addDecorator(Object(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_4__.withInfo)({source:!1,inline:!0,header:!1,propTablesExclude:[_src_Editable__WEBPACK_IMPORTED_MODULE_2__.a,_Center__WEBPACK_IMPORTED_MODULE_5__.a,react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment]})).add("onSubmit",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Center__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_Editable__WEBPACK_IMPORTED_MODULE_2__.a,{type:"textfield",mode:"inline",initialValue:"Hello World!",onSubmit:function onSubmit(value){return console.log("Submitted value: ".concat(value))}}))}),{info:' \n        ~~~js\n            <Editable type="textfield" mode="inline" initialValue="Hello World" \n                      onSubmit={(value) => console.log(`Submitted value: ${value}`)}/>\n        ~~~'}).add("validate",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Center__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_Editable__WEBPACK_IMPORTED_MODULE_2__.a,{type:"textfield",mode:"inline",initialValue:"Hello World!",validate:function validate(value){if(+value)return"Numbers not allowed"}}))}),{info:' \n        ~~~js\n            <Editable type="textfield" mode="inline" initialValue="Hello World!"\n                      validate={(value) => {\n                          if(Number(value)){\n                              return "Numbers not allowed"\n                          }\n                      }}/>\n        ~~~'}).add("onValidated",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Center__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_Editable__WEBPACK_IMPORTED_MODULE_2__.a,{type:"textfield",mode:"inline",initialValue:"Hello World!",validate:function validate(value){if(+value)return"Numbers not allowed"},onValidated:function onValidated(validValue){console.log("Valid Value: ".concat(validValue))}}))}),{info:' \n        ~~~js\n            <Editable type="textfield" mode="inline" initialValue="Hello World!"\n                      validate={(value) => {\n                          if(Number(value)){\n                              return "Numbers not allowed"\n                          }\n                      }}\n                      onValidated={(validValue) => {\n                          console.log(`Valid Value: ${validValue}`);\n                      }}/>\n        ~~~'}).add("ajax",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Center__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_Editable__WEBPACK_IMPORTED_MODULE_2__.a,{type:"textfield",mode:"inline",initialValue:"I will return an error :(",id:"input",validate:function validate(value){if(+value)return"Numbers not allowed"},ajax:function ajax(xhr){xhr.open("POST","https://react-editable.free.beeceptor.com/test"),xhr.send()}})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Center__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_Editable__WEBPACK_IMPORTED_MODULE_2__.a,{type:"textfield",mode:"inline",initialValue:"I won't return an error",id:"input",validate:function validate(value){if(+value)return"Numbers not allowed"},ajax:function ajax(xhr,validValue,id){xhr.open("POST","https://react-editable.free.beeceptor.com"),console.log("Ajax value ".concat(validValue)),console.log("Field ID ".concat(id)),xhr.onreadystatechange=function(){console.log("My onreadystatechange")},xhr.send()}})))}),{info:' \n        ~~~js\n            <Editable type="textfield" mode="inline" initialValue="I won\'t return an error" id="input"\n                          validate={(value) => {\n                              if(Number(value)){\n                                  return "Numbers not allowed"\n                              }\n                          }}\n                          ajax={(xhr, validValue, id) => {\n                              //keep in mind this function will never be called unless validation is passed\n                              //initialize xhr here, you can do whatever you want with that object\n                              xhr.open("POST", "https://react-editable.free.beeceptor.com");\n                              console.log(`Ajax value ${validValue}`);\n                              console.log(`Field ID ${id}`);\n                              xhr.onreadystatechange = () => {\n                                  console.log("My onreadystatechange")\n                              };\n                              xhr.send();\n                              //console.log(`Valid Value: ${validValue}`);\n                          }}/>\n        ~~~'})}.call(this,__webpack_require__(145)(module))},1243:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(70),_src_Editable__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(47),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_Center__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(60),_storybook_addon_info__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(108),confirmElement=react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a",{href:"#",className:"badge badge-success mr-1"},"Confirm"),cancelElement=react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a",{href:"#",className:"badge badge-danger"},"Cancel"),_ref=react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Center__WEBPACK_IMPORTED_MODULE_3__.a,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_Editable__WEBPACK_IMPORTED_MODULE_1__.a,{type:"textfield",mode:"inline",initialValue:"Hello World!",renderConfirmElement:confirmElement,renderCancelElement:cancelElement}));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Custom Components",module).addDecorator(Object(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_4__.withInfo)({source:!1,inline:!0,header:!1,propTablesExclude:[_src_Editable__WEBPACK_IMPORTED_MODULE_1__.a,_Center__WEBPACK_IMPORTED_MODULE_3__.a,react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment]})).add("Buttons",(function(){return _ref}),{info:' \n        ~~~js\n            const confirmElement = (\n                <a href="#" className="badge badge-success mr-1">Confirm</a>\n            );\n            const cancelElement = (\n                <a href="#" className="badge badge-danger">Cancel</a>\n            );\n            <Editable type="textfield" mode="inline" initialValue="Hello World!"\n                      renderConfirmElement={confirmElement} renderCancelElement={cancelElement}/>\n        ~~~'})}.call(this,__webpack_require__(145)(module))},405:function(module,exports,__webpack_require__){__webpack_require__(406),__webpack_require__(549),module.exports=__webpack_require__(550)},468:function(module,exports){},47:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Editable}));__webpack_require__(1),__webpack_require__(11),__webpack_require__(18),__webpack_require__(21),__webpack_require__(54),__webpack_require__(22),__webpack_require__(13),__webpack_require__(43),__webpack_require__(28),__webpack_require__(31),__webpack_require__(3),__webpack_require__(10),__webpack_require__(34),__webpack_require__(14),__webpack_require__(15);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),prop_types=__webpack_require__(4),prop_types_default=__webpack_require__.n(prop_types);function Input(_ref){var className=_ref.className,children=_ref.children,type=_ref.type,value=_ref.value,invalid=_ref.invalid,_onChange=_ref.onChange,baseClassName="form-control-sm form-control ";return invalid&&(baseClassName+="is-invalid "),className&&(baseClassName+=className),"select"===type?react_default.a.createElement("select",{className:baseClassName,value:value,onChange:function onChange(e){return _onChange(e.target.value)}},children):"textarea"===type?react_default.a.createElement("textarea",{className:baseClassName,value:value,onChange:function onChange(e){return _onChange(e.target.value)}}):react_default.a.createElement("input",{className:baseClassName,autoFocus:!0,type:type,value:value,onChange:function onChange(e){return _onChange(e.target.value,e)}})}function TextField(_ref){var validationText=_ref.validationText,value=_ref.value,setNewValue=_ref.setNewValue,controls=_ref.controls;return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(Input,{className:"mr-1",type:"text",value:value||"",onChange:setNewValue,invalid:!!validationText}),controls)}function _uid(_ref){var validationText=_ref.validationText,value=_ref.value,setNewValue=_ref.setNewValue;return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(Input,{className:"mb-1",invalid:!!validationText,value:value||"",onChange:setNewValue,type:"textarea"}))}Input.displayName="Input",Input.__docgenInfo={description:"",methods:[],displayName:"Input"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Input.js"]={name:"Input",docgenInfo:Input.__docgenInfo,path:"src/Input.js"}),TextField.displayName="TextField",TextField.__docgenInfo={description:"",methods:[],displayName:"TextField"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextField.js"]={name:"TextField",docgenInfo:TextField.__docgenInfo,path:"src/components/TextField.js"}),_uid.displayName="TextArea";__webpack_require__(27);function Select_TextField(_ref){var value=_ref.value,setNewValue=_ref.setNewValue,controls=_ref.controls,selectOptions=_ref.options.map((function(value,index){return react_default.a.createElement("option",{key:index+value},value)}));return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(Input,{value:value,onChange:setNewValue,type:"select",className:"mr-1"},selectOptions),controls)}Select_TextField.displayName="TextField",Select_TextField.__docgenInfo={description:"",methods:[],displayName:"TextField"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Select.js"]={name:"TextField",docgenInfo:Select_TextField.__docgenInfo,path:"src/components/Select.js"});__webpack_require__(745);function Date_Date(_ref){var value=_ref.value,setNewValue=_ref.setNewValue,controls=_ref.controls,date=value;if(date)if(date.toISOString)date=date.toISOString().slice(0,10);else try{date=new window.Date(date).toISOString().slice(0,10)}catch(err){console.error("Unable to parse provided date value to Date object: ".concat(err.message))}return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(Input,{value:date||"",type:"date",className:"mr-1",onChange:function onChange(newValue,e){return setNewValue(e.target.valueAsDate)}}),controls)}Date_Date.displayName="Date",Date_Date.__docgenInfo={description:"",methods:[],displayName:"Date"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Date.js"]={name:"Date",docgenInfo:Date_Date.__docgenInfo,path:"src/components/Date.js"});var react_dom=__webpack_require__(107),react_dom_default=__webpack_require__.n(react_dom),usePopper=__webpack_require__(1253);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Popover(_ref){var isOpen=_ref.isOpen,triggerElement=_ref.triggerElement,placement=_ref.placement,children=_ref.children,_useState2=_slicedToArray(Object(react.useState)(null),2),popperElement=_useState2[0],setPopperElement=_useState2[1],_usePopper=Object(usePopper.a)(triggerElement.current,popperElement,{placement:placement}),styles=_usePopper.styles,state=_usePopper.state,popoverElement=react_default.a.createElement("div",{className:"bs-popover-auto popover",ref:setPopperElement,style:styles.popper,"x-placement":null==state?void 0:state.placement},react_default.a.createElement("div",{className:"arrow","data-popper-arrow":!0,style:styles.arrow}),react_default.a.createElement("div",{className:"popover-inner",role:"tooltip"},react_default.a.createElement("h3",{className:"popover-header"},children[0]),react_default.a.createElement("div",{className:"popover-body"},children[1])));return isOpen?react_dom_default.a.createPortal(popoverElement,document.getElementsByTagName("body")[0]):null}function File(_ref){var value=_ref.value,setNewValue=_ref.setNewValue,controls=_ref.controls,label=_ref.label;return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("div",{className:"custom-file"},react_default.a.createElement("input",{type:"file",className:"custom-file-input mr-1",onChange:function onChange(e){return setNewValue(e.target.files[0])}}),react_default.a.createElement("label",{className:"custom-file-label"},value?value.name:label)),controls)}function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function Editable_slicedToArray(arr,i){return function Editable_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function Editable_iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function Editable_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return Editable_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Editable_arrayLikeToArray(o,minLen)}(arr,i)||function Editable_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Editable_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}File.displayName="File",File.__docgenInfo={description:"",methods:[],displayName:"File"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/File.js"]={name:"File",docgenInfo:File.__docgenInfo,path:"src/components/File.js"});var fontAwesomeStyle={textAlign:"center",width:"1.25em",height:"1em",fill:"white",verticalAlign:"-0.25em"},Editable_ref=react_default.a.createElement("button",{className:"btn btn-success btn-sm ml-auto mr-1"},react_default.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",style:fontAwesomeStyle},react_default.a.createElement("path",{color:"white",d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}))),_ref5=react_default.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512",style:fontAwesomeStyle},react_default.a.createElement("path",{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}));function Editable(props){var _useState2=Editable_slicedToArray(Object(react.useState)(props.initialValue),2),value=_useState2[0],setValue=_useState2[1],_useState4=Editable_slicedToArray(Object(react.useState)(props.initialValue),2),newValue=_useState4[0],setNewValue=_useState4[1],_useState6=Editable_slicedToArray(Object(react.useState)(!1),2),isEditing=_useState6[0],setIsEditing=_useState6[1],_useState8=Editable_slicedToArray(Object(react.useState)(null),2),validationText=_useState8[0],setValidationText=_useState8[1],_useState10=Editable_slicedToArray(Object(react.useState)(!1),2),isLoading=_useState10[0],setIsLoading=_useState10[1],clickableLink=Object(react.useRef)(null);Object(react.useEffect)((function(){!props.ajax||props.validate||props.disabled||console.error("Editable(".concat(props.id,"): You provided an ajax prop without a validate prop;\n            ajax function will not be called"))}),[]),Object(react.useEffect)((function(){setValue(props.initialValue),setNewValue(props.initialValue)}),[props.initialValue]);var _ref3=react_default.a.createElement("small",{className:"mt-0 form-text text-muted"},validationText),_ref4=react_default.a.createElement("small",{className:"mt-0 form-text text-muted"},validationText);function getEditingComponent(){var confirmButton=Editable_ref,cancelButton=_ref2;react_default.a.isValidElement(props.renderConfirmElement)&&(confirmButton=react_default.a.cloneElement(props.renderConfirmElement,{onClick:onFormSubmit})),react_default.a.isValidElement(props.renderCancelElement)&&(cancelButton=react_default.a.cloneElement(props.renderCancelElement,{onClick:function onClick(e){e.preventDefault(),onCancel()}}));var controls=react_default.a.createElement(react_default.a.Fragment,null,confirmButton,cancelButton);isLoading&&(controls=react_default.a.createElement("div",{className:"my-auto mx-4"},react_default.a.createElement("div",{className:"spinner-border",style:{width:"1.5rem",height:"1.5rem"}})));var component,commonProps={value:newValue,validationText:validationText,controls:controls,setNewValue:setNewValue,onCancel:onCancel};switch(props.type){case"textfield":component=react_default.a.createElement(TextField,commonProps);break;case"select":component=react_default.a.createElement(Select_TextField,_extends({},commonProps,{options:props.options}));break;case"date":component=react_default.a.createElement(Date_Date,commonProps);break;case"textarea":return react_default.a.createElement("form",{onSubmit:onFormSubmit},react_default.a.createElement(_uid,commonProps),react_default.a.createElement("div",{className:"d-flex align-items-start"},_ref3,controls));case"file":component=react_default.a.createElement(File,_extends({},commonProps,{label:props.label}));break;default:return console.error("Editable(".concat(props.id,'): "').concat(props.type,'" is not a valid value for the "type" prop')),null}return react_default.a.createElement("form",{onSubmit:onFormSubmit,className:props.className},react_default.a.createElement("div",{className:"align-items-baseline d-flex"},component),_ref4)}function onFormSubmit(e){e.preventDefault(),function onSubmit(newValue){var validationText=props.validate?props.validate(newValue):null;props.onSubmit&&props.onSubmit(newValue),validationText?setValidationText(validationText):props.validate?function onValidated(validValue){props.onValidated?props.onValidated(validValue):props.ajax||console.error("Editable(".concat(props.id,"): Specified a validate function without onValidated or ajax"));props.ajax&&validValue!==value?function ajax(validValue){setIsLoading(!0);var xhr=new XMLHttpRequest;props.ajax(xhr,validValue,props.id);var onReadyStateChange=xhr.onreadystatechange?xhr.onreadystatechange:null;xhr.onreadystatechange=function(){onReadyStateChange&&onReadyStateChange(),4===xhr.readyState&&(200===xhr.status?(setIsEditing(!1),setValue(validValue),setValidationText(null)):setValidationText("Ajax Response ".concat(xhr.status," Error")),setIsLoading(!1))}}(validValue):(setValue(validValue),setIsEditing(!1),setValidationText(null))}(newValue):(setValue(newValue),setIsEditing(!1))}(newValue)}function onCancel(){setValidationText(null),setNewValue(value),setIsEditing(!1)}var _ref2=react_default.a.createElement("button",{className:"btn btn-danger btn-sm",onClick:onCancel},_ref5);if((isEditing||props.alwaysEditing)&&"inline"===props.mode)return getEditingComponent();var valueToRender=value||"No value";valueToRender="date"===props.type&&value?new window.Date(value).toUTCString().slice(5,16):value,valueToRender="file"===props.type&&value?value.name:valueToRender;var p="",a="";props.isValueClickable?props.disabled?p=valueToRender:a=valueToRender:(p=valueToRender,a=props.disabled?a:props.editText),p=props.label?"".concat(props.label,": ").concat(p):p;var popover="popover"===props.mode?react_default.a.createElement(Popover,{isOpen:isEditing,placement:props.placement,triggerElement:clickableLink},props.label,getEditingComponent()):null;return react_default.a.createElement("form",{className:"form-inline ".concat(props.className),onSubmit:onFormSubmit},p&&props.showText&&react_default.a.createElement("p",{className:"my-0",style:{whiteSpace:"pre-wrap"}},p),a&&react_default.a.createElement("a",{ref:clickableLink,className:"ml-1 mt-auto",href:"#",onClick:function onClick(e){e.preventDefault(),setIsEditing(!0)}},a),popover)}Editable.defaultProps={type:"textfield",mode:"inline",alwaysEditing:!1,className:null,initialValue:null,id:null,label:null,showText:!0,disabled:!1,isValueClickable:!1,editText:"Edit",renderConfirmElement:null,renderCancelElement:null,placement:"top",validate:null,ajax:null,onSubmit:null,onValidated:null,options:null},Editable.propTypes={type:prop_types_default.a.oneOf(["textfield","textarea","select","date","file"]).isRequired,mode:prop_types_default.a.oneOf(["inline","popover"]).isRequired,alwaysEditing:prop_types_default.a.bool,className:prop_types_default.a.string,initialValue:prop_types_default.a.oneOfType([prop_types_default.a.string,prop_types_default.a.instanceOf(Date_Date)]),id:prop_types_default.a.oneOfType([prop_types_default.a.string,prop_types_default.a.number]),label:prop_types_default.a.string,showText:prop_types_default.a.bool,disabled:prop_types_default.a.bool,isValueClickable:prop_types_default.a.bool,editText:prop_types_default.a.string,renderConfirmElement:prop_types_default.a.element,renderCancelElement:prop_types_default.a.element,validate:prop_types_default.a.func,ajax:prop_types_default.a.func,onSubmit:prop_types_default.a.func,onValidated:prop_types_default.a.func,placement:prop_types_default.a.oneOf(["auto","auto-start","auto-end","top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"]),options:prop_types_default.a.array},Editable.__docgenInfo={description:"",methods:[],displayName:"Editable",props:{type:{defaultValue:{value:'"textfield"',computed:!1},type:{name:"enum",value:[{value:'"textfield"',computed:!1},{value:'"textarea"',computed:!1},{value:'"select"',computed:!1},{value:'"date"',computed:!1},{value:'"file"',computed:!1}]},required:!1,description:""},mode:{defaultValue:{value:'"inline"',computed:!1},type:{name:"enum",value:[{value:'"inline"',computed:!1},{value:'"popover"',computed:!1}]},required:!1,description:""},alwaysEditing:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},className:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""},initialValue:{defaultValue:{value:"null",computed:!1},type:{name:"union",value:[{name:"string"},{name:"instanceOf",value:"Date"}]},required:!1,description:""},id:{defaultValue:{value:"null",computed:!1},type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1,description:""},label:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""},showText:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},disabled:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},isValueClickable:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},editText:{defaultValue:{value:'"Edit"',computed:!1},type:{name:"string"},required:!1,description:""},renderConfirmElement:{defaultValue:{value:"null",computed:!1},type:{name:"element"},required:!1,description:""},renderCancelElement:{defaultValue:{value:"null",computed:!1},type:{name:"element"},required:!1,description:""},placement:{defaultValue:{value:'"top"',computed:!1},type:{name:"enum",value:[{value:'"auto"',computed:!1},{value:'"auto-start"',computed:!1},{value:'"auto-end"',computed:!1},{value:'"top"',computed:!1},{value:'"top-start"',computed:!1},{value:'"top-end"',computed:!1},{value:'"right"',computed:!1},{value:'"right-start"',computed:!1},{value:'"right-end"',computed:!1},{value:'"bottom"',computed:!1},{value:'"bottom-start"',computed:!1},{value:'"bottom-end"',computed:!1},{value:'"left"',computed:!1},{value:'"left-start"',computed:!1},{value:'"left-end"',computed:!1}]},required:!1,description:"Popover mode only"},validate:{defaultValue:{value:"null",computed:!1},type:{name:"func"},required:!1,description:"Functions"},ajax:{defaultValue:{value:"null",computed:!1},type:{name:"func"},required:!1,description:""},onSubmit:{defaultValue:{value:"null",computed:!1},type:{name:"func"},required:!1,description:""},onValidated:{defaultValue:{value:"null",computed:!1},type:{name:"func"},required:!1,description:""},options:{defaultValue:{value:"null",computed:!1},type:{name:"array"},required:!1,description:"Select only"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Editable.js"]={name:"Editable",docgenInfo:Editable.__docgenInfo,path:"src/Editable.js"})},550:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(70),Container=(__webpack_require__(725),__webpack_require__(742),function(storyFn){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container"},storyFn())});Container.displayName="Container",Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)(Container),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.configure)((function loadStories(){__webpack_require__(744),__webpack_require__(1242),__webpack_require__(1243)}),module)}.call(this,__webpack_require__(145)(module))},60:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Center}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);function Center(props){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"row mt-5"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"col-6 mx-auto"},props.children))}Center.displayName="Center",Center.__docgenInfo={description:"",methods:[],displayName:"Center"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/Center.js"]={name:"Center",docgenInfo:Center.__docgenInfo,path:".storybook/Center.js"})},742:function(module,exports,__webpack_require__){var api=__webpack_require__(352),content=__webpack_require__(743);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},743:function(module,exports,__webpack_require__){(exports=__webpack_require__(353)(!1)).push([module.i,".react-demo__target-wrap{\n    max-width: 400px;\n    margin: 80px auto 80px;\n}",""]),module.exports=exports},744:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(70),_src_Editable__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(47),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(41),_storybook_addon_info__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(108),_ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"row mt-3"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"col-12 mx-auto text-center"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,"Welcome to react-bootstrap-editable"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"You can test the component and play around with the props on this page. All the values currently set are the default prop values, you can find more information below."))),_ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr",null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Welcome",module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs).addDecorator(Object(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_4__.withInfo)({inline:!0,header:!1,propTables:[_src_Editable__WEBPACK_IMPORTED_MODULE_2__.a]})).addParameters({options:{showPanel:!0,panelPosition:"right"}}).add("Demo",(function(){var type=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.radios)("type",["textfield","textarea","select","date","file"],"textfield","Common"),mode=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.radios)("mode",["inline","popover"],"inline","Common"),options="select"===type&&Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.array)("options",["Value1","Value2","Value3"],",","Select"),placement="popover"===mode&&Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.radios)("placement",["auto","auto-start","auto-end","top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"],"top","Popover");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,_ref,_ref2,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"row my-5"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"col-6 mx-auto"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Editable__WEBPACK_IMPORTED_MODULE_2__.a,{type:type,mode:mode,alwaysEditing:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("alwaysEditing",!1,"Common"),className:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("className",void 0,"Common"),initialValue:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("initialValue","Hello World!","Common"),id:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("id",void 0,"Common"),label:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("label",void 0,"Common"),showText:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("showText",!0,"Common"),disabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("disabled",!1,"Common"),isValueClickable:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("isValueClickable",!1,"Common"),editText:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("editText",void 0,"Common"),options:options||void 0,placement:placement||void 0}))))}))}.call(this,__webpack_require__(145)(module))},759:function(module,exports,__webpack_require__){var map={"./nestedObjectAssign":354,"./nestedObjectAssign.js":354};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=759}},[[405,1,2]]]);
//# sourceMappingURL=main.c168e1623f7331f24a8b.bundle.js.map