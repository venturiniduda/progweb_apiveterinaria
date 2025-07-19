// import { Consulta } from '../../model/consulta.model';  
// import { Tutor } from '../../model/tutor.model'; 
// import { Paciente } from '../../model/paciente.model';  
// import { Veterinario } from '../../model/veterinario.model';  
// import { Prontuario } from '../../model/prontuario.model';

// describe('Consulta Model', () => {
  
//   it('should create a consulta with valid fields', () => {
//     const tutor = new Tutor();
//     tutor.tutor_id = 1;  

//     const paciente = new Paciente();
//     paciente.animal_id = 1; 

//     const veterinario = new Veterinario();
//     veterinario.vet_id = 1; 

//     const consulta = new Consulta();
//     consulta.consulta_id = 1;
//     consulta.tutor = tutor;  // Relacionamento com Tutor
//     consulta.paciente = paciente;  // Relacionamento com Paciente
//     consulta.veterinario = veterinario;  // Relacionamento com Veterinário
//     consulta.data_consulta = new Date('2025-12-31');
//     consulta.hora_consulta = '14:30';
//     consulta.status = 'Agendada';
//     consulta.criado_em = new Date();

//     // Verificando se os valores foram atribuídos corretamente
//     expect(consulta.consulta_id).toBe(1);
//     expect(consulta.tutor).toBe(tutor);
//     expect(consulta.paciente).toBe(paciente);
//     expect(consulta.veterinario).toBe(veterinario);
//     expect(consulta.data_consulta).toEqual(new Date('2025-12-31'));
//     expect(consulta.hora_consulta).toBe('14:30');
//     expect(consulta.status).toBe('Agendada');
//     expect(consulta.criado_em).toBeInstanceOf(Date);
//   });

//   it('should have required fields defined', () => {
//     const consulta = new Consulta();
//     consulta.tutor_id = 1;
//     consulta.paciente_id = 1;
//     consulta.vet_id = 1;
//     consulta.data_consulta = new Date('2025-12-31');
//     consulta.hora_consulta = '14:30';
//     consulta.status = 'Agendada';
//     consulta.criado_em = new Date();

//     expect(consulta).toHaveProperty('tutor_id');
//     expect(consulta).toHaveProperty('paciente_id');
//     expect(consulta).toHaveProperty('vet_id');
//     expect(consulta).toHaveProperty('data_consulta');
//     expect(consulta).toHaveProperty('hora_consulta');
//     expect(consulta).toHaveProperty('status');
//     expect(consulta).toHaveProperty('criado_em');
//   });

//   it('should correctly handle ManyToOne relationships with Tutor, Paciente, and Veterinario', () => {
//     const tutor = new Tutor();
//     tutor.tutor_id = 1;

//     const paciente = new Paciente();
//     paciente.animal_id = 1;

//     const veterinario = new Veterinario();
//     veterinario.vet_id = 1;

//     const consulta = new Consulta();
//     consulta.tutor = tutor;  // Relacionamento ManyToOne com Tutor
//     consulta.paciente = paciente;  // Relacionamento ManyToOne com Paciente
//     consulta.veterinario = veterinario;  // Relacionamento ManyToOne com Veterinário

//     // Verificando se os relacionamentos foram atribuídos corretamente
//     expect(consulta.tutor).toBe(tutor);
//     expect(consulta.paciente).toBe(paciente);
//     expect(consulta.veterinario).toBe(veterinario);
//   });

//   it('should correctly handle OneToMany relationship with Prontuario', () => {
//     const consulta = new Consulta();

//     const prontuario1 = new Prontuario();
//     prontuario1.prontuario_id = 1;
//     prontuario1.consulta = consulta;  // Relacionamento OneToMany com Consulta

//     const prontuario2 = new Prontuario();
//     prontuario2.prontuario_id = 2;
//     prontuario2.consulta = consulta;  // Relacionamento OneToMany com Consulta

//     consulta.prontuarios = [prontuario1, prontuario2];  // Adicionando os prontuários à consulta

//     // Verificando se o relacionamento OneToMany com Prontuario foi atribuído corretamente
//     expect(consulta.prontuarios).toHaveLength(2);
//     expect(consulta.prontuarios[0]).toBe(prontuario1);
//     expect(consulta.prontuarios[1]).toBe(prontuario2);
//   });

//   it('should handle the criado_em as Date type', () => {
//     const consulta = new Consulta();
//     consulta.criado_em = new Date();

//     // Verificando se criado_em é uma instância de Date
//     expect(consulta.criado_em).toBeInstanceOf(Date);
//   });
// });