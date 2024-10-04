"use client";

import { Checkbox } from "@/components/ui/checkbox";

import SortableColumn from "@/components/DataTableColunms/SortableColumn";
import ImageColumn from "@/components/DataTableColunms/ImageColumn";
import DateColumn from "@/components/DataTableColunms/DateColumn";
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
    accessorKey: "title",
    header: ({ column }: { column: any }) => (
      <SortableColumn column={column} title="Title" />
    ),
  },
  {
    accessorKey: "imageUrl",
    header: "Banner Image",
    cell: ({ row }: { row: any }) => (
      <ImageColumn row={row} accessorKey="imageUrl" />
    ),
  },
  {
    accessorKey: "link",
    header: "Link",
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
      const banner = row.original;
      return (
        <ActionColumn
          row={row}
          title="Banner"
          editEndpoint={`banners/update/${banner.id}`}
          endPoint={`banners/${banner.id}`}
        />
      );
    },
  },
];