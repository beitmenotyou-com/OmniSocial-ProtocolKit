
// Lightning paywall middleware
module.exports = (req, res, next) => {
  const satsPaid = parseInt(req.headers['x-sats-paid'] || '0', 10);
  if (satsPaid < 10) return res.status(402).send('Payment Required');
  next();
};
