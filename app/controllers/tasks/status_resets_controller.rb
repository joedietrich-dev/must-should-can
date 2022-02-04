class Tasks::StatusResetsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  before_action :authorize
  before_action :set_user

  # PATCH /tasks/status_resets/
  def create
    @tasks = Task.where(user: @user).includes(:status, :user)

    can_status = Status.find_by(name: "Can")
    @tasks.update(status: can_status)

    render json: @tasks
  end
  
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
end
