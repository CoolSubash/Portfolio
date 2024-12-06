import express,{Request,Response} from 'express';
import connectDB from "./config/database";
import contactRoutes from "./Routes/Contact"
import ContactModel from './Model/Contact.Model';
import cors from 'cors'; // Import the CORS package
const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON requests
// Enable CORS for all routes and origins (you can configure it for specific origins if needed)
app.use(cors());
// Connect to the database
connectDB();

// API Endpoint
// Define route
app.get("/", async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).send("I am running");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});



app.use("/contact",contactRoutes);
// Start the server
app.listen(8000, () => {
    console.log("My server is running in Backend at port 8000");
});


