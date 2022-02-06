class BaseTasksController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  before_action :authorize
  before_action :set_user

  private
  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end

  def set_user
    @user = User.find(session[:user_id])
  end

  def render_not_found_response
    render json: {error: "Record not found"}, status: :not_found
  end

  def task_params
    params.require(:task).permit(:description, :status, :status_id, :due_date, :completed_date, :user, :user_id)
  end
end