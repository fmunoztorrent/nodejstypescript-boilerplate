import Visit from '../../Domain/entities/Visit';
import VisitEntity from '../../Domain/entities/VisitEntity';
import VisitRepository from '../../Domain/repo/Visit';

// New Visit Implementation
const newVisit = (repo: VisitRepository) => async(data:Visit) =>{

    if(data.id){
        throw new Error(("Visit id not allowed on creation. Please erase it from your POST request."));
    }

    const aVisit = new VisitEntity(data);

    const aNewVisit : Visit = await repo.newVisit(aVisit.visit);
    return aNewVisit;

}

export default newVisit;