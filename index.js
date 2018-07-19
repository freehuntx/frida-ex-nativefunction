class ExNativeFunction {
  constructor(address, retType = 'void', argTypes = [], abi = 'default') {
    const native = new NativeFunction(address, retType, argTypes, abi)

    return Object.defineProperties(native, {
      address: { value: address },
      retType: { value: retType },
      argTypes: { value: argTypes },
      abi: { value: abi }
    })
  }
}

module.exports = ExNativeFunction
