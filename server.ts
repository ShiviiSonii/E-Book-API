import app from "./src/app";
import { config } from "./src/config/config";
import { connectDB } from "./src/db";

const startServer = async () => {
  await connectDB();

  const port = config.port || 8000;

  app.listen(port, () => {
    console.log("Server is listening on port", port);
  });
};

startServer();
