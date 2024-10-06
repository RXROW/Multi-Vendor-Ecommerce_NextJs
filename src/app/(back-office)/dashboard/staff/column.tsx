"use client";

import { Checkbox } from "@/components/ui/checkbox";
import DateColumn from "@/components/DataTableColunms/DateColumn";
import SortableColumn from "@/components/DataTableColunms/SortableColumn";
import ActionColumn from "@/components/DataTableColunms/ActionColumn";

 
export const columns = [
  {
    id: "select",
    header: ({ table }: { table: any }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }: { row: any }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "name",
    header: ({ column }: { column: any }) => (
      <SortableColumn column={column} title="Name" />
    ),
  },

  {
    accessorKey: "email",
    header: ({ column }: { column: any }) => (
      <SortableColumn column={column} title="Email" />
    ),
  },

  {
    accessorKey: "phone",
    header: ({ column }: { column: any }) => (
      <SortableColumn column={column} title="Phone" />
    ),
  },

  {
    accessorKey: "isActive",
    header: "Active",
  },

  {
    accessorKey: "createdAt",
    header: "Created Date",
    cell: ({ row }: { row: any }) => (
      <DateColumn row={row} accessorKey="createdAt" />
    ),
  },

  {
    id: "actions",
    cell: ({ row }: { row: any }) => {
      const staff = row.original;
      return (
        <ActionColumn
          row={row}
          title="Staff"
          editEndpoint={`staff/update/${staff.id}`}
          endPoint={`staff/${staff.id}`}
        />
      );
    },
  },
];
