import React from "react";

const TeamContext = React.createContext();

const JEDI_CONCULE = [
  { name: "jediName1", title: "jediTitle1" },
  { name: "jediName2", title: "jediTitle2" },
  { name: "jediName3", title: "jediTitle3" },
  { name: "jediName4", title: "jediTitle4" },
  { name: "jediName5", title: "jediTitle5" }
];
const SITH_LORDS = [
  { name: "sithName1", title: "sithTitle1" },
  { name: "sithName2", title: "sithTitle2" },
  { name: "sithName3", title: "sithTitle3" },
  { name: "sithName4", title: "sithTitle4" },
  { name: "sithName5", title: "sithTitle5" },
  { name: "sithName6", title: "sithTitle6" },
  { name: "sithName7", title: "sithTitle7" }
];

const TEAMS = {
  1: { name: "Jedi Councul", id: 1, items: JEDI_CONCULE },
  2: { name: "Sith Lords", id: 2, items: SITH_LORDS }
};

export function TeamStore(Component) {
  return function ConnectedComponent(props) {
    const [selectedTeam, selectTeam] = React.useState(1);
    return (
      <TeamContext.Provider
        value={{
          selectedTeam,
          selectTeam,
          teams: TEAMS
        }}
      >
        <Component {...props} />
      </TeamContext.Provider>
    );
  };
}

export function withTeam(Component) {
  return function ConnectedComponent(props) {
    return (
      <TeamContext.Consumer>
        {({ selectedTeam, selectTeam, teams }) => (
          <Component
            {...props}
            selectedTeam={selectedTeam}
            selectTeam={selectTeam}
            teams={teams}
          />
        )}
      </TeamContext.Consumer>
    );
  };
}
