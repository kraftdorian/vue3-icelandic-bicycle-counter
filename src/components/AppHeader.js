import AppHeading from "@/components/AppHeading";
import AppLogo from "@/components/AppLogo";

import "@/stylesheets/components/header.scss";

const AppHeader = () => {
  return (
    <header className="app__header">
      <AppLogo />
      <AppHeading level={1}>Icelandic Bicycle Counter</AppHeading>
    </header>
  );
};

export default AppHeader;
