class JsonWebToken
  # secret to encode and decode token
  HMAC_SECRET =  "240064c6a110571cd83f5c68dea16964f6c9028c25a39991e4263309a7adf037177436634e5efd2cf7f9267cba0b117f41a5d84f214bf0eea6e850d926226e32"

  def self.encode(payload, exp = 24.hours.from_now)
    # set expiry to 24 hours from creation time
    payload[:exp] = exp.to_i
    # sign token with application secret
    JWT.encode(payload, HMAC_SECRET)
  end

  def self.decode(token)
    # get payload; first index in decoded Array
    body = JWT.decode(token, HMAC_SECRET)[0]
    HashWithIndifferentAccess.new body
    # rescue from all decode errors
  rescue JWT::DecodeError => e
    # raise custom error to be handled by custom handler
    raise ExceptionHandler::InvalidToken, e.message
  end
end
