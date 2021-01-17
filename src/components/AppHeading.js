import "@/stylesheets/components/heading.scss";

const AppHeading = ({ level }, context) => {
  const HeadingTag = `h${level}`;
  const className = `app__heading app__heading--level-${level}`;
  return (
    <HeadingTag className={className}>{context.slots.default()}</HeadingTag>
  );
};

export default AppHeading;
