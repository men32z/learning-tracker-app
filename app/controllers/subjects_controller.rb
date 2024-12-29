class SubjectsController < ApplicationController
  before_action :set_subject, only: %i[show update destroy]

  def index
    @subjects = Subject.all
    json_response(@subjects)
  end

  def my_subjects
    @subjects = current_user.subjects
    json_response(@subjects)
  end

  def create
    @subject = Subject.create!(subject_params)
    json_response(@subject, :created)
  end

  def show
    json_response(@subject)
  end

  def update
    @subject.update(subject_params)
    head :no_content
  end

  def destroy
    @subject.destroy
    head :no_content
  end

  private

  def subject_params
    params.permit(:name, :desc)
  end

  def set_subject
    @subject = Subject.find(params[:id])
  end
end
