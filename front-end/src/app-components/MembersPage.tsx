import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Pagination from "./Pagination";
import MemberFormModal from "./MemberFormModal";

interface Member {
  id: number;
  name: string;
  email: string;
  phone: string;
  paymentStatus: string;
  amountDue: number;
  notes?: string;
}

interface MemberFormInputs {
  name: string;
  dob: Date;
  membershipNumber: string;
  bloodGroup: string;
  fathersName: string;
  houseName: string;
  address: string;
  mobileNumber: string;
  whatsappNumber: string;
  occupation: string;
  occupationDetails: string;
  interests: string[];
  photo: FileList;
  notes?: string;
}

const MembersPage = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [membersPerPage] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  // Fetch members data (replace with actual data fetching logic)
  useEffect(() => {
    const fetchMembers = async () => {
      // Replace with actual data fetching logic
      const fetchedMembers = [
        // Sample data
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          phone: "1234567890",
          paymentStatus: "Paid",
          amountDue: 0,
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          phone: "0987654321",
          paymentStatus: "Pending",
          amountDue: 50,
        },
        {
          id: 3,
          name: "Alice Johnson",
          email: "alice@example.com",
          phone: "1122334455",
          paymentStatus: "Overdue",
          amountDue: 100,
        },
        // Add more sample members
      ];
      setMembers(fetchedMembers);
    };

    fetchMembers();
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(members.length / membersPerPage);

  // Get current members
  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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

  const handleAddMember = () => {
    setSelectedMember(null);
    setIsModalOpen(true);
  };

  const handleEditMember = (member: Member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (data: MemberFormInputs) => {
    if (selectedMember) {
      // Update member logic
      console.log("Updated member:", data);
    } else {
      // Add member logic
      console.log("Added member:", data);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="p-4">
      <header className="mb-4 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold">Members List</h1>
        <Button
          onClick={handleAddMember}
          className="mt-2 md:mt-0 bg-blue-500 text-white"
        >
          + Add Member
        </Button>
      </header>
      <main className="mb-4">
        <Card className="bg-white">
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-left">Full Name</TableHead>
                  <TableHead className="text-left hidden md:table-cell">
                    Email
                  </TableHead>
                  <TableHead className="text-left hidden md:table-cell">
                    Phone Number
                  </TableHead>
                  <TableHead className="text-left">Payment Status</TableHead>
                  <TableHead className="text-left">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentMembers.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell className="text-left">{member.name}</TableCell>
                    <TableCell className="text-left hidden md:table-cell">
                      {member.email}
                    </TableCell>
                    <TableCell className="text-left hidden md:table-cell">
                      {member.phone}
                    </TableCell>
                    <TableCell
                      className={`text-left ${getStatusClass(
                        member.paymentStatus
                      )}`}
                    >
                      {member.paymentStatus === "Paid"
                        ? "Paid"
                        : `$${member.amountDue} Due`}
                    </TableCell>
                    <TableCell className="text-left">
                      <div className="hidden md:flex space-x-2">
                        <Button
                          variant="link"
                          className="text-blue-500"
                          onClick={() => handleEditMember(member)}
                        >
                          Edit
                        </Button>
                        <Button variant="link" className="text-red-500">
                          Delete
                        </Button>
                      </div>
                      <div className="md:hidden relative">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="link"
                              className="text-blue-500 bg-gray-100"
                            >
                              Actions
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="absolute right-0 z-50 bg-white shadow-lg">
                            <DropdownMenuItem
                              onSelect={() => console.log("View")}
                            >
                              View
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onSelect={() => handleEditMember(member)}
                            >
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onSelect={() => console.log("Delete")}
                            >
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
      <footer>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </footer>
      <MemberFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleFormSubmit}
        initialData={
          selectedMember
            ? {
                name: selectedMember.name,
                dob: new Date(),
                membershipNumber: `H-${selectedMember.id + 100}`,
                bloodGroup: "",
                fathersName: "",
                houseName: "",
                address: "",
                mobileNumber: selectedMember.phone,
                whatsappNumber: "",
                occupation: "",
                occupationDetails: "",
                interests: [],
                photo: new DataTransfer().files,
                notes: selectedMember.notes || "",
              }
            : undefined
        }
      />
    </div>
  );
};

export default MembersPage;
