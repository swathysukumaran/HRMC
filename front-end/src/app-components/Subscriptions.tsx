import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface Member {
  id: number;
  name: string;
  status: string;
  subscriptionFee: number;
  pendingPayment: number;
}

const mockMembers: Member[] = [
  {
    id: 1,
    name: "John Doe",
    status: "active",
    subscriptionFee: 100,
    pendingPayment: 50,
  },
  {
    id: 2,
    name: "Jane Smith",
    status: "inactive",
    subscriptionFee: 100,
    pendingPayment: 100,
  },
  {
    id: 3,
    name: "Alice Johnson",
    status: "active",
    subscriptionFee: 100,
    pendingPayment: 0,
  },
  {
    id: 4,
    name: "Bob Brown",
    status: "inactive",
    subscriptionFee: 100,
    pendingPayment: 75,
  },
];

function Subscriptions() {
  const [members, setMembers] = useState<Member[]>(mockMembers);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [paymentAmount, setPaymentAmount] = useState<number>(0);

  const handleDeactivate = (id: number): void => {
    setMembers((prevMembers: Member[]) =>
      prevMembers.map((member: Member) =>
        member.id === id ? { ...member, status: "inactive" } : member
      )
    );
  };

  const handleActivate = (id: number): void => {
    setMembers((prevMembers: Member[]) =>
      prevMembers.map((member: Member) =>
        member.id === id ? { ...member, status: "active" } : member
      )
    );
  };

  const handleMakePayment = (id: number): void => {
    const member = members.find((member) => member.id === id);
    if (member) {
      setSelectedMember(member);
      setPaymentAmount(0);
    }
  };

  const handlePaymentSubmit = (): void => {
    if (selectedMember) {
      setMembers((prevMembers: Member[]) =>
        prevMembers.map((member: Member) =>
          member.id === selectedMember.id
            ? {
                ...member,
                pendingPayment: Math.max(
                  0,
                  member.pendingPayment - paymentAmount
                ),
              }
            : member
        )
      );
      setSelectedMember(null);
    }
  };

  return (
    <div className="p-4 space-y-8">
      <Card className="bg-white text-black p-4 rounded-xl shadow-lg border-0">
        <CardHeader>
          <CardTitle>Subscriptions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">Name</TableHead>
                <TableHead className="text-left">Status</TableHead>
                <TableHead className="text-left">Subscription Fee</TableHead>
                <TableHead className="text-left">Pending Payment</TableHead>
                <TableHead className="text-left">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {members.map((member) => (
                <TableRow key={member.id}>
                  <TableCell className="text-left">{member.name}</TableCell>
                  <TableCell className="text-left">{member.status}</TableCell>
                  <TableCell className="text-left">
                    ${member.subscriptionFee}
                  </TableCell>
                  <TableCell className="text-left">
                    ${member.pendingPayment}
                  </TableCell>
                  <TableCell className="text-left">
                    {member.status === "active" ? (
                      <Button
                        className="mr-2"
                        style={{
                          backgroundColor: "var(--danger-color)",
                          color: "var(--background-color)",
                        }}
                        onClick={() => handleDeactivate(member.id)}
                      >
                        Deactivate
                      </Button>
                    ) : (
                      <Button
                        className="mr-2"
                        style={{
                          backgroundColor: "var(--primary-color)",
                          color: "var(--background-color)",
                        }}
                        onClick={() => handleActivate(member.id)}
                      >
                        Activate
                      </Button>
                    )}
                    <Button
                      className="mr-2"
                      style={{
                        backgroundColor: "var(--secondary-color)",
                        color: "var(--background-color)",
                      }}
                      onClick={() => handleMakePayment(member.id)}
                    >
                      Make Payment
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {selectedMember && (
        <Dialog
          open={!!selectedMember}
          onOpenChange={() => setSelectedMember(null)}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Make Payment for {selectedMember.name}</DialogTitle>
            </DialogHeader>
            <Input
              type="number"
              placeholder="Payment Amount"
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(Number(e.target.value))}
              className="mb-4 w-full p-2 border rounded"
            />
            <Button
              style={{
                backgroundColor: "var(--secondary-color)",
                color: "var(--background-color)",
              }}
              onClick={handlePaymentSubmit}
            >
              Submit Payment
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

export default Subscriptions;
