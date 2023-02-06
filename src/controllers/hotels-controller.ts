import { AuthenticatedRequest } from "@/middlewares";
import hotelsService from "@/services/hotels-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getHotels(_req: AuthenticatedRequest, res: Response) {
  try {
    const hotels = await hotelsService.getHotels(_req.userId);
    return res.status(httpStatus.OK).send(hotels);
  } catch (error) {
    if (error.name === "NotFoundError") return res.status(httpStatus.NOT_FOUND);
    if (error.name === "PaymentRequiredError") return res.status(httpStatus.PAYMENT_REQUIRED);
  }
}

/**
 * export async function getHotelById(_req: Request, res: Response) {
  const { hotelId } = _req.params;
  try {
    const hotels = await hotelsService.getHotelById(Number(hotelId));
    return res.status(httpStatus.OK).send(hotels);
  } catch (error) {
    if (error.name === "NotFoundError") return res.status(httpStatus.NOT_FOUND).send({});
  }
}
 * 
 */
