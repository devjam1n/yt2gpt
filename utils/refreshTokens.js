export default async function refreshTokens(user) {
  // users refill token date is expired
  if (user.tokensRefill < new Date()) {
    // user has less than refill amount
    if (user.tokens >= process.env.REFILL_TOKEN_AMOUNT) return;

    // save new refill date and refill tokens
    user.tokens = process.env.REFILL_TOKEN_AMOUNT;
    user.tokensRefill = new Date(new Date().getTime() + 1000 * 60 * 60 * 24); // 24 hours from now
    await user.save();
    console.log(`Tokens refilled for user: ${user.username}`);
  }
  return user;
}
