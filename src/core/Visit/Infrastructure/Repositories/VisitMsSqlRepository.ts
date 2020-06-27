import VisitRepository from "../../Domain/repo/Visit"
import Visit from "../../Domain/entities/Visit";
import { VisitModel } from './VisitModelSQLServer';

export class VisitMsSQLRepository implements VisitRepository{

    getVisits(from:number, limit:number):Promise<Visit[]>{
        return VisitModel.findAll<VisitModel>({attributes: ['id', 'ip', 'url'], offset: from, limit, order: [['id', 'DESC']]});
    }

    getById(id:number): Promise<Visit>{
        return VisitModel.findByPk<VisitModel>(id);
    }

    newVisit(visit:Visit): Promise<Visit>{
        return VisitModel.create<VisitModel>(visit);
    }

    countTotalVisits(): Promise<number> {
        return VisitModel.count({});
    }
}