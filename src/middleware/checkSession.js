const signedIn = req => req.session.staffId;

export const ensureSignedin = (req, res, next) => {
  if (!signedIn(req)) {
    res.status(401).send({
      message: 'Unauthorised access, Please login again'
    });
  }
  next();
};

export const ensureSignedOut = (req, res, next) => {
  if (signedIn(req)) {
    res.status(409).send({
      message: 'You are already signed in'
    });
  }
  next();
};
