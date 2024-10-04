"use client";

import ActionColumn from "@/components/DataTableColunms/ActionColumn";
import DateColumn from "@/components/DataTableColunms/DateColumn";
import ImageColumn from "@/components/DataTableColunms/ImageColumn";
import SortableColumn from "@/components/DataTableColunms/SortableColumn";
import { Checkbox } from "@/components/ui/checkbox";

 
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
    header: "Category Image",
    cell: ({ row }: { row: any }) => (
      <ImageColumn row={row} accessorKey="imageUrl" />
    ),
  },
  // {
  //   accessorKey: "description",
  //   header: "Description",
  //   cell: ({ row }: { row: any }) => {
  //     const description = row.getValue("description");
  //     return (
  //       <div className="line-clamp-1 text-slate-900 dark:text-slate-100">
  //         {description}
  //       </div>
  //     );
  //   },
  // },
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
      const category = row.original;
      return (
        <ActionColumn
          row={row}
          title="Category"
          editEndpoint={`categories/update/${category.id}`}
          endPoint={`categories/${category.id}`}
        />
      );
    },
  },
];