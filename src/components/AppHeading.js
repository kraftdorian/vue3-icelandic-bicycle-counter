const AppHeading = ({ level }, context) => {
  const HeadingTag = `h${level}`;
  return <HeadingTag>{context.slots.default()}</HeadingTag>;
};

export default AppHeading;
