import Visit from '../../Domain/entities/Visit';
import VisitRepository from '../../Domain/repo/Visit';

const getVisit = (repo: VisitRepository) => async(visitId: number) =>{
    const visit: Visit = await repo.getById(visitId);
    return visit;
}

export default getVisit;