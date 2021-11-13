import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

if (!process.env.NODE_ENV_PORT) {
    process.exit(1);
};

const PORT: number = parseInt(process.env.NODE_ENV_PORT as string, 10);

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Active on http://localhost:${PORT}`);
});