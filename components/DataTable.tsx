import { useMemo } from "react"
import { Table, Thead, Tbody, Tr, Th, Td, Icon, chakra } from "@chakra-ui/react"
import { useTable, useSortBy } from "react-table"
import { FaCaretUp, FaCaretDown } from 'react-icons/fa'

export interface DataTableRow {
	component: string,
	amount: number,
}

export interface DataTableProps {
	data: DataTableRow[]
}

function DataTable({ data }: DataTableProps) {
	const columns = useMemo(() => [
		{
			Header: "Component",
			accessor: "component",
		},
		{
			Header: "Amount",
			accessor: "amount",
		},
	], [])

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({ columns, data }, useSortBy)

	return (
		<Table {...getTableProps()}>
			<Thead>
				{headerGroups.map((headerGroup) => (
					<Tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<Th
								{...column.getHeaderProps(column.getSortByToggleProps())}
								isNumeric={column.isNumeric}
							>
								{column.render("Header")}
								<chakra.span pl="4">
									{column.isSorted ? (
										column.isSortedDesc ? (
											<Icon as={FaCaretUp} aria-label="sorted descending" />
										) : (
											<Icon as={FaCaretDown} aria-label="sorted ascending" />
										)
									) : null}
								</chakra.span>
							</Th>
						))}
					</Tr>
				))}
			</Thead>
			<Tbody {...getTableBodyProps()}>
				{rows.map((row) => {
					prepareRow(row)
					return (
						<Tr {...row.getRowProps()}>
							{row.cells.map((cell) => (
								<Td {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
									{cell.render("Cell")}
								</Td>
							))}
						</Tr>
					)
				})}
			</Tbody>
		</Table>
	)
}

export default DataTable
