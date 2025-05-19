import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface Subscription {
  id: number;
  name: string;
  paymentStatus: string;
  amountPaid: number;
  outstandingAmount: number;
}

interface SubscriptionsTableProps {
  data: Subscription[];
  onViewDetails: (id: number) => void;
  onMarkPayment: (id: number) => void;
  onSendReminder: (id: number) => void;
}

const SubscriptionsTable: React.FC<SubscriptionsTableProps> = ({
  data,
  onViewDetails,
  onMarkPayment,
  onSendReminder,
}) => {
  const getStatusClass = (status: string) => {
    switch (status) {
      case "Paid":
        return "text-green-500";
      case "Pending":
        return "text-yellow-500";
      case "Overdue":
        return "text-red-500";
      default:
        return "";
    }
  };

  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="text-left p-2 md:p-4">Member Name</TableHead>
          <TableHead className="text-left p-2 md:p-4">Payment Status</TableHead>
          <TableHead className="text-left p-2 md:p-4">Amount Paid</TableHead>
          <TableHead className="text-left p-2 md:p-4">
            Outstanding Amount
          </TableHead>
          <TableHead className="text-left p-2 md:p-4">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((subscription) => (
          <TableRow key={subscription.id}>
            <TableCell className="text-left p-2 md:p-4">
              {subscription.name}
            </TableCell>
            <TableCell
              className={`text-left p-2 md:p-4 ${getStatusClass(
                subscription.paymentStatus
              )}`}
            >
              {subscription.paymentStatus}
            </TableCell>
            <TableCell className="text-left p-2 md:p-4">
              ${subscription.amountPaid}
            </TableCell>
            <TableCell className="text-left p-2 md:p-4">
              ${subscription.outstandingAmount}
            </TableCell>
            <TableCell className="text-left p-2 md:p-4">
              <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
                <Button
                  variant="link"
                  className="text-blue-500 border border-gray-300 p-2 rounded"
                  onClick={() => onViewDetails(subscription.id)}
                >
                  View Details
                </Button>
                <Button
                  variant="link"
                  className="text-green-500 border border-gray-300 p-2 rounded"
                  onClick={() => onMarkPayment(subscription.id)}
                >
                  Mark Payment
                </Button>
                <Button
                  variant="link"
                  className="text-yellow-500 border border-gray-300 p-2 rounded"
                  onClick={() => onSendReminder(subscription.id)}
                >
                  Send Reminder
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SubscriptionsTable;
