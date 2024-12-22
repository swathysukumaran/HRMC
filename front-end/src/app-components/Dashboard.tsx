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
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const financialSummaryData = {
    labels: ["Total Income", "Total Expenses", "Net Balance"],
    datasets: [
      {
        data: [10000, 7500, 2500],
        backgroundColor: ["#5FB563", "#E83975", "#3791ED"],
      },
    ],
  };

  const upcomingEvents = [
    { date: "25th Dec", event: "Annual Meeting" },
    { date: "5th Jan", event: "Monthly Meetup" },
    { date: "15th Jan", event: "Charity Run" },
  ];

  const nextEvent = upcomingEvents[0];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
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
            <p className="text-3xl">{upcomingEvents.length}</p>
            <hr className="my-2 border-t border-gray-200" />
            <p className="text-sm text-gray-500">
              <span className="font-bold">{nextEvent.date}:</span>{" "}
              {nextEvent.event}
            </p>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card className="bg-white text-black p-4 rounded-xl shadow-lg border-0">
          <CardHeader>
            <CardTitle>Financial Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <Pie data={financialSummaryData} />
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-wrap space-x-4 mb-6">
        <button className="bg-gray-200 text-black px-4 py-2 rounded flex items-center hover:bg-gray-300 mb-2">
          <FaPlus className="mr-1.5 text-base text-[#E83975]" />
          <span className="text-[#E83975]">Add New Member</span>
        </button>
        <button className="bg-gray-200 text-black px-4 py-2 rounded flex items-center hover:bg-gray-300 mb-2">
          <FaCalendarAlt className="mr-1.5 text-base text-[#5FB563]" />
          <span className="text-[#5FB563]">Create Event</span>
        </button>
        <button className="bg-gray-200 text-black px-4 py-2 rounded flex items-center hover:bg-gray-300 mb-2">
          <FaClipboardList className="mr-1.5 text-base text-[#FB8C00]" />
          <span className="text-[#FB8C00]">Generate Report</span>
        </button>
      </div>
    </>
  );
}

export default Dashboard;
