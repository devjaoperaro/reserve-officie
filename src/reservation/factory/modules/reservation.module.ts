import { Module } from '@nestjs/common';
import { ReservationFactory } from '../services/reservation.factory';
import { ReservationController } from '../controllers/reservation.controller';

@Module({
  providers: [ReservationFactory],
  controllers: [ReservationController],
})
export class ReservationModule {}
