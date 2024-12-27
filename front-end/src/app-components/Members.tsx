import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Member {
  id: number;
  name: string;
  dob: string;
  membershipNumber: string;
  bloodGroup: string;
  fathersName: string;
  houseName: string;
  address: string;
  mobileNumber: string;
  whatsappNumber: string;
  occupation: string;
  interests: string[];
  photo: string;
  status: string;
}

const Members = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const navigate = useNavigate();

  const mockMembers: Member[] = [
    {
      id: 1,
      name: "John Doe",
      dob: "1990-01-01",
      membershipNumber: "H-101",
      bloodGroup: "A+",
      fathersName: "Richard Doe",
      houseName: "Doe Villa",
      address: "123 Main St, Springfield",
      mobileNumber: "1234567890",
      whatsappNumber: "1234567890",
      occupation: "Engineer",
      interests: ["Reading", "Traveling"],
      photo: "path/to/photo.jpg",
      status: "active",
    },
    {
      id: 2,
      name: "Jane Smith",
      dob: "1985-05-15",
      membershipNumber: "H-102",
      bloodGroup: "B+",
      fathersName: "Michael Smith",
      houseName: "Smith House",
      address: "456 Elm St, Springfield",
      mobileNumber: "0987654321",
      whatsappNumber: "0987654321",
      occupation: "Doctor",
      interests: ["Cooking", "Hiking"],
      photo: "path/to/photo.jpg",
      status: "inactive",
    },
    {
      id: 3,
      name: "Alice Johnson",
      dob: "1992-07-20",
      membershipNumber: "H-103",
      bloodGroup: "O+",
      fathersName: "Robert Johnson",
      houseName: "Johnson Villa",
      address: "789 Oak St, Springfield",
      mobileNumber: "1122334455",
      whatsappNumber: "1122334455",
      occupation: "Teacher",
      interests: ["Painting", "Gardening"],
      photo: "path/to/photo.jpg",
      status: "active",
    },
    {
      id: 4,
      name: "Bob Brown",
      dob: "1988-03-10",
      membershipNumber: "H-104",
      bloodGroup: "AB+",
      fathersName: "William Brown",
      houseName: "Brown House",
      address: "321 Pine St, Springfield",
      mobileNumber: "6677889900",
      whatsappNumber: "6677889900",
      occupation: "Artist",
      interests: ["Music", "Photography"],
      photo: "path/to/photo.jpg",
      status: "inactive",
    },
  ];

  useEffect(() => {
    // Simulate fetching data from an API
    setMembers(mockMembers);
  }, []);

  const handleView = (id: number) => {
    navigate(`/members/${id}`);
  };

  const handleAddMember = () => {
    navigate("/members/add");
  };

  return (
    <div className="p-6 h-full flex flex-col">
      <h1 className="text-2xl font-bold mb-6">Members</h1>
      <button
        onClick={handleAddMember}
        className="mb-4 bg-green-500 text-white px-4 py-2 rounded ml-auto max-w-xs"
      >
        Add New Member
      </button>
      <div className="overflow-x-auto flex-grow">
        <table className="min-w-full w-full bg-white h-full">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b hidden md:table-cell">DOB</th>
              <th className="py-2 px-4 border-b hidden lg:table-cell">
                Membership Number
              </th>
              <th className="py-2 px-4 border-b hidden lg:table-cell">
                Blood Group
              </th>
              <th className="py-2 px-4 border-b hidden md:table-cell">
                Mobile Number
              </th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id}>
                <td className="py-2 px-4 border-b">{member.name}</td>
                <td className="py-2 px-4 border-b hidden md:table-cell">
                  {member.dob}
                </td>
                <td className="py-2 px-4 border-b hidden lg:table-cell">
                  {member.membershipNumber}
                </td>
                <td className="py-2 px-4 border-b hidden lg:table-cell">
                  {member.bloodGroup}
                </td>
                <td className="py-2 px-4 border-b hidden md:table-cell">
                  {member.mobileNumber}
                </td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleView(member.id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Members;
