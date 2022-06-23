import express from "express";
import exphbs from "express-handlebars";
import productRoutes from "./routes/product.routes.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import connectDB from "./config/db.js";
import dotenv from 'dotenv';
import morgan from 'morgan';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

dotenv.config()

//Connect MongoDB
connectDB()

//Express-handlebars
app.set("views", path.join(__dirname, "views"));

app.engine(".hbs",
    exphbs.engine({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs",
  })
);

app.set('view engine', '.hbs');
//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }))

//Routes
app.use(productRoutes);


export default app;
