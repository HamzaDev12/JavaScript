const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const {
  messageCreated,
  messageError,
  messagenotfound,
  requiredMessage,
  foundedMessage,
  deletingMessage,
} = require("../messages/index");

const createPost = async (req, res) => {
  try {
    const { content, userId } = req.body;
    if (!content || !userId) {
      res.status(404).json({
        isSuccess: false,
        message: requiredMessage,
      });
      return;
    }

    const post = await prisma.posts.create({
      data: {
        content,
        userID,
      },
    });

    res.status(201).json({
      isSuccess: true,
      message: messageCreated,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      isSuccess: false,
      message: messageError,
    });
  }
};

const readPost = async (req, res) => {
  try {
    const post = await prisma.posts.findMany();
    res.status(302).json({
      isSucces: true,
      message: foundedMessage,
      post,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      isSuccess: false,
      message: messageError,
    });
  }
};

const updatePost = async (req, res) => {
  try {
    const { postID, userID, content } = req.body;
    if (!userID || !content || !postID) {
      res.status(400).json({
        isSucces: false,
        message: requiredMessage,
      });
      return;
    }
    const post = await prisma.posts.findFirst({
      whete: {
        id: postID,
      },
    });

    if (!post) {
      res.status(404).json({
        isSuccess: false,
        message: messagenotfound,
      });
      return;
    }
    const updatingPost = await prisma.posts.update({
      where: {
        id: postID,
      },
      data: {
        userID,
        content,
      },
    });

    res.status(201).json({
      isSucces: true,
      message: updatedMessage,
      updatedRecord: updatingPost,
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
    const { postID } = req.params;
    const post = await prisma.posts.findFirst({
      where: {
        id: postID,
      },
    });
    if (!post) {
      res.status(400).json({
        isSucces: false,
        message: messagenotfound,
      });
      return;
    }

    res.status(200).json({
      isSucces: true,
      message: foundedMessage,
      post,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      isSuccess: false,
      message: messageError,
    });
  }
};

const deletinfUser = async (req, res) => {
  try {
    const { postID } = req.params;
    const post = await prisma.posts.findFirst({
      where: {
        id: postID,
      },
    });
    if (!post) {
      res.status(400).json({
        isSucces: false,
        message: messagenotfound,
      });
      return;
    }

    const deleting = await prisma.posts.delete({
      where: {
        id: postID,
      },
    });

    res.status(200).json({
      isSucces: true,
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

module.exports = {
  createPost,
  readPost,
  updatePost,
  findbyID,
  deletinfUser,
};
