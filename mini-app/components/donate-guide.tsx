"use client";

import { Card, CardHeader, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DonateGuide() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <h3 className="text-xl font-semibold">How to Donate Effectively</h3>
        <CardDescription>Follow these steps to make a meaningful impact.</CardDescription>
      </CardHeader>
      <CardContent>
        <ol className="list-decimal list-inside space-y-2">
          <li>Choose a reputable charity that aligns with your values.</li>
          <li>Verify the charity’s legitimacy through official registries.</li>
          <li>Decide on a donation amount and frequency.</li>
          <li>Use secure payment methods and keep receipts.</li>
          <li>Track the impact of your donation over time.</li>
        </ol>
        <Button variant="outline" className="mt-4 w-full">
          Learn More About Charities
        </Button>
      </CardContent>
    </Card>
  );
}
