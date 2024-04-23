import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, Fragment, useMemo } from "react";

type TBreadCrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;
};

export const Breadcrumb = ({ homeElement, separator }: TBreadCrumbProps) => {
  const pathname = usePathname();
  const breadcrumbs = useMemo(() => {
    if (!pathname) return;

    const parts = pathname?.split("/").filter(Boolean);

    if (parts?.length === 0) return;

    return [
      homeElement,
      ...parts.map((part, index) => {
        const href = `/${parts.slice(0, index + 1).join("/")}`;

        const className =
          parts.length - 1 === index
            ? "font-medium text-slate-900 truncate dark:text-slate-200"
            : "hover:text-slate-400/75";

        return (
          <Fragment key={part}>
            {separator}
            <li className={className}>
              <Link href={href}>{part}</Link>
            </li>
          </Fragment>
        );
      }),
    ];
  }, [pathname, homeElement, separator]);

  return (
    <>
      {breadcrumbs && (
        <nav>
          <ol className="flex flex-wrap gap-2 text-sm text-slate-500 dark:text-slate-400">
            {breadcrumbs}
          </ol>
        </nav>
      )}
    </>
  );
};
