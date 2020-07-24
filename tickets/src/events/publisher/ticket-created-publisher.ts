import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from '@ojitickets/common-nats';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
