class UserSubjectsController < ApplicationController
  def create
    @subject = Subject.find(u_s_params[:subject_id])
    current_user.subjects << @subject unless current_user.subjects.include?(@subject)
    json_response(@subject)
  end

  def destroy
    @subject = Subject.find(params[:subject_id])
    current_user.subjects.delete(@subject)
    head :no_content
  end

  private

  def u_s_params
    params.permit(:subject_id)
  end
end
