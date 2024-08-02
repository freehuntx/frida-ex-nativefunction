declare const ExNativeFunction: ExNativeFunctionConstructor;

type NativeCallbackImpl<
  R extends NativeCallbackReturnType,
  A extends NativeCallbackArgumentType[] | [],
> = NativeCallbackImplementation<
  GetNativeCallbackReturnValue<R>,
  ResolveVariadic<Extract<GetNativeCallbackArgumentValue<A>, unknown[]>>
>;

interface ExNativeFunctionConstructor {
  new <
    RetType extends NativeFunctionReturnType,
    ArgTypes extends NativeFunctionArgumentType[] | [],
  >(
    address: NativePointerValue,
    retType: RetType,
    argTypes: ArgTypes,
    abiOrOptions?: NativeABI | NativeFunctionOptions,
  ): ExNativeFunction<
    GetNativeFunctionReturnValue<RetType>,
    ResolveVariadic<
      Extract<GetNativeFunctionArgumentValue<ArgTypes>, unknown[]>
    >
  >;

  readonly prototype: ExNativeFunction<void, []>;
}

interface ExNativeFunction<
  RetType extends NativeFunctionReturnValue,
  ArgTypes extends NativeFunctionArgumentValue[] | [],
> extends NativeFunction<RetType, ArgTypes> {
  address: NativePointerValue;
  retType: NativeFunctionReturnType;
  argTypes: NativeFunctionArgumentType[] | [];

  nativeCallback<
    R extends NativeCallbackReturnType,
    A extends NativeCallbackArgumentType[] | [],
  >(
    callback: NativeCallbackImpl<R, A>,
  ): NativeCallback<R, A>;

  intercept(
    options: InvocationListenerCallbacks | InstructionProbeCallback,
  ): InvocationListener;

  replace<
    R extends NativeCallbackReturnType,
    A extends NativeCallbackArgumentType[] | [],
  >(
    callback: NativeCallbackImpl<R, A>,
  ): void;
}

export default ExNativeFunction;
