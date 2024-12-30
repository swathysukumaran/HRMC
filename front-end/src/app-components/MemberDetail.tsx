import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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

const MemberDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [member, setMember] = useState<Member | null>(null);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchMember = async () => {
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

      const member = mockMembers.find((m) => m.id === parseInt(id || "0"));
      setMember(member || null);
    };

    fetchMember();
  }, [id]);

  if (!member) {
    return <div>Loading...</div>;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setMember((prevMember) =>
      prevMember ? { ...prevMember, [name]: value } : null
    );
  };

  const handleSave = () => {
    // Save the updated member details
    console.log("Save member:", member);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Member Details</h1>
      <div className=" p-6 rounded-lg shadow-md">
        <img
          src={member.photo}
          alt={member.name}
          className="w-32 h-32 object-cover rounded-lg mb-4"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={member.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">DOB</label>
            <input
              type="date"
              name="dob"
              value={member.dob}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Membership Number</label>
            <input
              type="text"
              name="membershipNumber"
              value={member.membershipNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Blood Group</label>
            <input
              type="text"
              name="bloodGroup"
              value={member.bloodGroup}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Father's Name</label>
            <input
              type="text"
              name="fathersName"
              value={member.fathersName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">House Name</label>
            <input
              type="text"
              name="houseName"
              value={member.houseName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Address</label>
            <textarea
              name="address"
              value={member.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Mobile Number</label>
            <input
              type="text"
              name="mobileNumber"
              value={member.mobileNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">WhatsApp Number</label>
            <input
              type="text"
              name="whatsappNumber"
              value={member.whatsappNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Occupation</label>
            <input
              type="text"
              name="occupation"
              value={member.occupation}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Interests</label>
            <input
              type="text"
              name="interests"
              value={member.interests.join(", ")}
              onChange={(e) =>
                setMember((prevMember) =>
                  prevMember
                    ? { ...prevMember, interests: e.target.value.split(", ") }
                    : null
                )
              }
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Status</label>
            <input
              type="text"
              name="status"
              value={member.status}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
        </div>
        <button
          onClick={handleSave}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default MemberDetail;
