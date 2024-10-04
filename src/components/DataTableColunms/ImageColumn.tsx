import Image from "next/image";

export default function ImageColumn({
  row,
  accessorKey,
}: {
  row: any;
  accessorKey: string;
}) {
  const imageUrl = row.getValue(`${accessorKey}`);

  return (
    <Image
      src={imageUrl}
      alt={`${accessorKey}`}
      width={556}
      height={556}
      className="w-12 h-12 object-cover rounded-full"
    />
  );
}