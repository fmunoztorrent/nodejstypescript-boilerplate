import Visit from './Visit';
class VisitEntity {

    constructor(public visit: Visit){

        if(!visit.url || visit.url === ""){
            throw new Error("URL is mandatory. Please check it.");
        }

        if(!visit.ip){
            throw new Error("IP is mandatory. Please check it.");
        }

        this.isValidIP();
        this.isValidURL();
    }

    isValidIP(){
        return true;
    }
    isValidURL(){
        return true;
    }

}

export default VisitEntity;