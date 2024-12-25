const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const {
  deletingMessage,
  foundedMessage,
  messageCreated,
  messageError,
  messagenotfound,
  requiredMessage,
  updatedMessage,
} = require("../messages/index");

const createReply = async (req, res) => {
  try {
    const { contetn, commentId } = req.body;
    if (!contetn || !commentId) {
      res.status(400).json({
        isSuccess: false,
        message: requiredMessage,
      });
      return;
    }
    const creatingReply = await prisma.replys.create({
      data: {
        contetn,
        commentId,
      },
    });
    res.status(201).json({
      isSuccess: true,
      message: messageCreated,
      newData: creatingReply,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      issuccess: false,
      message: messageError,
    });
  }
};

const updateReply = async (req, res) => {
  try {
    const { replyId, contetn, commentId } = req.body;
    if (!replyId || !contetn || !commentId) {
      res.status(400).json({
        isSuccess: false,
        messsage: requiredMessage,
      });
      return;
    }
    const reply = await prisma.replys.findFirst({
      where: {
        id: parseInt(replyId),
      },
    });
    if (!reply) {
      res.status(404).json({
        isSuccess: false,
        message: messagenotfound,
      });
      return;
    }
    const updatingreply = await prisma.replys.update({
      where: {
        id: +replyId,
      },
      data: {
        contetn,
        commentId,
      },
    });
    res.status(200).json({
      isSuccess: true,
      message: updatedMessage,
      newUpdate: updatingreply,
    });
  } catch (error) {
    res.status(500).json({
      issuccess: false,
      message: messageError,
    });
  }
};

const readReply = async (req, res) => {
  try {
    const replys = await prisma.replys.findMany({
      include: {
        comment,
      },
    });
    if (!replys || replys.length == 0) {
      res.status(404).json({
        isSuccess: false,
        message: "not created any reply",
      });
      return;
    }

    res.status(302).json({
      isSuccess: true,
      message: foundedMessage,
      youGetAll: replys,
    });
  } catch (error) {
    res.status(500).json({
      issuccess: false,
      message: messageError,
    });
  }
};

const findbyID = async (req, res) => {
  try {
    const { replyId } = req.params;
    const reply = await prisma.replys.findFirst({
      where: {
        id: +replyId,
      },
    });

    if (!reply) {
      res.status(404).json({
        isSuccess: false,
        message: "not created this ID",
      });
      return;
    }
    res.status(302).json({
      isSuccess: true,
      message: foundedMessage,
      reply,
    });
  } catch (error) {
    res.status(500).json({
      issuccess: false,
      message: messageError,
    });
  }
};

module.exports = {
  createReply,
  updateReply,
  readReply,
  findbyID,
};
