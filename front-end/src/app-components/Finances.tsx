import React, { useState } from "react";
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

function Finances() {
  const [expenses, setExpenses] = useState(mockExpenses);
  const [incomes, setIncomes] = useState(mockIncomes);
  const [isExpenseDialogOpen, setIsExpenseDialogOpen] = useState(false);
  const [isIncomeDialogOpen, setIsIncomeDialogOpen] = useState(false);
  const [newExpense, setNewExpense] = useState({
    description: "",
    amount: "",
    date: "",
  });
  const [newIncome, setNewIncome] = useState({
    description: "",
    amount: "",
    date: "",
  });
  const [editExpense, setEditExpense] = useState<Expense | null>(null);
  const [editIncome, setEditIncome] = useState<Income | null>(null);
  const [currentExpensePage, setCurrentExpensePage] = useState(1);
  const [currentIncomePage, setCurrentIncomePage] = useState(1);
  const itemsPerPage = 5;

  const handleAddExpense = () => {
    setExpenses([
      ...expenses,
      {
        ...newExpense,
        id: expenses.length + 1,
        amount: Number(newExpense.amount),
      },
    ]);
    setNewExpense({ description: "", amount: "", date: "" });
    setIsExpenseDialogOpen(false);
  };

  const handleAddIncome = () => {
    setIncomes([
      ...incomes,
      {
        ...newIncome,
        id: incomes.length + 1,
        amount: Number(newIncome.amount),
      },
    ]);
    setNewIncome({ description: "", amount: "", date: "" });
    setIsIncomeDialogOpen(false);
  };

  const handleEditExpense = (expense: Expense) => {
    setExpenses(expenses.map((e) => (e.id === expense.id ? expense : e)));
    setEditExpense(null);
  };

  interface Expense {
    id: number;
    description: string;
    amount: number;
    date: string;
  }

  interface Income {
    id: number;
    description: string;
    amount: number;
    date: string;
  }

  const handleEditIncome = (income: Income) => {
    setIncomes(incomes.map((i) => (i.id === income.id ? income : i)));
    setEditIncome(null);
  };

  const handleDeleteExpense = (id: number) => {
    setExpenses(expenses.filter((expense: Expense) => expense.id !== id));
  };

  const handleDeleteIncome = (id: number) => {
    setIncomes(incomes.filter((income: Income) => income.id !== id));
  };

  const handleNextExpensePage = () => {
    setCurrentExpensePage((prevPage) => prevPage + 1);
  };

  const handlePreviousExpensePage = () => {
    setCurrentExpensePage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextIncomePage = () => {
    setCurrentIncomePage((prevPage) => prevPage + 1);
  };

  const handlePreviousIncomePage = () => {
    setCurrentIncomePage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const paginatedExpenses = expenses.slice(
    (currentExpensePage - 1) * itemsPerPage,
    currentExpensePage * itemsPerPage
  );

  const paginatedIncomes = incomes.slice(
    (currentIncomePage - 1) * itemsPerPage,
    currentIncomePage * itemsPerPage
  );

  return (
    <div className="p-4 space-y-8">
      <Card className="bg-white text-black p-4 rounded-xl shadow-lg border-0">
        <CardHeader>
          <CardTitle>Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <Button
            className="mb-4"
            style={{
              backgroundColor: "var(--primary-color)",
              color: "var(--background-color)",
            }}
            onClick={() => setIsExpenseDialogOpen(true)}
          >
            Add Expense
          </Button>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">Description</TableHead>
                <TableHead className="text-left">Amount</TableHead>
                <TableHead className="text-left">Date</TableHead>
                <TableHead className="text-left">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedExpenses.map((expense) => (
                <TableRow key={expense.id}>
                  <TableCell className="text-left">
                    {expense.description}
                  </TableCell>
                  <TableCell className="text-left">${expense.amount}</TableCell>
                  <TableCell className="text-left">{expense.date}</TableCell>
                  <TableCell className="text-left">
                    <Button
                      className="mr-2"
                      style={{
                        backgroundColor: "var(--warning-color)",
                        color: "var(--background-color)",
                      }}
                      onClick={() => setEditExpense(expense)}
                    >
                      Edit
                    </Button>
                    <Button
                      style={{
                        backgroundColor: "var(--danger-color)",
                        color: "var(--background-color)",
                      }}
                      onClick={() => handleDeleteExpense(expense.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex justify-between mt-4">
            <Button
              onClick={handlePreviousExpensePage}
              disabled={currentExpensePage === 1}
            >
              Previous
            </Button>
            <span>
              Page {currentExpensePage} of{" "}
              {Math.ceil(expenses.length / itemsPerPage)}
            </span>
            <Button
              onClick={handleNextExpensePage}
              disabled={currentExpensePage * itemsPerPage >= expenses.length}
            >
              Next
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white text-black p-4 rounded-xl shadow-lg border-0">
        <CardHeader>
          <CardTitle>Incomes</CardTitle>
        </CardHeader>
        <CardContent>
          <Button
            className="mb-4"
            style={{
              backgroundColor: "var(--primary-color)",
              color: "var(--background-color)",
            }}
            onClick={() => setIsIncomeDialogOpen(true)}
          >
            Add Income
          </Button>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">Description</TableHead>
                <TableHead className="text-left">Amount</TableHead>
                <TableHead className="text-left">Date</TableHead>
                <TableHead className="text-left">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedIncomes.map((income) => (
                <TableRow key={income.id}>
                  <TableCell className="text-left">
                    {income.description}
                  </TableCell>
                  <TableCell className="text-left">${income.amount}</TableCell>
                  <TableCell className="text-left">{income.date}</TableCell>
                  <TableCell className="text-left">
                    <Button
                      className="mr-2"
                      style={{
                        backgroundColor: "var(--warning-color)",
                        color: "var(--background-color)",
                      }}
                      onClick={() => setEditIncome(income)}
                    >
                      Edit
                    </Button>
                    <Button
                      style={{
                        backgroundColor: "var(--danger-color)",
                        color: "var(--background-color)",
                      }}
                      onClick={() => handleDeleteIncome(income.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex justify-between mt-4">
            <Button
              onClick={handlePreviousIncomePage}
              disabled={currentIncomePage === 1}
            >
              Previous
            </Button>
            <span>
              Page {currentIncomePage} of{" "}
              {Math.ceil(incomes.length / itemsPerPage)}
            </span>
            <Button
              onClick={handleNextIncomePage}
              disabled={currentIncomePage * itemsPerPage >= incomes.length}
            >
              Next
            </Button>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isExpenseDialogOpen} onOpenChange={setIsExpenseDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Expense</DialogTitle>
          </DialogHeader>
          <Input
            type="text"
            placeholder="Description"
            value={newExpense.description}
            onChange={(e) =>
              setNewExpense({ ...newExpense, description: e.target.value })
            }
            className="mb-4 w-full p-2 border rounded"
          />
          <Input
            type="number"
            placeholder="Amount"
            value={newExpense.amount}
            onChange={(e) =>
              setNewExpense({ ...newExpense, amount: e.target.value })
            }
            className="mb-4 w-full p-2 border rounded"
          />
          <Input
            type="date"
            placeholder="Date"
            value={newExpense.date}
            onChange={(e) =>
              setNewExpense({ ...newExpense, date: e.target.value })
            }
            className="mb-4 w-full p-2 border rounded"
          />
          <Button
            style={{
              backgroundColor: "var(--secondary-color)",
              color: "var(--background-color)",
            }}
            onClick={handleAddExpense}
          >
            Add Expense
          </Button>
        </DialogContent>
      </Dialog>

      <Dialog open={isIncomeDialogOpen} onOpenChange={setIsIncomeDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Income</DialogTitle>
          </DialogHeader>
          <Input
            type="text"
            placeholder="Description"
            value={newIncome.description}
            onChange={(e) =>
              setNewIncome({ ...newIncome, description: e.target.value })
            }
            className="mb-4 w-full p-2 border rounded"
          />
          <Input
            type="number"
            placeholder="Amount"
            value={newIncome.amount}
            onChange={(e) =>
              setNewIncome({ ...newIncome, amount: e.target.value })
            }
            className="mb-4 w-full p-2 border rounded"
          />
          <Input
            type="date"
            placeholder="Date"
            value={newIncome.date}
            onChange={(e) =>
              setNewIncome({ ...newIncome, date: e.target.value })
            }
            className="mb-4 w-full p-2 border rounded"
          />
          <Button
            style={{
              backgroundColor: "var(--secondary-color)",
              color: "var(--background-color)",
            }}
            onClick={handleAddIncome}
          >
            Add Income
          </Button>
        </DialogContent>
      </Dialog>

      {editExpense && (
        <Dialog open={!!editExpense} onOpenChange={() => setEditExpense(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Expense</DialogTitle>
            </DialogHeader>
            <Input
              type="text"
              placeholder="Description"
              value={editExpense.description}
              onChange={(e) =>
                setEditExpense({ ...editExpense, description: e.target.value })
              }
              className="mb-4 w-full p-2 border rounded"
            />
            <Input
              type="number"
              placeholder="Amount"
              value={editExpense.amount}
              onChange={(e) =>
                setEditExpense({
                  ...editExpense,
                  amount: Number(e.target.value),
                })
              }
              className="mb-4 w-full p-2 border rounded"
            />
            <Input
              type="date"
              placeholder="Date"
              value={editExpense.date}
              onChange={(e) =>
                setEditExpense({ ...editExpense, date: e.target.value })
              }
              className="mb-4 w-full p-2 border rounded"
            />
            <Button
              style={{
                backgroundColor: "var(--secondary-color)",
                color: "var(--background-color)",
              }}
              onClick={() => handleEditExpense(editExpense)}
            >
              Save Changes
            </Button>
          </DialogContent>
        </Dialog>
      )}

      {editIncome && (
        <Dialog open={!!editIncome} onOpenChange={() => setEditIncome(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Income</DialogTitle>
            </DialogHeader>
            <Input
              type="text"
              placeholder="Description"
              value={editIncome.description}
              onChange={(e) =>
                setEditIncome({ ...editIncome, description: e.target.value })
              }
              className="mb-4 w-full p-2 border rounded"
            />
            <Input
              type="number"
              placeholder="Amount"
              value={editIncome.amount}
              onChange={(e) =>
                setEditIncome({ ...editIncome, amount: Number(e.target.value) })
              }
              className="mb-4 w-full p-2 border rounded"
            />
            <Input
              type="date"
              placeholder="Date"
              value={editIncome.date}
              onChange={(e) =>
                setEditIncome({ ...editIncome, date: e.target.value })
              }
              className="mb-4 w-full p-2 border rounded"
            />
            <Button
              style={{
                backgroundColor: "var(--secondary-color)",
                color: "var(--background-color)",
              }}
              onClick={() => handleEditIncome(editIncome)}
            >
              Save Changes
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

export default Finances;
