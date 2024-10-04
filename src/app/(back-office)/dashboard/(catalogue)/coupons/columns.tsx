"use client";

import { Checkbox } from "@/components/ui/checkbox";
import SortableColumn from "@/components/DataTableColunms/SortableColumn";
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
    accessorKey: "couponCode",
    header: "Coupon Code",
  },
  {
    accessorKey: "expiryDate",
    header: "Expiry Date",
    cell: ({ row }: { row: any }) => (
      <DateColumn row={row} accessorKey="expiryDate" />
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
      const coupon = row.original;
      return (
        <ActionColumn
          row={row}
          title="Coupon"
          editEndpoint={`coupons/update/${coupon.id}`}
          endPoint={`coupons/${coupon.id}`}
        />
      );
    },
  },
];