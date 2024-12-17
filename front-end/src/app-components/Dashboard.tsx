import React from "react";
import {
  FaUsers,
  FaCalendarAlt,
  FaDollarSign,
  FaFileInvoiceDollar,
  FaPlus,
  FaClipboardList,
} from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Dashboard() {
  return (
    <div className="p-4 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="relative bg-white text-black p-4 rounded-xl shadow-lg border-0">
          <div className="absolute -top-6 left-4 bg-[#E83975] text-white p-3 rounded-lg">
            <FaUsers className="text-3xl" />
          </div>
          <CardHeader>
            <CardTitle>Total Members</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl">150</p>
            <hr className="my-2 border-t border-gray-200" />
            <p className="text-sm text-gray-500">Active: 140, Inactive: 10</p>
          </CardContent>
        </Card>
        <Card className="relative bg-white text-black p-4 rounded-xl shadow-lg border-0">
          <div className="absolute -top-6 left-4 bg-[#FB8C00] text-white p-3 rounded-lg">
            <FaCalendarAlt className="text-3xl" />
          </div>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl">5</p>
            <hr className="my-2 border-t border-gray-200" />
            <p className="text-sm text-gray-500">Next: 25th Dec</p>
          </CardContent>
        </Card>
        <Card className="relative bg-white text-black p-4 rounded-xl shadow-lg border-0">
          <div className="absolute -top-6 left-4 bg-[#5FB563] text-white p-3 rounded-lg">
            <FaDollarSign className="text-3xl" />
          </div>
          <CardHeader>
            <CardTitle>Pending Subscriptions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl">10</p>
            <hr className="my-2 border-t border-gray-200" />
            <p className="text-sm text-gray-500">Due: 5, Overdue: 5</p>
          </CardContent>
        </Card>
        <Card className="relative bg-white text-black p-4 rounded-xl shadow-lg border-0">
          <div className="absolute -top-6 left-4 bg-[#3791ED] text-white p-3 rounded-lg">
            <FaFileInvoiceDollar className="text-3xl" />
          </div>
          <CardHeader>
            <CardTitle>Recent Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl">$1,200</p>
            <hr className="my-2 border-t border-gray-200" />
            <p className="text-sm text-gray-500">Last: $200 on 20th Dec</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="bg-white text-black p-4 rounded-xl shadow-lg border-0">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>New member John Doe added</li>
              <li>Event "Annual Meeting" created</li>
              <li>Subscription payment received from Jane Smith</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-white text-black p-4 rounded-xl shadow-lg border-0">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>Annual Meeting - 25th Dec</li>
              <li>Monthly Meetup - 5th Jan</li>
              <li>Charity Run - 15th Jan</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white text-black p-4 rounded-xl shadow-lg border-0">
        <CardHeader>
          <CardTitle>Financial Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Total Income: $10,000</p>
          <p>Total Expenses: $7,500</p>
          <p>Net Balance: $2,500</p>
        </CardContent>
      </Card>

      <div className="flex space-x-4">
        <button className="bg-[#E83975] text-white px-4 py-2 rounded flex items-center">
          <FaPlus className="mr-1.5 text-base" />
          Add New Member
        </button>
        <button className="bg-[#5FB563] text-white px-4 py-2 rounded flex items-center">
          <FaCalendarAlt className="mr-1.5 text-base" />
          Create Event
        </button>
        <button className="bg-[#FB8C00] text-white px-4 py-2 rounded flex items-center">
          <FaClipboardList className="mr-1.5 text-base" />
          Generate Report
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
