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

const mockEvents = [
  { id: 1, name: "Annual Meeting", date: "2023-12-01", location: "New York" },
  {
    id: 2,
    name: "Board Meeting",
    date: "2023-11-15",
    location: "San Francisco",
  },
  { id: 3, name: "Team Building", date: "2023-10-20", location: "Chicago" },
];

function Events() {
  const [events, setEvents] = useState(mockEvents);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    name: "",
    date: "",
    location: "",
  });
  const [editEvent, setEditEvent] = useState<Event | null>(null);

  const handleAddEvent = () => {
    setEvents([...events, { ...newEvent, id: events.length + 1 }]);
    setNewEvent({ name: "", date: "", location: "" });
    setIsDialogOpen(false);
  };

  interface Event {
    id: number;
    name: string;
    date: string;
    location: string;
  }

  const handleEditEvent = (event: Event) => {
    setEvents(events.map((e) => (e.id === event.id ? event : e)));
    setEditEvent(null);
  };

  const handleDeleteEvent = (id: number) => {
    setEvents(events.filter((event: Event) => event.id !== id));
  };

  return (
    <div className="p-4 space-y-8">
      <Card className="bg-white text-black p-4 rounded-xl shadow-lg border-0">
        <CardHeader>
          <CardTitle>Events</CardTitle>
        </CardHeader>
        <CardContent>
          <Button
            className="mb-4 bg-blue-500 text-white"
            onClick={() => setIsDialogOpen(true)}
          >
            Add Event
          </Button>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">Name</TableHead>
                <TableHead className="text-left">Date</TableHead>
                <TableHead className="text-left">Location</TableHead>
                <TableHead className="text-left">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.id}>
                  <TableCell className="text-left">{event.name}</TableCell>
                  <TableCell className="text-left">{event.date}</TableCell>
                  <TableCell className="text-left">{event.location}</TableCell>
                  <TableCell className="text-left">
                    <Button
                      className="mr-2 bg-yellow-500 text-white"
                      onClick={() => setEditEvent(event)}
                    >
                      Edit
                    </Button>
                    <Button
                      className="bg-red-500 text-white"
                      onClick={() => handleDeleteEvent(event.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Event</DialogTitle>
          </DialogHeader>
          <Input
            type="text"
            placeholder="Event Name"
            value={newEvent.name}
            onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
            className="mb-4 w-full p-2 border rounded"
          />
          <Input
            type="date"
            placeholder="Event Date"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            className="mb-4 w-full p-2 border rounded"
          />
          <Input
            type="text"
            placeholder="Event Location"
            value={newEvent.location}
            onChange={(e) =>
              setNewEvent({ ...newEvent, location: e.target.value })
            }
            className="mb-4 w-full p-2 border rounded"
          />
          <Button className="bg-green-500 text-white" onClick={handleAddEvent}>
            Add Event
          </Button>
        </DialogContent>
      </Dialog>

      {editEvent && (
        <Dialog open={!!editEvent} onOpenChange={() => setEditEvent(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Event</DialogTitle>
            </DialogHeader>
            <Input
              type="text"
              placeholder="Event Name"
              value={editEvent.name}
              onChange={(e) =>
                setEditEvent({ ...editEvent, name: e.target.value })
              }
              className="mb-4 w-full p-2 border rounded"
            />
            <Input
              type="date"
              placeholder="Event Date"
              value={editEvent.date}
              onChange={(e) =>
                setEditEvent({ ...editEvent, date: e.target.value })
              }
              className="mb-4 w-full p-2 border rounded"
            />
            <Input
              type="text"
              placeholder="Event Location"
              value={editEvent.location}
              onChange={(e) =>
                setEditEvent({ ...editEvent, location: e.target.value })
              }
              className="mb-4 w-full p-2 border rounded"
            />
            <Button
              className="bg-green-500 text-white"
              onClick={() => handleEditEvent(editEvent)}
            >
              Save Changes
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

export default Events;
