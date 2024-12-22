import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const mockExpenses = [
  { id: 1, description: "Office Rent", amount: 1000, date: "2023-12-01" },
  { id: 2, description: "Utilities", amount: 300, date: "2023-11-15" },
  { id: 3, description: "Salaries", amount: 5000, date: "2023-10-20" },
];

const mockIncomes = [
  { id: 1, description: "Product Sales", amount: 15000, date: "2023-12-01" },
  { id: 2, description: "Service Fees", amount: 7000, date: "2023-11-15" },
  {
    id: 3,
    description: "Investment Returns",
    amount: 2000,
    date: "2023-10-20",
  },
];

function Reports() {
  const [expenses] = useState(mockExpenses);
  const [incomes] = useState(mockIncomes);

  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );
  const totalIncomes = incomes.reduce(
    (total, income) => total + income.amount,
    0
  );
  const netBalance = totalIncomes - totalExpenses;

  const expenseData = {
    labels: expenses.map((expense) => expense.description),
    datasets: [
      {
        label: "Expenses",
        data: expenses.map((expense) => expense.amount),
        backgroundColor: getComputedStyle(document.documentElement)
          .getPropertyValue("--danger-color")
          .trim(),
      },
    ],
  };

  const incomeData = {
    labels: incomes.map((income) => income.description),
    datasets: [
      {
        label: "Incomes",
        data: incomes.map((income) => income.amount),
        backgroundColor: getComputedStyle(document.documentElement)
          .getPropertyValue("--primary-color")
          .trim(),
      },
    ],
  };

  const balanceData = {
    labels: ["Total Expenses", "Total Incomes", "Net Balance"],
    datasets: [
      {
        label: "Balance",
        data: [totalExpenses, totalIncomes, netBalance],
        backgroundColor: [
          getComputedStyle(document.documentElement)
            .getPropertyValue("--danger-color")
            .trim(),
          getComputedStyle(document.documentElement)
            .getPropertyValue("--primary-color")
            .trim(),
          getComputedStyle(document.documentElement)
            .getPropertyValue("--secondary-color")
            .trim(),
        ],
      },
    ],
  };

  return (
    <div className="p-4 space-y-8">
      <Card className="bg-white text-black p-4 rounded-xl shadow-lg border-0">
        <CardHeader>
          <CardTitle>Financial Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Summary</h2>
            <div className="max-w-md mx-auto">
              <Pie data={balanceData} />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Expenses</h2>
            <div className="max-w-2xl mx-auto">
              <Bar data={expenseData} />
            </div>
            <Table className="mt-4">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-left">Description</TableHead>
                  <TableHead className="text-left">Amount</TableHead>
                  <TableHead className="text-left">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {expenses.map((expense) => (
                  <TableRow key={expense.id}>
                    <TableCell className="text-left">
                      {expense.description}
                    </TableCell>
                    <TableCell className="text-left">
                      ${expense.amount}
                    </TableCell>
                    <TableCell className="text-left">{expense.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Incomes</h2>
            <div className="max-w-2xl mx-auto">
              <Bar data={incomeData} />
            </div>
            <Table className="mt-4">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-left">Description</TableHead>
                  <TableHead className="text-left">Amount</TableHead>
                  <TableHead className="text-left">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {incomes.map((income) => (
                  <TableRow key={income.id}>
                    <TableCell className="text-left">
                      {income.description}
                    </TableCell>
                    <TableCell className="text-left">
                      ${income.amount}
                    </TableCell>
                    <TableCell className="text-left">{income.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Reports;
