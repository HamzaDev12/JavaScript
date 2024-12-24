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
} = require("../messages");
const { parse } = require("dotenv");

const createCopmment = async (req, res) => {
  try {
    const { content, userId, postId } = req.body;
    if (!content || !userId || !postId) {
      res.status(400).json({
        isSuccess: false,
        message: requiredMessage,
      });
      return;
    }
    const creatingComment = await prisma.comments.create({
      data: {
        content,
        userId,
        postId,
      },
    });

    res.status(201).json({
      isSuccess: true,
      message: messageCreated,
      newRecord: creatingComment,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      isSuccess: false,
      messagae: messageError,
    });
  }
};

const readComment = async (req, res) => {
  try {
    const comment = await prisma.comments.findMany();
    if (!comment || comment.length === 0) {
      res.status(404).json({
        isSuccess: false,
        message: "No comments found",
      });
      return;
    }
    res.status(302).json({
      isSucces: true,
      message: foundedMessage,
      comments: comment,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      isSuccess: false,
      message: messageError,
    });
  }
};

const updateComment = async (req, res) => {
  try {
    const { commentId, postId, userId, content } = req.body;
    if (!commentId || !postId || !userId || !content) {
      res.status(400).json({
        isSuccess: false,
        message: requiredMessage,
      });
      return;
    }

    const comment = await prisma.comments.findFirst({
      where: {
        id: +commentId,
      },
    });
    if (!comment) {
      res.status(404).json({
        isSuccess: false,
        message: messagenotfound,
      });
      return;
    }

    const updatingComment = await prisma.comments.update({
      where: {
        id: comment.id,
      },
      data: {
        postId,
        content,
        userId,
      },
    });

    res.status(201).json({
      isSuccess: true,
      message: updatedMessage,
      newUpdate: updatingComment,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      isSuccess: false,
      messagae: messageError,
    });
  }
};

const findbyID = async (req, res) => {
  try {
    const { commentId } = req.params;
    const comment = await prisma.comments.findFirst({
      where: {
        id: parseInt(commentId),
      },
    });
    if (!comment) {
      res.status(404).json({
        isSuccess: false,
        message: messagenotfound,
      });
      return;
    }
    res.status(302).json({
      isSuccess: true,
      message: foundedMessage,
      findingData: comment,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      isSuccess: false,
      messagae: messageError,
    });
  }
};

const deletecomment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const comment = await prisma.comments.findFirst({
      where: {
        id: parseInt(commentId),
      },
    });

    if (!comment) {
      res.status(404).json({
        isSuccess: false,
        message: messagenotfound,
      });
      return;
    }

    const deletingComment = await prisma.comments.delete({
      where: {
        id: comment.id,
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
      messagae: messageError,
    });
  }
};

module.exports = {
  createCopmment,
  readComment,
  updateComment,
  findbyID,
  deletecomment,
};
