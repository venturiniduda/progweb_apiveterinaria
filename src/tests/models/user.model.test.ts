import { User } from '../../model/user.model';
import { compare } from 'bcrypt';

describe('User model', () => {
  it('deve fazer hash da senha ao chamar hasPassword()', async () => {
    const user = new User();
    user.username = 'teste';
    user.password = 'senha123';

    await user.hasPassword();

    // A senha deve ser diferente da original
    expect(user.password).not.toBe('senha123');

    // E deve ser um hash válido
    const isMatch = await compare('senha123', user.password);
    expect(isMatch).toBe(true);
  });

  it('deve gerar um hash diferente para senhas iguais em execuções diferentes', async () => {
    const user1 = new User();
    user1.password = 'abc123';

    const user2 = new User();
    user2.password = 'abc123';

    await user1.hasPassword();
    await user2.hasPassword();

    expect(user1.password).not.toBe(user2.password); // hashes diferentes por conta do salt
  });
});