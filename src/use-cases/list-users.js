export default function makeListUsers({ usersRepository }) {
  return async function listUsers() {
    const users = await usersRepository.findAll();

    return users;
  }
}