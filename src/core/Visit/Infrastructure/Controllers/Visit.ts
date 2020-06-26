import { Response, Request } from 'express';
import {getVisit, getVisits} from '../../Application/Finder';
import { newVisit } from '../../Application/Creater';

export class VisitController {

  // List paged color list
  async list(request: Request, response: Response){

    try{

      const page = Number(request.query.page) || 0;
      const visitList = await getVisits(page);
      return response.status(200).json(visitList);


    } catch(error){

      return response.status(500).json({
        error: true,
        message: error.message
      });
    }

  }

  // Get color by id (numeric)
  async getById(request: Request, response: Response){

    try{

      const visit = await getVisit(Number(request.params.visitId));

      if(!visit){
        return response.status(404).json();
      }

      return response.status(200).json(visit);

    } catch(error){

      return response.status(500).json({
        error: true,
        message: error.message
      });

    }
  }

  // Saves a new color into database
  async createNewVisit(request: Request, response: Response){

    try{

      const createdVisit = await newVisit(request.body);

      return response.status(201).json(createdVisit);

    } catch(error){

      return response.status(500).json({
        error: true,
        message: error.message
      });
    }

  }
}

export default VisitController;