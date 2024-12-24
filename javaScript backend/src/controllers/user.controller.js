const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const {
  messageError,
  messagenotfound,
  messageCreated,
} = require("../messages/index");

const createUser = async (req, res) => {
  try {
    const { userName, phoneNumber } = req.body;
    if (!userName || !phoneNumber) {
      res.status(400).json({
        isSucces: true,
        message: "required fields (userName, phoneNumber)",
      });
      return;
    }
    const creatingNewUser = await prisma.users.create({
      data: {
        userName,
        phoneNumber,
      },
    });

    res.status(200).json({
      isSuccess: true,
      message: messageCreated,
      createdData: creatingNewUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      isSucces: false,
      message: messageError,
    });
  }
};

const updateuser = async (req, res) => {
  try {
    const { userId, userName, phoneNumber } = req.body;

    if (!userId || !userName || !phoneNumber) {
      res.status(400).json({
        isSucces: false,
        message: "required fields (userId, userName and phoneNumber)",
      });
      return;
    }

    const user = await prisma.users.findFirst({
      where: {
        id: userId,
      },
    });
    if (!user) {
      res.status(404).json({
        isSucces: false,
        message: messagenotfound,
      });
      return;
    }

    const updatingUser = await prisma.users.update({
      where: {
        id: userId,
      },
      data: {
        userName,
        phoneNumber,
      },
    });

    res.status(200).json({
      isSuccess: true,
      message: "updating record",
      newUpdating: updatingUser,
    });
  } catch (error) {
    res.status(500).json({
      isSucces: false,
      message: messageError,
    });
  }
};

const getAllUser = async (req, res) => {
  try {
    const user = await prisma.users.findMany();
    if (!user || user.length === 0) {
      res.status(404).json({
        isSuccess: false,
        message: "No user found",
      });
      return;
    }
    res.status(200).json({
      isSucces: true,
      message: "you get all users",
      user,
    });
  } catch (error) {
    res.status(500).json({
      isSucces: false,
      message: messageError,
    });
  }
};

const findbyId = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await prisma.users.findFirst({
      where: {
        id: +userId,
      },
    });

    if (!user) {
      res.status(404).json({
        isSucces: false,
        message: messagenotfound,
      });
      return;
    }

    res.status(302).json({
      isSucces: true,
      message: "user is found",
      userById: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      isSucces: false,
      message: messageError,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const users = await prisma.users.findFirst({
      where: {
        id: +userId,
      },
    });

    if (!users) {
      res.status(404).json({
        isSucces: false,
        message: messagenotfound,
      });
      return;
    }

    const deletingUser = await prisma.users.delete({
      where: {
        id: +userId,
      },
    });

    res.status(200).json({
      isSucces: true,
      message: "record deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      isSucces: false,
      message: messageError,
    });
  }
};

module.exports = {
  createUser,
  updateuser,
  getAllUser,
  findbyId,
  deleteUser,
};
