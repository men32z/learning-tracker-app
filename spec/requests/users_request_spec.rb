require 'rails_helper'

RSpec.describe 'Users', type: :request do
  let(:user) { build(:user) }
  let(:headers) { valid_headers.except('Authorization') }
  let(:valid_attributes) do
    attributes_for(:user, password_confirmation: user.password)
  end

  # User signup test suite
  describe 'POST /api/signup' do
    context 'when valid request' do
      before { post '/api/signup', params: valid_attributes.to_json, headers: headers }

      it 'creates a new user' do
        expect(response).to have_http_status(201)
      end

      it 'returns success message' do
        expect(json['message']).to match(/Account created successfully/)
      end

      it 'returns an authentication token' do
        expect(json['auth_token']).not_to be_nil
      end
    end

    context 'when invalid request' do
      before { post '/api/signup', params: {}, headers: headers }

      it 'does not create a new user' do
        expect(response).to have_http_status(422)
      end

      it 'returns failure message' do
        expect(json['message'])
          .to match(/(Name can't be blank)/)
        expect(json['message'])
          .to match(/(Password can't be blank)/)
        expect(json['message'])
          .to match(/(digest can't be blank)/)
        expect(json['message'])
          .to match(/(Email can't be blank)/)
      end
    end
  end
end
