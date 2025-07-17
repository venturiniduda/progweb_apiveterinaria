import { AppDataSource } from "../../data-source"; 
import { User } from "../../model/user.model" 
import userRepository from "../../repositories/user.repository"; 

describe('user.repository', () => {
    // Antes de todos os testes nesta suíte, inicialize a conexão com o banco de dados
    beforeAll(async () => {
        // Garanta que AppDataSource esteja configurado para testes (por exemplo, usando um banco de dados de teste separado)
        if (!AppDataSource.isInitialized) {
            await AppDataSource.initialize();
        }
    });

    // Depois de todos os testes nesta suíte, destrua a conexão com o banco de dados
    afterAll(async () => {
        if (AppDataSource.isInitialized) {
            await AppDataSource.destroy();
        }
    });

    // Antes de cada teste, você pode querer limpar a tabela User
    beforeEach(async () => {
        await AppDataSource.getRepository(User).clear();
    });

    it('addUser deve criar e salvar um novo usuário', async () => {
        const username = 'testuser_1';
        const password = 'testpassword123';

        const user = await userRepository.addUser(username, password);

        expect(user).toBeDefined();
        expect(user.id).toBeDefined();
        expect(user.username).toBe(username);
        expect(user.password).toBeDefined(); // A senha deve ser hashed

        const foundUser = await AppDataSource.getRepository(User).findOneBy({ username });
        expect(foundUser).toBeDefined();
        expect(foundUser?.username).toBe(username);
    });
});