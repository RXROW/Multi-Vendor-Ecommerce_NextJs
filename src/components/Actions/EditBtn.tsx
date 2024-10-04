import { Pencil } from "lucide-react";
import Link from "next/link";

export default function EditBtn({
  editEndpoint,
  title,
}: {
  editEndpoint: string;
  title: string;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return (
    <Link
      href={`${baseUrl}/dashboard/${editEndpoint}`}
      className="flex items-center text-green-600"
    >
      <Pencil className="mr-2 w-4 h-4 " />
      <span>Edit {title}</span>
    </Link>
  );
}