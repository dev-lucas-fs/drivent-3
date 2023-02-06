import { getHotelById, getHotels } from "@/controllers";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const hotelsRouter = Router();

hotelsRouter.get("/hotels", authenticateToken, getHotels);
hotelsRouter.get("/hotels/:hotelId", authenticateToken, getHotelById);

export { hotelsRouter };
