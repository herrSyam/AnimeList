import { getServerSession } from "next-auth";
import { authOpton } from "@/app/api/auth/[...nextauth]/route";

export const authUserSession = async() => {
    const session = await getServerSession(authOpton)
    return session?.user
}