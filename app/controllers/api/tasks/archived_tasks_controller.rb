class Api::Tasks::ArchivedTasksController < BaseTasksController
  # GET /tasks/archived
  def index
    @tasks = Task.archived?.where(user: @user).includes(:status, :user)
    render json: @tasks
  end
end