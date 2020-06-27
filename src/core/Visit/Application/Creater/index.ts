import newVisit from './newVisit';
import { VisitMsSQLRepository } from '../../Infrastructure/Repositories/VisitMsSqlRepository';

const visitRepo = new VisitMsSQLRepository();

const newVisitUseCase = newVisit(visitRepo);

export { newVisitUseCase as newVisit}