import faker from "@faker-js/faker";
import { Hotel, Room } from "@prisma/client";
import { prisma } from "@/config";

export function createHotel(): Promise<Hotel> {
  return prisma.hotel.create({
    data: {
      name: faker.company.companyName(),
      image: faker.image.business.toString(),
    },
  });
}

export function createRooms(hotelId: number) {
  return prisma.room.createMany({
    data: [
      {
        name: faker.name.firstName(),
        capacity: 2,
        hotelId: hotelId,
      },
      {
        name: faker.name.firstName(),
        capacity: 2,
        hotelId: hotelId,
      },
    ],
  });
}
