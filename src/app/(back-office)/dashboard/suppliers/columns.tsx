"use client";

import { Checkbox } from "@/components/ui/checkbox";

import DateColumn from "@/components/DataTableColunms/DateColumn";
import ImageColumn from "@/components/DataTableColunms/ImageColumn";
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
      <SortableColumn column={column} title="name" />
    ),
  },

  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
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
      const supplier = row.original;
      return (
        <ActionColumn
          row={row}
          title="Supplier"
          editEndpoint={`suppliers/update/${supplier.id}`}
          endPoint={`suppliers/${supplier.id}`}
        />
      );
    },
  },
];