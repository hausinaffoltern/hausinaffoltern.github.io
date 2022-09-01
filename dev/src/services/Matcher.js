export const getParams = props => {
  console.log(props);
  return props.match && props.match.params;
};
