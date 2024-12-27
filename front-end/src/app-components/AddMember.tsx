import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMember = () => {
  const navigate = useNavigate();
  const [member, setMember] = useState({
    name: "",
    dob: "",
    membershipNumber: "",
    bloodGroup: "",
    fathersName: "",
    houseName: "",
    address: "",
    mobileNumber: "",
    whatsappNumber: "",
    occupation: "",
    interests: [] as string[],
    photo: "",
    status: "active",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setMember((prevMember) => ({ ...prevMember, [name]: value }));
  };

  const handleInterestsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMember((prevMember) => ({
      ...prevMember,
      interests: value.split(",").map((interest) => interest.trim()),
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setMember((prevMember) => ({ ...prevMember, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save the new member details
    console.log("New member:", member);
    // Navigate back to the members list
    navigate("/members");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Member</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={member.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              required
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
              required
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
              required
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
              required
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
              required
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
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Address</label>
            <textarea
              name="address"
              value={member.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              required
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
              required
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
              required
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
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Interests</label>
            <input
              type="text"
              name="interests"
              value={member.interests.join(", ")}
              onChange={handleInterestsChange}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Photo URL</label>
            <input
              type="text"
              name="photo"
              value={member.photo}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Status</label>
            <select
              name="status"
              value={member.status}
              onChange={handleSelectChange}
              className="w-full px-4 py-2 border rounded"
              required
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Member
        </button>
      </form>
    </div>
  );
};

export default AddMember;
