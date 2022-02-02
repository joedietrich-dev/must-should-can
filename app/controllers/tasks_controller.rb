class TasksController < ApplicationController
  before_action :authorize
  before_action :set_user

  # GET /tasks
  def index
    @tasks = Task.where(user: @user).includes(:status, :user)
    render json: @tasks
  end
  
  # POST /tasks
  def create
    @task = Task.new(user: @user, status_id: params[:status_id], description: params[:description])

    if @task.save
      render @task, status: :created
    else
      render json: {errors: @task.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private
  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end

  def set_user
    @user = User.find(session[:user_id])
  end

  # TO DO: Look up strong params with session inserts / computed values
  def task_params
    params.require(:task).permit(:description, :status, :status_id, :due_date, :completed_date, :user, :user_id)
  end
end