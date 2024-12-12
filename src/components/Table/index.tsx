/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type Column = {
  label: string;
  dataIndex: string;
  render?: (row: any) => HTMLElement | string | React.ReactNode;
};

const DataTable: FC<{
  columns: Column[];
  data: any[];
  mainClasses?: string;
  tableClasses?: string;
  tableHeadClasses?: string;
  tableRowClasses?: string;
  tableCellClasses?: string;
  tableHeaderClasses?: string;
}> = ({
  columns,
  data,
  mainClasses,
  tableClasses,
  tableHeadClasses,
  tableRowClasses,
  tableCellClasses,
  tableHeaderClasses,
}) => {
    const getCellBorderClasses = (index: number) => {
      if (index === 0) {
        return 'rounded-tl-md rounded-bl-md';
      } else if (index === columns.length - 1) {
        return 'rounded-tr-md rounded-br-md';
      } else {
        return '';
      }
    };

    return (
      <div
        className={`relative max-h-[850px] w-full overflow-y-hidden after:pointer-events-none
        after:absolute after:bottom-0 after:left-0 after:h-[30%] after:w-full
        after:bg-[linear-gradient(rgba(26,29,41,0)_0%,_rgb(26,29,41)_75%)]
        after:content-[""] ${mainClasses}`}
      >
        <Table
          className={`border-separate border-spacing-x-0 border-spacing-y-1 ${tableClasses}`}
        >
          <TableHeader>
            <TableRow className={`hover:bg-bg-rake_grey-50 relative z-20 h-10 bg-rake_grey-50 ${tableHeaderClasses}`}>
              {columns.map((column, index) => (
                <TableHead
                  key={column.label}
                  className={`py-2 text-white ${getCellBorderClasses(index)} ${tableHeadClasses}`}
                >
                  {column.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data ? data.map((row, index) => (
              <TableRow
                key={`${row.id}-${index}`}
                className={`h-10 animate-table-scroll-down rounded-md bg-rake_grey-50 transition-all
              duration-500 ${tableRowClasses}`}
              >
                {columns.map((column, index) => (
                  <TableCell
                    key={index}
                    className={`relative z-10 py-2 ${getCellBorderClasses(index)} ${tableCellClasses}`}
                  >
                    {column.render ? column.render(row) : row[column.dataIndex]}
                  </TableCell>
                ))}
              </TableRow>
            )) : "No Transaction"}
          </TableBody>
        </Table>
      </div>
    );
  };

export default DataTable;
