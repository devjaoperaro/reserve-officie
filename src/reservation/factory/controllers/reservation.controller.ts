import { Controller, Get, Query } from '@nestjs/common';
import { ReservationFactory } from '../services/reservation.factory';

@Controller('reservation')
export class ReservationController {
  constructor(private readonly reservationFactory: ReservationFactory) {}

  @Get()
  create(@Query('type') type: string) {
    const reservation = this.reservationFactory.createReservation(type);
    return {
      type: reservation.getType(),
      details: reservation.getDetails(),
    };
  }
}
