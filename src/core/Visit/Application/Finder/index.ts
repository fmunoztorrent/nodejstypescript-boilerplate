import getVisits from './getVisits';
import getVisit from './getVisit';
import { VisitMySQLRepository } from '../../Infrastructure/Repositories/VisitMySQLRepository';

const mysqlColorRepo = new VisitMySQLRepository();

const getVisitUseCase = getVisit(mysqlColorRepo);
const getVisitsUseCase = getVisits(mysqlColorRepo);

export { getVisitUseCase as getVisit, getVisitsUseCase as getVisits}