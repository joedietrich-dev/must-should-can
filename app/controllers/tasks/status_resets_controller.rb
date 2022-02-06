class Tasks::StatusResetsController < BaseTasksController
  # PATCH /tasks/status_resets/
  def create
    can_status = Status.find_by(name: "Can")
    
    @archive_tasks = Task.active?.where(user: @user).where.not(completed_date: nil)
    @archive_tasks.update(is_archived: true)

    @reset_tasks = Task.active?.where(user: @user).includes(:status, :user)
    @reset_tasks.update(status: can_status)

    render json: @reset_tasks
  end
end
