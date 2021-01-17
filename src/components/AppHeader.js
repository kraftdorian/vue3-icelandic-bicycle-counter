import AppHeading from "@/components/AppHeading";

import logo from "@/assets/logo.svg";

const AppHeader = () => {
  return (
    <header className="app__header">
      <img className="header__logo" src={logo} />
      <AppHeading level={1}>Icelandic Bicycle Counter</AppHeading>
    </header>
  );
};

export default AppHeader;
