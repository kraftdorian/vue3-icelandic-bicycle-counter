import "@/stylesheets/components/section.scss";

const AppSection = (_, context) => (
  <section className="app__section">{context.slots.default()}</section>
);

export default AppSection;
