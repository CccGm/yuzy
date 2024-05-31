import React from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

export const TableComponent = (props: any) => {
  const { columnsData, tableData } = props;
  const columns = React.useMemo(() => columnsData, [columnsData]);
  const data = React.useMemo(() => tableData, [tableData]);

  return (
    <div className="flex w-full">
      <MyTable
        {...{
          data,
          columns,
        }}
      />
    </div>
  );
};

function MyTable({ data, columns }: { data: any; columns: any }) {
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 6,
  });

  const table = useReactTable({
    columns,
    data,
    debugTable: false,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,

    state: {
      pagination,
    },
  });

  return (
    <div className="mt-5 overflow-x-auto w-full">
      <div className="h-2" />
      <table className="w-full border">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className=" py-[3px] text-start dark:!border-navy-700">
                    <div
                      className="w-full justify-between px-2 cursor-pointer text-lg"
                      style={{ color: "#A7A7A7", fontWeight: 400 }}
                      onClick={header.column.getToggleSortingHandler()}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: " 🔼",
                        desc: " 🔽",
                      }[header.column.getIsSorted() as string] ?? null}
                      {/* {header.column.getCanFilter() ? (
                          <div>
                            <Filter column={header.column} table={table} />
                          </div>
                        ) : null} */}
                    </div>
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr
                key={row.id}
                className="hover:bg-gray-100 hover:cursor-pointer text-start border-t py-2">
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td
                      key={cell.id}
                      className="text-black dark:text-white p-2 text-lg">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr />

      <div className="flex justify-end mt-5 px-3">
        <button
          className="border rounded py-1 px-3 pr-2"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}>
          <MdArrowBackIos />
        </button>
        <p
          className="px-3 py-1 rounded mx-4"
          style={{ borderWidth: 0.4, borderColor: "#0083FF" }}>
          {table.getState().pagination.pageIndex + 1}
        </p>
        <button
          className="border rounded py-1 px-3"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}>
          <MdArrowForwardIos />
        </button>
        <div className="border items-center flex rounded ml-10">
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}>
            {[10, 20, 30, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize} / Page
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
