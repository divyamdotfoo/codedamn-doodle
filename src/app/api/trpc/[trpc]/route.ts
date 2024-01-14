import { AppRouter } from "@/server/root";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { type NextRequest } from "next/server";

const createContext = async (req: NextRequest) => {
  return {};
};

const handler = (req: NextRequest) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: AppRouter,
    createContext: () => createContext(req),
  });

export { handler as GET, handler as POST };
