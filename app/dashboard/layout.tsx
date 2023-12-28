import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = async (props: Props) => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div className="grid grid-cols-12">
      <div className="border-r shadow">
        <Link href={`/dashboard/user/${session?.user.id}`}>User Profile</Link>
      </div>
      <div className="col-span-4">{props.children}</div>
    </div>
  );
};

export default DashboardLayout;
