class Api::TasksController < BaseTasksController
  # GET /tasks
  def index
    @tasks = Task.where(user: @user).includes(:status, :user)
    render json: @tasks
  end
  
  # POST /tasks
  def create
    @task = Task.new(user: @user, status_id: params[:status_id], description: params[:description], is_archived: false)

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
end