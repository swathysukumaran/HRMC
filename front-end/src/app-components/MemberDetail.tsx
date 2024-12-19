import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function MemberDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState<{
    id: number;
    name: string;
    email: string;
    status: string;
    occupation: string;
    address: string;
    contacts: string;
    bloodGroup: string;
  } | null>(null);
  const [isEditable, setIsEditable] = useState(false);

  // Mock data
  const mockMembers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      status: "active",
      occupation: "Software Engineer",
      address: "123 Main St, Springfield",
      contacts: "123-456-7890",
      bloodGroup: "O+",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      status: "inactive",
      occupation: "Doctor",
      address: "456 Elm St, Springfield",
      contacts: "987-654-3210",
      bloodGroup: "A+",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      status: "active",
      occupation: "Teacher",
      address: "789 Oak St, Springfield",
      contacts: "555-123-4567",
      bloodGroup: "B+",
    },
    {
      id: 4,
      name: "Bob Brown",
      email: "bob@example.com",
      status: "inactive",
      occupation: "Lawyer",
      address: "321 Pine St, Springfield",
      contacts: "444-555-6666",
      bloodGroup: "AB+",
    },
  ];

  useEffect(() => {
    // Simulate fetching data from an API
    const memberData = mockMembers.find((m) => m.id === parseInt(id || "0"));
    setMember(memberData || null);
  }, [id]);

  const handleEdit = () => {
    setIsEditable(true);
  };

  const handleSave = () => {
    setIsEditable(false);
    // Save the updated member details
    console.log("Save member:", member);
  };

  interface ChangeEvent {
    target: {
      name: string;
      value: string;
    };
  }

  const handleChange = (e: ChangeEvent) => {
    const { name, value } = e.target;
    setMember((prevMember) =>
      prevMember ? { ...prevMember, [name]: value } : prevMember
    );
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
          <form className="space-y-4">
            <div className="flex items-center">
              <label className="block text-sm font-bold mb-2 w-1/4">Name</label>
              <Input
                type="text"
                name="name"
                value={member.name}
                onChange={handleChange}
                readOnly={!isEditable}
                className="w-3/4 p-2 border rounded"
              />
            </div>
            <div className="flex items-center">
              <label className="block text-sm font-bold mb-2 w-1/4">
                Email
              </label>
              <Input
                type="email"
                name="email"
                value={member.email}
                onChange={handleChange}
                readOnly={!isEditable}
                className="w-3/4 p-2 border rounded"
              />
            </div>
            <div className="flex items-center">
              <label className="block text-sm font-bold mb-2 w-1/4">
                Status
              </label>
              <Input
                type="text"
                name="status"
                value={member.status}
                onChange={handleChange}
                readOnly={!isEditable}
                className="w-3/4 p-2 border rounded"
              />
            </div>
            <div className="flex items-center">
              <label className="block text-sm font-bold mb-2 w-1/4">
                Occupation
              </label>
              <Input
                type="text"
                name="occupation"
                value={member.occupation}
                onChange={handleChange}
                readOnly={!isEditable}
                className="w-3/4 p-2 border rounded"
              />
            </div>
            <div className="flex items-center">
              <label className="block text-sm font-bold mb-2 w-1/4">
                Address
              </label>
              <Textarea
                name="address"
                value={member.address}
                onChange={handleChange}
                readOnly={!isEditable}
                className="w-3/4 p-2 border rounded"
              />
            </div>
            <div className="flex items-center">
              <label className="block text-sm font-bold mb-2 w-1/4">
                Contacts
              </label>
              <Input
                type="text"
                name="contacts"
                value={member.contacts}
                onChange={handleChange}
                readOnly={!isEditable}
                className="w-3/4 p-2 border rounded"
              />
            </div>
            <div className="flex items-center">
              <label className="block text-sm font-bold mb-2 w-1/4">
                Blood Group
              </label>
              <Input
                type="text"
                name="bloodGroup"
                value={member.bloodGroup}
                onChange={handleChange}
                readOnly={!isEditable}
                className="w-3/4 p-2 border rounded"
              />
            </div>
          </form>
          <div className="mt-4">
            {isEditable ? (
              <Button className="bg-green-500 text-white" onClick={handleSave}>
                Save
              </Button>
            ) : (
              <Button className="bg-blue-500 text-white" onClick={handleEdit}>
                Edit
              </Button>
            )}
            <Button
              className="ml-2 bg-gray-500 text-white"
              onClick={() => navigate(-1)}
            >
              Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default MemberDetail;
