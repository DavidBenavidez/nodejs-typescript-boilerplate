export default function makeUsersRepository({ database }) {
  async function findAll(){
    const result = await database.findAll();

    return result;
  }

  return {
    findAll,
  }
}