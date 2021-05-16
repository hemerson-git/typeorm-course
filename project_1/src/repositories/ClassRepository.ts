import { EntityRepository, Repository } from "typeorm";
import Class from "../models/Class";

@EntityRepository(Class)
class ClassRepository extends Repository<Class> {

}

export default ClassRepository;
