const Quiz = require('../models/Quiz');

exports.createQuiz = async (req, res) => {
  try {
    const { title, questionsCount } = req.body;
    if (!title) return res.status(400).json({ success:false, message: 'Title required' });

    // create a unique code
    const code = 'QZ-' + Math.random().toString(36).substring(2,8).toUpperCase();
    const quiz = await Quiz.create({
      title,
      code,
      questionsCount: questionsCount || 0,
      createdBy: req.user.id
    });
    res.status(201).json({ success:true, data: quiz });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success:false, message: 'Server error' });
  }
};
