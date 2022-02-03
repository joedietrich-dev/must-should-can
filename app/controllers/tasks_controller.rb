class TasksController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
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
      render json: @task, status: :created
    else
      render json: {errors: @task.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # DELETE /tasks/1
  def destroy
    @task = Task.find(params[:id])
    if @task.user == @user
      @task.destroy 
      head :no_content
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end
    
  # PATCH /tasks/1
  def update
    @task = Task.find(params[:id])

    unless @task.user == @user
      render json: { error: "Not authorized" }, status: :unauthorized
    else 
      if @task.update(task_params)
        render json: @task
      else
        render json: {errors: @task.errors.full_messages }, status: :unprocessable_entity
      end
    end
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

  # TO DO: Look up strong params with unpermitted inputs
  # TO DO: Look up DHH Rest philosophy to apply it to "Reset" action

  def task_params
    params.require(:task).permit(:description, :status, :status_id, :due_date, :completed_date, :user, :user_id)
  end
end