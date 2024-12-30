import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; // Adjust the import path as necessary
import {
  FaUsers,
  FaDollarSign,
  FaCalendarAlt,
  FaMoneyBillWave,
} from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import { Avatar } from "@/components/ui/avatar"; // Adjust the import path as necessary
import { Button } from "@/components/ui/button"; // Adjust the import path as necessary
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"; // Assuming you have recharts installed
import { List, ListItem } from "@/components/ui/List"; // Adjust the import path as necessary

const Dashboard = () => {
  const upcomingEvents = [
    { name: "Annual Meetup", date: "2023-12-01", location: "Community Hall" },
    { name: "Charity Run", date: "2023-11-15", location: "City Park" },
  ];

  const pieData = [
    { name: "Paid", value: 400 },
    { name: "Unpaid", value: 300 },
  ];

  const barData = [
    { name: "Jan", expenses: 400 },
    { name: "Feb", expenses: 300 },
    { name: "Mar", expenses: 200 },
    { name: "Apr", expenses: 278 },
    { name: "May", expenses: 189 },
    { name: "Jun", expenses: 239 },
    { name: "Jul", expenses: 349 },
    { name: "Aug", expenses: 200 },
    { name: "Sep", expenses: 300 },
    { name: "Oct", expenses: 400 },
    { name: "Nov", expenses: 500 },
    { name: "Dec", expenses: 600 },
  ];

  const COLORS = ["#0088FE", "#FF8042"];

  return (
    <div className="p-4 md:p-6">
      {/* Welcome Banner */}
      <Card className="bg-gradient-to-r from-blue-100 to-white p-6 rounded-xl mb-6">
        <div className="flex items-center">
          <Avatar
            className="mr-4"
            // src="/path/to/logo.png"
            // alt="Community Logo"
          />
          <div>
            <h1 className="text-2xl font-bold">Welcome back!</h1>
            <p className="text-gray-600">
              Here's an overview of the HRMC activities.
            </p>
          </div>
        </div>
      </Card>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card className="bg-white p-4 rounded-xl shadow-lg">
          <div className="flex items-center">
            <FaUsers className="text-3xl text-blue-500 mr-4" />
            <div>
              <CardHeader>
                <CardTitle>Total Members</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">1,234</p>
              </CardContent>
            </div>
          </div>
        </Card>
        <Card className="bg-white p-4 rounded-xl shadow-lg">
          <div className="flex items-center">
            <FaDollarSign className="text-3xl text-green-500 mr-4" />
            <div>
              <CardHeader>
                <CardTitle>Pending Subscriptions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">$4,567</p>
              </CardContent>
            </div>
          </div>
        </Card>
        <Card className="bg-white p-4 rounded-xl shadow-lg">
          <div className="flex items-center">
            <FaCalendarAlt className="text-3xl text-yellow-500 mr-4" />
            <div>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">3</p>
              </CardContent>
            </div>
          </div>
        </Card>
        <Card className="bg-white p-4 rounded-xl shadow-lg">
          <div className="flex items-center">
            <FaMoneyBillWave className="text-3xl text-red-500 mr-4" />
            <div>
              <CardHeader>
                <CardTitle>Expenses This Month</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">$2,345</p>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts/Visual Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card className="bg-white p-4 rounded-xl shadow-lg">
          <CardHeader>
            <CardTitle>Subscription Status</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center mt-4">
              {pieData.map((entry, index) => (
                <div key={`legend-${index}`} className="flex items-center mr-4">
                  <div
                    className="w-4 h-4 mr-2"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></div>
                  <span>{entry.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white p-4 rounded-xl shadow-lg">
          <CardHeader>
            <CardTitle>Monthly Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={barData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="expenses" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions & Upcoming Events */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="flex flex-col space-y-4 items-center">
            <Button className="flex items-center justify-start bg-blue-500 text-white p-2 text-sm rounded-lg hover:bg-blue-600">
              <FiPlusCircle className="mr-2" /> Add Member
            </Button>
            <Button className="flex items-center justify-start bg-green-500 text-white p-2 text-sm rounded-lg hover:bg-green-600">
              <FiPlusCircle className="mr-2" /> Record Expense
            </Button>
            <Button className="flex items-center justify-start bg-purple-500 text-white p-2 text-sm rounded-lg hover:bg-purple-600">
              <FiPlusCircle className="mr-2" /> Create Event
            </Button>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
          <List>
            {upcomingEvents.map((event, index) => (
              <ListItem key={index}>
                <h3 className="text-lg font-bold">{event.name}</h3>
                <p className="text-gray-600">{event.date}</p>
                <p className="text-gray-600">{event.location}</p>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
