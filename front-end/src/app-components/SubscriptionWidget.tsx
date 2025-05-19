import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SubscriptionWidgetProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: "green" | "yellow" | "red";
}

const SubscriptionWidget: React.FC<SubscriptionWidgetProps> = ({
  title,
  value,
  icon,
  color,
}) => {
  const colorClasses = {
    green: "bg-green-500 text-white",
    yellow: "bg-yellow-500 text-white",
    red: "bg-red-500 text-white",
  };

  return (
    <Card className="flex flex-col items-center justify-center p-4 bg-white">
      <CardHeader className="flex items-center justify-between w-full">
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
        <Badge className={`p-2 rounded-full ${colorClasses[color]}`}>
          {icon}
        </Badge>
      </CardHeader>
      <CardContent className="text-2xl font-bold">{value}</CardContent>
    </Card>
  );
};

export default SubscriptionWidget;
