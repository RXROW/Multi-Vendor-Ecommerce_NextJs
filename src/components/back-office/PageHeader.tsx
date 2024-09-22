import Heading from "@/components/back-office/Heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

interface PageHeaderProps {
  title: string;
  linkTitle: string;
  href: string;
}

export default function PageHeader({ title, linkTitle, href }: PageHeaderProps) {
  return (
    <div className="flex justify-between border-b border-slate-400 py-4">
      <Heading title={title} />
      <Button className="bg-green-500 hover:scale-105 hover:bg-green-600 text-white transition">
        <Link className="flex items-center space-x-3" href={href}>
          <Plus />
          <span>{linkTitle}</span>
        </Link>
      </Button>
    </div>
  );
}
