function buildPropGetter (propertyBuilders) {
  return customProps => {
    const mergedProps = Object.assign({}, customProps);
    Object.keys(propertyBuilders).forEach(k => {
      mergedProps[k] = propertyBuilders[k](mergedProps[k]);
    });
    return mergedProps;
  }
}

export default buildPropGetter;