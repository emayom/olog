import { ElementType, ComponentPropsWithoutRef } from "react";
import { parseISO, format } from "date-fns";

type TDateFormatter<T extends ElementType> = {
  dateString: string;
} & ComponentPropsWithoutRef<T>;

export const DateFormatter = <T extends ElementType>({
  dateString,
  ...props
}: TDateFormatter<T>) => {
  const date = parseISO(dateString);

  return (
    <time className="text-m" dateTime={dateString} {...props}>
      {format(date, "PP")}
    </time>
  );
};
