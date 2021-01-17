<script>
import AppSection from "@/components/ui/AppSection";
import AppHeading from "@/components/ui/AppHeading";

export default {
  components: { AppSection, AppHeading },
  setup() {
    return {};
  },
  render() {
    return (
      <>
        <AppSection>
          <AppHeading level="2">Daily entries</AppHeading>
        </AppSection>
      </>
    );
  }
};
</script>
