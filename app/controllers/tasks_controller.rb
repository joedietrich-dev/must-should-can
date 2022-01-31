class TasksController < ApplicationController
  before_action :authorize

  # GET /tasks
  def index
    @user = User.find(session[:user_id])
    @tasks = Task.find_by(user: @user)
    puts @user
    render json: @tasks
  end

  private
  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end
end