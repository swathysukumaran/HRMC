import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function MemberDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState<{
    id: number;
    name: string;
    email: string;
    status: string;
  } | null>(null);

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
    const memberData = id
      ? mockMembers.find((m) => m.id === parseInt(id)) || null
      : null;
    setMember(memberData);
  }, [id]);

  const handleEdit = () => {
    // Navigate to edit page or open edit form
    console.log("Edit member:", member);
  };

  if (!member) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4 space-y-8">
      <Card className="bg-white text-black p-4 rounded-xl shadow-lg border-0">
        <CardHeader>
          <CardTitle>Member Details</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-bold">{member.name}</p>
          <p className="text-sm text-gray-500">{member.email}</p>
          <p className="text-sm text-gray-500">{member.status}</p>
          <Button className="mt-4 bg-blue-500 text-white" onClick={handleEdit}>
            Edit
          </Button>
          <Button
            className="mt-4 ml-2 bg-gray-500 text-white"
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default MemberDetail;
