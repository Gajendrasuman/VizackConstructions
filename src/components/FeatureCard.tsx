import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  features: Record<string, string>; // Defines features as key-value pairs
}

export default function FeatureCard({ features }: FeatureCardProps) {
  return (
    <Card className="bg-white shadow-lg shadow-black/25 rounded-2xl ">
      <CardHeader>
        <CardTitle className="text-orange-500 uppercase tracking-wider font-bold">
          Features & Benefits
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-black">
          {Object.entries(features).map(([key, value], index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-orange-500">•</span>
              <span className="flex flex-col font-bold tracking-wider uppercase">
                {key}
                <span className="text-gray-500 font-normal tracking-normal lowercase first-letter:uppercase">
                  {value}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
