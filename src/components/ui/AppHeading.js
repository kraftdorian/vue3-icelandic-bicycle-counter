import "@/stylesheets/components/heading.scss";

const AppHeading = ({ level }, context) => {
  const HeadingTag = `h${level}`;
  const className = `app__heading app__heading--level-${level}`;
  return (
    <HeadingTag className={className}>{context.slots.default()}</HeadingTag>
  );
};

AppHeading.props = {
  level: {
    type: Number,
    default: 1,
    validator(value) {
      return +value > 0 && +value <= 6;
    }
  }
};

export default AppHeading;
