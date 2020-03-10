module ExceptionHandler
  # provides the more graceful `included` method
  extend ActiveSupport::Concern

  class AuthenticationError < StandardError; end
  class MissingToken < StandardError; end
  class InvalidToken < StandardError; end

  included do
    rescue_from ActiveRecord::StatementInvalid, with: :four_zero_four
    rescue_from ActiveRecord::RecordNotFound, with: :four_zero_four
    rescue_from ActiveRecord::RecordInvalid, with: :four_twenty_two
    rescue_from ExceptionHandler::AuthenticationError, with: :unauthorized_request
    rescue_from ExceptionHandler::MissingToken, with: :four_twenty_two
    rescue_from ExceptionHandler::InvalidToken, with: :four_twenty_two
  end

  private

  def four_zero_four(error)
    message = error.message.match(/invalid input syntax for type date/) ? 'not found' : error.message
    json_response({ message: message }, :not_found)
  end

  def four_twenty_two(error)
    json_response({ message: error.message }, :unprocessable_entity)
  end

  def unauthorized_request(error)
    json_response({ message: error.message }, :unauthorized)
  end
end
