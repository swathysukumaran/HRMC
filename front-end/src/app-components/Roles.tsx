import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const roles = [
  { name: "President", max: 1 },
  { name: "General Secretary", max: 1 },
  { name: "Treasurer", max: 1 },
  { name: "Vice President", max: 2 },
  { name: "Joint Secretary", max: 2 },
  { name: "Executive", max: Infinity },
  { name: "Regional Co-ordinator", max: Infinity },
  { name: "Member", max: Infinity },
];

const mockMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "President",
    region: "",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "General Secretary",
    region: "",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "Member",
    region: "",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Bob Brown",
    role: "Member",
    region: "",
    photo: "https://via.placeholder.com/150",
  },
];

function Roles() {
  const [members, setMembers] = useState<
    { id: number; name: string; role: string; region: string; photo: string }[]
  >([]);
  const [searchTerms, setSearchTerms] = useState<{ [key: string]: string }>({});
  const [selectedMembers, setSelectedMembers] = useState<SelectedMembers>({});
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  useEffect(() => {
    // Simulate fetching data from an API
    setMembers(mockMembers);
  }, []);

  interface Member {
    id: number;
    name: string;
    role: string;
    region: string;
    photo: string;
  }

  interface SelectedMembers {
    [key: string]: Member | null;
  }

  const handleAssignRole = (memberId: number | null, role: string) => {
    setSelectedMembers((prevSelected: SelectedMembers) => ({
      ...prevSelected,
      [role]: members.find((member: Member) => member.id === memberId) || null,
    }));
  };

  const handleAssignRegion = (memberId: number, region: string) => {
    setMembers((prevMembers: Member[]) =>
      prevMembers.map((member: Member) =>
        member.id === memberId ? { ...member, region } : member
      )
    );
  };

  const handleSaveCommittee = () => {
    // Save the updated committee roles
    console.log("Committee roles saved:", selectedMembers);
  };

  interface SearchTerms {
    [key: string]: string;
  }

  const handleSearchChange = (role: string, value: string) => {
    setSearchTerms((prevTerms: SearchTerms) => ({
      ...prevTerms,
      [role]: value,
    }));
  };

  interface FilteredMembers {
    (role: string): Member[];
  }

  const filteredMembers: FilteredMembers = (role) =>
    searchTerms[role]
      ? members.filter((member: Member) =>
          member.name.toLowerCase().includes(searchTerms[role].toLowerCase())
        )
      : [];

  return (
    <div className="p-4 space-y-8">
      <Card className="bg-white text-black p-4 rounded-xl shadow-lg border-0">
        <CardHeader>
          <CardTitle>Committee Members</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {roles.map((role) => (
              <div key={role.name} className="mb-8">
                <h2 className="text-xl font-bold mb-4">{role.name}</h2>
                {selectedMembers[role.name] ? (
                  <Card className="bg-white text-black p-4 rounded-xl shadow-lg border-0">
                    <CardHeader>
                      {selectedMembers[role.name] && (
                        <img
                          src={selectedMembers[role.name]?.photo}
                          alt={selectedMembers[role.name]?.name}
                          className="w-16 h-16 rounded-full mx-auto mb-4"
                        />
                      )}
                      <CardTitle>{selectedMembers[role.name]?.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Role: {role.name}</p>
                      {role.name === "Regional Co-ordinator" && (
                        <p className="text-sm">
                          Region: {selectedMembers[role.name]?.region || "N/A"}
                        </p>
                      )}
                      <Button
                        className="mt-4 bg-red-500 text-white"
                        onClick={() => handleAssignRole(null, role.name)}
                      >
                        Replace
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  <Button
                    className="mt-4 bg-blue-500 text-white"
                    onClick={() => setSelectedRole(role.name)}
                  >
                    Assign {role.name}
                  </Button>
                )}
              </div>
            ))}
          </div>
          <Dialog
            open={!!selectedRole}
            onOpenChange={() => setSelectedRole(null)}
          >
            <DialogContent className="max-h-screen overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Assign {selectedRole}</DialogTitle>
              </DialogHeader>
              <Input
                type="text"
                placeholder="Search members"
                value={selectedRole ? searchTerms[selectedRole] || "" : ""}
                onChange={(e) =>
                  selectedRole &&
                  handleSearchChange(selectedRole, e.target.value)
                }
                className="mb-4 w-full p-2 border rounded"
              />
              {selectedRole && filteredMembers(selectedRole).length > 0 && (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-left">Name</TableHead>
                      <TableHead className="text-left">Current Role</TableHead>
                      <TableHead className="text-left">Region</TableHead>
                      <TableHead className="text-left">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredMembers(selectedRole).map((member) => (
                      <TableRow key={member.id}>
                        <TableCell className="text-left">
                          {member.name}
                        </TableCell>
                        <TableCell className="text-left">
                          {member.role}
                        </TableCell>
                        <TableCell className="text-left">
                          {member.region || "N/A"}
                        </TableCell>
                        <TableCell className="text-left">
                          {selectedRole === "Regional Co-ordinator" && (
                            <Input
                              type="text"
                              placeholder="Enter region"
                              value={member.region}
                              onChange={(e) =>
                                handleAssignRegion(member.id, e.target.value)
                              }
                              className="w-full p-2 border rounded mt-2"
                            />
                          )}
                          <Button
                            className="mt-4 bg-gray-500 text-white"
                            onClick={() => {
                              handleAssignRole(member.id, selectedRole);
                              setSelectedRole(null);
                            }}
                          >
                            Assign
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </DialogContent>
          </Dialog>
          <Button
            className="mt-4 bg-green-500 text-white"
            onClick={handleSaveCommittee}
          >
            Save Committee
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Roles;
