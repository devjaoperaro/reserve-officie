import { Injectable } from '@nestjs/common';
import { Reservation } from '../interfaces/reservation.interface';
import { CoworkingReservation } from './coworking.reservation';
import { RoomReservation } from './room.reservation';

@Injectable()
export class ReservationFactory {
  createReservation(type: string): Reservation {
    if (type === 'coworking') {
      return new CoworkingReservation();
    } else if (type === 'room') {
      return new RoomReservation();
    }
    throw new Error('Invalid reservation type');
  }
}
