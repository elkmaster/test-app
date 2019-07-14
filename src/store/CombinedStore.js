import connect from "./connect";

import { SidebarStore } from "./SidebarStore";
import { TeamStore } from "./TeamStore";

export default connect(props => props.children)(
    SidebarStore, 
    TeamStore
);
