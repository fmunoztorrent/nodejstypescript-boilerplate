import Visit from '../entities/Visit';

interface VisitRepository {
    getVisits(from:number, limit:number): Promise<Visit[]>;
    getById(id:number): Promise<Visit>;
    newVisit(color:Visit): Promise<Visit>;
    countTotalVisits(): Promise<number>;
}

export default VisitRepository;