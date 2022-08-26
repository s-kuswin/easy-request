/* eslint-disable */
// @ts-nocheck

export const headers = { 'Content-Type': 'application/json' };
export const method = 'GET';
export const credentials = 'same-origin';

export function queryStringify(params, inBody) {
  const items = [];

  function itemStringify(obj, prefix) {
    const type = Object.prototype.toString.call(obj);
    if (type === '[object Array]') {
      obj.forEach((item) => {
        itemStringify(item, `${prefix}`);
      });
    } else if (type === '[object Object]') {
      for (const key in obj) {
        itemStringify(obj[key], `${prefix}[${key}]`);
      }
    } else if (type === '[object Date]') {
      items.push(`${prefix}=${obj.toISOString()}`);
    } else if (type === '[object Null]') {
      items.push(`${prefix}=`);
    } else if (type !== '[object Undefined]') {
      items.push(`${prefix}=${encodeURIComponent(obj)}`);
    }
  }

  for (const k in params) {
    itemStringify(params[k], k);
  }

  const str = items.join('&');
  return str && !inBody ? `?${str}` : str;
}

const toStringTypeMap = {
  o: '[object Object]',
  a: '[object Array]',
  s: '[object String]',
  n: '[object Number]',
  b: '[object Boolean]',
  u: '[object Undefined]',
  l: '[object Null]'
};

function isType(value, typeName) {
  return (
    ['any', 'string'].includes(typeName) ||
    Object.prototype.toString.call(value) === toStringTypeMap[typeName]
  );
}

function isUndefinedOrNull(value) {
  return isType(value, 'u') || isType(value, 'l');
}

function getTypeName(value) {
  return Object.prototype.toString
    .call(value)
    .replace(/\[object (.*)\]/, '$1')
    .toLowerCase();
}

function getMixKey(key) {
  if (key.indexOf('-') === 0) return key.slice(1);
  return key;
}

function getMixValue(param, key) {
  if (key.indexOf('-') === 0) return param;
  return param[key];
}

export function _checkBaseType(param, key, typeIndex, required = true) {
  const value = getMixValue(param, key);
  const valid =
    (!required && isUndefinedOrNull(value)) || isType(value, typeIndex);
  if (!valid) {
    const actualType = getTypeName(value);
    const jsType = toStringTypeMap[typeIndex].replace(/\[object (.*)?\]/, '$1');
    throw new TypeError(
      `for the value of ${getMixKey(
        key
      )}: type '${actualType}' is not assignable to type '${jsType}'.`
    );
  }
}

export function _checkEnumType(param, key, enumObj, required = true) {
  const value = getMixValue(param, key);
  const values = Object.keys(enumObj).map((k) => enumObj[k]);
  const valid =
    (!required && isUndefinedOrNull(value)) || values.indexOf(value) !== -1;
  if (!valid) {
    throw new TypeError(
      `for the value of ${getMixKey(
        key
      )}: ${value} is not a valid enum value(in [${values}])`
    );
  }
}

export function _checkStructType(param, key, checkFunc, required = true) {
  const value = getMixValue(param, key);
  if (Object.prototype.toString.call(value) !== '[object Object]') {
    if (!required && isUndefinedOrNull(value)) {
      return true;
    }

    throw new TypeError(
      `for the value of ${getMixKey(key)}: ${JSON.stringify(
        value
      )} is not a valid struct value`
    );
  }

  checkFunc(value);
}

export function _checkListType(
  param,
  key,
  _,
  required = true,
  subCheckFuncs = [],
  subTypes = []
) {
  const value = getMixValue(param, key);
  const valid = (!required && isUndefinedOrNull(value)) || isType(value, 'a');
  if (!valid) {
    const valueType = getTypeName(value);
    throw new TypeError(
      `for the value of ${getMixKey(
        key
      )}: type '${valueType}' is not assignable to type 'array'.`
    );
  }

  if (value && subCheckFuncs.length && subTypes.length) {
    const checkFunc = subCheckFuncs[0];
    const nextSubCheckFuncs = subCheckFuncs.slice(1);
    const [type, ...nexSubTypes] = subTypes;
    if (typeof checkFunc === 'function') {
      value.forEach((item, idx) => {
        checkFunc(
          item,
          `-${getMixKey(key)}[${idx}]`,
          type,
          true,
          nextSubCheckFuncs,
          nexSubTypes
        );
      });
    }
  }
}

export function _checkMapType(
  param,
  key,
  _,
  required = true,
  subCheckFuncs = [],
  subTypes = []
) {
  const value = getMixValue(param, key);
  const valid = (!required && isUndefinedOrNull(value)) || isType(value, 'o');
  if (!valid) {
    const valueType = getTypeName(value);
    throw new TypeError(
      `for the value of ${getMixKey(
        key
      )}: type '${valueType}' is not assignable to type 'object'.`
    );
  }

  if (value && subCheckFuncs.length && subTypes.length) {
    let [
      [
        [checkKeyFunc, ...nextSubCheckFuncs] = [],
        [checkValueFunc, ...nextSubCheckValueFuncs] = []
      ] = []
    ] = subCheckFuncs;

    const checkKey = typeof checkKeyFunc === 'function';
    const checkValue = typeof checkValueFunc === 'function';
    const [
      [
        [keyType, ...nextSubKeyTypes] = [],
        [valueType, ...nextSubValueTypes] = []
      ] = []
    ] = subTypes;

    Object.keys(value).forEach((k) => {
      if (checkKey) {
        checkKeyFunc(
          k,
          `-${getMixKey(key)}[${k}]`,
          keyType,
          true,
          nextSubCheckFuncs,
          nextSubKeyTypes
        );
      }

      if (checkValue) {
        checkValueFunc(
          value,
          k,
          valueType,
          true,
          nextSubCheckValueFuncs,
          nextSubValueTypes
        );
      }
    });
  }
}