export const gettingDataTestAttr = (wrapper, attr) => {
    return wrapper.find(`[data-test="${attr}"]`);
}