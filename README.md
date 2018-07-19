# frida-ex-nativefunction
This module provides you with an extended NativeFunction class.  
It is meant to be used inside of a frida script.  
See for example: [frida-compile](https://github.com/frida/frida-compile)

## Example
```
const ExNativeFunction = require('frida-ex-nativefunction')

const openPtr = Module.findExportByName('libc.so', 'open')
const func = new ExNativeFunction(openPtr, 'int', ['pointer', 'int'])

// You can use the function as usual, but you can access some properties.
// Example:
func.address
func.retType
func.argTypes
func.abi

// This is very useful when hooking functions,
// so you dont have to define everything again.
```
