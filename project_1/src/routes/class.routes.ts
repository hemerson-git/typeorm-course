import { Router } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import Class from '../models/Class';
import ClassRepository from '../repositories/ClassRepository';

const classRouter = Router();

classRouter.post('/', async (request, response) => {
  const classesRepository = getRepository(Class);

  const { name, duration } = request.body;
  
  if (!name || !duration) {
    return response.status(400).json({ error: 'Name and Duration is required!!'})
  }
  
  const myClass = classesRepository.create({ name, duration });

  await classesRepository.save(myClass);

  return response.status(201).json(myClass);
});

classRouter.get('/', async ( request, response ) => {
  const classesRepository = getRepository(Class);

  const classes = await classesRepository.find();

  return response.json(classes);
});

classRouter.get('/:name', async (request, response) => {
  const classesRepository = getRepository(Class);
  const { name } = request.params;

  const reqClass = await classesRepository.findOne({ name });
  
  if (!reqClass) {
    return response.status(404).json({ error: 'Class Not Founded!' })
  }

  return response.json(reqClass);
});

classRouter.delete('/:id', async (request, response) => {
  const classesRepository = getCustomRepository(ClassRepository);
  const { id } = request.params;

  await classesRepository.delete(id); 

  return response.status(200).json();
});

export default classRouter;
