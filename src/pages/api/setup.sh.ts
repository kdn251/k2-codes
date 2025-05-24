import { type NextApiRequest, type NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const scriptPath = path.join(process.cwd(), "setup.sh");
    const scriptContent = fs.readFileSync(scriptPath, "utf-8");
    
    // Set headers for shell script content
    res.setHeader("Content-Type", "text/x-shellscript");
    res.setHeader("Content-Disposition", "inline; filename=\"setup.sh\"");
    
    return res.status(200).send(scriptContent);
  } catch (error) {
    console.error("Error serving setup script:", error);
    return res.status(500).json({ message: "Failed to read setup script" });
  }
} 