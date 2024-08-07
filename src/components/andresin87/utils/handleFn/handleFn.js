const handleFn = (fn) => (typeof fn === 'function' ? fn : () => null)

export default handleFn
