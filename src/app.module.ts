import { Module } from '@nestjs/common';

import { ReservationController } from './reservation/factory/controllers/reservation.controller';
import { CoworkingReservation } from './reservation/factory/services/coworking.reservation';
import { RoomReservation } from './reservation/factory/services/room.reservation';
import { ReservationFactory } from './reservation/factory/services/reservation.factory';
import { ReservationModule } from './reservation/factory/modules/reservation.module';

@Module({
  imports: [ReservationModule],
  controllers: [ReservationController],
  providers: [CoworkingReservation, RoomReservation, ReservationFactory],
})
export class AppModule {}
