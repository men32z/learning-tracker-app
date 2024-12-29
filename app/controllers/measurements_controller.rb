class MeasurementsController < ApplicationController
  before_action :set_subject, except: %i[my_measurements]
  before_action :set_subject_measurement, only: %i[show update destroy]

  def index
    @measurements = Measurement
      .where(subject_id: @subject.id, user_id: current_user.id).last_week.order(id: :desc)
    json_response(@measurements)
  end

  def my_measurements
    measurements = current_user.measurements
      .date_m(params[:date] || '')
    json_response(measurements)
  end

  def show
    json_response(@measurement)
  end

  def create
    p params
    params = measurement_params
    params['user_id'] = current_user.id
    measure = @subject.measurements.create!(params)
    json_response(measure, :created)
  end

  def update
    @measurement.update(measurement_params)
    head :no_content
  end

  def destroy
    @measurement.destroy
    head :no_content
  end

  private

  def measurement_params
    params.permit(:units, :date_m)
  end

  def set_subject
    @subject = Subject.find(params[:subject_id])
  end

  def set_subject_measurement
    @measurement = @subject.measurements.find_by!(id: params[:id]) if @subject
  end
end
