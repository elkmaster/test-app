import React from "react";
import Layout from "../../hocs/Layout/Layout";
import { withTeam } from "../../store/TeamStore";
import connect from "../../store/connect";
import Member from "../../components/Member/Member";

function App({ selectedTeam, teams }) {
  const data = teams[selectedTeam].items;

  return (
    <Layout>
      {data.map((e, id) => (
        <Member key={id} name={e.name} title={e.title} />
      ))}
    </Layout>
  );
}

export default connect(App)(withTeam);
