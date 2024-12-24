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

const createReation = async (req, res) => {
  try {
    const { reactionType, PostID } = req.body;
    if (!reactionType || !PostID) {
      res.status(400).json({
        isSuccess: false,
        message: requiredMessage,
      });
      return;
    }
    const creatingReaction = await prisma.reactions.create({
      data: {
        reactionType,
        PostID,
      },
    });
    res.status(201).json({
      isSuccess: true,
      message: messageCreated,
      newCreateReaction: creatingReaction,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      isSuccess: false,
      message: messageError,
    });
  }
};

const readReaction = async (req, res) => {
  try {
    const reaction = await prisma.reactions.findMany({
      include: {
        post: true,
      },
    });
    if (!reaction || reaction.length == 0) {
      res.status(404).json({
        isSuccess: false,
        message: messagenotfound,
      });
      return;
    }

    res.status(302).json({
      isSuccess: true,
      message: foundedMessage,
      reactions: reaction,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      isSuccess: false,
      message: messageError,
    });
  }
};

const updateReaction = async (req, res) => {
  try {
    const { reationId, reactionType, PostID } = req.body;
    if (!reactionType || !reationId || !PostID) {
      res.status(400).json({
        isSuccess: false,
        message: requiredMessage,
      });
      return;
    }
    const reaction = await prisma.reactions.findFirst({
      where: {
        id: parseInt(reationId),
      },
    });
    if (!reaction) {
      res.status(404).json({
        isSuccess: false,
        message: messagenotfound,
      });
      return;
    }
    const updatingReaction = await prisma.reactions.update({
      where: {
        id: parseInt(reationId),
      },
      include: {
        PostID,
        reactionType,
      },
    });
    res.status(201).json({
      isSuccess: true,
      message: updatedMessage,
      updatedTheRecord: updatingReaction,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      isSuccess: false,
      message: messageError,
    });
  }
};

const deleteReaction = async (req, res) => {
  try {
    const { reationId } = req.params;
    const reaction = await prisma.reactions.findFirst({
      where: {
        id: parseInt(reationId),
      },
    });

    if (!reaction) {
      res.status(404).json({
        isSuccess: false,
        message: messagenotfound,
      });
      return;
    }
    const deletingReaction = await prisma.reactions.delete({
      where: {
        id: parseInt(reationId),
      },
    });
    res.status(200).json({
      isSuccess: true,
      message: deletingMessage,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      isSuccess: false,
      message: messageError,
    });
  }
};

const findbyID = async (req, res) => {
  try {
    const { reationId } = req.params;
    const reaction = await prisma.reactions.findFirst({
      where: {
        id: parseInt(reationId),
      },
    });
    if (!reaction) {
      res.status(404).json({
        isSuccess: false,
        message: messagenotfound,
      });
      return;
    }
    res.status(302).json({
      isSuccess: fal,
      message: foundedMessage,
      reaction: reaction,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      isSuccess: false,
      message: messageError,
    });
  }
};

module.exports = {
  createReation,
  readReaction,
  updateReaction,
  deleteReaction,
  findbyID,
};
