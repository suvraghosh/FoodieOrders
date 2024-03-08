import { Restaurant } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Dot } from "lucide-react";

type Props = {
  restaurant: Restaurant;
}

const RestaurantInfo = ({restaurant}: Props) => {
  return (
    <Card className="border-sla">
        <CardHeader>
            <CardTitle className="text-3xl font-bold tracking-tight">
                {restaurant.name}
            </CardTitle>
            <CardDescription>
                {restaurant.city}, {restaurant.country}
            </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-4 gap-4">
            {restaurant.cuisines.map((item, index) => (
                <span className="flex">
                    {index < restaurant.cuisines.length && <Dot />}
                    <span>{item}</span>
                </span>
            ))}
        </CardContent>
    </Card>
  )
}

export default RestaurantInfo;