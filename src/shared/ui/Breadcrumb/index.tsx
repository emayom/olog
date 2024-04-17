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

        return (
          <Fragment key={part}>
            {separator}
            <li>
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
          <ol className="flex gap-2 text-slate-500">{breadcrumbs}</ol>
        </nav>
      )}
    </>
  );
};
