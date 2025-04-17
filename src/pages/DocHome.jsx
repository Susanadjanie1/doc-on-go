import React from "react";
import { Card, CardContent } from "../components/Card";
import { Button } from "../components/Button";
import { CalendarDays, DollarSign, Stethoscope, Search } from "lucide-react";

export function DocHome() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Welcome, Dr. [Name]</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="rounded-2xl shadow-md">
          <CardContent className="flex items-center space-x-4 p-6">
            <CalendarDays className="w-10 h-10 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Today's Appointments</p>
              <h2 className="text-lg font-semibold">5</h2>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardContent className="flex items-center space-x-4 p-6">
            <DollarSign className="w-10 h-10 text-green-500" />
            <div>
              <p className="text-sm text-gray-500">Earnings Today</p>
              <h2 className="text-lg font-semibold">$250</h2>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Upcoming Consultations</h2>
        <Card className="rounded-2xl p-4 shadow-sm">
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold">John Doe</h3>
              <p className="text-sm text-gray-500">
                10:00 AM - General Checkup
              </p>
            </div>
            <Button variant="outline">Start</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
