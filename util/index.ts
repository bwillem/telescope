import { DataTableRow } from "../components/DataTable";
import { ReactionSnapshot } from "../pages/api/reaction/[time]";

const components = ['A', 'B', 'C', 'D', 'cat']

function formatForDataTable(snapshot: ReactionSnapshot | undefined): DataTableRow[] {
	if (!snapshot) return []
	return components.map(c => ({ component: c, amount: snapshot?.[c] }))
}

export {
	components,
	formatForDataTable,
}
