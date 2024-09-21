import React from "react";
 
import SmallCard from "./SmallCard";
import { CheckCheck, Home, Loader2, RefreshCcw, ShoppingCart } from "lucide-react";

export default function SmallCards() {
  const orderStats = [
    {
      title: "Total Order",
      sales: 1109,
      iconBg: "bg-green-600",
      icon:ShoppingCart,
    },
    {
      title: "Order Paniding",
      sales: 134,
      iconBg: "bg-blue-600",
      icon:Loader2,
    },
    {
      title: "Order Processing",
      sales: 303,
      iconBg: "bg-orange-600",
      icon:RefreshCcw,
    },
    {
      title: "Orders Deliverd",
      sales: 500,
      iconBg: "bg-purple-600",
      icon:CheckCheck,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      {orderStats.map((data, i) => {
        return <SmallCard key={i} data={data}/>;
      })}
     
 
   
 
    </div>
  );
}