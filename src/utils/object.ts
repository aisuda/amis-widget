// 方便取值的时候能够把上层的取到，但是获取的时候不会全部把所有的数据获取到。
export function createObject(
  superProps?: { [propName: string]: any },
  props?: { [propName: string]: any },
  properties?: any,
): object {
  if (superProps && Object.isFrozen(superProps)) {
    superProps = cloneObject(superProps);
  }

  const obj = superProps
    ? Object.create(superProps, {
        ...properties,
        __super: {
          value: superProps,
          writable: false,
          enumerable: false,
        },
      })
    : Object.create(Object.prototype, properties);

  props &&
    isObject(props) &&
    Object.keys(props).forEach((key) => (obj[key] = props[key]));

  return obj;
}

export function cloneObject(target: any, persistOwnProps: boolean = true) {
  const obj =
    target && target.__super
      ? Object.create(target.__super, {
          __super: {
            value: target.__super,
            writable: false,
            enumerable: false,
          },
        })
      : Object.create(Object.prototype);
  persistOwnProps &&
    target &&
    Object.keys(target).forEach((key) => (obj[key] = target[key]));
  return obj;
}

export function extendObject(
  target: any,
  src?: any,
  persistOwnProps: boolean = true,
) {
  const obj = cloneObject(target, persistOwnProps);
  src && Object.keys(src).forEach((key) => (obj[key] = src[key]));
  return obj;
}

export function isObject(obj: any) {
  const typename = typeof obj;
  return (
    obj &&
    typename !== 'string' &&
    typename !== 'number' &&
    typename !== 'boolean' &&
    typename !== 'function' &&
    !Array.isArray(obj)
  );
}
