require 'rails_helper'

RSpec.describe 'UserSubjects', type: :request do
  let(:user) { create(:user) }
  let!(:subjects) { create_list(:subject, 10) }
  let(:headers) { valid_headers }

  describe 'POST /api/register_subject' do
    let(:valid_attributes) { { subject_id: subjects.last.id }.to_json }

    context 'when the request is valid' do
      before { post '/api/register_subject', params: valid_attributes, headers: headers }

      it 'creates a user subject relationship' do
        expect(json['id']).to eq(subjects.last.id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the request is duplicated' do
      before { post '/api/register_subject', params: valid_attributes, headers: headers }

      it 'creates a user subject just the first time relationship' do
        expect(json['id']).to eq(subjects.last.id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end

      it 'try to duplicate' do
        post '/api/register_subject', params: valid_attributes, headers: headers
        expect(json['id']).to eq(subjects.last.id)
        expect(response).to have_http_status(200)
        expect(user.subjects.count).to eq(1)
      end
    end

    context 'when the request is invalid' do
      let(:invalid_attributes) { { subject_id: 0 }.to_json }
      before { post '/api/subjects', params: invalid_attributes, headers: headers }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end
    end
  end

  describe 'DELETE /api/unregister_subject/:id' do
    let(:subject_valid) { user.subjects << subjects.first }
    let(:subject_valid2) { user.subjects << subjects.first }

    context 'when the request is valid' do
      before { delete "/api/unregister_subject/#{subject_valid[0].id}", headers: headers }

      it 'remove relationship user - subject' do
        expect(user.subjects.count).to eq(0)
      end

      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end

    context 'when the request is invalid' do
      before { delete '/api/unregister_subject/0', headers: headers }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end
    end
  end
end
