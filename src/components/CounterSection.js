import AppSection from "@/components/ui/AppSection";
import AppHeading from "@/components/ui/AppHeading";

const CounterSection = ({ headingLevel, headingText, count }) => (
  <AppSection>
    <AppHeading level={headingLevel}>{headingText}</AppHeading>
    <p>{count}</p>
  </AppSection>
);

CounterSection.props = {
  headingLevel: {
    type: Number,
    default: 2
  },
  headingText: {
    type: String,
    default: "Counter"
  },
  count: {
    type: Number,
    default: 0
  }
};

export default CounterSection;
