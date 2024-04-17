import { ReactNode } from "react";

import { Layout } from "@/shared/ui/Layout";
import { Announcement } from "@/shared/ui/Announcement";

import { LayoutHeader } from "@/widgets/LayoutHeader";

export const BaseLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <Layout
      announcementSlot={
        <Announcement>🚀 새로운 블로그로 이전했습니다.</Announcement>
      }
      headerSlot={<LayoutHeader />}
    >
      {children}
    </Layout>
  );
};
