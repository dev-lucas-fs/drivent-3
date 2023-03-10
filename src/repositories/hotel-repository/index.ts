import { prisma } from "@/config";
import { Hotel } from "@prisma/client";

async function findHotels(): Promise<Array<Hotel>> {
  return prisma.hotel.findMany();
}

async function findHotelById(id: number) {
  return prisma.hotel.findFirst({
    where: {
      id,
    },
    include: {
      Rooms: true,
    },
  });
}

const hotelRepository = {
  findHotels,
  findHotelById,
};

export default hotelRepository;
