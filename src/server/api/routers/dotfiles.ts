import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import fs from "fs";
import path from "path";

export const dotfilesRouter = createTRPCRouter({
  getInstallScript: publicProcedure.query(() => {
    const scriptPath = path.join(process.cwd(), "install-dotfiles.sh");
    try {
      const scriptContent = fs.readFileSync(scriptPath, "utf-8");
      return scriptContent;
    } catch (error) {
      throw new Error("Failed to read install-dotfiles.sh script");
    }
  }),
}); 