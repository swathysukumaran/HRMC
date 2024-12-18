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
import { useNavigate } from "react-router-dom";

function Members() {
  const [members, setMembers] = useState<
    { id: number; name: string; email: string; status: string }[]
  >([]);
  const navigate = useNavigate();

  // Mock data
  const mockMembers = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "active" },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      status: "inactive",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      status: "active",
    },
    { id: 4, name: "Bob Brown", email: "bob@example.com", status: "inactive" },
  ];

  useEffect(() => {
    // Simulate fetching data from an API
    setMembers(mockMembers);
  }, []);

  const handleView = (id: number) => {
    navigate(`/members/${id}`);
  };

  return (
    <div className="p-4 space-y-8">
      <Card className="bg-white text-black p-4 rounded-xl shadow-lg border-0">
        <CardHeader>
          <CardTitle>Members</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">Name</TableHead>
                <TableHead className="text-left">Email</TableHead>
                <TableHead className="text-left">Status</TableHead>
                <TableHead className="text-left">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {members.map((member) => (
                <TableRow key={member.id}>
                  <TableCell className="text-left">{member.name}</TableCell>
                  <TableCell className="text-left">{member.email}</TableCell>
                  <TableCell className="text-left">{member.status}</TableCell>
                  <TableCell className="text-left">
                    <Button
                      className="mr-2 bg-blue-500 text-white"
                      onClick={() => handleView(member.id)}
                    >
                      View
                    </Button>
                    <Button className="bg-red-500 text-white">Delete</Button>
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

export default Members;
