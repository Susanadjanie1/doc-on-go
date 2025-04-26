import { Button } from "../components/Button";
import { Card, CardContent } from "../components/Card";
import { Search, Stethoscope } from "lucide-react";

export function PatientHome() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Welcome to DocOnGo+</h1>

      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Find a doctor..."
          className="w-full p-2 rounded-xl border focus:outline-none"
        />
        <Button variant="default">
          <Search className="w-5 h-5" />
        </Button>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Specialties</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="rounded-2xl p-4 text-center">
            <CardContent>
              <Stethoscope className="w-8 h-8 mx-auto text-purple-500" />
              <p className="mt-2 text-sm">General Practitioner</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Top Doctors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="rounded-2xl p-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold">Dr. Vanessa </h3>
              <p className="text-sm text-gray-500">Pediatrician</p>
            </div>
            <Button variant="outline">View</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
