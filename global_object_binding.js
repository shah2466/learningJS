/**
 * JavaScript Global Object Binding.
 * If the this keyword is not resolved with any of the bindings, implicit, explicit or new, then the this is bound to the window(global) object.
 * There is one exception though. JavaScript strict mode does not allow this default binding.
 */

let sayName = function (name) {
  console.log(this.name);
};

//window.name = "Tapas";

//Here 'window' object is not defined as we are not on a browser engine. If we were to run this script in a browser, 'window' object would be globally present.
//Instead, use 'globalThis'.windowVar as shown below.

globalThis.name = "Tapas";
sayName(); //Tapas
//If the this keyword is not resolved with any of the bindings, implicit, explicit or new, then the this is bound to the window(global) object.
