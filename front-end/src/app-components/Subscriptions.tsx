import React, { useState, useEffect } from "react";
import SubscriptionWidget from "./SubscriptionWidget";
import SubscriptionsTable from "./SubscriptionsTable";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

const Subscriptions = () => {
  interface Subscription {
    id: number;
    name: string;
    paymentStatus: string;
    amountPaid: number;
    outstandingAmount: number;
  }

  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSubscription, setSelectedSubscription] =
    useState<Subscription | null>(null);
  const [partialAmount, setPartialAmount] = useState(0);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  useEffect(() => {
    // Fetch subscriptions data (replace with actual data fetching logic)
    const fetchSubscriptions = async () => {
      const fetchedSubscriptions = [
        // Sample data
        {
          id: 1,
          name: "John Doe",
          paymentStatus: "Paid",
          amountPaid: 100,
          outstandingAmount: 0,
        },
        {
          id: 2,
          name: "Jane Smith",
          paymentStatus: "Pending",
          amountPaid: 50,
          outstandingAmount: 50,
        },
        {
          id: 3,
          name: "Alice Johnson",
          paymentStatus: "Overdue",
          amountPaid: 0,
          outstandingAmount: 100,
        },
        // Add more sample subscriptions
      ];
      setSubscriptions(fetchedSubscriptions);
    };

    fetchSubscriptions();
  }, []);

  const handleViewDetails = (id: number) => {
    const subscription = subscriptions.find((sub) => sub.id === id);
    if (subscription) {
      setSelectedSubscription(subscription);
      setIsModalOpen(true);
    }
  };

  const handleMarkPayment = (id: number) => {
    const subscription = subscriptions.find((sub) => sub.id === id);
    if (subscription) {
      setSelectedSubscription(subscription);
      setIsPaymentModalOpen(true);
    }
  };

  const handleSendReminder = (id: number) => {
    console.log(`Send reminder for subscription ID: ${id}`);
  };

  const handleViewMemberDetails = (id: number) => {
    console.log(`View member details for subscription ID: ${id}`);
    // Implement navigation to member details page if needed
  };

  const handlePartialPaymentSave = () => {
    if (selectedSubscription) {
      const updatedSubscriptions = subscriptions.map((sub) =>
        sub.id === selectedSubscription.id
          ? {
              ...sub,
              amountPaid: sub.amountPaid + partialAmount,
              outstandingAmount: sub.outstandingAmount - partialAmount,
              paymentStatus:
                sub.outstandingAmount - partialAmount === 0
                  ? "Paid"
                  : sub.paymentStatus,
            }
          : sub
      );
      setSubscriptions(updatedSubscriptions);
      setIsPaymentModalOpen(false);
      setPartialAmount(0);
    }
  };

  const totalPaidSubscriptions = subscriptions.filter(
    (sub) => sub.paymentStatus === "Paid"
  ).length;
  const totalPendingSubscriptions = subscriptions.filter(
    (sub) => sub.paymentStatus === "Pending"
  ).length;
  const totalAmountCollected = subscriptions.reduce(
    (acc, sub) => acc + sub.amountPaid,
    0
  );
  const totalOutstandingAmount = subscriptions.reduce(
    (acc, sub) => acc + sub.outstandingAmount,
    0
  );

  return (
    <div className="p-4">
      <header className="mb-4 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold">Subscriptions Dashboard</h1>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="mt-2 md:mt-0 bg-blue-500 text-white"
        >
          + Add Subscription
        </Button>
      </header>
      <main className="mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <SubscriptionWidget
          title="Total Paid Subscriptions"
          value={totalPaidSubscriptions}
          icon={<i className="fas fa-check-circle"></i>}
          color="green"
        />
        <SubscriptionWidget
          title="Total Pending Subscriptions"
          value={totalPendingSubscriptions}
          icon={<i className="fas fa-clock"></i>}
          color="yellow"
        />
        <SubscriptionWidget
          title="Total Amount Collected"
          value={totalAmountCollected}
          icon={<i className="fas fa-dollar-sign"></i>}
          color="green"
        />
        <SubscriptionWidget
          title="Total Outstanding Amount"
          value={totalOutstandingAmount}
          icon={<i className="fas fa-exclamation-circle"></i>}
          color="red"
        />
      </main>
      <Card className="bg-white p-4">
        <CardContent>
          <SubscriptionsTable
            data={subscriptions}
            onViewDetails={handleViewDetails}
            onMarkPayment={handleMarkPayment}
            onSendReminder={handleSendReminder}
          />
        </CardContent>
      </Card>
      <Dialog open={isModalOpen} onOpenChange={() => setIsModalOpen(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Subscription Details</DialogTitle>
          </DialogHeader>
          {selectedSubscription && (
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700">Member Name</label>
                <p>{selectedSubscription.name}</p>
              </div>
              <div>
                <label className="block text-gray-700">Payment Status</label>
                <p>{selectedSubscription.paymentStatus}</p>
              </div>
              <div>
                <label className="block text-gray-700">Amount Paid</label>
                <p>${selectedSubscription.amountPaid}</p>
              </div>
              <div>
                <label className="block text-gray-700">
                  Outstanding Amount
                </label>
                <p>${selectedSubscription.outstandingAmount}</p>
              </div>
              <div>
                <Button
                  variant="link"
                  className="text-gray-500 border border-gray-300 p-2 rounded"
                  onClick={() =>
                    handleViewMemberDetails(selectedSubscription.id)
                  }
                >
                  View Member
                </Button>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button
              onClick={() => setIsModalOpen(false)}
              className="bg-blue-500 text-white"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog
        open={isPaymentModalOpen}
        onOpenChange={() => setIsPaymentModalOpen(false)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Mark Payment</DialogTitle>
          </DialogHeader>
          {selectedSubscription && (
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700">Member Name</label>
                <p>{selectedSubscription.name}</p>
              </div>
              <div>
                <label className="block text-gray-700">
                  Outstanding Amount
                </label>
                <p>${selectedSubscription.outstandingAmount}</p>
              </div>
              <div>
                <label className="block text-gray-700">Payment Amount</label>
                <input
                  type="number"
                  value={partialAmount}
                  onChange={(e) => setPartialAmount(Number(e.target.value))}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button
              onClick={handlePartialPaymentSave}
              className="bg-blue-500 text-white"
            >
              Save
            </Button>
            <Button
              onClick={() => setIsPaymentModalOpen(false)}
              variant="link"
              className="ml-2"
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Subscriptions;
