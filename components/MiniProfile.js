import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

function MiniProfile() {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <Image
        className="w-16 h-16 rounded-full border p-[2px]"
        src={session?.user?.image}
        alt="profile-pic"
        width={100}
        height={100}
      />

      <div className="flex-1 mx-4">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Insta 2.0</h3>
      </div>

      <button onClick={signOut} className="text-blue-400 text-sm font-semibold">
        Sign Out
      </button>
    </div>
  );
}

export default MiniProfile;
