export function deepFind(obj, property) {
  let value = obj;

  property.split('.').forEach((k) => {
    if (value && typeof(value) === 'object') {
      value = value[k];
    }
  });

  return value;
}
