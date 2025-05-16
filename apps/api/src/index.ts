import { log } from "@repo/logger";
import { createServer } from "./server";

const port = process.env.PORT || 5001;
const app = createServer();

// server.listen(port, () => {
//   log(`api running on ${port}`);
// });

export default app;