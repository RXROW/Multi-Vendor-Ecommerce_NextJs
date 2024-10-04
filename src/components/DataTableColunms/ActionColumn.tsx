import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import EditBtn from "../Actions/EditBtn";
import DeleteBtn from "../Actions/DeleteBtn";
 
export default function ActionColumn({
  row,
  title,
  editEndpoint,
  endPoint,
}: {
  row: any;
  title: string;
  editEndpoint: any;
  endPoint: any;
}) {
  const isActive = row.isActive;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <EditBtn title={title} editEndpoint={editEndpoint} />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <DeleteBtn endpoint={endPoint} title={title} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}