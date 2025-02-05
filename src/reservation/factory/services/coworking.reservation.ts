import { Reservation } from '../interfaces/reservation.interface';

export class CoworkingReservation implements Reservation {
  getType() {
    return 'Coworking';
  }

  getDetails() {
    return 'Reservation for coworking space.';
  }
}
