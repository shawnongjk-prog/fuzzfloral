import { format, addDays, setHours, setMinutes } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DeliveryOptionsProps {
  deliveryMethod: "delivery" | "collection";
  setDeliveryMethod: (method: "delivery" | "collection") => void;
  deliveryDate: Date | undefined;
  setDeliveryDate: (date: Date | undefined) => void;
  deliveryTime: string;
  setDeliveryTime: (time: string) => void;
  subtotal: number;
  deliveryFee: number;
}

const TIME_SLOTS = [
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "14:00 - 15:00",
  "15:00 - 16:00",
  "16:00 - 17:00",
  "17:00 - 18:00",
  "18:00 - 19:00",
  "19:00 - 20:00",
  "20:00 - 21:00",
];

const COLLECTION_ADDRESS = "S610156";
const FREE_DELIVERY_THRESHOLD = 70;
const DELIVERY_FEE = 15;

const DeliveryOptions = ({
  deliveryMethod,
  setDeliveryMethod,
  deliveryDate,
  setDeliveryDate,
  deliveryTime,
  setDeliveryTime,
  subtotal,
  deliveryFee,
}: DeliveryOptionsProps) => {
  const qualifiesForFreeDelivery = subtotal >= FREE_DELIVERY_THRESHOLD;
  const tomorrow = addDays(new Date(), 1);

  return (
    <div className="card-product p-6">
      <h2 className="font-heading font-semibold text-lg mb-4">
        Delivery Options
      </h2>

      <RadioGroup
        value={deliveryMethod}
        onValueChange={(value) => setDeliveryMethod(value as "delivery" | "collection")}
        className="space-y-3"
      >
        {/* Islandwide Delivery Option */}
        <div className="flex items-start space-x-3 p-4 rounded-lg border border-border hover:border-primary transition-colors">
          <RadioGroupItem value="delivery" id="delivery" className="mt-1" />
          <div className="flex-1">
            <Label htmlFor="delivery" className="font-medium cursor-pointer">
              Islandwide Delivery
            </Label>
            <p className="text-sm text-muted-foreground mt-1">
              {qualifiesForFreeDelivery ? (
                <span className="text-primary font-medium">
                  FREE (Order qualifies for free delivery!)
                </span>
              ) : (
                <>
                  ${DELIVERY_FEE}.00 SGD
                  <span className="block text-xs mt-1">
                    Free for orders over ${FREE_DELIVERY_THRESHOLD}
                  </span>
                </>
              )}
            </p>
          </div>
        </div>

        {/* Self Collection Option */}
        <div className="flex items-start space-x-3 p-4 rounded-lg border border-border hover:border-primary transition-colors">
          <RadioGroupItem value="collection" id="collection" className="mt-1" />
          <div className="flex-1">
            <Label htmlFor="collection" className="font-medium cursor-pointer">
              Self Collection
            </Label>
            <p className="text-sm text-muted-foreground mt-1">
              <span className="text-primary font-medium">FREE</span>
              <span className="block text-xs mt-1">
                Pickup at {COLLECTION_ADDRESS}
              </span>
            </p>
          </div>
        </div>
      </RadioGroup>

      {/* Date and Time Selection */}
      <div className="mt-6 space-y-4">
        <h3 className="font-medium text-sm">
          {deliveryMethod === "delivery" ? "Delivery" : "Collection"} Date & Time{" "}
          <span className="text-destructive">*</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Date Picker */}
          <div>
            <Label className="text-sm text-muted-foreground mb-2 block">
              Select Date
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !deliveryDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {deliveryDate ? format(deliveryDate, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={deliveryDate}
                  onSelect={setDeliveryDate}
                  disabled={(date) => date < tomorrow}
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Time Slot Selector */}
          <div>
            <Label className="text-sm text-muted-foreground mb-2 block">
              Select Time Slot
            </Label>
            <Select value={deliveryTime} onValueChange={setDeliveryTime}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select time slot" />
              </SelectTrigger>
              <SelectContent>
                {TIME_SLOTS.map((slot) => (
                  <SelectItem key={slot} value={slot}>
                    {slot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Delivery Fee Summary */}
      {deliveryMethod === "delivery" && deliveryFee > 0 && (
        <div className="mt-4 p-3 bg-muted rounded-lg text-sm">
          <p className="text-muted-foreground">
            Add ${(FREE_DELIVERY_THRESHOLD - subtotal).toFixed(2)} more for free delivery!
          </p>
        </div>
      )}
    </div>
  );
};

export default DeliveryOptions;
