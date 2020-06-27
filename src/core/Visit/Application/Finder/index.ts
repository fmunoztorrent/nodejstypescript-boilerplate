import getVisits from './getVisits';
import getVisit from './getVisit';
import { VisitMsSQLRepository } from '../../Infrastructure/Repositories/VisitMsSqlRepository';

const visitsRepo = new VisitMsSQLRepository();

const getVisitUseCase = getVisit(visitsRepo);
const getVisitsUseCase = getVisits(visitsRepo);

export { getVisitUseCase as getVisit, getVisitsUseCase as getVisits}