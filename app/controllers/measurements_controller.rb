class MeasurementsController < ApplicationController
  before_action :set_subject
  before_action :set_subject_measurement, only: [:show, :update, :destroy]

  def index
    json_response(@subject.measurements)
  end

  def show
    json_response(@measurement)
  end

  def create
    @subject.measurements.create!(measurement_params)
    json_response(@subject, :created)
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
