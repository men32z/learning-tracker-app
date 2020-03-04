require 'rails_helper'

RSpec.describe 'Subjects API', type: :request do
  let!(:subjects) { create_list(:subject, 10) }
  let(:subject_id) { subjects.first.id }

  describe 'GET /subjects' do
    before { get '/subjects' }
    it 'returns subjects' do
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /subjects/:id' do
    before { get "/subjects/#{subject_id}" }

    context 'when the record exists' do
      it 'returns the subject' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(subject_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:subject_id) { 100 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Subject/)
      end
    end
  end

  describe 'POST /subjects' do
    let(:valid_attributes) { { name: 'HTML5', desc: 'asdf lasdf asfas' } }

    context 'when the request is valid' do
      before { post '/subjects', params: valid_attributes }

      it 'creates a subject' do
        expect(json['name']).to eq('HTML5')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      before { post '/subjects', params: { } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do
        expect(response.body)
          .to match(/Validation failed: Name can't be blank/)
      end
    end
  end

  describe 'PUT /subjects/:id' do
    let(:valid_attributes) { { name: 'HTML5.1' } }

    context 'when the record exists' do
      before { put "/subjects/#{subject_id}", params: valid_attributes }

      it 'updates the record' do
        expect(response.body).to be_empty
      end

      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end
  end

  describe 'DELETE /subjects/:id' do
    before { delete "/subjects/#{subject_id}" }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end