import Link from "next/link";

import { ChangeTheme } from "@/features/theme/changeTheme";
import { Breadcrumb } from "../Breadcrumb";

export const LayoutHeader = () => {
  /** 🚧 */
  const themeIsEnabled = false;

  return (
    <header className={"my-10 flex w-full justify-between"}>
      <Breadcrumb
        homeElement={
          <li>
            <Link href="/" title="home">
              ~
            </Link>
          </li>
        }
        separator={<span aria-hidden>/</span>}
      />
      {themeIsEnabled && <ChangeTheme />}
    </header>
  );
};
