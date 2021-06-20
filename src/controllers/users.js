export default function makeUsersController(useCases) {
  const list = async (_, res) => {
    const users = await useCases.listUsers();

    return res.status(200).json({
      users,
      result: true,
      statusCode: 200,
    });
  }

  return {
    list,
  }
}