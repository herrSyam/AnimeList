import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();

  return (
    <div className="mt-8 text-color-primary flex flex-col justify-center items-center gap-2">
      <h5 className="text-2xl font-bold">Welcome, {user?.name}</h5>
      <Image
        className="rounded-lg"
        src={user?.image}
        alt="..."
        width={250}
        height={250}
      />
      <div className="flex flex-wrap py-8 gap-4">
        <Link
          href="/users/dashboard/collection"
          className="bg-color-accent text-color-dark font-bold px-4 py-3 text-xl rounded-lg"
        >
          My Collection
        </Link>
        <Link
          href="/users/dashboard/comment"
          className="bg-color-accent text-color-dark font-bold px-4 py-3 text-xl rounded-lg"
        >
          My Commnet
        </Link>
      </div>
    </div>
  );
};

export default Page;
