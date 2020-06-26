import newVisit from './newVisit';
import { VisitMySQLRepository } from '../../Infrastructure/Repositories/VisitMySQLRepository';

const mysqlVisitRepo = new VisitMySQLRepository();

const newVisitUseCase = newVisit(mysqlVisitRepo);

export { newVisitUseCase as newVisit}