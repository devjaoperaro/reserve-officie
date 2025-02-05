import { Reservation } from '../interfaces/reservation.interface';

export class RoomReservation implements Reservation {
  getType() {
    return 'Room';
  }

  getDetails() {
    return 'Reservation for a private room.';
  }
}
