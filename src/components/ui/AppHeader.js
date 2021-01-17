import AppHeading from "@/components/ui/AppHeading";
import AppLogo from "@/components/ui/AppLogo";

import "@/stylesheets/components/header.scss";

const AppHeader = () => {
  return (
    <header className="app__header">
      <AppLogo />
      <AppHeading>Icelandic Bicycle Counter</AppHeading>
    </header>
  );
};

export default AppHeader;
