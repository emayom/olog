import { DateFormatter } from "@/shared/ui";
import { TPost } from "@/shared/types";

export default function PostSummary({
  title,
  date,
}: Pick<TPost, "title" | "date">) {
  return (
    <header>
      <div>
        <DateFormatter
          className="flex min-w-0 justify-between whitespace-nowrap text-sm leading-6 text-slate-500 dark:text-slate-400"
          dateString={date}
        />
      </div>
      <h2 className="my-4 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-200">
        {title}
      </h2>
    </header>
  );
}
