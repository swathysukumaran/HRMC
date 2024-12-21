import React, { useState, useEffect } from "react";
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
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Subscriptions() {
  interface Member {
    id: number;
    name: string;
    subscriptionAmount: number;
    amountPaid: number;
    lastReminder: string | null;
    status: string;
  }

  const [members, setMembers] = useState<Member[]>([]);

  // Mock data
  const mockMembers = [
    {
      id: 1,
      name: "John Doe",
      subscriptionAmount: 100,
      amountPaid: 0,
      lastReminder: null,
      status: "active",
    },
    {
      id: 2,
      name: "Jane Smith",
      subscriptionAmount: 100,
      amountPaid: 100,
      lastReminder: null,
      status: "inactive",
    },
    {
      id: 3,
      name: "Alice Johnson",
      subscriptionAmount: 100,
      amountPaid: 50,
      lastReminder: "2023-10-01",
      status: "active",
    },
    {
      id: 4,
      name: "Bob Brown",
      subscriptionAmount: 100,
      amountPaid: 100,
      lastReminder: null,
      status: "inactive",
    },
  ];

  useEffect(() => {
    // Simulate fetching data from an API
    setMembers(mockMembers);
  }, []);

  interface HandleMarkPaid {
    (id: number, amount: number): void;
  }

  const handleMarkPaid: HandleMarkPaid = (id, amount) => {
    setMembers((prevMembers) =>
      prevMembers.map((member) =>
        member.id === id
          ? { ...member, amountPaid: member.amountPaid + amount }
          : member
      )
    );
  };

  interface HandleSendReminder {
    (id: number): void;
  }

  const handleSendReminder: HandleSendReminder = (id) => {
    const currentDate = new Date().toISOString().split("T")[0];
    setMembers((prevMembers) =>
      prevMembers.map((member) =>
        member.id === id ? { ...member, lastReminder: currentDate } : member
      )
    );
  };

  interface HandleDeactivate {
    (id: number): void;
  }

  const handleDeactivate: HandleDeactivate = (id) => {
    setMembers((prevMembers) =>
      prevMembers.map((member) =>
        member.id === id ? { ...member, status: "inactive" } : member
      )
    );
  };

  const pendingSubscriptions = members.filter(
    (member) => member.amountPaid < member.subscriptionAmount
  ).length;

  return (
    <div className="p-4 space-y-8">
      <Card className="bg-white text-black p-4 rounded-xl shadow-lg border-0">
        <CardHeader>
          <CardTitle>Subscriptions</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Pending Subscriptions: {pendingSubscriptions}</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">Name</TableHead>
                <TableHead className="text-left">Subscription Amount</TableHead>
                <TableHead className="text-left">Amount Paid</TableHead>
                <TableHead className="text-left">Last Reminder</TableHead>
                <TableHead className="text-left">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {members.map((member) => (
                <TableRow key={member.id}>
                  <TableCell className="text-left">{member.name}</TableCell>
                  <TableCell className="text-left">
                    ${member.subscriptionAmount}
                  </TableCell>
                  <TableCell className="text-left">
                    ${member.amountPaid}
                  </TableCell>
                  <TableCell className="text-left">
                    {member.lastReminder || "N/A"}
                  </TableCell>
                  <TableCell className="text-left">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button className="bg-gray-500 text-white">
                          Actions
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-white border border-gray-300">
                        <DropdownMenuItem className="hover:bg-gray-100">
                          <div className="flex items-center">
                            <Input
                              type="number"
                              min="1"
                              max={
                                member.subscriptionAmount - member.amountPaid
                              }
                              defaultValue={
                                member.subscriptionAmount - member.amountPaid
                              }
                              className="mr-2 w-20"
                              onChange={(e) =>
                                handleMarkPaid(
                                  member.id,
                                  parseInt(e.target.value)
                                )
                              }
                            />
                            <Button
                              className="bg-green-500 text-white"
                              onClick={() =>
                                handleMarkPaid(
                                  member.id,
                                  member.subscriptionAmount - member.amountPaid
                                )
                              }
                            >
                              Mark as Paid
                            </Button>
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-gray-100">
                          <Button
                            className="bg-blue-500 text-white"
                            onClick={() => handleSendReminder(member.id)}
                          >
                            Send Reminder
                          </Button>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-gray-100">
                          <Button
                            className="bg-red-500 text-white"
                            onClick={() => handleDeactivate(member.id)}
                          >
                            Deactivate Member
                          </Button>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default Subscriptions;
