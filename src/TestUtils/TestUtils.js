import checkPropTypes from 'check-prop-types';

export const gettingDataTestAttr = (wrapper, attr) => {
    return wrapper.find(`[data-test="${attr}"]`);
}

export const checkProps = (component, conformingProp) => {
    const propError = checkPropTypes( component.propTypes, conformingProp, 'prop', component.name );
    expect(propError).toBeUndefined();
}