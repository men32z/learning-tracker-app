require 'rails_helper'

RSpec.describe 'Measurement API' do
  let!(:subject) { create(:subject) }
  let!(:user) { create(:user) }
  let!(:measurements) { create_list(:measurement, 20, subject_id: subject.id, user_id: user.id) }
  let(:subject_id) { subject.id }
  let(:id) { measurements.first.id }
  let(:headers) { valid_headers }

  describe 'GET /api/subjects/:subject_id/measurements' do
    before { get "/api/subjects/#{subject_id}/measurements", params: {}, headers: headers }

    context 'when subject exists' do
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end

      it 'returns all subject measurements' do
        expect(json.size).to eq(20)
      end
    end

    context 'when subject does not exist' do
      let(:subject_id) { 0 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Subject/)
      end
    end
  end

  describe 'GET /api/subjects/:subject_id/measurements/:id' do
    before { get "/api/subjects/#{subject_id}/measurements/#{id}", params: {}, headers: headers }

    context 'when subject measurement exists' do
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end

      it 'returns the measurement' do
        expect(json['id']).to eq(id)
      end
    end

    context 'when subject measurement does not exist' do
      let(:id) { 0 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Measurement/)
      end
    end
  end

  describe 'POST /api/subjects/:subject_id/measurements' do
    let(:valid_attributes) { { units: 35, date_m: Date.yesterday }.to_json }

    context 'when request attributes are valid' do
      before { post "/api/subjects/#{subject_id}/measurements", params: valid_attributes, headers: headers }

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when an invalid request' do
      before { post "/api/subjects/#{subject_id}/measurements", params: {}, headers: headers }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a failure message' do
        expect(response.body).to match(/(Date m can't be blank).*(Units can't be blank)/)
      end
    end
  end

  describe 'PUT /api/subjects/:subject_id/measurements/:id' do
    let(:valid_attributes) { { units: 8 }.to_json }

    before { put "/api/subjects/#{subject_id}/measurements/#{id}", params: valid_attributes, headers: headers }

    context 'when measurement exists' do
      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end

      it 'updates the measurement' do
        updated_measurement = Measurement.find(id)
        expect(updated_measurement.units).to eq(8)
      end
    end

    context 'when the measurement does not exist' do
      let(:id) { 0 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Measurement/)
      end
    end
  end

  describe 'DELETE /api/subjects/:id' do
    before { delete "/api/subjects/#{subject_id}/measurements/#{id}", headers: headers }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end

  describe 'GET /api/measurements' do
    before { get '/api/measurements', params: {}, headers: headers }

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end

    it 'returns all subject measurements' do
      expect(json.size).to eq(20)
    end
  end
end
