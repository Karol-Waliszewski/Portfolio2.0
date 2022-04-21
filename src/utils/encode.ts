const encode = (data: { [x: string]: string | number | boolean }): string =>
  (Object.keys(data) as [keyof typeof data])
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

export default encode
