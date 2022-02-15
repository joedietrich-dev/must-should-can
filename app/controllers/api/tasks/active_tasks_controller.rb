class Api::Tasks::ActiveTasksController < BaseTasksController
  # GET /tasks/active
  def index
    @tasks = Task.active?.where(user: @user).includes(:status, :user)
    render json: @tasks
  end
end