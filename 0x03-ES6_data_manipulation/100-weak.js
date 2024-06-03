export const weakMap = new WeakMap();

const MAX_API_CALLS = 5;

export function queryAPI(apiEndpoint) {
  if (!weakMap.has(apiEndpoint)) {
    weakMap.set(apiEndpoint, 0);
  }
  weakMap.set(apiEndpoint, weakMap.get(apiEndpoint) + 1);
  if (weakMap.get(apiEndpoint) >= MAX_API_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
