import React from "react";

const SidebarContext = React.createContext();

export function SidebarStore(Component) {
  return function ConnectedComponent(props) {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    return (
      <SidebarContext.Provider
        value={{
          isSidebarOpen,
          toggleSidebar
        }}
      >
        <Component {...props} />
      </SidebarContext.Provider>
    );
  };
}

export function withSidebar(Component) {
  return function ConnectedComponent(props) {
    return (
      <SidebarContext.Consumer>
        {({ isSidebarOpen, toggleSidebar }) => (
          <Component
            {...props}
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
        )}
      </SidebarContext.Consumer>
    );
  };
}
