import { AuthenticatedRequest } from "@/middlewares";
import hotelsService from "@/services/hotels-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getHotels(_req: AuthenticatedRequest, res: Response) {
  try {
    const hotels = await hotelsService.getHotels(_req.userId);

    return res.status(httpStatus.OK).send(hotels);
  } catch (error) {
    if (error.name === "NotFoundError") return res.sendStatus(httpStatus.NOT_FOUND);
    if (error.name === "PaymentRequiredError") return res.sendStatus(httpStatus.PAYMENT_REQUIRED);
  }
}
export async function getHotelById(_req: AuthenticatedRequest, res: Response) {
  const { hotelId } = _req.params;
  const { userId } = _req;
  try {
    const hotels = await hotelsService.getHotelById(Number(userId), Number(hotelId));
    return res.status(httpStatus.OK).send(hotels);
  } catch (error) {
    if (error.name === "NotFoundError") return res.sendStatus(httpStatus.NOT_FOUND);
    if (error.name === "PaymentRequiredError") return res.sendStatus(httpStatus.PAYMENT_REQUIRED);
  }
}
