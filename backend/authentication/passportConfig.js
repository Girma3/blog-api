import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";

// Simulate a user database lookup
const users = [{ id: 3, name: "king", password: "1234" }];

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_KEY || "secret_key",
};

passport.use(
  new JwtStrategy(options, (jwt_payload, done) => {
    console.log(jwt_payload);
    try {
      // Simulate DB lookup
      const user = users.find((u) => u.id === jwt_payload.id);
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    } catch (err) {
      return done(err, false);
    }
  })
);

export default passport;
